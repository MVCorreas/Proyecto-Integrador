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
        login(userData); 
    }

    return (
        <div className={styles.FormContainer}> {/* Use styles.FormContainer */}
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className={styles.StyledTitle}>Sign in to peep</h1> {/* Use styles.StyledTitle */}
              <label htmlFor='email'>Email:</label>
              <input className={styles.StyledInput}
                type='text'
                name='email'
                value={userData.email}
                onChange={handleChange}
              />
              <div>
                <span className={styles.StyledErrors}>{errors.email}</span> {/* Use styles.StyledErrors */}
              </div>
    
              <label htmlFor='password'>Password:</label>
              <input className={styles.StyledInput}
                type='password'
                name='password'
                value={userData.password}
                onChange={handleChange}
              />
              <div>
                <span className={styles.StyledErrors}>{errors.password}</span> {/* Use styles.StyledErrors */}
              </div>
            </div>
            <div className={styles.Button}> {/* Use styles.Button */}
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      );
}
