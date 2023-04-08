import React from "react";
import "./Header.css"
import logo from './imgs/logo.png'
import user from './imgs/user.jpg'


// eslint-disable-next-line import/no-anonymous-default-export
export default({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="https://netflix.com">
          <img src={logo} alt="Logo"/>
        </a>
      </div>
      <div className="header--user">
        <a href="https://instagram.com/danzcastro">
          <img src={user} alt="Usuário" />
        </a>
      </div>
    </header>
  );
}