const mongoose = require("mongoose");
const db = ()=> {
try{

mongoose.connect('mongodb+srv://nagarajugithub123:mysql@cluster0.0avlbnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>
console.log("connected"));
}
catch(error)
{
    console.log(error);
}
}
export default db;