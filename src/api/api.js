import axios from 'axios'

export const animeAPI = {
    getTrendingAnimeData() {
        return axios.get(`https://kitsu.io/api/edge/trending/anime?page[limit]=20&page[offset]=0`,
            {
                params: {
        
            },
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json'
            },
            })
            .then (response => {
                console.log('api response', response.data.data)
                return response.data.data
            })
    }
}