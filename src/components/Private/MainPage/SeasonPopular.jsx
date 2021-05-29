import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSeasonPopularAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'

const SeasonPopular = () => {
    const dispatch = useDispatch()
    const seasonPopularAnimes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const seasonPopularPages = useSelector(state => state.mainPage.seasonPopularPages)

    useEffect(() => {     
            dispatch(getSeasonPopularAnimeDataThunk(1, 50, 'POPULARITY_DESC', 'RELEASING', 'SPRING')) 
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getSeasonPopularAnimeDataThunk(pageNumber, 50))
    }
    return <> 
            <Paginator totalItemsCount={seasonPopularPages.total}
            pageSize={seasonPopularPages.perPage} portionSize={10}
            currentPage={seasonPopularPages.currentPage} onPageChanged={onPageChanged}
            lastPage={seasonPopularPages.lastPage}/>
            <span className='mainpage__title'>Popular this season</span>
            <ul className='mainpage__card'>
                {seasonPopularAnimes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={seasonPopularPages.total}
            pageSize={seasonPopularPages.perPage} portionSize={10}
            currentPage={seasonPopularPages.currentPage} onPageChanged={onPageChanged}
            lastPage={seasonPopularPages.lastPage}/>
    </>
}

export default SeasonPopular
