import { $Enums } from "@prisma/client"
import { Transform } from "class-transformer"
import { IsEnum, IsString } from "class-validator"


export class SignUpDTO {
    @IsString()
    fullname: string
    
    @IsString()
    @Transform(({ value })=> value.toLowercase())
    email: string

    @IsEnum($Enums.Role)
    role: $Enums.Role

    @IsString()
    password: string

}

export class SignInDTO {
    @IsString()
    email: string
    
    @IsString()
    password: string
}