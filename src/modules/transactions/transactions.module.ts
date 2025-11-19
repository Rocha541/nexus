import { CategoriesModule } from './../categories/categories.module';
import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { ValidadeOwnershipTransactionsService } from './services/validade-transactions-ownership.service';

@Module({
    imports: [BankAccountsModule, CategoriesModule],
    controllers: [TransactionsController],
    providers: [TransactionsService, ValidadeOwnershipTransactionsService],
})
export class TransactionsModule {}
