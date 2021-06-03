import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const AnimePage = ( props ) => {
    let location = useLocation();
    console.log(location, 'loc')
    // console.log('props history', props.history.location.props.anime)
    const animeId = location.search
    console.log(animeId)
    // let item;
    // useEffect (() => {
    //     item = location.props.anime
    //     console.log(item)
    //     localStorage.setItem('item', JSON.stringify(item));
    // })
    // const [anime, setAnime] = useState(item)
    // useEffect(() => {
    //     let storedAnime = JSON.parse(localStorage.getItem('item'))
    //     setAnime(storedAnime)
    //     console.log('stored', storedAnime)
    // })
    // const [anime, setAnime] = useState(item)
    // // console.log('anime', anime)
    // useEffect (() => {
    //     localStorage.setItem('item', JSON.stringify(item));
    // }, [])



    // useEffect (() => {
    //     const storedAnime = JSON.parse(localStorage.getItem('item'))
    //     setAnime(storedAnime)
    //     console.log('stored', storedAnime)
    // }, [])





    return (
        <div>

           <button>pageanime</button>
        </div>
    )
}

export default AnimePage
