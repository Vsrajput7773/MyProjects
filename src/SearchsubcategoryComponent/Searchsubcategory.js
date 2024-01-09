import './Searchsubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _subcategoryapiurl } from '../ApiUrl';
import { Link , useParams } from 'react-router-dom';

function Searchsubcategory()
{
  const [ scDetails , setSubCategoryDetails ] = useState([]);
  const params = useParams();

  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catname="+params.catname).then((result)=>{
        //console.log(result.data);
        setSubCategoryDetails(result.data);
    });
  },[]);

    return(
    <div class="Searchsubcategory layout" >
        <div class="container" >
            <div class="row" >
                <div class="col-lg-12" >
                <h1>SubCategory List!!!</h1>
                <center>
                  <div id="categorymain" >
                    {scDetails.map(
                        ele => {
                        const image = '/assets/uploads/subcaticons/'+ele.subcaticonname;
                        const path= '/viewads/'+ele.catname+'/'+ele.subcatname;
                        return(
                            <Link to={path} >
                            <div class="categorypart">
                                <img src={image} height="120" width="180" alt=''/>
                                <br/>
                                <b style={{"color":"black"}}>{ele.subcatname}</b>
                            
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

export default Searchsubcategory;