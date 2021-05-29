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
        }
        )
    },
}
//     async getPopularAnimeData () {
//         const query = `
//             query ($page: Int, $perPage: Int) {
//                 Page(page: $page, perPage: $perPage) {
//                     pageInfo {
//                         total
//                         currentPage
//                         lastPage
//                         hasNextPage
//                         perPage
//                     }
//                     media(type: ANIME, sort: POPULARITY_DESC) {
//                         id
//                         title {
//                             romaji
//                             english
//                         }
//                         siteUrl
//                         coverImage {
//                             extraLarge
//                         }
//                         status
//                         episodes
//                         season
//                         type
//                         genres
//                         averageScore
//                     }
//                 }
//             }`;
//         let variables = {
//             page: 1,
//             perPage: 5
//         };
//         const headers = {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         };
//         return await axios.post(`https://graphql.anilist.co`, {
//             query,
//             variables,
//             headers
//         }).then(response => {
//             console.log('api response popular', response.data.data.Page)
//             return response.data.data.Page
//         }
//         )
//     },

//     async getSeasonPopularAnimeData () {
//         const query = `
//             query ($page: Int, $perPage: Int) {
//                 Page(page: $page, perPage: $perPage) {
//                     pageInfo {
//                         total
//                         currentPage
//                         lastPage
//                         hasNextPage
//                         perPage
//                     }
//                     media(type: ANIME, sort: POPULARITY_DESC, status: RELEASING) {
//                         id
//                         title {
//                             romaji
//                             english
//                         }
//                         siteUrl
//                         coverImage {
//                             extraLarge
//                         }
//                         status
//                         episodes
//                         season
//                         type
//                         genres
//                         averageScore
//                     }
//                 }
//             }`;
//         let variables = {
//             page: 1,
//             perPage: 5
//         };
//         const headers = {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         };
//         return await axios.post(`https://graphql.anilist.co`, {
//             query,
//             variables,
//             headers
//         }).then(response => {
//             console.log('api response upcoming', response.data.data.Page)
//             return response.data.data.Page
//         }
//         )
//     },
//     async getUpcomingAnimeData (page = 1, perPage = 5) {
//         const query = `
//             query ($page: Int, $perPage: Int) {
//                 Page(page: $page, perPage: $perPage) {
//                     pageInfo {
//                         total
//                         currentPage
//                         lastPage
//                         hasNextPage
//                         perPage
//                     }
//                     media(type: ANIME, sort: POPULARITY_DESC, status: NOT_YET_RELEASED, season: SUMMER) {
//                         id
//                         title {
//                             romaji
//                             english
//                         }
//                         siteUrl
//                         coverImage {
//                             extraLarge
//                         }
//                         status
//                         episodes
//                         season
//                         type
//                         genres
//                         averageScore
//                     }
//                 }
//             }`;
//         let variables = {
//             page: page,
//             perPage: perPage
//         };
//         const headers = {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         };
//         return await axios.post(`https://graphql.anilist.co`, {
//             query,
//             variables,
//             headers
//         }).then(response => {
//             console.log('api response alltime', response.data.data.Page)
//             return response.data.data.Page
//         }
//         )
//     }
// }
