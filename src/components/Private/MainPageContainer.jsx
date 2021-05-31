import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPopularAnimeDataThunk, getSeasonPopularAnimeDataThunk, 
    getTrendingAnimeDataThunk, getUpcomingAnimeDataThunk, getAnimePostersThunk, toggleIsFetching } from '../../redux/mainReducer'
import { POPULAR_ROUTE, SEASON_ROUTE, TRENDING_ROUTE, UPCOMING_ROUTE } from '../../utils/consts'
import Preloader from '../../utils/Preloader'
import MainPage from './MainPage'
import AnimeCard from './MainPage/AnimeCard'
import Slider from './MainPage/Slider.jsx'


const MainPageContainer = () => {
    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)
    const animePosters = useSelector(state => state.mainPage.animePosters)

    const isFetching = useSelector(state => state.mainPage.isFetching)

    useEffect(() => {
            dispatch(getTrendingAnimeDataThunk())
            dispatch(getSeasonPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'RELEASING',  'SPRING'))
            dispatch(getUpcomingAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'NOT_YET_RELEASED', 'SUMMER'))
            dispatch(getPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC'))
            dispatch(getAnimePostersThunk())
            dispatch(toggleIsFetching(false))
    }, [])

    return (
        <MainPage trendingAnimes={trendingAnimes}
        seasonPopularAnimes={seasonPopularAnimes}
        upcomingAnimes={upcomingAnimes}
        popularAnimes={popularAnimes}
        animePosters={animePosters}/>)
}

export default MainPageContainer