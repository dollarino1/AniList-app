import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import watching1 from './../../images/watching1.svg'
import planning1 from './../../images/planning1.svg'
import completed1 from './../../images/completed1.svg'
import all from './../../images/All.svg'
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { NavLink } from 'react-router-dom'

import RatingStars from './ListPage/RatingStars';

const ListPage = React.memo(({animes}) => {
    const db = firebase.firestore()
    const {user} = useContext(Context)
    const [listStatusq, setListStatus] = useState('all')
    const [filteredAnimes, setFilteredAnimes] = useState([])

    const handleAdd = (status, id) => {
        return function () {
            console.log(status)
            console.log(id)
            db.collection('users').doc(user.uid).collection('animes').doc(id.toString()).update({
                 listStatus: status,
                 createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }

    const handleDelete = (id) => {
        return function () {
            console.log(id)
            db.collection('users').doc(user.uid).collection('animes').doc(id.toString()).delete()
        }

    }
    const statusHandler = (ls) => {
        return function () {
            setListStatus(ls)
            console.log(ls)
        }
    }
    const filterHandler = () => {
        switch(listStatusq) {
            case 'watching':
                setFilteredAnimes(animes.filter(anime => anime.listStatus === 'watching'))
                break;
            case 'planning':
                setFilteredAnimes(animes.filter(anime => anime.listStatus === 'planning'))
                break;
            case 'completed':
                setFilteredAnimes(animes.filter(anime => anime.listStatus === 'completed'))
                break;
            default:
                setFilteredAnimes(animes)
                break;
        }
    }
    
    useEffect(() => {
        filterHandler()
        console.log('useeffect')
    }, [animes, listStatusq])

    return (
        <>
            <div className='listpage__filter'>
                <div className="filterbutton filter-first">
                    <Button onClick={statusHandler('all')} color='secondary' size='large'>
                        <img className='listPage__filterimg' src={all} alt="all" />
                        <span className={listStatusq === 'all' && 'selectedFilter'} >All</span>
                    </Button>
                </div>
                <div className="filterbutton">
                    <Button onClick={statusHandler('watching')} color='secondary' size='large'>
                        <img className='listPage__filterimg' src={watching1} alt="watching" />
                        <span className={listStatusq === 'watching' && 'selectedFilter'}>Watching</span>
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button onClick={statusHandler('planning')} color='secondary' size='large'>
                        <img className='listPage__filterimg' src={planning1} alt="planning" />
                        <span className={listStatusq === 'planning' && 'selectedFilter'}>Planning</span>
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button onClick={statusHandler('completed')} color='secondary' size='large'>
                        <img className='listPage__filterimg' src={completed1} alt="completed" />
                        <span className={listStatusq === 'completed' && 'selectedFilter'}>Completed</span>
                    </Button>
                </div>
                
            </div>
            {filteredAnimes === 0 ? <div className='listpage__empty'>ssd</div> : null}
            {filteredAnimes.map(anime => (
                <div className="card__wrapper">
                    <div className='card'>
                        <div className="card__left">
                            <NavLink exact to={`/anime-entry/${anime.id}`} key={anime.id}>
                                <div className="card__image">
                                    <img src={anime.imgURL} alt='anime-img'/>
                                    <span>{anime.rating}</span>
                                </div>
                            </NavLink>
                            <p>{anime.startDate} {anime.season}, {anime.status}</p>
                            <p>Episodes: {anime.episodes ? anime.episodes : anime.nextAiringEpisode - 1}</p>
                            <div className='listpage__menu'>
                            <ButtonGroup variant="default" color="secondary" aria-label="contained primary button group">
                                {anime.listStatus === 'watching' ? <Button onClick={handleAdd('watching', anime.id)} variant='contained'>W</Button>
                                : <Button onClick={handleAdd('watching', anime.id)} variant='primary'>W</Button>}
                                {anime.listStatus === 'planning' ? <Button onClick={handleAdd('planning', anime.id)} variant='contained'>P</Button> : 
                                <Button onClick={handleAdd('planning', anime.id)} variant='primary'>P</Button>}
                                {anime.listStatus === 'completed' ? <Button onClick={handleAdd('completed', anime.id)} variant='contained'>C</Button> :
                                <Button onClick={handleAdd('completed', anime.id)}>C</Button> }  
                            </ButtonGroup>
                            <Button onClick={handleDelete(anime.id)}>Delete</Button>
                            </div>
                            
                        </div>
                        <div className='card__right'>
                            <h2>{anime.nameEN ? anime.nameEN : anime.nameJP}</h2>
                            <p dangerouslySetInnerHTML={{__html: anime.description}}></p>
                            <RatingStars db={db} user={user} id={anime.id} myRating={anime.myRating}/>
                        </div>
                        {anime.listStatus === 'watching' &&   
                        <div className='status'>
                            <span className='status1'>{anime.listStatus}</span>
                        </div>}
                        {anime.listStatus === 'planning' &&   
                        <div className='status'>
                            <span className='status2'>{anime.listStatus}</span>
                        </div>}
                        {anime.listStatus === 'completed' &&   
                        <div className='status'>
                            <span className='status3'>{anime.listStatus}</span>
                        </div>}
                        
                    </div>
                </div>
            ))}

        </>
    )
})

export default ListPage
