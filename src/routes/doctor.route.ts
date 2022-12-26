import  Router from "express";
import { createDoctor, deleteDoctor, showDoctor, updateDoctor } from "../controllers/doctor.controller";
const docRoute = Router()




docRoute.get("/doctors", showDoctor);
docRoute.post("/doctors", createDoctor);
docRoute.delete("/doctors/:id", deleteDoctor);
docRoute.patch("/doctors/:id", updateDoctor);


export{docRoute};