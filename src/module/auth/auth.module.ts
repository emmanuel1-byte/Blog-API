import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./service/service";
import { PrismaModule } from "prisma/prisma.module";
import { PrismaService } from "prisma/prisma.service";

@Module({
    imports: [PrismaModule],
    providers: [AuthService, PrismaService],
    controllers: [AuthController]
})

export class AuthModule { }