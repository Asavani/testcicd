let express=require("express");
let app=express();
let normalCont=require("./myController/normal");
app.use("/",normalCont);
app.listen(3000,async()=>{
    console.log("Server Is Listen Port 3000");
})