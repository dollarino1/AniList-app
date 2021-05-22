import React from 'react'
import placeholder from './../../../images/placholder.png'

const AnimeCard = () => {
    return (
        <div className='card'>
            <div className="card__left">
                <img src={placeholder}/>
                <span>Year, genre</span>
            </div>
            <div className='card__right'>
                <h2>Anime title</h2>
                <p>Anime about</p>
            </div>
        </div>
    )
}

export default AnimeCard
