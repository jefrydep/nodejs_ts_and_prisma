import { Corporation, User } from "@prisma/client";
import { prisma } from "../utils/prisma.server";
import { profilePick, userPick, userProfilePick } from "../utils/format.server";
import bcrypt  from "bcryptjs";
// import * as bcrypt from 'bcrypt';
export class userServices {
  static async getAll() {
    try {
      const result = await prisma.user.findMany({
        select: {
          documentNumber: true,
          password: true,
          role: true,
          corporationId: true,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(
    data: userProfilePick & { corporationId: Corporation["id"] }
  ) {
    try {
      const {
        corporationId,
        documentNumber,
        role,
        firstName,
        lastName,
        phone,
        email,
        degree,
        // image,
      } = data;
      const passwordHash = await bcrypt.hash(data.password, 10);
      const newUser = await prisma.user.create({
        data: {
          documentNumber,
          password: passwordHash,
          role,
          corporation: { connect: { id: corporationId } },
        },
      });
       await prisma.profile.create({
        data: {
          
          firstName,
          lastName,
          phone,
          email,
          degree,
          // image,
          user: { connect: { id: newUser.id } },
        },
      });
     return newUser;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  static async delete(id: User["id"]) {
    try {
      const result = await prisma.user.delete({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;

    }
  }
  static async updateRole(id: User["id"], role: User["role"]) {
    try {
      const result = await prisma.user.update({
        where: { id },
        data: { role },
      });
    } catch (error) {
      throw error;
    }
  }
}