import {prisma } from "../utils/prisma.server";
import {Receipts } from "@prisma/client";

export class receiptsServices {
  static async getAllReceipts() {
    try {
      const result = await prisma.receipts.findMany({
        select: {
          observations: true,
          appointment: {
            include: {
              doctor: true,
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async get(id:Receipts['id']) {

    try {
        const result = await prisma.receipts.findUnique({
            where:{id},
            select:{
                observations:true,
                appointment:true,

            }
        })
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
        throw error;
        
    }
  }
  static async createReceipts() {}
}
