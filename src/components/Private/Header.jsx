import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import exitImg from './../../images/exit_to_app.svg'
import accountImg from './../../images/account_circle.svg'
import bookmark from './../../images/bookmark1.svg'
import app from '../..'
import { LISTPAGE_ROUTE, MAINPAGE_ROUTE, PROFILE_ROUTE } from '../../utils/consts'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeByIdSearch } from '../../redux/mainReducer'
import { useRef } from 'react'
import useOnClickOutside from '../../utils/useOnClickOutside'

const Header = (props) => {
    const dispatch = useDispatch()
    const searchAnimes = useSelector(state => state.mainPage.animeSearchData)
    const ref = useRef();
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false)
    useOnClickOutside(ref, () => setOpen(false));

    const onInputChange = (e) => {
        setValue(e.target.value)
        setOpen(true)
    }
    const onItemClick = () => {
        setOpen(false)
        setValue('')
    }
    useEffect(() => {
        dispatch(getAnimeByIdSearch(value))
    }, [value])
    return (
        <header>
            <NavLink to={MAINPAGE_ROUTE}><img src={logo} alt="logo" /></NavLink>
            <div className='header__right'>
            <form className='search__form'>
                <input value={value} placeholder='  Search anime..' type='text' onChange={onInputChange} onClick={() => setOpen(true)}></input>
                {open 
                ? <ul className='autocomplete' ref={ref}>
                {searchAnimes.map(anime => 
                <NavLink exact to={`/anime-entry/${anime.id}`} key={anime.id}>
                    <li className='autocomplete__item' onClick={onItemClick}>
                        <img src={anime.coverImage.extraLarge} alt='search-info'/>
                        <div className='autocomplete__info'>
                            <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
                            <p>{anime.startDate.year}, {anime.status}, Episodes: {anime.episodes}</p>
                        </div>
                    </li>
                </NavLink>
                )} 
                
                </ul>   
                : null}
                
            </form>
            <div>
                <div className="header__option">
                    <NavLink to={LISTPAGE_ROUTE}><img className="header__img" src={bookmark} alt="bookmark"/></NavLink>
                </div>
                <NavLink to={PROFILE_ROUTE}><img className="header__img" src={accountImg} alt="profile" /></NavLink>
                <button onClick={() => app.auth().signOut()}><img src={exitImg} alt='exit_'/></button>
            </div>
            </div>
            
        </header>
    )
}

export default Header
