import { Injectable, NotFoundException } from '@nestjs/common';

import { BankAccountsRepository } from '../../../shared/database/repositories/bank-accounts.repositories';

@Injectable()
export class ValidadeOwnershipBankAccountsService {
    constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}

    async validade(userId: string, bankAccountId: string) {
        const isOwner = await this.bankAccountsRepo.findFist({
            where: { id: bankAccountId, userId },
        });
        if (!isOwner) {
            throw new NotFoundException('Bank account not found');
        }
    }
}
