import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
 

    const handleSubmit=(ffo)=>{
        ffo.preventDefault();
        
        if(email==undefined)
         setOutput("*Email is required.");
        else if(password==undefined)
         setOutput("*Password is required.");
        else
        {
        let userDetails={"email":email,"password":password};
        //console.log(userDetails);
        axios.post(_userapiurl+"login",userDetails).then((response)=>{
            if(response.data.token!=="Error")
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
                localStorage.setItem("info",responseData.info)
                responseData.role=="admin"?navigate("/admin"):navigate("/user");
            }
            else
            {
            setOutput("Invalid user or verify your account....");
            setEmail('');
            setPassword('');
        }
        }).catch((err)=>{
           console.log(err);
        });
    };
};
    return (
        <div class="container" >
            <div class="row" >
                <div class="col-md-6 col-lg-6" >
                    <h2>login Here!!!!</h2>
                    <font style={{"color":"red"}}>{output}</font>
                    <form onSubmit={handleSubmit} >
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} ></input>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} ></input>
                        </div>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                    
                </div>
                        <div class="col-lg-6" >
                           <h1>Welcome to PostKrde.com , Login page</h1>
                           <p class="about_text" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sed deleniti culpa, reprehenderit,
                            cum laudantium nulla facilis ipsa nam illum labore unde aliquid eos eligendi voluptates sint, ea quasi at alias quidem doloremque? Minus dicta officiis, omnis sint beatae tenetur nostrum obcaecati facilis enim magni nulla incidunt consequuntur eius in labore harum inventore sapiente provident quae asperiores tempore assumenda! Aut omnis tempore voluptatibus labore, assumenda officia sequi fuga earum, accusantium harum maxime quas.</p>
                        </div>
            </div>
        </div>
    );
}

export default Login;