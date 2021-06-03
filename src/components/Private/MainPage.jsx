import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { getPopularAnimeDataThunk, getSeasonPopularAnimeDataThunk, 
    getTrendingAnimeDataThunk, getUpcomingAnimeDataThunk, getAnimePostersThunk, toggleIsFetching } from '../../redux/mainReducer'
import { ANIMEPAGE_ROUTE, MAINPAGE_ROUTE, POPULAR_ROUTE, SEASON_ROUTE, TRENDING_ROUTE, UPCOMING_ROUTE } from '../../utils/consts'
import Preloader from '../../utils/Preloader'
import AnimeCard from './MainPage/AnimeCard'
import Slider from './MainPage/Slider.jsx'
import Trending from './MainPage/Trending'


const MainPage = ({trendingAnimes, seasonPopularAnimes, upcomingAnimes, popularAnimes, animePosters }) => {
    // const dispatch = useDispatch()
    // const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    // const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    // const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    // const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)
    // const animePosters = useSelector(state => state.mainPage.animePosters)

    // useEffect(() => {
    //         dispatch(getTrendingAnimeDataThunk())
    //         dispatch(getSeasonPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'RELEASING',  'SPRING'))
    //         dispatch(getUpcomingAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'NOT_YET_RELEASED', 'SUMMER'))
    //         dispatch(getPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC'))
    //         dispatch(getAnimePostersThunk())
    //         dispatch(toggleIsFetching(false))
    // }, [])

    return (
        <div className='mainpage'>
            <div className="mainpage__slider">
                <Slider animePosters={animePosters}/>
            </div>
            <div className='mainpage__trending'>
                <div className='mainpage__heading'>
                    <span className='mainpage__title'>Trending Now</span>
                    <NavLink to={TRENDING_ROUTE} className='mainpage__view'>View more</NavLink>           
                </div>
                <div className='mainpage__card'>
                    
                    {trendingAnimes.map(anime => 
                        <NavLink to={{pathname:ANIMEPAGE_ROUTE + anime.id, props: {anime: anime}}}>
                            <AnimeCard anime={anime}/>
                        </NavLink>
                    )}
                </div>
            </div>
            
            <div className="mainpage__seasonPopular">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>Popular this season</span>
                    <NavLink to={SEASON_ROUTE} className='mainpage__view'>View more</NavLink>
                </div>
                <div className='mainpage__card'>
                    {seasonPopularAnimes.map(anime => 
                        <AnimeCard anime={anime}/>
                    )}
                </div>
            </div>
            
            <div className="mainpage__upcoming">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>Upcoming next season</span>
                    <NavLink to={UPCOMING_ROUTE} className='mainpage__view'>View more</NavLink>
                </div>
                <div className='mainpage__card'>
                    {upcomingAnimes.map(anime => 
                        <AnimeCard anime={anime}/>
                    )}
                </div>
            </div>

            <div className="mainpage__alltime">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>All time popular</span>
                    <NavLink to={POPULAR_ROUTE} className='mainpage__view'>View more</NavLink>
                </div>
                <div className='mainpage__card'>
                    {popularAnimes.map(anime => 
                        <AnimeCard anime={anime}/>
                    )}
                </div>
            </div>
    </div>
    )
}

export default MainPage
