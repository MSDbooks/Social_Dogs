import React from 'react'
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import dogs from './../assets/dogs.svg';
import { UserContext } from '../UserContext';


const Header = () => {
    const {data } = React.useContext(UserContext);
    
    return (
        <div className={styles.header}> 
            <nav className={`${styles.nav} container`}>
                <Link to='/'>
                    <img src={dogs} alt='Logo'/>
                </Link>
                {data 
                    ? (<Link className={styles.login} to='/login'>
                        {data.nome}
                    </Link>)
                    :(<Link className={styles.login} to='/login'>
                        Login/Criar
                    </Link>
                )}
                
            </nav>
        </div>   
    )
};
export default Header;