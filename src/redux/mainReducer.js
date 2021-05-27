import { animeAPI } from "../api/api";

const SET_TRENDING_ANIME_DATA = 'SET_TRENDING_ANIME_DATA';
const SET_SEASON_POPULAR_ANIME_DATA = 'SET_SEASON_POPULAR_ANIME_DATA';
const SET_UPCOMING_ANIME_DATA = 'SET_UPCOMING_ANIME_DATA';
const SET_POPULAR_ANIME_DATA = 'SET_POPULAR_ANIME_DATA';

let initialState = {
    trendingAnimeData: [],
    seasonPopularAnimeData: [],
    upcomingAnimeData: [],
    popularAnimeData: [],
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRENDING_ANIME_DATA:
            return {
                ...state,
                trendingAnimeData: action.trendingAnimeData
            }
        case SET_SEASON_POPULAR_ANIME_DATA:
            return {
                ...state,
                seasonPopularAnimeData: action.seasonPopularAnimeData
            }
        case SET_UPCOMING_ANIME_DATA:
            return {
                ...state,
                upcomingAnimeData: action.upcomingAnimeData
            }
        case SET_POPULAR_ANIME_DATA:
            return {
                ...state,
                popularAnimeData: action.popularAnimeData
            }
            
        default: return state;   
    }
}

export const setTrendingAnimeData = (trendingAnimeData) => ({type: SET_TRENDING_ANIME_DATA, trendingAnimeData})
export const setSeasonPopularAnimeData = (seasonPopularAnimeData) => ({type: SET_SEASON_POPULAR_ANIME_DATA, seasonPopularAnimeData})
export const setUpcomingAnimeData = (upcomingAnimeData) => ({type: SET_UPCOMING_ANIME_DATA, upcomingAnimeData})
export const setPopularAnimeData = (popularAnimeData) => ({type: SET_POPULAR_ANIME_DATA, popularAnimeData})

export const getTrendingAnimeDataThunk = () => async (dispatch) => {
    let payload = await animeAPI.getTrendingAnimeData()
        dispatch(setTrendingAnimeData(payload.media))
}
export const getSeasonPopularAnimeDataThunk = () => async (dispatch) => {
    let payload = await animeAPI.getSeasonPopularAnimeData()
        dispatch(setSeasonPopularAnimeData(payload.media))
}
export const getUpcomingAnimeDataThunk = () => async (dispatch) => {
    let payload = await animeAPI.getUpcomingAnimeData()
        dispatch(setUpcomingAnimeData(payload.media))
}
export const getPopularAnimeDataThunk = () => async (dispatch) => {
    let payload = await animeAPI.getPopularAnimeData()
        dispatch(setPopularAnimeData(payload.media))
}


export default mainReducer;