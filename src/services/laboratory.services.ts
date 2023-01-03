import { Corporation, Laboratory } from "@prisma/client";
import { prisma } from "../utils/prisma.server";
import { laboratyPick } from "~/utils/format.server";
export class laboratoryServices {
  static async getAllLaboratories() {
    try {
      const result = await prisma.laboratory.findMany({
        select: {
          id: true,
          medicalTest: true,
          corporation: {
            include: {
              medicines: true,
              laboratory: true,
              patient: true,
              services: true,
            },
          },
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createLaboratories(data:laboratyPick & {corporationId:Corporation["id"]}){
    try {
        const {corporationId}=data;
        const newLaboratorie = await prisma.laboratory.create({
            data:{
                
                corporation:{connect:{id:corporationId}}
            }
        })
        return newLaboratorie;
    } catch (error) {
        throw error;

    }
  }
}
