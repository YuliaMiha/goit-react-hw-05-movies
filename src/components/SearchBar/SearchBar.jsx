import { useState } from "react";
import PropTypes from "propTypes";


export const SearchBar = ({onSubmit}) => {
    const [form, setForm] = useState('');

    const handleChangeForm = e => {
        const {value} = e.target;
        setForm(value);
    }

 return(
    <form>
        <div>

        </div>
    </form>
 )
 }
 SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }