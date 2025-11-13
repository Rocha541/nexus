import { Public } from './../../shared/decorators/public.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { SigninDto } from './dtos/signin.dto.js';
import {
    ApiBody,
    ApiOkResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SignUpDto } from './dtos/signup.dto';
@ApiTags('Auth')
@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @ApiOperation({ summary: 'Create user' })
    @ApiBody({ type: SignUpDto })
    @ApiOkResponse({ description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @Post('signup')
    async signup(@Body() signupDto: SignUpDto) {
        return this.authService.signup(signupDto);
    }

    @ApiOperation({ summary: 'Authenticate user' })
    @ApiOkResponse({ description: 'JWT token returned successfully.' })
    @ApiResponse({
        status: 200,
        description: 'Login successful. JWT token returned..',
    })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    @Post('signin')
    autenticate(@Body() signinDto: SigninDto) {
        return this.authService.signin(signinDto);
    }
}
