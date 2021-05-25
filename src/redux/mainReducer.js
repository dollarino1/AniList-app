import { animeAPI } from "../api/api";

const SET_TRENDING_ANIME_DATA = 'SET_TRENDING_ANIME_DATA';

let initialState = {
    trendingAnimeData: [],
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRENDING_ANIME_DATA:
            return {
                ...state,
                trendingAnimeData: action.trendingAnimeData
            }
            
        default: return state;   
    }
}

export const setTrendingAnimeData = (trendingAnimeData) => ({type: SET_TRENDING_ANIME_DATA, trendingAnimeData})

export const getTrendingAnimeDataThunk = () => async (dispatch) => {
    let data = await animeAPI.getTrendingAnimeData()
        dispatch(setTrendingAnimeData(data))
}

export default mainReducer;