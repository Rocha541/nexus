import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from '../../../shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidadeOwnershipTransactionsService {
    constructor(private readonly transactionsRepo: TransactionRepository) {}

    async validade(userId: string, transactionId: string) {
        const isOwner = await this.transactionsRepo.findFirst({
            where: { id: transactionId, userId },
        });
        if (!isOwner) {
            throw new NotFoundException('Transactions account not found');
        }
    }
}
