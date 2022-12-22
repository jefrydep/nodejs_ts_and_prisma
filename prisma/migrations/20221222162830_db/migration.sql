-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "documentNumber" TEXT NOT NULL,
    "dateBirth" TEXT NOT NULL,
    "location" TEXT,
    "gender" TEXT NOT NULL,
    "numberPhone" TEXT,
    "departament" TEXT,
    "province" TEXT,
    "district" TEXT,
    "bloodType" TEXT NOT NULL,
    "physicalHistory" TEXT NOT NULL,
    "image" TEXT,
    "jod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "corporationId" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_corporationId_key" ON "Patient"("corporationId");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
