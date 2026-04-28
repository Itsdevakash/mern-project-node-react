import { MongoClient } from "mongodb";

const  url = "mongodb+srv://todo:<todu123>@cluster0.in1qo4b.mongodb.net/?appName=Cluster0";
const dbName = "node_project";
const client = new MongoClient(url)
export const collectionName = "todu";

export const  connection = async()=>{
const  connect = await client.connect();
return await connect.db(dbName);
}