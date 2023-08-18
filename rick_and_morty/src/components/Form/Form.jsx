import React from 'react';
import {useState} from 'react';
import { Validation } from "../Validation/Validation.js";
import {FormContainer, Button, StyledErrors, StyledTitle} from './StyledForm.js';



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
    <FormContainer>
    <form onSubmit={handleSubmit}>
        <div>
            <StyledTitle>Sing in to peep</StyledTitle>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' value={userData.email} onChange={handleChange} />
            <div>
            <StyledErrors><span >{errors.email}</span></StyledErrors>
            </div>
        
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' value={userData.password} onChange={handleChange}/>
            <div>
            <StyledErrors><span >{errors.password}</span></StyledErrors>
            </div>
           
        </div>
        <Button>
        <button type='submit'>Submit</button>
        </Button>
    </form>
    </FormContainer>
)
}
