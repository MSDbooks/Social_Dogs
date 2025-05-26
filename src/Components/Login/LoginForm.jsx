import React from "react";
import { Form, Link } from "react-router-dom";

const LoginForm = () => {
    const [userName, setUserName] = React.useState('');
    const [password, setpassword] = React.useState('');
    return (
        <section>
            <h1>Login</h1>
            <form action=""> 
                <input 
                    type="text"
                    value={userName}
                    onChange={({target})=> setUserName(target.value)}
                />
                <input 
                    type="text"
                    value={password}
                    onChange={({target})=> setpassword(target.value)}
                />
            </form>
            <Link to="/login/criar">
                Cadastro
            </Link>   
        </section>
    )
};
export default LoginForm;