import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { ANIMEPAGE_ROUTE } from '../../../utils/consts'
import AnimePage from '../AnimePage'

const AnimeCard = ({ anime }) => {
    return (
        <li className='mainpage__imagecard'>
            <NavLink to={{pathname: ANIMEPAGE_ROUTE + anime.id, userProps: {anime: anime}}}>
                <img src={anime.coverImage.extraLarge}/>
            </NavLink>
            <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
        </li>
    )
}

export default AnimeCard
