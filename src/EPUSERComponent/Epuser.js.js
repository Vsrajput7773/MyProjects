import { useState , useEffect } from 'react';
import './Epuser.css';
import  axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function Epuser() {
    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();
    
    useEffect(()=>{
        var email = localStorage.getItem("email");
        axios.get(_userapiurl+"fetch?email="+email).then((response)=>{
            //setUserDetails(response.data);
            console.log("your USer Details"+response.data[0]);
            var userDetails=response.data[0];
            setName(userDetails.name);
            setEmail(userDetails.email);
            setPassword(userDetails.password);
            setAddress(userDetails.address);
            setCity(userDetails.city);
            setMobile(userDetails.mobile);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);


    const handleSubmit=(evt)=>{
        evt.preventDefault();
        //console.log(userDetails);
        var updateDetails={"condition":{"email":email},"set":{"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            setOutput("Profile Edited Successfully....");
        }).catch((err)=>{
           console.log(err);
        });
    };

    return (
        <div class="container" >
            <div class="row" >
                <div class="col-md-12 col-lg-12" >
                    <h2>Edit Profile Here!!!</h2>
                    <font style={{"color":"Green","font-size":"20px"}}>{output}</font>
                    <form onSubmit={handleSubmit} >
                        <div class="form-group">
                          <label for="name">Name:</label>
                          <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} ></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} ></input>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} ></input>
                        </div>
                        <div class="form-group">
                            <label for="mobile">Mobile:</label>
                            <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} ></input>
                        </div>
                        <div class="form-group">
                            <label for="address">Address:</label>
                            <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
                        </div>
                        <div class="form-group">
                            <label for="city">City:</label>
                            <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                            <option>Select City</option> 
                            <option>Indore</option>
                            <option>Ujjain</option> 
                            <option>Bhopal</option>  
                            </select>
                        </div>
                        <div class="form-group" >
                          <label class="gender" >Gender:</label>
                          &nbsp;&nbsp;
                          Male <input checked type="radio" value="male" name="gender"
onChange={e => setGender(e.target.value)} ></input>
                          &nbsp;&nbsp;
                          Female <input type="radio" value="female" name="gender"
onChange={e => setGender(e.target.value)} ></input>
                          &nbsp;&nbsp;
                        </div>
                        <button type="submit" class="btn btn-success" >submit</button>
                    </form>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Epuser;