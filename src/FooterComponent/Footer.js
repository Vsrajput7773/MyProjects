import './Footer.css';
import { useState , useEffect } from 'react';

function Footer()
{

   const [ FooterContent , setFooterContent ] = useState();

   useEffect(()=>{
      setInterval(()=>{
         if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
         {
          setFooterContent()
         }
         else
         {
          setFooterContent(<div class="footer">
            <div class="container">
          <div class="row">
             <div class="col-md-3">
                <div class="inror_box">
                   <h3>INFORMATION </h3>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                </div>
             </div>
             <div class="col-md-3">
                <div class="inror_box">
                   <h3>MY ACCOUNT </h3>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                </div>
             </div>
             <div class="col-md-3">
                <div class="inror_box">
                   <h3>ABOUT  </h3>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                </div>
             </div>
             <div class="col-md-3">
                <div class="inror_box">
                   <h3>CONTACTS  </h3>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                </div>
             </div>
          </div>
       </div>
       </div>);
         }
      },2000);
   },[]);

    return(    
      <div>
        {/*  footer */}
        {FooterContent}
              <div class="copyright">
                 <div class="container">
                    <div class="row">
                       <div class="col-md-12">
                          <p>© 2023-24 All Rights Reserved. Design by<a href="#">Postkarde.com</a></p>
                       </div>
                    </div>
                 </div>
              </div>
           {/* end footer */}
        </div>
        );
}

export default Footer;