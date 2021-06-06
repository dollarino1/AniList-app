import { animeAPI } from "../api/api";

const SET_TRENDING_ANIME_DATA = 'SET_TRENDING_ANIME_DATA';
const SET_TRENDING_PAGES = 'SET_TRENDING_PAGES';

const SET_SEASON_POPULAR_ANIME_DATA = 'SET_SEASON_POPULAR_ANIME_DATA';
const SET_SEASON_POPULAR_PAGES = 'SET_SEASON_POPULAR_PAGES';

const SET_UPCOMING_ANIME_DATA = 'SET_UPCOMING_ANIME_DATA';
const SET_UPCOMING_PAGES = 'SET_UPCOMING_PAGES';

const SET_POPULAR_ANIME_DATA = 'SET_POPULAR_ANIME_DATA';
const SET_POPULAR_PAGES = 'SET_POPULAR_PAGES';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_ANIME_POSTERS = 'SET_ANIME_POSTERS';
const SET_ANIME_INFO = 'SET_ANIME_INFO';

let initialState = {
    trendingAnimeData: [],
    trendingPages: [],

    seasonPopularAnimeData: [],
    seasonPopularPages: [],

    upcomingAnimeData: [],
    upcomingPages: [],

    popularAnimeData: [],
    popularPages: [],

    page: 1,
    animePosters: [],
    animeInfo: null,
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRENDING_ANIME_DATA:
            return {
                ...state,
                trendingAnimeData: action.trendingAnimeData
            }
        case SET_TRENDING_PAGES: 
            return {
                ...state,
                trendingPages: action.trendingPages
            }
//--------------------------------------------------------
        case SET_SEASON_POPULAR_ANIME_DATA:
                return {
                    ...state,
                    seasonPopularAnimeData: action.seasonPopularAnimeData
                }
        case SET_SEASON_POPULAR_PAGES: 
            return {
                ...state,
                seasonPopularPages: action.seasonPopularPages
            }
//--------------------------------------------------------
        case SET_UPCOMING_ANIME_DATA:
            return {
                ...state,
                upcomingAnimeData: action.upcomingAnimeData
            }
        case SET_UPCOMING_PAGES: 
            return {
                ...state,
                upcomingPages: action.upcomingPages
            }
//--------------------------------------------------------
        case SET_POPULAR_ANIME_DATA:
            return {
                ...state,
                popularAnimeData: action.popularAnimeData
            }
        case SET_POPULAR_PAGES: 
            return {
                ...state,
                popularPages: action.popularPages
            }
//--------------------------------------------------------
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                page: action.currentPage
            }
        case SET_ANIME_POSTERS:
            return {
                ...state,
                animePosters: action.animePosters
            }
        case SET_ANIME_INFO: 
            return {
                ...state,
                animeInfo: action.animeInfo
            }
        default: return state;   
    }
}

export const setTrendingAnimeData = (trendingAnimeData) => ({type: SET_TRENDING_ANIME_DATA, trendingAnimeData})
export const setTrendingPages = (trendingPages) => ({type: SET_TRENDING_PAGES, trendingPages})

export const setSeasonPopularAnimeData = (seasonPopularAnimeData) => ({type: SET_SEASON_POPULAR_ANIME_DATA, seasonPopularAnimeData})
export const setSeasonPopularPages = (seasonPopularPages) => ({type: SET_SEASON_POPULAR_PAGES, seasonPopularPages})

export const setUpcomingAnimeData = (upcomingAnimeData) => ({type: SET_UPCOMING_ANIME_DATA, upcomingAnimeData})
export const setUpcomingPages = (upcomingPages) => ({type: SET_UPCOMING_PAGES, upcomingPages})

export const setPopularAnimeData = (popularAnimeData) => ({type: SET_POPULAR_ANIME_DATA, popularAnimeData})
export const setPopularPages = (popularPages) => ({type: SET_POPULAR_PAGES, popularPages})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setAnimePosters = (animePosters) => ({type: SET_ANIME_POSTERS, animePosters})
export const setAnimeInfo = (animeInfo) => ({type: SET_ANIME_INFO, animeInfo})

// Thunk Creators ------------------------------------

export const getTrendingAnimeDataThunk = (page, perPage) => async (dispatch) => {
    let payload = await animeAPI.getAnimeData(page, perPage)
        dispatch(setTrendingAnimeData(payload.media))
        dispatch(setTrendingPages(payload.pageInfo))
}
export const getSeasonPopularAnimeDataThunk = (page, perPage, sort, status, season) => async (dispatch) => {
    let payload = await animeAPI.getAnimeData(page, perPage, sort, status, season)
        dispatch(setSeasonPopularAnimeData(payload.media))
        dispatch(setSeasonPopularPages(payload.pageInfo))
}
export const getUpcomingAnimeDataThunk = (page, perPage, sort, status, season) => async (dispatch) => {
    let payload = await animeAPI.getAnimeData(page, perPage, sort, status, season)
        dispatch(setUpcomingAnimeData(payload.media))
        dispatch(setUpcomingPages(payload.pageInfo))
}
export const getPopularAnimeDataThunk = (page, perPage, sort) => async (dispatch) => {
    let payload = await animeAPI.getAnimeData(page, perPage, sort)
        dispatch(setPopularAnimeData(payload.media))
        dispatch(setPopularPages(payload.pageInfo))
}
export const getAnimePostersThunk = () => async (dispatch) => {
    let payload = await animeAPI.getAnimePosters()
        dispatch(setAnimePosters(payload))
}
export const getAnimeByIdThunk= (id) => async (dispatch) => {
    let payload = await animeAPI.getAnimebyId(id)
        dispatch(setAnimeInfo(payload.media))
}


export default mainReducer;