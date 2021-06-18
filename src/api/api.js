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
                        trailer {
                            id
                        }
                        studios {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                        characters {
                            edges {
                                node
                                {
                                    id
                                    name {
                                        full
                                        native
                                    }
                                    image {
                                        large
                                    }
                                    age
                                    favourites
                                }
                                role
                                voiceActors {
                                    name {
                                        full
                                    }
                                    languageV2
                                    image {
                                        large
                                    }
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
},
    async getAnimebySearch(search) {
        const query = `
            query ($page: Int, $perPage: Int, $search: String) {
                Page(page: $page, perPage: $perPage) {
                    pageInfo {
                        total
                        currentPage
                        lastPage
                        hasNextPage
                        perPage
                    }
                media(search: $search, type: ANIME, sort: TRENDING_DESC) {
                    id
                    title {
                        romaji
                        english
                    }
                    coverImage {
                        extraLarge
                    }
                    status
                    episodes
                    season
                    startDate {
                        year
                        month
                        day
                    }
                }

            }
            }`;
        let variables = {
            search: search,
            page: 1,
            perPage: 5,
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