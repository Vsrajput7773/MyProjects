import './Adminhome.css';
import { useState , useEffect } from 'react';
import Propstest from '../PropstestComponent/Propstest';

function Adminhome()
{
   const [ a , setA ] = useState("Its Admin of this Site");
   const [ b , setB ] = useState("Manage all Task and operation's");


    return(
      <div class="container" >
        <div class="row" >
          <div class="col-lg-12" >
            <h1>Welcome to Postkarde.com , Admin panel</h1>
          <Propstest a={a} b={b}/>
          </div>
        </div>
      </div>
    );
}
export default Adminhome;