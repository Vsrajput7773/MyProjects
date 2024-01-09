import './Manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function Manageusers()
{
    const [ userDetails , setUserDetails ] = useState([]);
    useEffect(()=>{
        axios.get(_userapiurl+"fetch?role=user").then((response)=>{
           // const responseData=response.data;
            //console.log(responseData);
            setUserDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    const manageUserStatus=(_id,s)=>{
        //alert(_id+"----"+s);
        var updateDetails;
        if(s=="verify")
        {
        updateDetails={"condition":{"_id":_id},"set":{"status":1}};
         axios.patch(_userapiurl+"update",updateDetails).then((result)=>{
            window.location.reload();
         })
        }
        else if(s=="block")
        {
        updateDetails={"condition":{"_id":_id},"set":{"status":0}};
         axios.patch(_userapiurl+"update",updateDetails).then((result)=>{
            window.location.reload();
         })
        }
        else
        {
         axios.delete(_userapiurl+"delete/"+_id).then((result)=>{
            window.location.reload();
         })
        }
    }

    return(
        <div class="Manageuser_section layout" >
           <div class="container" >
            <div class="row" >
                <div class="col-lg-12" >
<center>
<h1 style={{fontSize:'36px',fontWeight:'bold',}} >View & Manage User Details.</h1>
<table class="table table-bordered" >
<tr>
<th>UserID</th>
<th>Name</th>
<th>Email</th>
<th>Password</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th> 
<th>Status</th>
<th>Action</th>
</tr>
{
    userDetails.map((row)=>(
        <tr>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.password}</td>
            <td>{row.mobile}</td>
            <td>{row.address}</td>
            <td>{row.city}</td>
            <td>{row.gender}</td>
            <td>{row.info}</td>
            <td>
            {row.status == 0 &&
                <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
            }
            {row.status == 1 &&
                <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
            }
          </td>
            <td><a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete User</a></td>
        </tr>
    ))
}
</table>
</center>
                </div>
            </div>
           </div>
        </div>
    );

}

export default Manageusers;