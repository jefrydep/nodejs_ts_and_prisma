import { Patient, Profile, User, Triage } from "@prisma/client";

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

export type patientUpdatePick = Pick<
  Patient,
  | "location"
  | "numberPhone"
  | "department"
  | "province"
  | "district"
  | "image"
  | "job"
>;

export type triagePick = Pick<
  Triage,            
  | "weight"        
  | "height"       
  | "temperature"   
  | "heardRate"     
  | "bloodPressure" 
  | "daysSick"      
  | "sature"        
  | "observations"
  | "appointmentId"
>;

export type errorProp ={
  errorContent?: string;
  status: number;
  message:string;
}

