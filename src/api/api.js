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
                        bannerImage
                        status
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
        }).catch(err => console.log(err.message))
    },
        async getAnimebyId(id, page = 1, perPage = 1) {
            const query = `
                query ($id: Int, $page: Int, $perPage: Int) {
                    Page(page: $page, perPage: $perPage) {
                    media(id: $id, type: ANIME) {
                        id
                        title {
                            romaji
                            english
                        }
                        siteUrl
                        coverImage {
                            extraLarge
                        }
                        bannerImage
                        description(asHtml: false)
                        status
                        episodes
                        season
                        seasonYear
                        format
                        startDate {
                            year
                            month
                            day
                        }
                        duration
                        source
                        type
                        genres
                        averageScore
                        nextAiringEpisode {
                            timeUntilAiring
                            episode
                            airingAt
                        }
                        isAdult
                        studios {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                    }
                
                }`;
            let variables = {
                page: page,
                perPage: perPage,
                id: id
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
                console.log('api response entry', response.data.data.Page)
                return response.data.data.Page
            }).catch((err) => console.log(err.message))
}
}