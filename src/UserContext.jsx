import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext(null);

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate= useNavigate();

    React.useEffect(()=>{
        async function autoLogin(){
            const token = window.localStorage.getItem('token');
            if(token){
                try{    
                    setError(null);
                    setLoading(true);
                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if(!response.ok) throw new Error('Token inválido');
                    getUser(token)
                }catch(error){
                    setError(error.message)
                    userLogout();
                }finally{
                    setLoading(false);
                }
            }
        }autoLogin();
    },[]);

    async function getUser(token){
        const {url,options} = USER_GET(token);
        console.log(url)
        console.log(options)
        const response = await fetch(url,options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password){
        try{
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username,password});
            const tokenRes = await fetch(url, options);
            if(!tokenRes.ok) throw new Erro(`Error: ${tokenRes.statusText}`);
            const tokenObj = await tokenRes.json(); 
            window.localStorage.setItem('token', tokenObj.token);
            await getUser(tokenObj.token);
            navigate('/conta');
        }catch(err){
            setError(err.message);
            setLogin(false);
            set
        }finally{
            setLoading(false);
        }
    }


    async function userLogout(){
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.clear();
        navigate('/login');
    }

    return (
        <UserContext.Provider value={{
                userLogin, 
                data,
                userLogout,
                error,
                loading,
                login
            }}>
            {children}
        </UserContext.Provider>
    )
}

