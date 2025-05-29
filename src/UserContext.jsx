import React from "react";
import { TOKEN_POST, USER_GET } from "./api/api";

export const UserContext = React.createContext(null);

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

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

    return (
        <UserContext.Provider value={{userLogin, data}}>
            {children}
        </UserContext.Provider>
    )
}

