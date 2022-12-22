import { Corporation, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { userPick } from "../utils/format.server";
const prisma = new PrismaClient();

export const getUser = async () => {
  try {
    const result = await prisma.user.findMany({
      select: {
        documentNumber: true,
        password: true,
        role: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
export const createUser = async (
  data: userPick & { corporationId: Corporation["id"] }
) => {
  try {
    const { corporationId, documentNumber, role } = data;
    const passwordHash = await bcrypt.hash(data.password, 10);
    const result = await prisma.user.create({
      data: {
        documentNumber,
        password: passwordHash,
        role,
        corporation: { connect: { id: corporationId } },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

