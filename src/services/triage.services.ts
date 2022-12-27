import { Triage, Appointment, PrismaClient } from "@prisma/client";
import { patientPick, patientUpdatePick } from "../utils/format.server";
const prisma = new PrismaClient();

export class TriageServices {

  static async getTriage() {
    try {
      const result = await prisma.triage.findMany({
        select: {
        }
      })
      return result;  
    } catch (error) {
      throw error;        
    }
  };

}