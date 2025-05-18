let express=require("express");
let router=express.Router();
let student=[{"id":1,"sname":"Anil"},{"id":2,"sname":"Sunil"}];
router.get("/",async(req,res)=>{
    res.send({"status":2000,"msg":"Hello I am CI CD PIPE"});
});


module.exports=router;