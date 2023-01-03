import Router from "express"
import { showLaboratories } from "../controllers/laboratory.controller"

const labRoute = Router()

labRoute.get("/laboratories",showLaboratories)
// labRoute.get()
// labRoute.get()
// labRoute.get()


export{labRoute}