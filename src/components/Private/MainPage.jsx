import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingAnimeDataThunk } from '../../redux/mainReducer'
import AnimeCard from './MainPage/AnimeCard'
import AnimeImageCard from './MainPage/AnimeImageCard'

const MainPage = (props) => {
    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    console.log('animes',trendingAnimes)

    useEffect(() => {
        dispatch(getTrendingAnimeDataThunk())
    }, [])

    return (
        <div className='mainpage'>
            <span className='mainpage__title'>Trending Now</span>
            <div className='mainpage__card'>
                {trendingAnimes.map(anime => 
                    <AnimeImageCard anime={anime}/>
                )}
            </div>

        </div>
    )
}

export default MainPage
