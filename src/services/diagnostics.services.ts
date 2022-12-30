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

  static async Create(
    data: Diagnostics & { appointment: Appointment["id"],
    doctor: Doctor["id"]}) {
    try {
      const {
        anamnesis,
        clinicalExam,
        diagnostic,
        observations,
        appointmentId,
        doctorId
      } = data;
        const result = await prisma.diagnostics.create({
          data: {
            anamnesis,
            clinicalExam,
            diagnostic,
            observations,
            appointment: { connect: { id: appointmentId }},
            doctor: { connect: { id: doctorId }}
          }
        }) 
        return result;  
     } catch (error) {
       throw error;  
    }
  };

  static async Patch(id: Diagnostics["id"]){
    try {
      const result = await prisma.diagnostics.findUnique({
        where: { id },
        select: {
          anamnesis: true,
          clinicalExam: true,
          diagnostic: true,
          observations: true,
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async Update(
    data: Diagnostics, id: Diagnostics["id"]){
    try {
      const result = await prisma.diagnostics.update({
        where: { id },
        data: data
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async Delete(id: Diagnostics["id"]) {
    try {
      const result = await prisma.diagnostics.delete({
        where: { id },
      });
      return result; 
    } catch (error) {
      throw error; 
    }
  }

};