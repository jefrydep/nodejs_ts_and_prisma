import { User,Profile,Patient,Doctor,PrismaClient } from "@prisma/client";

PrismaClient

export type userPick = Pick<
  User,
  "documentNumber" | "password" | "role" | "corporationId"
>;

export type loginPick = Pick<User, "documentNumber" | "password">;
export type profilePick = Profile;

export type userProfilePick = Pick<
  User & Profile,
  | "documentNumber"
  | "password"
  | "role"
  | "corporationId"
  | "firstName"
  | "lastName"
  | "phone"
  | "email"
  | "degree"
  | "image"
>;

export type patientPick = Pick<
  Patient,
  |"firstName"
  | "lastName"
  | "documentNumber"
  | "dateBirth"
  | "location"
  | "gender"
  | "numberPhone"
  | "department"
  | "province"
  | "district"
  | "bloodType"
  | "physicalHistory"
  | "image"
  | "job"
  | "corporationId"
>;

<<<<<<< HEAD
export type doctorPick = Pick<Doctor,
|"medicalRelation"
|"cieCod"
|"userId"

>;

export type errorProp ={
  errorContent?: string;
  status: number;
  message:string;
}

=======
export type profileUpdatePick = Pick<
  User & Profile,
  "id" | "firstName" | "lastName" | "phone" | "degree" | "image"
>;

export type corporationCreatePick = Pick<
  Corporation,
  "name" | "ruc" | "fullDescription"
>;
export type errorProp = {
  errorContent?: string;
  status: number;
  message: string;
};
>>>>>>> 6ae58554414aae89bca8c770ad41cc6c54ad8a14
