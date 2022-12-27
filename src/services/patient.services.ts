import { Corporation, PrismaClient } from "@prisma/client";
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
        departament: true,
        province: true,
        district: true,
        bloodType: true,
        physicalHistory: true,
        image: true,
        jod: true,
        corporationId: true,
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
      departament,
      province,
      district,
      bloodType,
      physicalHistory,
      image,
      jod,
      corporationId,
    } = data;
    const result = await prisma.patient.create({
      data: {
        firstName,
        lastName,
        documentNumber,
        dateBirth,
        location,
        gender,
        numberPhone,
        departament,
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