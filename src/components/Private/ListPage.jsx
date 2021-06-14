import React, { useContext, useEffect } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
import watching1 from './../../images/watching1.svg'
import planning1 from './../../images/planning1.svg'
import completed1 from './../../images/completed1.svg'
import all from './../../images/All.svg'
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StyledMenu, {StyledMenuItem } from './../../css/styledmenu'
import watching from './../../images/watching.svg'
import planning from './../../images/planning.png'
import completed from './../../images/completed.svg'
import { Field, Form, useFormik } from 'formik'

const ListPage = React.memo(() => {
    const db = firebase.firestore()
    const {user} = useContext(Context)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [animes, loading] = useCollectionData(
        db.collection('users').doc(user.uid).collection('animes').orderBy('createdAt')
    )

    const handleClick = (id) => {
        return function (e) {
            setAnchorEl(e.currentTarget);
            console.log('button id', id)
        }
        
    };
    
    const handleClose = (id) => {
        return function (e) {
            setAnchorEl(null)
            console.log('close id', id)
        }
    };
    
    const handleAdd = (status, id) => {
        return function (e) {
            setAnchorEl(null)
            console.log(status)
            // const id = e.target.value;
            console.log(id)
            db.collection('users').doc(user.uid).collection('animes').doc(id.toString()).update({
                 listStatus: status
            })
        }

    }
    const handleDelete = (id) => {
        return function (e) {
            setAnchorEl(null)
            console.log(id)
            db.collection('users').doc(user.uid).collection('animes').doc(id.toString()).delete()
        }

    }

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
                        <img className='listPage__filterimg' src={watching1} alt="watching" />
                        <span>Watching</span>
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={planning1} alt="planning" />
                            Planning
                    </Button>
                </div>
                
                <div className="filterbutton">
                    <Button color='secondary' size='large'>
                        <img className='listPage__filterimg' src={completed1} alt="completed" />
                            Completed
                    </Button>
                </div>
            </div>

            {animes.map(anime => (
                <div className="card__wrapper">
                    <div className='card'>
                        <div className="card__left">
                            <div className="card__image">
                                <img src={anime.imgURL}/>
                                <span>{anime.rating}</span>
                            </div>
                            <div className='listpage__menu'>
                            <ButtonGroup variant="default" color="secondary" aria-label="contained primary button group">
                                {anime.listStatus == 'watching' ? <Button onClick={handleAdd('watching', anime.id)} variant='contained'>W</Button>
                                : <Button onClick={handleAdd('watching', anime.id)} variant='primary'>W</Button>}
                                {anime.listStatus == 'planning' ? <Button onClick={handleAdd('planning', anime.id)} variant='contained'>P</Button> : 
                                <Button onClick={handleAdd('planning', anime.id)} variant='primary'>P</Button>}
                                {anime.listStatus == 'completed' ? <Button onClick={handleAdd('completed', anime.id)} variant='contained'>C</Button> :
                                <Button onClick={handleAdd('completed', anime.id)}>C</Button> }
                                
                            </ButtonGroup>
                            <Button onClick={handleDelete(anime.id)}>Delete</Button>
                                {/* <Button
                                    aria-controls="customized-menu"
                                    aria-haspopup="true"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick(anime.id)}
                                >
                                    {anime.listStatus}
                                </Button>
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose(anime.id)}

                                >
                                    <Button onClick={handleAdd('watching', anime.id)}>
                                        <ListItemIcon>
                                            <img src={watching} alt="watching" />
                                        </ListItemIcon>
                                        Set as watching
                                        <ListItemText />
                                    </Button>

                                    <StyledMenuItem onClick={handleAdd("planning", anime.id)} value={anime.id}>
                                        <ListItemIcon>
                                            <img src={planning} alt="planning" />
                                        </ListItemIcon>
                                        Set as planning
                                        <ListItemText id={anime.id}/>
                                    </StyledMenuItem>

                                    <StyledMenuItem onClick={handleAdd("completed", anime.id)}>
                                        <ListItemIcon>
                                            <img src={completed} alt="completed" />
                                        </ListItemIcon>
                                        
                                        <ListItemText primary='Set as completed' />
                                    </StyledMenuItem>

                                    <StyledMenuItem onClick={handleDelete('delete')} value={anime.id}>
                                        <ListItemIcon>
                                            <img src={completed} alt="completed" />
                                        </ListItemIcon>
                                        Delete
                                        <ListItemText id={anime.id} />
                                    </StyledMenuItem>
                                </StyledMenu> */}
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
})

export default ListPage
