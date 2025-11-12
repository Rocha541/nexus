import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

import { ApiAcceptedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@ApiAcceptedResponse({ description: 'Request accepted successfully.' })
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get('me')
    me(@Req() request: any) {
        console.log({ meUserId: request.user.userId });
        return this.usersService.getById('userId');
    }
}
