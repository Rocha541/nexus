import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepo: UsersRepository) {}
    async getById(userId: string) {
        const user = await this.usersRepo.findUnique({
            where: { id: userId },
            select: { email: true, name: true },
        });

        return user;
    }
}
