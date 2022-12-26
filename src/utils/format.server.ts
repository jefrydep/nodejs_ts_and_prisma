import { Doctor, Patient, Profile, User } from "@prisma/client";

export type userPick = Pick<User,"documentNumber"|"password" |"role"|"corporationId">


export type loginPick = Pick<User,"documentNumber" |"password">
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
  | "departament"
  | "province"
  | "district"
  | "bloodType"
  | "physicalHistory"
  | "image"
  | "jod"
  | "corporationId"
>;

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