import React from 'react'
import app from '..'

const MainPage = () => {
    return (
        <div>
            <h1>MAINPAGE</h1>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    )
}

export default MainPage
