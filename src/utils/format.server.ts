import { User } from "@prisma/client";
import { type } from "os";

export type userPick = Pick<
  User,
  "documentNumber" | "password" | "role" | "corporationId"
>;


export type loginPick =Pick<
User,
"documentNumber"|"password"
>