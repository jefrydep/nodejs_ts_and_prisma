import { PrismaClient } from "@prisma/client";
// let prisma: PrismaClient;
declare global {
  var __db: PrismaClient | undefined;
}

const prisma = new PrismaClient();

if (prisma) {
  prisma.$connect();
} else {
  console.log("database has undefined");
}

export * from "@prisma/client";
export { prisma };
