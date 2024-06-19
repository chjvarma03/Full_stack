import mongoose from 'mongoose';
const profile = new mongoose.Schema({
    name:String,
    pass:String
});
const profilemodel = mongoose.model("profiles",profile);
export default profilemodel;