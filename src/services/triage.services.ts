import { Triage, Appointment, PrismaClient } from "@prisma/client";
import { triagePick } from "../utils/format.server";
const prisma = new PrismaClient();

export class TriageServices {

  static async Get() {
    try {
      const result = await prisma.triage.findMany({
        include: {
          appointment: { }
        }
      })
      return result;  
    } catch (error) {
      throw error;        
    }
  };

  static async Create(
    data: triagePick & { appointmentId: Appointment["id"] }){
    try {
      const {          
        weight,        
        height,        
        temperature,   
        heardRate,    
        bloodPressure, 
        daysSick,     
        sature,        
        observations,
        appointmentId
      } = data;
      const result = await prisma.triage.create({
        data: {
          weight,        
          height,        
          temperature,  
          heardRate,     
          bloodPressure, 
          daysSick,      
          sature,        
          observations,
          appointment: { connect: { id: appointmentId } },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async Patch(id: Triage["id"]){
    try {
      const result = await prisma.triage.findUnique({
        where: { id },
        select: {
          weight: true,
          height: true,
          temperature: true,
          heardRate: true,
          bloodPressure: true,
          daysSick: true,
          sature: true,
          observations: true,
        }
      })
      return result;      
    } catch (error) {
      throw error; 
    }
  };

  static async Update(
    data: triagePick, id: Triage["id"]) {
    try {
      const result = await prisma.triage.update({
        where: { id },
        data: data
      })
      return result;
    } catch (error) {
      throw error;
    } 
  };

  static async Delete(id: Triage["id"]) {
    try {
      const result = await prisma.triage.delete({
        where: { id },
      })
      return result;
    } catch (error) {
      throw error;
    }
  };
}