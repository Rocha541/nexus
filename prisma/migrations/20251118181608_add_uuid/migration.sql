/*
  Warnings:

  - The `categoryId` column on the `Transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `bank_account_id` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" UUID,
DROP COLUMN "bank_account_id",
ADD COLUMN     "bank_account_id" UUID NOT NULL;
