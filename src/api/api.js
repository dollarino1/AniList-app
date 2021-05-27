import axios from 'axios'

export const animeAPI = {
    async getTrendingAnimeData() {
        const query = `
            query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media(type: ANIME, sort: TRENDING_DESC) {
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
            page: 1,
            perPage: 5
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
        }
        )
    },

    async getPopularAnimeData () {
        const query = `
            query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media(type: ANIME, sort: POPULARITY_DESC) {
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
            page: 1,
            perPage: 5
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
        }
        )
    },

    async getSeasonPopularAnimeData () {
        const query = `
            query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media(type: ANIME, sort: POPULARITY_DESC, status: RELEASING) {
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
            page: 1,
            perPage: 5
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
            console.log('api response third', response.data.data.Page)
            return response.data.data.Page
        }
        )
    },
    async getUpcomingAnimeData () {
        const query = `
            query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                    media(type: ANIME, sort: POPULARITY_DESC, status: NOT_YET_RELEASED, season: SUMMER) {
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
            page: 1,
            perPage: 5
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
            console.log('api response third', response.data.data.Page)
            return response.data.data.Page
        }
        )
    }
}

// export const animeAPI = {
//     getTrendingAnimeData() {
//         return axios.get(`https://kitsu.io/api/edge/trending/anime?page[limit]=20&page[offset]=0`,
//             {
//                 params: {
        
//             },
//                 headers: {
//                     'Accept': 'application/vnd.api+json',
//                     'Content-Type': 'application/vnd.api+json'
//             },
//             })
//             .then (response => {
//                 console.log('api response', response.data.data)
//                 return response.data.data
//             })
//     }
// }