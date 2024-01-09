import './Header.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Authentication from '../AuthenticationComponent/Authentication';
function Header() 
{
   const [HeaderContent, setHeaderContent] = useState();
   const [trackemail ,setTrackEmail ]= useState(localStorage.getItem("email"));
   
   useEffect(() => {
      setInterval(() => {
         if (localStorage.getItem('role') == "admin") 
         {
            setHeaderContent(
               <div class="header">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                           <div class="center-desk">
                              <div class="logo">
                                 {/* <a style={{backgroundColor:"red"}}>DECORATIONS.COM</a>
                            */}
                                 <a><img class="" src="assets/images/logo1.png" width={100}></img></a>
                              </div>
                           </div>
                        </div>
                     </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
               <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                           <a class="nav-link"><Link to="/admin">ADMIN HOME</Link></a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/manageusers">MANAGEUSERS</Link></a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/addcategory">Add Category</Link></a>
                        </li>
                        
                        
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/addsubcategory">Add Subcategory</Link></a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/viewProduct">Show Product</Link></a>
                        </li>
                        
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/epadmin">Edit Profile</Link></a>
                        </li>
                       
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/logout">Logout</Link></a>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <p class="contentleft">Welcome:{trackemail}</p>
            </div>
            </div>
            </div>

            )
         }
         else if (localStorage.getItem('role') == "user") {

            setHeaderContent(
               <div class="header">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                           <div class="center-desk">
                              <div class="logo">
                                 {/* <a style={{backgroundColor:"red"}}>DECORATIONS.COM</a>
                            */}
                                 <a><img class="" src="assets/images/logo1.png" width={100}></img></a>
                              </div>
                           </div>
                        </div>
                     </div>
                     
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">

               <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                     <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                           <a class="nav-link"><Link to="/user">User Home</Link></a>
                        </li>
                        
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/searchproduct">search Event</Link></a>
                        </li>
                        
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/addproduct">Add Product</Link></a>
                        </li>
                        
                        
                        <li class="nav-item">
                           <a class="nav-link"><Link to="/epuser">Edit Profile</Link></a>
                        </li>
                       

                        <li class="nav-item">
                           <a class="nav-link"><Link to="/logout">Logout</Link></a>
                        </li>
                     </ul>
                  </div>
                  <ul class="search">
                     <li><a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                  </ul>
               </nav>
            </div>
            <p class="contentleft">Welcome:{trackemail}</p>

            </div>
            </div>
            </div>
            )
         }
         else {
            setHeaderContent(
            <div>
               <div>
                  {/* header */}
                  {/* header inner */}
                  <div class="header">
                     <div class="container">
                        <div class="row">
                           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                              <div class="full">
                                 <div class="center-desk">
                                    <div class="logo">
                                       {/* <a style={{backgroundColor:"red"}}>DECORATIONS.COM</a>
                                  */}
                                       <a><img class="" src="assets/images/logo1.png" width={100}></img></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                              <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                 </button>
                                 <div class="collapse navbar-collapse" id="navbarsExample04">
                                    <ul class="navbar-nav mr-auto">
                                       <li class="nav-item active">
                                          <a class="nav-link"><Link to="/">Home</Link></a>
                                       </li>
                                       <li class="nav-item">
                                          <a class="nav-link"><Link to="/about">About</Link></a>
                                       </li>
                                       <li class="nav-item">
                                          <a class="nav-link"><Link to="/contact">Contact</Link></a>
                                       </li>
                                       <li class="nav-item">
                                          <a class="nav-link"><Link to="/service">Service</Link></a>
                                       </li>
                                       <li class="nav-item">
                                          <a class="nav-link"><Link to="/register">Register</Link></a>
                                       </li>
                                       <li class="nav-item">
                                          <a class="nav-link"><Link to="/login">Login</Link></a>
                                       </li>
                                    </ul>
                                 </div>
                                 <ul class="search">
                                    <li><a href="Javascript:void(0)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* end header inner */}
                  {/* end header */}
               </div>
               <div>
                  {/* banner */}
                  <section class="banner_main">
                     <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
                        <ol class="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <div class="container">
                                 <div class="carousel-caption  banner_po">
                                    <div class="row">
                                       <div class="col-lg-8 col-md-9 ">
                                          <div class="build_box">
                                             <h1>Lighting &<span class="orang">Wedding Tent Decorations Services</span></h1>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                             <a class="read_more quote_btn" href="Javascript:void(0)" role="button">Get A Quote</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="carousel-caption banner_po">
                                    <div class="row">
                                       <div class="col-lg-8 col-md-9 ">
                                          <div class="build_box">
                                             <h1>Lighting &<span class="orang">Wedding Tent Decorations Services</span></h1>
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                             <a class="read_more quote_btn" href="Javascript:void(0)" role="button">Get A Quote</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="carousel-item">
                              <div class="container">
                                 <div class="carousel-caption banner_po">
                                    <div class="row">
                                       <div class="col-lg-8 col-md-9 ">
                                          <div class="build_box">
                                             <h1>Lighting &<span class="orang">Wedding Tent Decorations Services</span></h1>
                                             <p>Hello Friends,
                                                WelCome to  Event.com 
                                             </p>
                                             <a class="read_more quote_btn" href="Javascript:void(0)" role="button">Get A Quote</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                           <i class="fa fa-angle-left" aria-hidden="true"></i>
                           <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                           <i class="fa fa-angle-right" aria-hidden="true"></i>
                           <span class="sr-only">Next</span>
                        </a>
                     </div>
                  </section>
               </div>
            {/* end banner */}

            </div>

            );
         }
      },1000);
   },[]);
   return (
      <div>
         <header class="full_bg">
            <Authentication/>
            {HeaderContent}
         </header>
      </div>
   );
}
export default Header;