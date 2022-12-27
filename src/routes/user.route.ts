// import { Request, Response, Router } from "express";
// import { showUser } from "~/controllers/user.controller";

// const userRouter = Router();


// userRouter.get('/',showUser);
// userRouter.post('/',showUser);

// userRouter.get('/user',(req:Request,res:Response)=>{
//     res.send({user:'jery'})

// })


import express, { Router } from "express";
import {
  deleteUser,
  registerUser,
  showUser,
  updateRole,
} from "../controllers/user.controller";
// import { authenticate } from "../middlewares/auth.middlewares";

const app = express();
export const route = Router();

route.get("/users", showUser);
route.post("/users", registerUser);
route.delete("/users/:id", deleteUser);
route.patch("/users/:id", updateRole);