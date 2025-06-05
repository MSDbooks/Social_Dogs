import './../../App.css';
import styles from './LoginForm.module.css';
import stylesBtn from './../Forms/Button.module.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import {UserContext} from '../../UserContext';
import {Error} from './../Helper/Error';


const LoginForm = () => {
    const username = useForm('email');
    const password = useForm();
    const {userLogin, error, loading} = React.useContext(UserContext);
    
   
    async function handleSubmit(event){
        event.preventDefault();

       //if(username.validate() && password.validate()){
        userLogin(username.value, password.value)        
           
     //   }
    }

    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>
            <form 
                className={styles.form}
                onSubmit={handleSubmit}> 
                <section 
                    style={{
                        display:'flex', 
                        flexDirection:'column',  
                        alignItems: 'flex-start'}}>
                <Input 
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input 
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (<Button disabled>Carregando...</Button>)
                         : (<Button>Entrar</Button>)}
                
                <Error error={error}/>
                </section>
            </form>
            <Link className={styles.perdeu} to='/login/perdeu'>
                Perdeu a senha?
            </Link>
            <div className={styles.cadastro}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <p>Aida não possui conta? Cadastre-se aqui.</p>
            </div>
            <Link className={styles.buttonCriar} to="/login/criar">
                Cadastro
            </Link>   
        </section>
    )
};
export default LoginForm;