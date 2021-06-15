import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import exitImg from './../../images/exit_to_app.svg'
import accountImg from './../../images/account_circle.svg'
import bookmark from './../../images/bookmark.svg'
import app from '../..'
import { LISTPAGE_ROUTE, MAINPAGE_ROUTE, PROFILE_ROUTE } from '../../utils/consts'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux'
import { animeAPI } from '../../api/api'
import { useState } from 'react'
import axios from 'axios'

const Header = () => {
    const [animes, setAnimes] = useState([])
    const [value, setValue] = useState('');

    // const getAnimebySearch = async (search) => {
    //     const query = `
    //         query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    //             Page(page: $page, perPage: $perPage) {
    //                 pageInfo {
    //                     total
    //                     currentPage
    //                     lastPage
    //                     hasNextPage
    //                     perPage
    //                 }
    //             media(id: $id, type: ANIME, search: $search) {
    //                 id
    //                 title {
    //                     romaji
    //                     english
    //                 }
    //                 coverImage {
    //                     extraLarge
    //                 }
    //                 status
    //                 episodes
    //                 season
    //                 startDate {
    //                     year
    //                     month
    //                     day
    //                 }
    //             }

    //         }
    //         }`;
    //     let variables = {
    //         search: search,
    //         page: 1,
    //         perPage: 5,
    //     };
    //     const headers = {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //     };
    //     return await axios.post(`https://graphql.anilist.co`, {
    //         query,
    //         variables,
    //         headers
    //     }).then(response => {
    //         console.log('search response entry', response.data.data.Page)
    //         setAnimes(response.data.data.Page)
    //     }).catch((err) => console.log(err.message))
    // }
    // useEffect(() => {
    //     getAnimebySearch(value)
    // }, [value])
    // console.log(animes)
    return (
        <header>
            <NavLink to={MAINPAGE_ROUTE}><img src={logo} alt="logo" /></NavLink>
            <form className='search__form'>
                <input type='text' onChange={e => setValue(e.target.value)}></input>
                <ul className='autocomplete'>
                    {/* {animes.map(anime => 
                    <li className='autocomplete__item'>{anime.title.english}</li>
                    )} */}
                    
                </ul>
            </form>
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
