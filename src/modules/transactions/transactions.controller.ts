import {
    Controller,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Get,
    ParseUUIDPipe,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ActiveUserId } from '../../shared/decorators/activeUserId.decorator';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    create(
        @Body() createTransactionDto: CreateTransactionDto,
        @ActiveUserId() userId: string
    ) {
        return this.transactionsService.create(userId, createTransactionDto);
    }
    @Get()
    findAllByUserId(@ActiveUserId() userId: string) {
        return this.transactionsService.findMany(userId);
    }
    @Put(':transactionId')
    update(
        @ActiveUserId() userId: string,
        @Param('transactionId', ParseUUIDPipe) transactionId: string,
        @Body()
        updateTransactionDto: UpdateTransactionDto
    ) {
        return this.transactionsService.update(
            userId,
            transactionId,
            updateTransactionDto
        );
    }

    @Delete(':transactionId')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(
        @ActiveUserId() userId: string,
        @Param('transactionId', ParseUUIDPipe) transactionId: string
    ) {
        return this.transactionsService.remove(userId, transactionId);
    }
}
