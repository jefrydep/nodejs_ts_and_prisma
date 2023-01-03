import  Router from "express";
import { validateDoctor, validateUpdateDoctor } from "../middlewares/doctor.middleware";
import { createDoctor, removeDoctor, showAllDoctor, showDoctorBy, updateDoctor } from "../controllers";
const docRoute = Router()




docRoute.get("/doctors", showAllDoctor);
docRoute.get("/doctors/:id",showDoctorBy)
docRoute.post("/doctors",validateDoctor, createDoctor);
docRoute.delete("/doctors/:id", removeDoctor);
docRoute.patch("/doctors/:id",validateUpdateDoctor,updateDoctor);


export{docRoute};