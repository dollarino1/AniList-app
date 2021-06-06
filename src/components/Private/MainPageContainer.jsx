import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularAnimeDataThunk, getSeasonPopularAnimeDataThunk, 
    getTrendingAnimeDataThunk, getUpcomingAnimeDataThunk, getAnimePostersThunk, toggleIsFetching } from '../../redux/mainReducer'
import Loading from '../../utils/Loading'
import Preloader from '../../utils/Preloader'
import MainPage from './MainPage'



const MainPageContainer = () => {
    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)
    const animePosters = useSelector(state => state.mainPage.animePosters)


    useEffect(() => {
            dispatch(getTrendingAnimeDataThunk())
            dispatch(getSeasonPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'RELEASING',  'SPRING'))
            dispatch(getUpcomingAnimeDataThunk(1, 5, 'POPULARITY_DESC', 'NOT_YET_RELEASED', 'SUMMER'))
            dispatch(getPopularAnimeDataThunk(1, 5, 'POPULARITY_DESC'))
            dispatch(getAnimePostersThunk())
    }, [])

    return trendingAnimes.length == 5 ? (
        <MainPage trendingAnimes={trendingAnimes}
        seasonPopularAnimes={seasonPopularAnimes}
        upcomingAnimes={upcomingAnimes}
        popularAnimes={popularAnimes}
        animePosters={animePosters} />
    ) : <Loading />
}

export default MainPageContainer