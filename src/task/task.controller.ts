import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/entities/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { Task } from './entities/task.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@ApiTags('Tasks')
@Controller('tasks')
@ApiBearerAuth() // Informa ao Swagger que este endpoint requer um Bearer Token
@UseGuards(AuthGuard('jwt')) // Protege TODAS as rotas deste controller
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @GetUser() user: User): Promise<Omit<Task, 'user'>> {
    return this.taskService.create(createTaskDto, user);
  }

  @Get()
  findAll(@GetUser() user: User): Promise<Task[]> {
    return this.taskService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<Task> {
    return this.taskService.findOne(id, user);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.taskService.updateStatus(id, updateTaskStatusDto, user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<void> {
    return this.taskService.remove(id, user);
  }
}