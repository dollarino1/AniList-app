import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularAnimeDataThunk, getSeasonPopularAnimeDataThunk, getTrendingAnimeDataThunk, getUpcomingAnimeDataThunk } from '../../redux/mainReducer'
import TrendingAnimeCard from './MainPage/TrendingAnimeCard'
import PopularAnimeCard from './MainPage/PopularAnimeCard'
import SeasonPopularAnimeCard from './MainPage/SeasonPopularAnimeCard'
import UpcomingAnimeCard from './MainPage/UpcomingAnimeCard'

const MainPage = (props) => {
    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    console.log('animes',trendingAnimes)
    const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)

    useEffect(() => {
        dispatch(getTrendingAnimeDataThunk())
        dispatch(getPopularAnimeDataThunk())
        dispatch(getUpcomingAnimeDataThunk())
        dispatch(getSeasonPopularAnimeDataThunk())
    }, [])

    return (
        <div className='mainpage'>
            <div className='mainpage__trending'>
                <div className='mainpage__heading'>
                    <span className='mainpage__title'>Trending Now</span>
                    <span className='mainpage__view'>View more</span>
                </div>
                <div className='mainpage__card'>
                    {trendingAnimes.map(anime => 
                        <TrendingAnimeCard anime={anime}/>
                    )}
                </div>
            </div>
            
            <div className="mainpage__seasonPopular">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>Popular this season</span>
                    <span className='mainpage__view'>View more</span>
                </div>
                <div className='mainpage__card'>
                    {seasonPopularAnimes.map(anime => 
                        <SeasonPopularAnimeCard anime={anime}/>
                    )}
                </div>
            </div>
            
            <div className="mainpage__upcoming">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>Upcoming next season</span>
                    <span className='mainpage__view'>View more</span>
                </div>
                <div className='mainpage__card'>
                    {upcomingAnimes.map(anime => 
                        <UpcomingAnimeCard anime={anime}/>
                    )}
                </div>
            </div>

            <div className="mainpage__alltime">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>All time popular</span>
                    <span className='mainpage__view'>View more</span>
                </div>
                <div className='mainpage__card'>
                    {popularAnimes.map(anime => 
                        <PopularAnimeCard anime={anime}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainPage
