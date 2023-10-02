import React from 'react';
import {useState} from 'react';
import { Validation } from "../Validation/Validation.js";
import styles from './StyledForm.module.css';



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
      const { email, password } = userData;
      login(userData); 
  }

    return (
        <div className={styles.FormContainer}> 
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className={styles.StyledTitle}>Sign in to peep</h1> 
              <label htmlFor='email'>Email:</label>
              <input className={styles.StyledInput}
                type='text'
                name='email'
                value={userData.email}
                onChange={handleChange}
              />
              <div>
                <span className={styles.StyledErrors}>{errors.email}</span> 
              </div>
    
              <label htmlFor='password'>Password:</label>
              <input className={styles.StyledInput}
                type='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
              <div>
                <span className={styles.StyledErrors}>{errors.password}</span> 
              </div>
            </div>
            <div > 
              <button type='submit' className={styles.Button}>Submit</button>
            </div>
          </form>
        </div>
      );
}
