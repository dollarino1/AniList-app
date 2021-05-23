import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeData } from '../../api/api'
import AnimeCard from './MainPage/AnimeCard'

const MainPage = (props) => {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.animes.data)

    useEffect(() => {
        dispatch(getAnimeData())
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
