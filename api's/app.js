import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileupload from 'express-fileupload';

var app = express();

//to get router 
import userRouter from './router/userrouter.js';
import categoryRouter from './router/categoryrouter.js';
import SubCategoryRouter from './router/subcategoryrouter.js';
import AddProductRouter from './router/addproductrouter.js';

// cors configuration
app.use(cors());


//configuration to handle file resources
app.use(fileupload());

//configuration to extract request body content
app.use(bodyParser());

app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/addproduct",AddProductRouter);

app.listen(3001);
console.log("server started at http://localhost:3001");

