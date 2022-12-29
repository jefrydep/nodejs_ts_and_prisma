import { Diagnostics, Appointment, Doctor ,PrismaClient } from "@prisma/client";
// import { diagnosticsPick } from "../utils/format.server";
const prisma = new PrismaClient();

export class DiagnosticsServices {

  static async Get() {
    try {
      const result = await prisma.diagnostics.findMany({
        include: {
          appointment: {},
          doctor: {}  
        }
      })
      return result;  
    } catch (error) {
      throw error;  
    }
  };

//   static async Create(
//     data: diagnosticsPick & { appointment: Appointment["id"],
//     doctor: Doctor["id"]}) {
//     try {
//       const {
//         anamnesis,
//         clinicalExam,
//         diagnostics,
//         observations,
//         appointmentId,
//         doctorId
//       } = data;
//     //   const result =  
//     //   return result;  
//     } catch (error) {
//       throw error;  
//     }
//     }
};