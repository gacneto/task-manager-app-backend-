import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @ApiProperty({ example: 'João da Silva', description: 'Nome completo do usuário.' })
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    name: string;

    @ApiProperty({ example: 'joao.silva@example.com', description: 'Endereço de e-mail único do usuário.' })
    @IsEmail({}, { message: 'Por favor, insira um email válido.' })
    @IsNotEmpty({ message: 'O email não pode ser vazio.' })
    email: string;

    @ApiProperty({ example: 'senhaForte123', description: 'Senha do usuário, com no mínimo 6 caracteres.' })
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
    password: string;
}