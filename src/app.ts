import express, { Request, Response, NextFunction, application } from "express";
import cors from "cors";
 

import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

//provando las rutas
import { router } from "./routes/item";
import {route} from "./routes/user.route";
import { docRoute } from "./routes/doctor.route";
// import { router } from "./routes";
 
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;


app.use(morgan("dev"));
//para recivir dato por el body
app.use(express.json());
app.use(cors());

// app.use(router);



const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "ok" });
});

app.use("/api",router)
app.use("/api",route);
app.use("/api",docRoute)

app.listen(PORT, () => {
  console.log(`server has running in port: ${PORT}`);
});
