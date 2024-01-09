import mongoose from 'mongoose';
mongoose.set('strictQuery',false);
var url="mongodb://127.0.0.1:27017/e-commerce";
mongoose.connect(url);
console.log("Sucessfully connected to mongodb database");
