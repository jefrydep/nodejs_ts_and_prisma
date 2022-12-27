import { Patient, Corporation, PrismaClient } from "@prisma/client";
import { patientPick, patientUpdatePick } from "../utils/format.server";
const prisma = new PrismaClient();

export class PatientServices {
  static async getPatient() {
    try {
      const result = await prisma.patient.findMany({
        select: {
            firstName: true,
            lastName: true,
            documentNumber: true,
            dateBirth: true,
            location: true,
            gender: true,
            numberPhone: true,
            department: true,
            province: true,
            district: true,
            bloodType: true,
            physicalHistory: true,
            image: true,
            jod: true,
            corporation: {
              select:{
                id: true,
                name: true,
                ruc: true,
                fullDescription: true,
                apiRoute: true,
              }
            }
        },
        
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async listPatient(id: Patient["id"]){
    try {
      const result = await prisma.patient.findUnique({
        where: { id },
        select: {
          firstName: true,
          lastName: true,
          documentNumber: true,
          dateBirth: true,
          bloodType: true,
          physicalHistory: true,
          image: true,
        }
      });
      return result;
    } catch (error) {
      throw error;      
    }
  }

  static async createPatient(
    data: patientPick & { corporationId: Corporation["id"] }
  ) {
    try {
      const { 
        firstName,
        lastName,
        documentNumber,
        dateBirth,
        location,
        gender,
        numberPhone,
        department,
        province,
        district,
        bloodType,
        physicalHistory,
        image,
        jod,
        corporationId } = data;
      const result = await prisma.patient.create({
        data: {
            firstName,
            lastName,
            documentNumber,
            dateBirth,
            location,
            gender,
            numberPhone,
            department,
            province,
            district,
            bloodType,
            physicalHistory,
            image,
            jod,
            corporation: { connect: { id: corporationId } },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }    
  };

  static async updatePatient(
    data: patientUpdatePick, id: Patient["id"]) {
    try {
      console.log(data); 
      const result = await prisma.patient.update({
        where : { id },
        data: data
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async deletePatient(id: Patient["id"]) {
    try {
      const result = await prisma.patient.delete({
        where : { id },
      });
      console.log(result);
      
      return result;
    } catch (error) {
      throw error;
    }
  };
}