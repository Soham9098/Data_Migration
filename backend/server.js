import express from "express";
import migrationRoute from "./routes/migrationRoute.js";
const app = express();
import databaseConnect from './config/database.js'


app.use('/api',migrationRoute);

app.get('/', (req, res)=>{
     res.send('This is from backend Sever')
})




databaseConnect();

app.listen(4000, ()=>{
     console.log(`Server is running on port 4000`);
})