import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect, Route } from 'react-router-dom'
import { getPopularAnimeDataThunk, getSeasonPopularAnimeDataThunk, getTrendingAnimeDataThunk, getUpcomingAnimeDataThunk } from '../../redux/mainReducer'
import { VIEWMORE_ROUTE } from '../../utils/consts'
import AnimeCard from './MainPage/AnimeCard'

const MainPage = () => {

    const [viewStatus, setViewStatus] = useState('')
    const [filteredView, setFilteredView] = useState([])

    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)

    useEffect (() => {
        filterHandler()
      }, [viewStatus])
      
    const filterHandler = () => {
        switch(viewStatus) {
          case 'trending':
              setFilteredView(trendingAnimes.map(anime => <AnimeCard anime={anime}/>))
            break;
            case 'season-popular':
                setFilteredView(seasonPopularAnimes.map(anime => <AnimeCard anime={anime}/>))
            break;
            case 'upcoming':
                setFilteredView(upcomingAnimes.map(anime => <AnimeCard anime={anime}/>))
              break;
            case 'all-time':
                setFilteredView(popularAnimes.map(anime => <AnimeCard anime={anime}/>))
              break;
          default:
            break;
        }
    }
      
    useEffect(() => {
        dispatch(getTrendingAnimeDataThunk())
        dispatch(getPopularAnimeDataThunk())
        dispatch(getUpcomingAnimeDataThunk())
        dispatch(getSeasonPopularAnimeDataThunk())
    }, [])

    console.log(viewStatus, filteredView)
    return (
        <div className='mainpage'>
            <div className='mainpage__trending'>
                <div className='mainpage__heading'>
                    <span className='mainpage__title'>Trending Now</span>
                    <button onClick={e => {setViewStatus(e.target.value); console.log(viewStatus); }} className='mainpage__view' value='trending'>View more</button>
                </div>
                <div className='mainpage__card'>
                    {trendingAnimes.map(anime => 
                        <AnimeCard anime={anime}/>
                    )}
                </div>
            </div>
            
            <div className="mainpage__seasonPopular">
            <div className='mainpage__heading'>
                    <span className='mainpage__title'>Popular this season</span>
                    <NavLink to={VIEWMORE_ROUTE} onClick={e => {setViewStatus(e.target.value); console.log(viewStatus);}} className='mainpage__view' value='trending'>View more</NavLink>
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
                    <span className='mainpage__view' value='upcoming'>View more</span>
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
                    <span className='mainpage__view' value='all-time'>View more</span>
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
