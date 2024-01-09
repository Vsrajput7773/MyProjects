import './EPUser.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function EPUser()
{
   const [output ,setOutput] =useState();
   const [name ,setName] =useState();
   const [email ,setEmail] =useState();
   const [password ,setPassword] =useState();
   const [mobile ,setMobile] =useState();
   const [address ,setAddress] =useState();
   const [city ,setCity] =useState();
   const [gender ,setGender] =useState();
      
   useEffect(()=>{
        var email = localStorage.getItem("email");
         axios.get(_userapiurl+"fetch?email="+email).then((response)=>{
            // setUserDetails(response.data);
             console.log("Your UserDetails"+response.data[0]);
            var userDetails=response.data[0];
            setName(userDetails.name);
            setEmail(userDetails.email);
            setPassword(userDetails.password);
            setCity(userDetails.city);
            setAddress(userDetails.address);
            setMobile(userDetails.mobile);
         }).catch((err)=>{
            console.log(err);
         });
      },[]);

 
const handleSubmit=(evt)=>{
   evt.preventDefault();

  var updateDetails={"condition":{"email":email},"set":{"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}}

  axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
    //  console.log(response);
    setOutput("Profile Edited Successfully......");
  }).catch((err)=>{
    console.log(err);
  });
};
 return(
        <div>
             <div class="about">
         <div class="container ">
            <div class="row d_flex">
              
               <div class="col-md-6">
                  <div class="titlepage">
                   <h2>Edit Profile!!</h2>
                   <font style={{"color":"blue"}}>{output}</font>
                   <form onSubmit={handleSubmit}>
                     <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" value={name} onChange={e =>setName(e.target.value)}></input>
                     </div>
                   <div class="form-group">
                     <label for="email">Email address:</label>
                   <input type="email" class="form-control" value={email} onChange={e =>setEmail(e.target.value)} readOnly></input>
                   </div>
                   <div class="form-group">
                     <label for="pwd">Password:</label>
                   <input type="password" class="form-control" value={password} onChange={e =>setPassword(e.target.value)}></input>
                   </div>
                   <div class="form-group">
                     <label for="mobile">Mobile:</label>
                   <input type="text" class="form-control" value={mobile} onChange={e =>setMobile(e.target.value)}></input>
                   </div>
                   <div class="form-group">
                     <label for="address">Address:</label>
                   <input type="text" class="form-control" value={address} onChange={e =>setAddress(e.target.value)}></input>
                   </div>
                   <div class="form-group">
                     <label for="city">City:</label>
               <select  class="form-control" value={city} onChange={e =>setCity(e.target.value)}>
                     <option>Select City</option>
                     <option>Indore</option>
                     <option>Dewas</option>
                     <option>Sonkatch</option>
                     <option>Ujjain</option>
                     <option>Bhopal</option>
               </select>
                   </div>
                   <div class="form-group">
                     <label for="gender">Gender:</label>
                      Male <input checked type="radio" value="male" name="gender"
                       onChange={e => setGender(e.target.value)}></input>
                       &nbsp;&nbsp;
                     Female <input type="radio" value="female" name="gender"
                       onChange={e => setGender(e.target.value)}></input>
                        &nbsp;&nbsp;
                   </div>
                   <button type="submit" class="btn btn-success">Submit</button>
                   </form> 
                  </div>
               </div>
               <div class="col-md-6">
                     <h1>Thank You</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco
                </p>
               </div>
            </div>
         </div>
      </div>
      {/* Register end */}
   </div>
    );
}
export default EPUser;
