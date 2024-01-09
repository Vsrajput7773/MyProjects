import './Adminhome.css';
import { useState,useEffect } from 'react';
import Propstest from '../PropstestComponent/Propstest';

function Adminhome()

{
   const [a,setA]=useState("Its Admin of this site");
   const [b,setB]=useState("Manage all Task and opretion's");


    return(
 <div class="plane">
 {/* our plane */}

 <div class="container">
    <div class="row">
       <div class="col-sm-12">
          <div class="titlepage">
             <h2>Welcome to ,Admin panel</h2>
            <Propstest a={a} b={b}/>
          </div>
       </div>
    </div>
</div>
{/* our plane */}
</div>
    );
}
export default Adminhome;
