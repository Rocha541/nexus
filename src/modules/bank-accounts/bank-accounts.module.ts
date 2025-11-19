import { Module } from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { ValidadeOwnershipBankAccountsService } from './services/validade-bank-account-ownership.service';

@Module({
    controllers: [BankAccountsController],
    providers: [BankAccountsService, ValidadeOwnershipBankAccountsService],
    exports: [ValidadeOwnershipBankAccountsService],
})
export class BankAccountsModule {}
