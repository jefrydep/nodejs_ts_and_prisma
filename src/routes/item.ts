import { Router,Request,Response } from "express";

const router = Router();
router.get('/items',(req:Request,res:Response)=>{
    res.send({data:'here van los modelos'})

    

})


export {router};
