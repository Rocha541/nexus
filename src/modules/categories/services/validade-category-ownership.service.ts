import { CategoriesRepository } from '../../../shared/database/repositories/categories.repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ValidadeOwnershipCategoryService {
    constructor(private readonly categoriesRepo: CategoriesRepository) {}

    async validade(userId: string, categoryId: string) {
        const isOwner = await this.categoriesRepo.findFirst({
            where: { id: categoryId, userId },
        });
        if (!isOwner) {
            throw new NotFoundException('Category account not found');
        }
    }
}
