import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import exitImg from './../../images/exit_to_app.svg'
import accountImg from './../../images/account_circle.svg'
import bookmark from './../../images/bookmark.svg'
import app from '../..'
import { LISTPAGE_ROUTE, MAINPAGE_ROUTE, PROFILE_ROUTE } from '../../utils/consts'

const Header = () => {
    return (
        <header>
            <NavLink to={MAINPAGE_ROUTE}><img src={logo} alt="logo" /></NavLink>
            <div>
                <div className="header__option">
                    <NavLink to={LISTPAGE_ROUTE}><img className="header__img" src={bookmark} alt="bookmark"/></NavLink>
                </div>
                <NavLink to={PROFILE_ROUTE}><img className="header__img" src={accountImg} alt="profile" /></NavLink>
                <button onClick={() => app.auth().signOut()}><img src={exitImg} alt='exit_'/></button>
            </div>
        </header>
    )
}

export default Header
