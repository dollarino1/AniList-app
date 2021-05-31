import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const AnimePage = ( props ) => {
    let location = useLocation();
    console.log(location.userProps)
    console.log(props.history.location.userProps.anime)
    const anime = props.history.location.userProps.anime;

    return (
        <div>
            {anime.title.english}
           <button>pageanime</button>
        </div>
    )
}

export default AnimePage
