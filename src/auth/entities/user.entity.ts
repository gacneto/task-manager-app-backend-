import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Task } from '../../task/entities/task.entity';

@Entity('users')
@Unique(['email'])
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Task, (task) => task.user, {eager: true})
    task: Task[];
}