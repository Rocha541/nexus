import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getById(userId: string) {
        return { userId };
    }
}
