import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularAnimeDataThunk, setCurrentPage } from '../../../redux/mainReducer'
import Loading from '../../../utils/Loading'
import { Paginator } from '../../../utils/Paginator'
import AnimeCard from './AnimeCard'
import { NavLink } from 'react-router-dom'
import { setAnimeInfo } from './../../../redux/mainReducer'

const Popular = () => {
    const dispatch = useDispatch()
    const animes = useSelector(state => state.mainPage.popularAnimeData)
    const pages = useSelector(state => state.mainPage.popularPages)

    useEffect(() => {     
            dispatch(getPopularAnimeDataThunk(1, 50, 'POPULARITY_DESC')) 
            dispatch(setAnimeInfo(null))
    }, [])

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getPopularAnimeDataThunk(pageNumber, 50))
    }
    return animes.length > 10 
        ? <> 
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
            <span className='mainpage__title'>All time popular</span>
            <ul className='mainpage__card'>
                {animes.map(anime => 
                    <NavLink exact to={`/anime-entry/${anime.id}`} key={anime.id}>
                        <AnimeCard anime={anime}/>
                    </NavLink>
                )}
            </ul>
            <Paginator totalItemsCount={pages.total}
            pageSize={pages.perPage} portionSize={10}
            currentPage={pages.currentPage} onPageChanged={onPageChanged}
            lastPage={pages.lastPage}/>
        </> 
        : <Loading />
}

export default Popular
