import { Patient, Corporation, PrismaClient } from "@prisma/client";
import { patientPick } from "../utils/format.server";
const prisma = new PrismaClient();

export const getPatient = async () => {
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

export const createPatient = async (
    data: patientPick & { corporationId: Corporation["id"] }
  ) => {
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

export const updatePatient = async (id: Patient["id"], firstName: Patient["firstName"]) => {
  try {
    const result = await prisma.patient.update({
      where : { id },
      data: { firstName },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const deletePatient = async (id: Patient["id"]) => {
  try {
    const result = await prisma.patient.delete({
      where : { id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};