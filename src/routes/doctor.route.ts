import  Router from "express";
import { createDoctor, deleteDoctor, showDoctor, showDoctorBy, updateDoctor } from "../controllers/doctor.controller";
import { validateDoctor } from "../middlewares/doctor.middleware";
const docRoute = Router()




docRoute.get("/doctors", showDoctor);
docRoute.get("/doctors/:id",showDoctorBy)
docRoute.post("/doctors",validateDoctor, createDoctor);
docRoute.delete("/doctors/:id", deleteDoctor);
docRoute.patch("/doctors/:id", updateDoctor);


export{docRoute};