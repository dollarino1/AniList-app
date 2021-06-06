import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import Loading from '../../../utils/Loading'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'

const Trending = () => {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.mainPage.trendingAnimeData)
    const pages = useSelector(state => state.mainPage.trendingPages)
    console.log(pages)
    const isFetching = useSelector(state => state.mainPage.isFetching)

    useEffect(() => {         
            dispatch(getTrendingAnimeDataThunk(1, 50));
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getTrendingAnimeDataThunk(pageNumber, 50))
    }

    return animes.length > 10 ?
        <>
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
            <span className='mainpage__title'>Trending Now</span>
            <ul className='mainpage__card'>
                {animes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
        </>
    : <Loading />
}

export default Trending
