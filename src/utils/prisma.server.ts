import { PrismaClient } from "@prisma/client";
let prisma: PrismaClient;
declare global {
  var __db: PrismaClient | undefined;
}


if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
  console.log("success")
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  prisma = global.__db;
}

export * from "@prisma/client";
export { prisma };
