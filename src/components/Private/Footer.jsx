import React from 'react'

const Footer = () => {
    return (
        <footer>
            <a className='site-link' href='https://www.myanimelist.netlify.app/'>
                myanimelist.netlify.app
            </a>
            <div>
            <ul>
                <li><a>Donate</a></li>
                <li><a href='https://www.myanimelist.netlify.app/'>myanimelist.netlify.app</a></li>
                <li><a href='https://anilist.co/'>AniList.co</a></li>
                <li><a href='https://anichart.net/'>AniChart.net</a></li>
            </ul>
            <ul>
                <li><a href='https://anilist.co/apps'>Apps</a></li>
                <li><a href='https://anilist.co/site-stats'>Site Stats</a></li>
                <li><a href='https://anilist.co/recommendations'>Recommendations</a></li>
                <li><a href='https://github.com/AniList/ApiV2-GraphQL-Docs'>API</a></li>
            </ul>
            <ul>
                <li><a href='https://discord.com/invite/TF428cr'>Discord</a></li>
                <li><a href='https://twitter.com/AniListco'>Twitter</a></li>
                <li><a href='https://www.facebook.com/AniListco'>Facebook</a></li>
                <li><a href='https://github.com/dollarino1/AniList-app'>Github</a></li>
            </ul>
            <ul>
                <li><a href='https://submission-manual.anilist.co/'>Add Data</a></li>
                <li><a href='https://anilist.co/moderators'>Moderators</a></li>
                <li><a href='https://anilist.co/terms'>Terms & Privacy</a></li>
                <li><a href='https://anilist.co/sitemap/index.xml'>Site Map</a></li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer
