import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSeasonPopularAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import Loading from '../../../utils/Loading'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'

const SeasonPopular = () => {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.mainPage.seasonPopularAnimeData)
    const pages = useSelector(state => state.mainPage.seasonPopularPages)

    useEffect(() => {     
            dispatch(getSeasonPopularAnimeDataThunk(1, 50, 'POPULARITY_DESC', 'RELEASING', 'SPRING')) 
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getSeasonPopularAnimeDataThunk(pageNumber, 50))
    }
    return animes.length > 10 ? <> 
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
            <span className='mainpage__title'>Popular this season</span>
            <ul className='mainpage__card'>
                {animes.map(anime => 
                    <AnimeCard anime={anime}/>
                )}
            </ul>
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
    </> : <Loading />
}

export default SeasonPopular
