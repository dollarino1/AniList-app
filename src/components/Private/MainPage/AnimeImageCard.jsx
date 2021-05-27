import React from 'react'

const AnimeImageCard = (props) => {
    const anime = props.anime
    return (
        <div className='mainpage__imagecard'>
            <img src={anime.coverImage.extraLarge}/>
            <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
        </div>
    )
}

export default AnimeImageCard
