import './Header.css';
import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
import Authentication from '../AuthenticationComponent/Authentication';

function Header()
{
   const [ HeaderContent , setHeaderContent ] = useState();
   const [ trackemail , setTrackEmail ] = useState(localStorage.getItem("email"));

   useEffect(()=>{
      setInterval(()=>{
         if(localStorage.getItem("role")=="admin")
         {
          setHeaderContent(<div>
           <div class="header_bottom">
            <div class="container">
              <div class="row">
                 <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <nav class="navigation navbar navbar-expand-md navbar-dark ">
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse" id="navbarsExample04">
                          <ul class="navbar-nav mr-auto">
                             <li class="nav-item active">
                                <a class="nav-link"><Link to="/admin">Admin Home</Link></a>
                             </li>
                             <li class="nav-item">
                                <a class="nav-link"><Link to="/manageusers">manage users</Link></a>
                             </li>
                             <li class="nav-item">
                                <a class="nav-link"><Link to="/addcategory">Add Category</Link></a>
                             </li>
                             <li class="nav-item">
                                <a class="nav-link"><Link to="/addsubcategory">Add Sub Category</Link></a>
                             </li>
                             <li class="nav-item">
                                <a class="nav-link"><Link to="/viewproduct">Show Product</Link></a>
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
                 <div class="col-md-4">
                  <div class="search">
                       <form action="/action_page.php">
                        <input class="form_sea" type="text" placeholder="Search" name="search"/>
                        <button type="submit" class="seach_icon"><i class="fa fa-search"></i></button>
                        <p class="contentleft">Welcome : {trackemail}</p>
                       </form>
          </div>
          </div>
              </div>
           </div>
        </div>
            </div>)
         }
         else if(localStorage.getItem("role")=="user")
         {
          setHeaderContent(<div>
           <div class="header_bottom">
           <div class="container">
              <div class="row">
                 <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <nav class="navigation navbar navbar-expand-md navbar-dark ">
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse" id="navbarsExample04">
                          <ul class="navbar-nav mr-auto">
                             <li class="nav-item active">
                                <a class="nav-link"><Link to="/User">User Home</Link></a>
                             </li>
                             <li class="nav-item active">
                                <a class="nav-link"><Link to="/searchproduct">Search Product</Link></a>
                             </li>
                             <li class="nav-item active">
                                <a class="nav-link"><Link to="/addproduct">Add Product</Link></a>
                             </li>
                             <li class="nav-item active">
                                <a class="nav-link"><Link to="/epuser">Edit Profile</Link></a>
                             </li>
                             <li class="nav-item">
                                <a class="nav-link"><Link to="/logout">Logout</Link></a>
                             </li>
                          </ul>
                       </div>
                    </nav>
                 </div>
                 <div class="col-md-4">
                    <div class="search">
                       <form action="/action_page.php">
                          <input class="form_sea" type="text" placeholder="Search" name="search"/>
                          <button type="submit" class="seach_icon"><i class="fa fa-search"></i></button>
                          <p class="contentleft">Welcome : {trackemail}</p>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </div>
          </div>)
         }
         else
         {
          setHeaderContent(<div>
            <div class="header">
        <header>
         {/* header inner */}
        <div class="header_top d_none1">
           <div class="container">
              <div class="row">
                 <div class="col-md-4">
                    <ul class="conta_icon ">
                       <li><a href="#"><img src="assets/images/call.png" alt="#"/>Call us: 0126 - 922 - 0162</a> </li>
                    </ul>
                 </div>
                 <div class="col-md-4">
                    <ul class="social_icon">
                       <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                       </li>
                       <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                       <li> <a href="#"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                       <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                 </div>
                 <div class="col-md-4">
                    <div class="se_fonr1">
                       <form action="#" >
                          <div class="select-box">
                             <label for="select-box1" class="label select-box1"><span class="label-desc">English</span> </label>
                             <select id="select-box1" class="select">
                                <option value="Choice 1">English</option>
                                <option value="Choice 1">Falkla</option>
                                <option value="Choice 2">Germa</option>
                                <option value="Choice 3">Neverl</option>
                             </select>
                          </div>
                       </form>
                       <span class="time_o"> Open hour: 8.00 - 18.00</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div class="header_midil">
           <div class="container">
              <div class="row d_flex">
                 <div class="col-md-4">
                    <ul class="conta_icon d_none1">
                       <li><a href="#"><img src="assets/images/email.png" alt="#"/> demo@gmail.com</a> </li>
                    </ul>
                 </div>
                 <div class="col-md-4">
                    <a class="logo" href="#"><img src="assets/images/logo1.png" height="100" width="150"/></a>
                 </div>
                 <div class="col-md-4">
                    <ul class="right_icon d_none1">
                       <li><a href="#"><img src="assets/images/shopping.png" alt="#"/></a> </li>
                       <a href="#" class="order">Order Now</a> 
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div class="header_bottom">
           <div class="container">
              <div class="row">
                 <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
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
                    </nav>
                 </div>
                 <div class="col-md-4">
                    <div class="search">
                       <form action="/action_page.php">
                          <input class="form_sea" type="text" placeholder="Search" name="search"/>
                          <button type="submit" class="seach_icon"><i class="fa fa-search"></i></button>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </header>
      {/* end header inner */}
      {/* end header */}
       </div>
      </div>)  
         }
      },2000);
   },[]);
    return(
      <div>
      <Authentication />         
      { HeaderContent }
     </div>
    );
}

export default Header;