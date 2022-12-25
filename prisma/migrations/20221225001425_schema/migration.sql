/*
  Warnings:

  - You are about to drop the column `departament` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Laboratory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Laboratory" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "departament",
ADD COLUMN     "department" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "documentNumber" DROP NOT NULL;
