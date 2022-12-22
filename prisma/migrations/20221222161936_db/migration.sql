/*
  Warnings:

  - A unique constraint covering the columns `[corporationId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `corporationId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_corporationId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "corporationId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_corporationId_key" ON "User"("corporationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
