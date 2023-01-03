import Router from "express"
import { createLaboratory, showLaboratories } from "../controllers/laboratory.controllers"

const labRoute = Router()

labRoute.get("/laboratories",showLaboratories)
labRoute.post("/laboratories",createLaboratory)
// labRoute.get()
// labRoute.get()


export{labRoute}