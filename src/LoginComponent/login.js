import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';
import { useNavigate } from 'react-router-dom';
import ReadMore from '../ReadMore/readmore';
function Login()
{
   const navigate = useNavigate();
   const [output ,setOutput] =useState();
   const [email ,setEmail] =useState();
   const [password ,setPassword] =useState();
 
const handleSubmit=(evt)=>{
   evt.preventDefault();

   if(email==undefined)
   setOutput("*Email is required")
else if(password==undefined)
setOutput("*Password is required")
else
{
   let userDetails={"email":email,"password":password};
   // console.log(usesrDetails);
   axios.post(_userapiurl+"login",userDetails).then((response)=>{
   if(response.data.token!="error")
   {
   const responseData=response.data.userDetails;

     localStorage.setItem("token",response.data.token);
     localStorage.setItem("_id",responseData._id);
     localStorage.setItem("name",responseData.name);
     localStorage.setItem("email",responseData.email);
     localStorage.setItem("password",responseData.password);
     localStorage.setItem("mobile",responseData.mobile);
     localStorage.setItem("address",responseData.address);
     localStorage.setItem("city",responseData.city);
     localStorage.setItem("gender",responseData.gender);
     localStorage.setItem("role",responseData.role);
     localStorage.setItem("info",responseData.info);

      // if(responseData.role=="admin")
      // setOutput("login success as admin");
      // else  
      // setOutput("login success as user");
      responseData.role=="admin"?navigate("/admin"):navigate("/user");
   }
else
{
   setOutput("Invalid user or verify your account");
   setEmail('');
   setPassword('');
}
 }).catch((err)=>{
    console.log(err);
  });
}
};
    return(
        <div>
            {/* Login start */}

             <div class="about">
         <div class="container ">
            <div class="row d_flex">
               <div class="col-md-6">
                  <div class="titlepage">
                     <h2>Login Here!!!</h2>

                   <font style={{"color":"blue"}}>{output}</font>
                   <form onSubmit={handleSubmit}>
                   
                   <div class="form-group">
                     <label for="email">Email address:</label>
                   <input type="email" class="form-control" value={email} onChange={e =>setEmail(e.target.value)}></input>
                   </div>
                   <div class="form-group">
                     <label for="pwd">Password:</label>
                   <input type="password" class="form-control" value={password} onChange={e =>setPassword(e.target.value)}></input>
                   </div>
               
                   <button type="submit" class="btn btn-success">Submit</button>
                   </form> 

                  </div>
               </div>
               
               <div class="col-md-6">
                  <div class="titlepage">
                     <h2>Login</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                     <a class="read_more" href={ReadMore}> Read More</a>
                 {/* <button class="read_more" onClick={ReadMore}>Read More</button> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
            {/* Login end */}

        </div>
    );
}
export default Login;
