import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingAnimeDataThunk, setCurrentPage, toggleIsFetching } from '../../../redux/mainReducer'
import { Paginator } from '../../../utils/Paginator'
import Preloader from '../../../utils/Preloader'
import AnimeCard from './AnimeCard'

const Trending = () => {
    const dispatch = useDispatch()
    const trendingAnimes = useSelector(state => state.mainPage.trendingAnimeData)
    const trendingPages = useSelector(state => state.mainPage.trendingPages)
    console.log(trendingPages)
    const isFetching = useSelector(state => state.mainPage.isFetching)

    useEffect(() => {
            
            dispatch(getTrendingAnimeDataThunk(1, 50));
            dispatch(toggleIsFetching(false))
    }, [])
    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getTrendingAnimeDataThunk(pageNumber, 50))
    }
    return isFetching ? <Preloader /> : 
        <>
            <Paginator totalItemsCount={trendingPages.total}
            pageSize={trendingPages.perPage} portionSize={10}
            currentPage={trendingPages.currentPage} onPageChanged={onPageChanged}
            lastPage={trendingPages.lastPage}/>
            <span className='mainpage__title'>Trending Now</span>
            <ul className='mainpage__card'>
                {trendingAnimes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={trendingPages.total}
            pageSize={trendingPages.perPage} portionSize={10}
            currentPage={trendingPages.currentPage} onPageChanged={onPageChanged}
            lastPage={trendingPages.lastPage}/>
        </>
}

export default Trending