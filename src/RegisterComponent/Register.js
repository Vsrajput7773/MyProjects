import { useState } from 'react';
import './Register.css';
import  axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function Register() {
    const [ output , setOutput ] = useState();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ address , setAddress ] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();

    const handleSubmit=(ffo)=>{
        ffo.preventDefault();
        let userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
        //console.log(userDetails);
        
        axios.post(_userapiurl+"save",userDetails).then((response)=>{
            // console.log(response);
            setOutput(response.data.msg);
            setName('');
            setEmail('');
            setPassword('');
            setAddress('');
            setCity('');
            setMobile('');
            // alert("It's Done....");
        }).catch((err)=>{
           console.log(err);
        });
    };

    return (
        <div class="container" >
            <div class="row" >
                <div class="col-md-12 col-lg-12" >
                    <h2>Register Here!!!!</h2>
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
                          Male <input type="radio" value="male" name="gender"
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

export default Register;