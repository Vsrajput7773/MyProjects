import './Showproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _productapiurl, _subcategoryapiurl } from '../ApiUrl';
import { Link , useParams } from 'react-router-dom';

function Showproduct()
{
  const [ spDetails , setShowProductDetails ] = useState([]);
  const [ catnm , setCateName ] = useState();
  const params = useParams();

  useEffect(()=>{
    axios.get(_productapiurl+"fetch?subcatname="+params.subcatname).then((result)=>{
        console.log(result.data);
        setShowProductDetails(result.data);
    });
  },[]);

    return(
    <div class="ShowProduct layout" >
        <div class="container" >
            <div class="row" >
                <div class="col-lg-12" >
                <h1>Product List!!!</h1>
                <p>
                Keep smiling, because life is a beautiful thing and there's so much to smile about. - ...
Life is a long lesson in humility. - ...
In three words I can sum up everything I've learned about life: it goes on. - ...
Love the life you live. ...
Life is either a daring adventure or nothing at all.</p>
                <center>
                  <div id="categorymain" >
                    {spDetails.map(
                        ele => {
                        const image = '/assets/uploads/producticons/'+ele.producticonname;
                        const path= '/viewnext/'+ele.catname+'/'+ele.subcatname+'/'+ele.productname;
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

export default Showproduct;