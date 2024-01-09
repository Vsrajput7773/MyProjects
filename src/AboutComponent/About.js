import './About.css';

function About()
{
    return(
        <div class="About">
<about>
   {/* <div>
        <div class="blue_bg">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>About Content</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div> */}  
   <div class="container" >
      <div class="row" >
         <div class="col-md-12 col-lg-12" >
            <h1 style={{fontSize:"35px", fontWeight:"bold", textAlign:"center", color:"red"}}>About Page</h1>
            {/*<img src="assets/images/about_selling.jpg" />*/}
         </div>
            <div class="col-md-6">
            <img src="assets/images/about1.jpg" height="" width="100%" />
            </div>
            <div class="col-md-6 aboutj">
               <p class="font">We aim to offer our customers a variety of the latest [PRODUCTS CATEGORY NAME]. We’ve come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.We always keep an eye on the latest trends in [PRODUCTS CATEGORY NAME] and put our customers’ 
               wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of the [PRODUCTS CATEGORY NAME] industry.The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
            </div>
         </div>     
     </div>
</about>
</div>
    );
}
export default About;