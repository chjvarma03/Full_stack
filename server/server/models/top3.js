import mongoose from "mongoose";
const top3 = new mongoose.Schema({
    coinname:String,
    price:Number,
    current:Number
})
const top3model = mongoose.model("top3",top3);
export default top3model;