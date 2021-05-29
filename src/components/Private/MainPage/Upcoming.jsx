import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUpcomingAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'

const Upcoming = () => {
    const dispatch = useDispatch()
    const upcomingAnimes = useSelector(state => state.mainPage.upcomingAnimeData)
    const upcomingPages = useSelector(state => state.mainPage.upcomingPages)

    useEffect(() => {     
            dispatch(getUpcomingAnimeDataThunk(1, 50, 'POPULARITY_DESC', 'NOT_YET_RELEASED', 'SUMMER')) 
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getUpcomingAnimeDataThunk(pageNumber, 50))
    }
    return <> 
            <Paginator totalItemsCount={upcomingPages.total}
            pageSize={upcomingPages.perPage} portionSize={10}
            currentPage={upcomingPages.currentPage} onPageChanged={onPageChanged}
            lastPage={upcomingPages.lastPage}/>
            <span className='mainpage__title'>Upcoming next season</span>
            <ul className='mainpage__card'>
                {upcomingAnimes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={upcomingPages.total}
            pageSize={upcomingPages.perPage} portionSize={10}
            currentPage={upcomingPages.currentPage} onPageChanged={onPageChanged}
            lastPage={upcomingPages.lastPage}/>
    </>
}

export default Upcoming
