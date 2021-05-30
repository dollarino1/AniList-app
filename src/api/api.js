import axios from 'axios'

export const animeAPI = {
    async getAnimeData(page = 1, perPage = 5, sort = 'TRENDING_DESC', status, season) {
        const query = `
            query ($page: Int, $perPage: Int, $sort: [MediaSort], $status: MediaStatus, $season: MediaSeason) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media(type: ANIME, sort: $sort, status: $status, season: $season) {
                        id
                        title {
                            romaji
                            english
                        }
                        siteUrl
                        coverImage {
                            extraLarge
                        }
                        status
                        episodes
                        season
                        type
                        genres
                        averageScore
                    }
                }
            }`;
        let variables = {
            page: page,
            perPage: perPage,
            sort: sort,
            status: status,
            season: season,
        };
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        return await axios.post(`https://graphql.anilist.co`, {
            query,
            variables,
            headers
        }).then(response => {
            console.log('api response', response.data.data.Page)
            return response.data.data.Page
        })
    },
    getAnimePosters() {
        return axios.get(`https://kitsu.io/api/edge/trending/anime`,
            {
                params: {
                    limit: 5,

            },
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json'
            },
            })
            .then (response => {
                console.log('api response kitsu', response.data.data)
                return response.data.data
            })
    }
}



