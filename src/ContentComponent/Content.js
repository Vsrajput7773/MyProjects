import './Content.css';

function Content()
{
    return(
        <div>
            {/* content start */}
     <div class="about">
         <div class="container ">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>Home page</h2>
                     <br></br>
                     <p><h3>Hello Friends ,
                                                Welcome to Event.com 
                        we are the best Event planer and decorater.
                        </h3> </p>
                     <a class="read_more" href="/ReadMore"> Read More</a>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                     <figure><img src="assets/images/b1.jpeg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
    {/* content end */}


        </div>
    );
}
export default Content;