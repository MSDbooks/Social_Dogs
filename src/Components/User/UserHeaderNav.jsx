import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from './../../assets/feed.svg';
import Estatistica from './../../assets/estatisticas.svg';
import Adicionar from './../../assets/adicionar.svg';
import Sair from './../../assets/sair.svg';

const UserHeaderNav = () => {

    const {userLogout} = React.useContext(UserContext);
    return <nav>
        <NavLink to="/conta"><img src={MinhasFotos} alt='Feed'/></NavLink>
        <NavLink to="/conta/estatistica"><img src={Estatistica} alt='stats'/></NavLink>
        <NavLink  to="/conta/postar"><img src={Adicionar} alt='add'/></NavLink>
        <button onClick={userLogout}><img src={Sair} alt='logout'/></button>
    </nav>
}

export default UserHeaderNav
