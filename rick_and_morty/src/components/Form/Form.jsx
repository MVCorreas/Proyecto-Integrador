import React from 'react';
import {useState} from 'react';
import { Validation } from "../Validation/Validation.js";
//import styles from "../Validation/Validation.modules.css";


export const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

   
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, setErrors, errors);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData); 
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' value={userData.email} onChange={handleChange} />
            <span >{errors.email}</span>
           
        </div>
        <div>
        
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' value={userData.password} onChange={handleChange}/>
            <span >{errors.password}</span>
           
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
