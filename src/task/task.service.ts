import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task, TaskStatus } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../auth/entities/user.entity';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ){}

    async create(createTaskDto: CreateTaskDto, user: User): Promise<Omit<Task, 'user'>>{
        const {title, description} = createTaskDto;

        const task = this.taskRepository.create({
            title,
            description,
            status: TaskStatus.OPEN,
            user,
        });

        await this.taskRepository.save(task);

        const { user: _, ...result} = task;

        return result;
    }

    async findAll(user: User): Promise<Task[]>{
        return this.taskRepository.find({where: {user: {id: user.id}}});
    }

    async findOne(id: number, user: User): Promise<Task>{
        const found = await this.taskRepository.findOneBy({
        id: id,
        user: { id: user.id }
        });
        if(!found){
            throw new NotFoundException(`Tarefa com ID "${id}" não encontada.`);
        }
        return found;
    }

    async updateStatus(id: number, updateTaskStatusDto: UpdateTaskStatusDto, user: User): Promise<Task>{
        const task = await this.findOne(id, user);
        task.status = updateTaskStatusDto.status;
        await this.taskRepository.save(task);
        return task;
    }

    async remove(id:number, user: User): Promise<void>{
        const result = await this.taskRepository.delete({id, user: {id: user.id}});

        if(result.affected === 0){
            throw new NotFoundException(`Tarefa com ID "${id}" não encontada.`)
        }
    }
}
