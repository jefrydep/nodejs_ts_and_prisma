import { Doctor, User } from "@prisma/client";
import { prisma } from "../utils/prisma.server";
import { doctorPick } from "../utils/format.server";

export class doctorServices {
  static async getAll() {
    try {
      const result = await prisma.doctor.findMany({
        select: {
          cieCod: true,
          userId: true,

          medicalRelation: true,
          user: {
            include: {
              profile: true,

            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id:Doctor["id"]){
    try {
      const result = await prisma.doctor.findUnique({
        where:{id},
        select:{
          appointment:true,
          cieCod:true,
          user: {
            include: {
              profile: true,
            },
          },
        }
       
      });
      return result;
    } catch (error) {
      throw error;
      
    }
  }
  static async create(data: doctorPick & {  userId: User["id"] }) {
    try {
      const { cieCod, medicalRelation, userId } = data;
      const newDoctor = await prisma.doctor.create({
        data: {
          medicalRelation,
          cieCod,
          user: { connect: { id: userId } },
        },
      });

      return newDoctor;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: Doctor["id"]) {
    try {
      const result = await prisma.doctor.delete({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(
    id: Doctor["id"],
    cieCod: Doctor["cieCod"],
    medicalRelation: Doctor["medicalRelation"]
  ) {
    try {
      const result = await prisma.doctor.update({
        where: { id },
        data: {
          cieCod,
          medicalRelation,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
