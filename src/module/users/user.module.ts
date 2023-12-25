import { Module } from "@nestjs/common";
import { AuthController } from "../auth/controllers/auth.controller";
// import { UserService } from "../service/user.service";

@Module({
    controllers: [AuthController],
    // providers: [UserService]
})
export class UserModule { }