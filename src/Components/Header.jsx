import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import dogs from './../assets/dogs.svg';
import user from './../assets/usuario.svg';


const Header = () => {
    return (
        <div className={styles.header}> 
            <nav className={`${styles.nav} container`}>
                <Link to='/'>
                    <img src={dogs} alt='Logo'/>
                </Link>
                <Link className={styles.login} to='/login'>Login/Criar</Link>
            </nav>
        </div>   
    )
};
export default Header;