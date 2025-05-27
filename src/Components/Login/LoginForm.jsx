import React, { useEffect } from "react";
import { Form, Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";

const LoginForm = () => {
    const username = useForm('email');
    const password = useForm();
    useEffect
    (() => {
        password.error
    });
   // console.log(password.validate())
    function handleSubmit(event){

       // console.log(JSON.stringify({username, password}))
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username, password})
        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            console.log(json)
        })

    }

    return (
        <section>
            <h1>Login</h1>
            <form 
                content="" action="" onSubmit={handleSubmit}> 
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
                <Button>
                    Entrar
                </Button>
                </section>
            </form>
            <Link to="/login/criar">
                Cadastro
            </Link>   
        </section>
    )
};
export default LoginForm;