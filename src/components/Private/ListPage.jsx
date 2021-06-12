import React, { useContext, useEffect } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
const ListPage = () => {
    const db = firebase.firestore()
    const {user} = useContext(Context)

    const [animes, loading] = useCollectionData(
        db.collection('users').doc(user.uid).collection('animes').orderBy('createdAt')
    )


    if(loading) {
         return <Loading />
    }
    animes.reverse()
    console.log(animes)
    return (
        <>
            {animes.map(anime => (
                <div className="card__wrapper">
                    <div className='card'>
                        <div className="card__left">
                            <div className="card__image">
                                <img src={anime.imgURL}/>
                                <span>{anime.rating}</span>
                            </div>
                            <p>{anime.startDate} {anime.season}, {anime.status}</p>
                            <p>Episodes: {anime.episodes}</p>
                        </div>
                        <div className='card__right'>
                            <h2>{anime.nameEN ? anime.nameEN : anime.nameJP}</h2>
                            <p dangerouslySetInnerHTML={{__html: anime.description}}></p>
                            <span>{anime.listStatus}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListPage
