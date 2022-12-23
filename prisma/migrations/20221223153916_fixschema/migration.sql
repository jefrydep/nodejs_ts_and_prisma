/*
  Warnings:

  - You are about to drop the column `doctorId` on the `Receipts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[corporationId]` on the table `Laboratory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[corporationId]` on the table `Pharmacy` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `corporationId` to the `Laboratory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corporationId` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Receipts" DROP CONSTRAINT "Receipts_doctorId_fkey";

-- AlterTable
ALTER TABLE "Laboratory" ADD COLUMN     "corporationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pharmacy" ADD COLUMN     "corporationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Receipts" DROP COLUMN "doctorId";

-- CreateIndex
CREATE UNIQUE INDEX "Laboratory_corporationId_key" ON "Laboratory"("corporationId");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacy_corporationId_key" ON "Pharmacy"("corporationId");

-- AddForeignKey
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laboratory" ADD CONSTRAINT "Laboratory_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
