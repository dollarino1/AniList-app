import React from 'react'

const AnimeImageCard = (props) => {
    const anime = props.anime
    return (
        <div className='mainpage__imagecard'>
            <img src={anime.attributes.posterImage.small}/>
            <span>{anime.attributes.canonicalTitle}</span>
        </div>
    )
}

export default AnimeImageCard
