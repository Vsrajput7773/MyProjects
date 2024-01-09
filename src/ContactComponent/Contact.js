import './Contact.css';

function Contact()
{
    return(

            <div class="container ">
                  <div class="row">
                     <div class="col-md-6">  
                       <h1>Contact Page</h1>
                       <img src='assets/images/contact.jpg'/>
                          {/*<p>Officiis fugiat modi error rerum, 
                             ex perferendis provident laboriosam ea minima numquam eveniet delectus impedit nemo assumenda. Blanditiis, velit similique? Itaque vel
                             repudiandae consectetur illum veniam incidunt sed assumenda est nulla dolore magni, reiciendis magnam ullam, libero culpa dicta architecto
                             nemo possimus pariatur quasi harum minima maxime omnis. Nulla commodi molestias cupiditate accusamus voluptates hic suscipit similique labore delectus,
                             tempore alias dolorum eius maiores laborum ea, atque libero corrupti rerum dignissimos id velit doloremque ipsum exercitationem!
                             Perspiciatis illo, quisquam iure culpa quibusdam voluptatibus atque eveniet molestiae sit consectetur nesciunt provident tempora 
                            aspernatur harum odio adipisci officiis veniam minima. Eveniet quod fugiat sequi quo ducimus eaque amet explicabo neque deserunt a
                             officia dignissimos temporibus soluta placeat maxime, ipsam, non laborum, modi veritatis! Voluptates hic odit mollitia alias, accusamus
                              itaque odio maxime illum rem et eius laborum sint aliquid neque assumenda officia ipsam ipsum voluptatibus dolorem animi ut! 
    </p>*/}
    <br/>
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
            </div> 
    );
}

export default Contact;