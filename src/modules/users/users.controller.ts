import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';
import { ActiveUserId } from '../../shared/decorators/activeUserId.decorator';

@ApiTags('users')
@ApiAcceptedResponse({ description: 'Request accepted successfully.' })
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('/me')
    me(@ActiveUserId() userId: string) {
        console.log({ userId });

        return this.usersService.getById(userId);
    }
}
