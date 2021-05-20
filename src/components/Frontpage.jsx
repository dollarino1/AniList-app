import React from 'react'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';
import mainImg from './../images/LoginMainImage.png'

const FrontPage = () => {
    return <div className="frontpage">
        <div className="frontpage__auth">
            <NavLink to={LOGIN_ROUTE}><button className="frontpage__login">LOGIN</button></NavLink>
            <NavLink to={SIGNUP_ROUTE}><button className="frontpage__reg">SIGN UP</button></NavLink>
        </div>
        <div className="frontpage__intro">
            <img src={mainImg} alt="mainImg" />
            <div className="frontpage__title">
                <h1>Your Anime List</h1>
                <hr />
                <h3>Simple list of your favourite animes</h3>
            </div>
        </div>
        
    </div>
}

export default FrontPage;