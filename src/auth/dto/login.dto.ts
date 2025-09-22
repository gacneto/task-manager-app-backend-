import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'joao.silva@example.com' })
  @IsEmail({}, { message: 'Por favor, insira um email válido.' })
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  email: string;

  @ApiProperty({ example: 'senhaForte123' })
  @IsString()
  @IsNotEmpty({ message: 'A senha не pode ser vazia.' })
  password: string;
}