import { ValidadeOwnershipCategoryService } from '../../categories/services/validade-category-ownership.service';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionRepository } from '../../../shared/database/repositories/transactions.repositories';
import { ValidadeOwnershipBankAccountsService } from '../../bank-accounts/services/validade-bank-account-ownership.service';
import { ValidadeOwnershipTransactionsService } from './validade-transactions-ownership.service';
import { TransactionType } from '../entities/Transaction';

@Injectable()
export class TransactionsService {
    constructor(
        private readonly transactionRepo: TransactionRepository,
        private readonly validateOwnershipBankAccountsService: ValidadeOwnershipBankAccountsService,
        private readonly validateOwnershipCategoryService: ValidadeOwnershipCategoryService,
        private readonly validateOwnershipTransactionsService: ValidadeOwnershipTransactionsService
    ) {}

    async create(userId: string, createTransactionDto: CreateTransactionDto) {
        const { bank_account_id, categoryId, date, name, type, value } =
            createTransactionDto;
        await this.validadeEntitiesOwnership({
            userId,
            bank_account_id,
            categoryId,
        });

        return this.transactionRepo.create({
            data: {
                userId,
                bank_account_id,
                date,
                name,
                type,
                value,
            },
        });
    }

    findAllByUserId(
        userId: string,
        filters: {
            month: number;
            year: number;
            bankAccountId?: string;
            type?: TransactionType;
        }
    ) {
        return this.transactionRepo.findMany({
            where: {
                userId,
                bank_account_id: filters.bankAccountId,
                type: filters.type,
                date: {
                    gte: new Date(Date.UTC(filters.year, filters.month)),
                    lt: new Date(Date.UTC(filters.year, filters.month + 1)),
                },
            },
        });
    }

    async update(
        userId: string,
        transactionId: string,
        updateTransactionDto: UpdateTransactionDto
    ) {
        const { bank_account_id, categoryId, date, name, type, value } =
            updateTransactionDto;
        await this.validadeEntitiesOwnership({
            userId,
            bank_account_id,
            categoryId,
            transactionId,
        });
        return this.transactionRepo.update({
            where: { id: transactionId },
            data: {
                bank_account_id,
                date,
                name,
                type,
                value,
            },
        });
    }

    async remove(userId: string, transactionId: string) {
        await this.validateOwnershipTransactionsService.validade(
            userId,
            transactionId
        );
        await this.transactionRepo.delete({
            where: { id: transactionId },
        });
        return null;
    }

    private async validadeEntitiesOwnership({
        userId,
        bank_account_id,
        categoryId,
        transactionId,
    }: {
        userId: string;
        bank_account_id: string;
        categoryId: string;
        transactionId?: string;
    }) {
        await Promise.all([
            transactionId &&
                this.validateOwnershipTransactionsService.validade(
                    userId,
                    transactionId
                ),
            this.validateOwnershipBankAccountsService.validade(
                userId,
                bank_account_id
            ),
            this.validateOwnershipCategoryService.validade(userId, categoryId),
        ]);
    }
}
