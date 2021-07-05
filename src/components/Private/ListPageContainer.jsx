import React, { useContext, useEffect } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
import ListPage from './ListPage';
import { setAnimeInfo } from '../../redux/mainReducer'
import { useDispatch } from 'react-redux'

const ListPageContainer = () => {
    const dispatch = useDispatch()
    const db = firebase.firestore()
    const {user} = useContext(Context)
    const [animes] = useCollectionData(
        db.collection('users').doc(user.uid).collection('animes').orderBy('createdAt', 'desc')
    )
    useEffect(() => {
        dispatch(setAnimeInfo(null))
    })   
    return animes === undefined ? <Loading /> 
    : <ListPage animes={animes}/>
    
}

export default ListPageContainer
