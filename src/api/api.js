import axios from 'axios'
import { setAnimeData } from '../redux/mainReducer'

export const getAnimeData = (limit = 5, offset = 0) => {
    return async (dispatch) => {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?page=${limit}&page=${offset}`)
        dispatch(setAnimeData(response))
    }
}
