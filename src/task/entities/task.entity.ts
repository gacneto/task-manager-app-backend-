import { User } from '../../auth/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  OPEN = 'ABERTA',
  IN_PROGRESS = 'EM_ANDAMENTO',
  DONE = 'CONCLUIDA',
}

@Entity('tasks') 
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.task, { eager: false })
  user: User;
}