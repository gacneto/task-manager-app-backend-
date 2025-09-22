import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Estudar NestJS' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Criar o CRUD de tarefas com autenticação JWT.' })
  @IsString()
  @IsNotEmpty()
  description: string;
}