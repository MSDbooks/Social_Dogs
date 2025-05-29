import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api/api";

export const UserContext = React.createContext(null);

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

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
        console.log('user: ', json)
    }

    async function userLogin(username, password){
        const {url, options} = TOKEN_POST({username,password});
        const tokenRes = await fetch(url, options);
        const tokenObj = await tokenRes.json(); 
        window.localStorage.setItem('token', tokenObj.token);
        getUser(tokenObj.token);
    }


    async function useerLogout(){
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.clear();
    }

    return (
        <UserContext.Provider value={{
                userLogin, 
                data,
                useerLogout
            }}>
            {children}
        </UserContext.Provider>
    )
}

