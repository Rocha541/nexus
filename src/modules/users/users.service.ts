import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepo: UsersRepository) {}
    async create(createUserDto: CreateUserDto) {
        const { name, email, password } = createUserDto;

        const emailTaken = await this.usersRepo.findUnique({
            where: { email },
            select: { id: true },
        });
        if (emailTaken) {
            throw new ConflictException('This email is already taken');
        }
        const hashedPassword = await hash(password, 12);

        const user = await this.usersRepo.create({
            data: {
                name,
                email,
                password: hashedPassword,
                categories: {
                    createMany: {
                        data: [
                            { name: 'Salário', icon: 'travel', type: 'INCOME' },
                            {
                                name: 'Freelance',
                                icon: 'freelance',
                                type: 'INCOME',
                            },
                            { name: 'Outro', icon: 'other', type: 'INCOME' },

                            { name: 'Casa', icon: 'home', type: 'OUTCOME' },
                            {
                                name: 'Alimentação',
                                icon: 'food',
                                type: 'OUTCOME',
                            },
                            {
                                name: 'Educação',
                                icon: 'education',
                                type: 'OUTCOME',
                            },
                            { name: 'Lazer', icon: 'fun', type: 'OUTCOME' },
                            {
                                name: 'Mercado',
                                icon: 'grocery',
                                type: 'OUTCOME',
                            },
                            {
                                name: 'Roupas',
                                icon: 'clothes',
                                type: 'OUTCOME',
                            },
                            {
                                name: 'Transporte',
                                icon: 'transport',
                                type: 'OUTCOME',
                            },
                            { name: 'Viagem', icon: 'travel', type: 'OUTCOME' },
                            { name: 'Outro', icon: 'other', type: 'INCOME' },
                        ],
                    },
                },
            },
        });

        return user;
    }
}
