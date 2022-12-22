-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descrption" TEXT,
    "category" TEXT,
    "fullDescrption" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "codInternal" INTEGER NOT NULL,
    "hasIgv" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "corporationId" INTEGER NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "fullDescrption" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "codInternal" INTEGER NOT NULL,
    "hasIgv" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "corporationId" INTEGER NOT NULL,

    CONSTRAINT "Medicines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Services_codInternal_key" ON "Services"("codInternal");

-- CreateIndex
CREATE UNIQUE INDEX "Services_corporationId_key" ON "Services"("corporationId");

-- CreateIndex
CREATE UNIQUE INDEX "Medicines_codInternal_key" ON "Medicines"("codInternal");

-- CreateIndex
CREATE UNIQUE INDEX "Medicines_corporationId_key" ON "Medicines"("corporationId");

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicines" ADD CONSTRAINT "Medicines_corporationId_fkey" FOREIGN KEY ("corporationId") REFERENCES "Corporation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
