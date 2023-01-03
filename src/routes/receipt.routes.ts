import Router from "express"
import { createReceipts, showReceipts, showReceiptsBy } from "../controllers/receipts.controllers";



const receiptsRoute = Router()

receiptsRoute.get("/receipts",showReceipts);
receiptsRoute.get("/receipts/:id",showReceiptsBy)
receiptsRoute.post("/receipts",createReceipts);


export {receiptsRoute}