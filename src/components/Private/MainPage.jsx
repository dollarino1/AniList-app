import React from 'react'
import { NavLink } from 'react-router-dom'
import { POPULAR_ROUTE, SEASON_ROUTE, TRENDING_ROUTE, UPCOMING_ROUTE } from '../../utils/consts'
import AnimeCard from './MainPage/AnimeCard'
import Slider from './MainPage/Slider.jsx'

const MainPage = ({trendingAnimes, seasonPopularAnimes, upcomingAnimes, popularAnimes, animePosters }) => {
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
                        <NavLink exact to={`/anime-entry/${anime.id}`}>
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
