import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import { route } from "./routes/user.routes";
import { authRoutes } from "./routes/auth.routes";

const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use(router);
// 
const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "ok" });
});

app.use("/api", route);
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`server has running in port: ${PORT}`);
});
