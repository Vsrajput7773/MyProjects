import './About.css';
function About() {
   return (
      <div>
         {/* about */}
         <div class="about">
            <div class="container ">
               <div class="row d_flex">
                  <div class="col-md-5">
                     <div class="titlepage">
                        <h2>About Our Company</h2>
                        <span>Hello and Welcome to Event.com
                           Best Event planer and Decoration services  </span>
                        <a class="read_more" href="/ReadMore"> Read More</a>
                     </div>
                  </div>
                  <div class="col-md-7">
                     <div class="about_img">
                        <figure><img src="assets/images/b1.jpeg" alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* end about */}
      </div>
   );
}
export default About;
