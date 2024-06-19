import mongoose from 'mongoose';
import cors from 'cors'
import express from 'express';
//import db from './mongo.cjs'
import profilemodel from './models/profile.js';
import top3model from './models/top3.js';
const app = express();
const corsOptions = {
    origin:"http://localhost:3000"
}
app.use(cors(corsOptions));
app.use(express.json())

app.post('/register',(req,res)=>
{
    console.log("api called")
    const user = {
        name:req.body.name,
        pass:req.body.pass
    }
    profilemodel.insertMany(user);
    console.log(user)
    res.send("ok");
    
})
app.post('/signincheck',async(req,res)=>
{
    const op = await profilemodel.findOne({name:req.body.name,pass:req.body.pass});
    console.log(op)
    res.send("ok")
})
app.get('/homedatafetching',async(req,res)=>{
    const data = await top3model.find();
    res.send(JSON.stringify(data));
    console.log(data);

})
async function db(){
try{
      await mongoose.connect('mongodb+srv://nagarajugithub123:mysql@cluster0.0avlbnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>
     console.log("connected"));
   }
catch(error)
{
    console.log(error);
}
}
db()
app.listen(8900,()=>
{
    console.log("server is running")
})