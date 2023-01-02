import React, { useState } from 'react'
import "./styles.scss";

const initialForm = {
     sitio:"",
    email:"",
    url:"",
    id:null,
}

const CrudForm = () => {
    
const [form, setForm] = useState ({});
     
 const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:e.target.value,
  });
 };

 const handleSubmit = (e) =>{
     e.preventDefault();
     console.log(form)
    }

 const handleReset = (e) =>{
     setForm(initialForm);
 } 
   return (
   
        <div className='cont-form'>
            <form className="form-data" onSubmit={handleSubmit}> 
            <h3>Complete el siguiente formulario</h3>
                <input className= "form-input" type="text" name="sitio" placeholder="Nombre del sitio" onChange={handleChange} value={form.sitio}/>
                <input className= "form-input" type="text" name="email" placeholder="e-mail" onChange={handleChange} value={form.email}/>
                <input className= "form-input" type="text" name="url" placeholder="URL" onChange={handleChange} value={form.url}/>
               <div className='btn-form'>
                <input className= "limpiar" type="reset" value="Limpiar" onClick={handleReset}/>
                <input className= "enviar" type="submit" value="Guardar"/>
              </div>
            </form>
        </div>
   
    )
}

export default CrudForm;