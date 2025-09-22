import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Task } from './entities/task.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Task]),
    AuthModule,
    ],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TasksModule {}
