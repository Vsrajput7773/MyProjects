import './Contact.css';
 
function Contact()
{
 return(
        <div>
     <div class="about">
         <div class="container ">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>contact page</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                     <a class="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                  </div>
               </div>
            </div>
         </div>
         <div class="col-md-6" id="bg">

                        <center>
                          <h1>Contact us</h1>
                          <form class="formdown">
                           <label class="fontw">Name: </label>
                           <input placeholder='ENTER NAME'></input>
                           <br/><br/>


                           <label class="fontw">Email: </label>
                           <input placeholder='Enter Email'></input>
                           <br/><br/>

                           
                           <label class="fontw">Contact: </label>
                           <input placeholder='Enter  Password'></input>
                           <br/><br/>


                           <label class="fontw">Message: </label>
                           <textarea placeholder='Enter Message'></textarea>
                           <br/><br/>

                           <button  class="fontw">Submit</button>
                          </form>
                        </center>
                          <br/><br/>
                          </div>
      </div>
    
    {/* content end */}


        </div>
    );
}
export default Contact;