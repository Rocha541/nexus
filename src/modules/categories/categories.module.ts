import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './categories.controller';
import { ValidadeOwnershipCategoryService } from './services/validade-category-ownership.service';

@Module({
    controllers: [CategoriesController],
    providers: [CategoriesService, ValidadeOwnershipCategoryService],
    exports: [ValidadeOwnershipCategoryService],
})
export class CategoriesModule {}
