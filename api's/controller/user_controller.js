import '../model/connection.js';
import * as url from 'url';
import jwt from 'jsonwebtoken';
import sendMail from './emailcontroller.js';

//to link schema model
import UserSchemaModel from '../model/user_model.js';


export var save=async (req,response,next)=>{
  var userDetails=req.body
  sendMail(userDetails.email,userDetails.password);
  var userList = await UserSchemaModel.find();
 // console.log(userList);
  var l=userList.length;
  var _id=l==0?1:userList[l-1]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
  var user = await UserSchemaModel.create(userDetails);
  if(user)
    return response.status(201).json({"msg":"User register successfully..."});
  else
    return response.status(500).json({"msg": 'Server Error'});
}

export var fetch=async (req,response,next)=>{
  var condition_obj = url.parse(req.url,true).query;
  //console.log(condition_obj);
  var userList = await UserSchemaModel.find(condition_obj);
  if(userList.length!=0)
    return response.status(201).json(userList);
  else
    return response.status(500).json(userList);
}

export var deleteUser = async(request,response,next)=>{
  var id = request.params.id;
  var user = await UserSchemaModel.find({_id: id});
  //console.log(user);
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany({_id:id});
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: 'Server Error'});
  }
  else
    return response.status(404).json({error: 'resource not found'});
}

export var updateUser = async(request,response,next)=>{
  let userDetails = await UserSchemaModel.findOne(request.body.condition);
  console.log(request.body.condition);
  if(userDetails){
    let user = await UserSchemaModel.updateOne(request.body.condition,{$set: request.body.set});
    if(user)
     return response.status(201).json({"msg":"sucess"});
    else
     return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var login = async (req,response,next)=>{
  var userDetails = req.body;
  console.log(userDetails);
  userDetails = {...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  console.log(userList);
  if(userList.length!=0)
  {
    let payload = {"subject":userList[0].email};
    let token = jwt.sign(payload,"kskwargkqcs");
    return response.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return response.json({"token":"Error"});   
}

  