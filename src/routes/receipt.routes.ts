import Router from "express"
import { createReceipts, showReceipts } from "../controllers/receipts.controllers";



const receiptsRoute = Router()

receiptsRoute.get("/receipts",showReceipts);
receiptsRoute.post("/receipts",createReceipts);


export {receiptsRoute}