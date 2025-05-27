import React, { useEffect } from 'react';
import styles from './Input.module.css'

const Input = ({
    label, 
    type, 
    name, 
    value, 
    setValue,
    onChange,
    error,
    validate,
    onBlur}) =>{
    
    useEffect(()=>{
        console.log('valor: ', error)
    })


    return(
        
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            <input 
                id={name} 
                name={name} 
                className={styles.input} 
                type={type}    
                onChange={onChange}
                onBlur={onBlur}

            />
            {error && <p className={styles.error}>{error}</p>}
            </div>
            
    )
};

export default Input;