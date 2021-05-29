import React from 'react'

const AnimeCard = (props) => {
    const anime = props.anime
    return (
        <li className='mainpage__imagecard'>
            <img src={anime.coverImage.extraLarge}/>
            <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
        </li>
    )
}

export default AnimeCard
