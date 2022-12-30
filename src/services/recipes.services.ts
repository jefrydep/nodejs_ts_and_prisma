import { Recipes, Appointment, Doctor, PrismaClient } from "@prisma/client";
import { patientUpdatePick } from "../utils/format.server";
const prisma = new PrismaClient();

export class RecipesServices {

  static async Get() {
    try {
      const result = await prisma.recipes.findMany({
        include: {
          appointment: {},
          doctor: {}  
        }
      });
      return result;  
    } catch (error) {
      throw error;  
    }
  };

  static async Create(
    data: Recipes & { appointmentId: Appointment["id"], doctorId: Doctor["id"]}) {
    try {
      const { observations, appointmentId, doctorId } = data;
      const result = await prisma.recipes.create({
        data: {
          observations, 
          appointment: { connect: { id: appointmentId } }, 
          doctor: { connect: { id: doctorId } },
        }
      });
      return result;  
    } catch (error) {
      throw error;   
    }
  };

  static async Patch(id: Recipes["id"]) {
    try {
      const result = await prisma.recipes.findUnique({
        where: { id },
        select: {
          recipesDes: true,
          observations: true,  
        }
      });
      return result;  
    } catch (error) {
      throw error;  
    }
  };

  static async Update(
    data: Recipes, id: Recipes["id"]) {
      try {
        const result = await prisma.recipes.update({
          where: { id },
          data: data  
        });
        return result;
      } catch (error) {
        throw error;
      }  
    };

  static async Delete(id: Recipes["id"]) {
    try {
      const result = await prisma.recipes.delete({
        where: { id },
      });
      return result;  
    } catch (error) {
      throw error;  
    }
  };
}