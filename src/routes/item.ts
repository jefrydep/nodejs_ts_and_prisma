import { Request, Response, Router } from "express";
import { request } from "http";
// import {
//   deleteItem,
//   getItem,
//   getItems,
//   postItem,
//   updateItem,
// } from "../controllers/item";
// import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/item',(req:Request,res:Response)=>{
    res.send({user:'jery'})

})

// router.get("/:id", logMiddleware, getItem);

// router.post("/", postItem);

// router.put("/:id", updateItem);

// router.delete("/:id", deleteItem);

export { router };