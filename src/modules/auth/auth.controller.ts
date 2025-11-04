import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dtos/authenticate.dto';
import {
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @ApiOperation({ summary: 'Authenticate user' })
    @ApiOkResponse({ description: 'JWT token returned successfully.' })
    @ApiResponse({
        status: 200,
        description: 'Login successful. JWT token returned..',
    })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    @Post('signin')
    autenticate(@Body() authenticateDto: AuthenticateDto) {
        return this.authService.authenticate(authenticateDto);
    }
}
