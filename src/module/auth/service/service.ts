import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import* as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: userWhereUniqueInput })
    }

    async users(params: {
        skip?: number, take?: number,
        cursor?: Prisma.UserWhereUniqueInput, where: Prisma.UserWhereInput,
        orderBy?: Prisma.UserOrderByWithRelationInput
    }): Promise<User[]> {
        const { skip, take, cursor, orderBy } = params
        return this.prisma.user.findMany({ skip, take, cursor, orderBy })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User>{
        data.password = await bcrypt.hash(data.password, 10)
        return await this.prisma.user.create({ data })
    }

}