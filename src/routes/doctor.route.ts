import  Router from "express";
import { createDoctor, deleteDoctor, showDoctor, updateDoctor } from "../controllers/doctor.controller";
import { validateDoctor } from "../middlewares/doctor.middleware";
const docRoute = Router()




docRoute.get("/doctors", showDoctor);
docRoute.post("/doctors",validateDoctor, createDoctor);
docRoute.delete("/doctors/:id", deleteDoctor);
docRoute.patch("/doctors/:id", updateDoctor);


export{docRoute};