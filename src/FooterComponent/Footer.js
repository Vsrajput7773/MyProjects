import './Footer.css';
import { useState , useEffect } from 'react';

function Footer()
{
   const [ FooterContent , setFooterContent ] =useState();

useEffect(()=>{
   setInterval(()=>{
      if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
      {
         setFooterContent();
      }
      else
      {
         setFooterContent(
            
         <div class="contact">
         {/*  footer */}

            <div class="container">
               <div class="row">
                  <div class="col-sm-12">
                     <div class="ru_bg">
                        <div class="row">
                           <div class="col-md-3">
                              <a href="index.html"> <img class="logo_fooetr" src="assets/images/b3.jpeg" alt="" /></a>
                           </div>
                           <div class="col-md-9">
                              <ul class="lacation">
                                 <li><i class="fa fa-map-marker" aria-hidden="true"></i> Ujjain ,MP </li>
                                 <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i> G(+91) 9755497942</li>
                                 <li><i class="fa fa-envelope" aria-hidden="true"></i> Event123@gmail.com</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* footer end */}
         </div>
         );
      }
   },2000);
},[]);

    return( 
        <div>
      {FooterContent}
         {/*  copy right start*/}
         <footer>
            <div class="footer">
               <div class="copyright">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <p>©2023-24 All Rights Reserved. <a href="assets/https://html.design/">Decoration & Services</a></p>
                        </div>
                     </div>
                  </div>
               </div>
         {/*copyright  end*/}

            </div>
         </footer>
         </div>
    )
}

export default Footer;
