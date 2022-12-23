import { Profile, User } from "@prisma/client";

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
export type errorProp ={
  errorContent?: string;
  status: number;
  message:string;
}
