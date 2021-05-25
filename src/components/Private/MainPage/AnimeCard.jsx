import React from 'react'

const AnimeCard = (props) => {
    const anime = props.anime
    return (
        <div className='card'>
            <div className="card__left">
                <img src={anime.attributes.posterImage.small}/>
                <span>{anime.attributes.endDate}</span>
                <span>{anime.attributes.status}</span>
                <span>Rating: {anime.attributes.averageRating}</span>
                <span>Episodes: {anime.attributes.episodeCount}</span>
            </div>
            <div className='card__right'>
                <h2>{anime.attributes.canonicalTitle}</h2>
                <p>{anime.attributes.description}</p>
            </div>
        </div>
    )
}

export default AnimeCard
