import { BadRequestException, Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "../service/service";
import { SignInDTO, SignUpDTO } from "../dto/auth.dto";
import * as bcrypt from 'bcrypt'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async SignUp(@Body() user: SignUpDTO) {
        const newUser = await this.authService.createUser(user)
        return { message: 'User Registered successfully', user: newUser }
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() credentails: SignInDTO){
        const user = await this.authService.user({ email: credentails.email })
        const comparePassword = await bcrypt.compare(credentails.password, user.password)
        if(!user || !comparePassword) throw new BadRequestException('Incorrect username and password')
        return { message: 'Login successfull', token: null, type: 'bearer', expires_in:89990 }
    }


}







