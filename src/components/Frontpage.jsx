import React from 'react'
import mainImg from './../images/LoginMainImage.png'

const Frontpage = (props) => {
    return <div className="frontpage">
        <div className="frontpage__auth">
            <button className="frontpage__login">LOGIN</button>
            <button className="frontpage__reg">SIGN UP</button>
        </div>
        <div className="frontpage__intro">
            <img src={mainImg} alt="mainImg" />
            <div className="frontpage__title">
                <h1>Your Anime List</h1>
                <hr />
                <h3>Simple list of your favourite animes</h3>
            </div>
        </div>
        
    </div>
}

export default Frontpage;