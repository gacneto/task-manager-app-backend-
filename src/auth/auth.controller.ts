import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    signUp(@Body() createUserDto: CreateUserDto): Promise<void>{
        return this.authService.signUp(createUserDto);
    }

    @Post('signin')
    signIn(@Body() loginDto: LoginDto): Promise<{accessToken: string}>{
        return this.authService.signIn(loginDto);
    }
}
