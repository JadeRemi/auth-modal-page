import React, { Component, Fragment } from 'react';
import '../css/Auth.css';

class Auth extends React.Component{
  render(){
    return(
      <div className="auth">
        <AuthLoginHeader title="Вход" />
        <AuthLoginForm />
        <Socials />
      </div>
    )
  }
}


const AuthLoginHeader = props => (
    <h2 className="headerTitle">{props.title}</h2>
);

const AuthLoginForm = props => (
   <div className="loginForm">
     <FormInput description="Имя" placeholder="Введите имя" type="text" />
     <FormInput description="Пароль" placeholder="Введите пароль" type="password"/>
     <FormButton title="Войти"/>
     <LostCreds />
   </div>
);

const FormButton = props => (
  <div className="row loginButton">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const LostCreds = props => (
  <div className="lostCreds">
    <a href="https://google.com">Восстановить пароль</a>
  </div>
);

const Socials = props => (
  <div className="socialsLogin">
    <label>Либо войдите через другой сайт:</label>
    <div className="socialsGroup">
      <Instagram />
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Instagram = props => (
  <a href="https://instagram.com" className="socialsIcon iconInstagram"><i className="fab fa-instagram"></i>{null}</a>
);

const Facebook = props => (
  <a href="https://facebook.com" className="socialsIcon iconFacebook"><i className="fab fa-facebook"></i>{null}</a>
);

const Twitter = props => (
  <a href="https://twitter.com" className="socialsIcon iconTwitter"><i className="fab fa-twitter"></i>{null}</a>
);

const Google = props => (
  <a href="https://google.com" className="socialsIcon iconGoogle"><i className="fab fa-google"></i>{null}</a>
);

export default Auth;
