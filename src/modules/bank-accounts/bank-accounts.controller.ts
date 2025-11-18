import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseUUIDPipe,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { ActiveUserId } from '../../shared/decorators/activeUserId.decorator';

@Controller('bank-accounts')
export class BankAccountsController {
    constructor(private readonly bankAccountsService: BankAccountsService) {}

    @Post()
    create(
        @Body() createBankAccountDto: CreateBankAccountDto,
        @ActiveUserId() userId: string
    ) {
        return this.bankAccountsService.create(userId, createBankAccountDto);
    }

    @Get()
    findAllByUserId(@ActiveUserId() userId: string) {
        return this.bankAccountsService.findAllByUserId(userId);
    }

    @Put(':BankAccountId')
    update(
        @ActiveUserId() userId: string,
        @Param('BankAccountId', ParseUUIDPipe) bankAccountId: string,
        @Body() UpdateBankAccountDto: UpdateBankAccountDto
    ) {
        return this.bankAccountsService.update(
            userId,
            bankAccountId,
            UpdateBankAccountDto
        );
    }

    @Delete(':BankAccountId')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(
        @ActiveUserId() userId: string,
        @Param('BankAccountId', ParseUUIDPipe) bankAccountId: string
    ) {
        return this.bankAccountsService.remove(userId, bankAccountId);
    }
}
