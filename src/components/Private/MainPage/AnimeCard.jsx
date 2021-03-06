import React from 'react'

const AnimeCard = ({ anime }) => {
    // <NavLink to={{pathname: ANIMEPAGE_ROUTE + anime.id, userProps: {anime: anime}}} >            </NavLink>
    return (
        <li className='mainpage__imagecard'>
            <img src={anime.coverImage.extraLarge} alt='cover'/>
            <div><span>{anime.title.english ? anime.title.english : anime.title.romaji}</span></div>
        </li>
    )
}

export default AnimeCard
