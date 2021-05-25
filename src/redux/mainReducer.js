import { animeAPI } from "../api/api";

const SET_ANIME_DATA = 'SET_ANIME_DATA';

let initialState = {
    animeData: [],
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ANIME_DATA:
            return {
                ...state,
                animeData: action.animeData
            }
            
        default: return state;   
    }
}

export const setAnimeData = (animeData) => ({type: SET_ANIME_DATA, animeData})

export const getAnimeDataThunk = () => async (dispatch) => {
    let data = await animeAPI.getAnimeData()
        dispatch(setAnimeData(data))
}

export default mainReducer;