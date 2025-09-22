import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private configService: ConfigService,
    ){

        const secret = configService.get('JWT_SECRET');

        if (!secret) {
            throw new Error('A variável de ambiente JWT_SECRET não foi definida.');
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }

    async validate(payload: {email: string; sub: number}): Promise<Omit<User, 'password'>>{
        const {sub: id} = payload;
        const user = await this.userRepository.findOne({where: {id}});

        if(!user){
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;

        return result;
    }
}