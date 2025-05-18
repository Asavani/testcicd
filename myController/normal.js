let express=require("express");
let router=express.Router();
router.get("/",async(req,res)=>{
    res.send({"status":2000,"msg":"Hello I am CI CD PIPE"});
});
router.get("/data",async(req,res)=>{
    res.send({"status":2000,"msg":"Hello Data Details Coming"});
});
module.exports=router;