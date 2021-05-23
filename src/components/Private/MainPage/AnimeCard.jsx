import React from 'react'
import placeholder from './../../../images/placholder.png'

const AnimeCard = (props) => {
    const anime = props.anime
    return (
        <div className='card'>
            <div className="card__left">
                <img src={placeholder}/>
                <span>{anime.attributes.startDate}</span>
            </div>
            <div className='card__right'>
                <h2>{anime.attributes.titles.en}</h2>
                <p>{anime.attributes.synopsis}</p>
            </div>
        </div>
    )
}

export default AnimeCard
