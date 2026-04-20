import express from "express"
const app = express()
const port = 3500;



app.get("/",(req,resp)=>{
    resp.send({
        message:"basic api",
        success:true
    });
})





app.listen(port, () => {
  console.log("Server started");
});