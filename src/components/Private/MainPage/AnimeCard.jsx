import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { ANIMEPAGE_ROUTE } from '../../../utils/consts'
import AnimePage from '../AnimePage'

const AnimeCard = ({ anime }) => {
    // <NavLink to={{pathname: ANIMEPAGE_ROUTE + anime.id, userProps: {anime: anime}}} >            </NavLink>
    return (
        <li className='mainpage__imagecard'>
                <img src={anime.coverImage.extraLarge}/>
            <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
        </li>
    )
}

export default AnimeCard
