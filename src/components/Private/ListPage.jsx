import React, { useContext, useEffect } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
import watching from './../../images/watching1.svg'
import planning from './../../images/planning1.svg'
import completed from './../../images/completed1.svg'
import all from './../../images/All.svg'
import { Button } from '@material-ui/core';

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
            <div className='listpage__filter'>
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={all} alt="all" />
                            All
                    </Button>
                </div>
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={watching} alt="watching" />
                        <span>Watching</span>
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={planning} alt="planning" />
                            Planning
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={completed} alt="completed" />
                            Completed
                    </Button>
                </div>
                
            {/* <div className='filter'>
                    <img src={all} alt="all" />
                    <span>All</span>
                </div>
                <div className='filter'>
                    <img src={watching} alt="watching" />
                    <span>Watching</span>
                </div>
                <div className='filter'>
                    <img src={planning} alt="planning" />
                    <span>Planning</span>
                </div>
                <div className='filter'>
                    <img src={completed} alt="completed" />
                    <span>Completed</span>
                </div> */}
            </div>

            {animes.map(anime => (
                <div className="card__wrapper">
                    <div className='card'>
                        <div className="card__left">
                            <div className="card__image">
                                <img src={anime.imgURL}/>
                                <span>{anime.rating}</span>
                            </div>
                            <p>{anime.startDate} {anime.season}, {anime.status}</p>
                            <p>Episodes: {anime.episodes ? anime.episodes : anime.nextAiringEpisode - 1}</p>
                        </div>
                        <div className='card__right'>
                            <h2>{anime.nameEN ? anime.nameEN : anime.nameJP}</h2>
                            <p dangerouslySetInnerHTML={{__html: anime.description}}></p>
                        </div>
                        <div className='status'>
                            <span>{anime.listStatus}</span>
                        </div>
                        
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListPage
