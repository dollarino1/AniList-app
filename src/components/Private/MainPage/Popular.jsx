import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'

const Popular = () => {
    const dispatch = useDispatch()
    const popularAnimes = useSelector(state => state.mainPage.popularAnimeData)
    const popularPages = useSelector(state => state.mainPage.popularPages)

    useEffect(() => {     
            dispatch(getPopularAnimeDataThunk(1, 50, 'POPULARITY_DESC')) 
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getPopularAnimeDataThunk(pageNumber, 50))
    }
    return <> 
            <Paginator totalItemsCount={popularPages.total}
            pageSize={popularPages.perPage} portionSize={10}
            currentPage={popularPages.currentPage} onPageChanged={onPageChanged}
            lastPage={popularPages.lastPage}/>
            <span className='mainpage__title'>All time popular</span>
            <ul className='mainpage__card'>
                {popularAnimes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={popularPages.total}
            pageSize={popularPages.perPage} portionSize={10}
            currentPage={popularPages.currentPage} onPageChanged={onPageChanged}
            lastPage={popularPages.lastPage}/>
    </>
}

export default Popular
