import './Addcategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../ApiUrl';

function Addcategory()
{
    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [output , setOutput] = useState();
    
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_categoryapiurl+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("Category Added Successfully....");
      });
    }

    return(
    <div class="Add_category layout">
       <div class="container">
             <div class="row">
                <div class="col-lg-12">
<h1>Add Category</h1>
<font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Category Name:
<input type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Category" />

</form> 
<br/>               
                </div>
             </div>
       </div>
    </div>
    );
}

export default Addcategory;
