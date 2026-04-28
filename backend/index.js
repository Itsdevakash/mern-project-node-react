import express from "express"
import { collectionName, connection } from "./dbconfig.js";
const app = express()
const port = 3500;


app.use(express.json());




app.get("/",(req,resp)=>{
    resp.send({
        message:"basic api",
        success:true
    });
})


app.post("/add-task",async(req,resp)=>{
const db = await connection();
const collection = await db.collection(collectionName);
const result  = await collection.insertOne(req.body)
result.send("working...app..")
})


app.listen(port, () => {
  console.log("Server started");
});