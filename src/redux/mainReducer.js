import { animeAPI, getAnimeData } from "../api/api";


const SET_ANIME_DATA = 'SET_ANIME_DATA'

let initialState = {
    animeData: [],
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ANIME_DATA':
            return {
                ...state,
                animeData: action.payload.data
            }
            
        default: return state;   
    }
}

export const setAnimeData = (animes) => ({type: SET_ANIME_DATA, payload: animes})

console.log(initialState)
export default mainReducer;