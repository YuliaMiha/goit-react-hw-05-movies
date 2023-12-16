import { useState } from "react";
import PropTypes from 'prop-types';



export const SearchBar = ({onSubmit}) => {
    const [form, setForm] = useState('');

    const handleChangeForm = e => {
        const { value } = e.target;
        setForm(value);
      }
        const reset = () => {
            setForm('');
          };
    
          const resetForm = e => {
            e.preventDefault();
            if (form.trim() !== '') {
              onSubmit(form.trim()); 
              reset();
            }
          };
    

 return(
    <form className="row g-3 m-3" onSubmit={resetForm}>
    <div className="col-auto">
      <label  className="visually-hidden">Email</label>
      <input type="text" value={form} onChange={handleChangeForm}  className="form-control-plaintext border "/>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-3">Search</button>
    </div>
  </form>
 )
 }
 SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }