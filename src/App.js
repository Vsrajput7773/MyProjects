//import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Banner from './BannerComponent/Banner';
import Content from './ContentComponent/Content';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login';
import Logout from './LogoutComponent/Logout';
import Footer from './FooterComponent/Footer';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Viewproduct from './ViewproductComponent/Viewproduct';
import Epadmin from './EPAdminComponent/Epadmin.js';
import Userhome from './UserhomeComponent/Userhome';
import Searchproduct from './SearchproductComponent/Searchproduct';
import Searchsubcategory from './SearchsubcategoryComponent/Searchsubcategory';
import Showproduct from './ShowproductComponent/Showproduct';
import Verifyuser from './VerifyuserComponent/Verifyuser';
import Addproduct from './AddproductComponent/Addproduct';
import EPUSER from './EPUSERComponent/Epuser.js';

function App() {
  return (
    <div>
      {/*All content container Start*/}
      {/* header */}
      <Header />
      <Banner />
      <Routes>
      <Route path="/" element={<Content />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/logout" element={<Logout/>} ></Route>
      <Route path="/admin" element={<Adminhome/>} ></Route>
      <Route path="/manageusers" element={<Manageusers/>} ></Route>
      <Route path="/addcategory" element={<Addcategory/>} ></Route>
      <Route path="/addsubcategory" element={<Addsubcategory/>} ></Route>
      <Route path="/viewproduct" element={<Viewproduct/>} ></Route>
      <Route path='/epadmin' element={<Epadmin/>} ></Route>
      <Route path="/user" element={<Userhome/>} ></Route>
      <Route path="/searchproduct" element={<Searchproduct/>} ></Route>
      <Route path="/viewsubcat/:catname" element={<Searchsubcategory/>} ></Route>
      <Route path="/viewads/:catname/:subcatname/" element={<Showproduct/>} ></Route>
      <Route path="/verifyuser/:email" element={<Verifyuser/>} ></Route>
      <Route path="/addproduct" element={<Addproduct/>} ></Route>
      <Route path='/epuser' element={<EPUSER/>} ></Route>
      </Routes>
      <Footer />

{/*All content container end*/}
    </div>
  );
}

export default App;
