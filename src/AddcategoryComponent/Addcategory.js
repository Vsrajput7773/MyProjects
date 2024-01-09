import './Addcategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../ApiUrl';

function Addcategory() {
   const [file, setFile] = useState();
   const [catName, setCatName] = useState();
   const [output, setOutput] = useState();

   const handleChange = (event) => {
      setFile(event.target.files[0])
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
         'content-type': 'multipart/form-data'
      };
      // console.log(formData);
      axios.post(_categoryapiurl + "save", formData, config).then((response) => {
         setCatName("");
         setOutput("Category Added Successfully....");

      });
   }

   return (
      <div class="plane">
         {/* our plane */}

         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="titlepage">
                     <h2>Add Category</h2>
                     <br /><br />
                     <font color="blue">{output}</font>
                     <form onSubmit={handleSubmit}>
                        <label>
                           Categoty Name:
                           <input type="text" value={catName}
                              onChange={e => setCatName(e.target.value)}
                           ></input>
                        </label>
                        <br /><br />

                        <label>
                           Category Icon:
                           <input type="file" onChange={handleChange}>
                           </input>
                        </label>
                        <br /><br />

                        <input type="submit" value="Add Category"></input>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* our plane */}
      </div>
   );
}
export default Addcategory;
