import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ){}

    async signUp(createUserDto: CreateUserDto): Promise<void>{
        const {name, email, password} = createUserDto;

        const salt = await bcrypt.genSalt();

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        try{
            await this.userRepository.save(user);
        }catch(error){
            if(error === '23505'){
                throw new ConflictException('Este e-mail já está em uso.')
            } else{
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(loginDto: LoginDto): Promise<{accessToken: string}>{
        const {email, password} = loginDto;

        const user = await this.userRepository.findOne({where: {email}});

        if(user && (await bcrypt.compare(password, user.password))){
            const payload = {email: user.email, sub: user.id};

            const accessToken = this.jwtService.sign(payload);

            return {accessToken};
        }else{
            throw new UnauthorizedException('Credenciais inválidas. Por favor, verifique seu e-mail e senha.')
        }
    }
}
