
import './Showproduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _productapiurl, _subcategoryapiurl } from '../ApiUrl';
import { Link, useParams } from 'react-router-dom';

function Showproduct() {
    const [spDetails, setShowProductDetails] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(_productapiurl + "fetch?subcatname=" + params.subcatname).then((result) => {
            console.log(result.data);
            setShowProductDetails(result.data);
        });
    }, []);


   return (
      <div>
         {/* about */}
         <div >
            <div class="container ">
               <div class="row d_flex">
                  <div class="col-md-12">
                     <div class="titlepage">
                     <h1>Product List!!!</h1>
                        <p>
                            Keep smiling, because life is a beautiful thing and there's so much to smile about. - ...
                            Life isclass="about" a long lesson in humility. - ...
                            In three words I can sum up everything I've learned about life: it goes on. - ...
                            Love the life you live. ...
                            Life is either a daring adventure or nothing at all.</p>
                            <div>
                            {spDetails.map(
                                    ele => {
                                        const image = '/assets/uploads/producticons/' + ele.producticonname;

                                        return (
                                                <div class="titlepage">
                                                    <img src={image} height="300" width="300" alt='' />
                                                    <br></br>
                                                    {/* &nbsp;&nbsp; */}
                                                    <b style={{ "color": "black" }}>{ele.productname}</b>
                                                <br></br>
                                                    
                                                    <b style={{ "color": "blue" }}>{ele.producttittle}</b>
                                                <br></br>
                                                    
                                                    <b style={{ "color": "green" }}>{ele.productprice}</b>
                                                    <br></br>
                                                <button class="btn btn-success">Booking</button>
                                                </div> 
                                        )
                                    }
                                )}
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Showproduct;

