import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDataThunk } from '../../redux/mainReducer'
import AnimeCard from './MainPage/AnimeCard'

const MainPage = (props) => {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.mainPage.animeData)
    console.log('animes',animes)

    useEffect(() => {
        dispatch(getAnimeDataThunk())
    }, [])
    return (
        <div>
            {animes.map(anime => 
                <AnimeCard anime={anime}/>
            )}
        </div>
    )
}

export default MainPage
