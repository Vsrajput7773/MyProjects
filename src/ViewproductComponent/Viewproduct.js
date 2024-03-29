import './Viewproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import {_productapiurl } from '../ApiUrl';
import { Link } from 'react-router-dom';

function Viewproduct()
{
  const [ pDetails , setProductDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_productapiurl+"fetch").then((result)=>{
        //console.log(result.data);
        setProductDetails(result.data);
    });
  },[]);

    return(
    <div class="Viewproduct layout" >
        <div class="container" >
            <div class="row" >
                <div class="col-lg-12" >
                <h1>Product List!!!</h1>
                <center>
                  <div id="categorymain" >
                    {pDetails.map(
                        ele => {
                        const image = '/assets/uploads/producticons/'+ele.producticonname;
                        const path= '/viewsubcat/'+ele.catname;
                        return(
                            <Link to={path} >
                            <div class="categorypart">
                                <img src={image} height="120" width="180" alt=''/>
                                <br/>
                                <b style={{"color":"black"}}>{ele.productname}</b>
                            
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
        
        

    );

}

export default Viewproduct;