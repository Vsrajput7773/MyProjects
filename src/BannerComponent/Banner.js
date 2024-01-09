import './Banner.css';
import { useState , useEffect } from 'react';

function Banner()
{
   const [ BannerContent , setBannerContent ] = useState();
   useEffect(()=>{
      setInterval(()=>{
         if(localStorage.getItem('role')=='admin' || (localStorage.getItem('role')=='user') )
         {
          setBannerContent()
         }
         else
         {
          setBannerContent ( 
            <section class="banner_main">
             <div class="container">
                <div class="row">
                   <div class="col-md-8">
                      <div class="text-bg">
                         <h1> <span class="blodark"> Postkarde </span> <br/>.com 2023</h1>
                         <p>We are having a Online Ecommerce Website</p>
                         <a class="read_more" href="#">Shop now</a>
                      </div>
                   </div>
                   <div class="col-md-4">
                      <div class="ban_img">
                         <figure><img src="assets/images/eban.jpg"/></figure>
                      </div>
                   </div>
                </div>
          {/* end banner */}

             </div>
          </section>
     )
         }  
      },2000);
   },[]);

    return(
      <diV>

      {BannerContent}
      </diV>

          );
}
export default Banner;