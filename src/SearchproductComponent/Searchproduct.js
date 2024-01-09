import './Searchproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../ApiUrl';
import {Link} from 'react-router-dom';
function Searchproduct()
{
   const [cDetails , setCategoryDetails] = useState([]);

   useEffect(()=>{
       axios.get(_categoryapiurl+"fetch").then((result)=>{
      //   console.log(result.data);
        setCategoryDetails(result.data);
       });
    },[]);
   

    return(
 <div class="plane">
 {/* our plane */}

 <div class="container">
    <div class="row">
       <div class="col-sm-12">
          <div class="titlepage">
             <h1>Category list....</h1>
         <center>
            <div id="categorymain">
               {cDetails.map(
                  ele=>{
                  const image ='/assets/uploads/caticons/'+ele.caticonname;
                  const path= '/viewsubcat/'+ele.catname;
                  return(
                   <Link to ={path}>
               <div class="categorypart">
               <br/>
                  <img src={image} height="100"width="100" alt=""></img>
               <br/>
               <b>{ele.catname}</b>
               </div>
                  </Link>
               )
}
               )}
            </div>
         </center>


          </div>
       </div>
</div>
</div>
</div>
    );
}
export default Searchproduct;
