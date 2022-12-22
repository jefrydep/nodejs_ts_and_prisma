import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async () => {
  try {
    const result = await prisma.user.findMany({select:{
      documentNumber:true,
      password:true,
      role:true
    }});
    return result;
  } catch (error) {
    throw error;
  }
};