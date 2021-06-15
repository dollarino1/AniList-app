import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
import ListPage from './ListPage';

const ListPageContainer = () => {
    const db = firebase.firestore()
    const {user} = useContext(Context)
    const [animes] = useCollectionData(
        db.collection('users').doc(user.uid).collection('animes').orderBy('createdAt')
    )    
    return animes == undefined ? <Loading /> 
    : <ListPage animes={animes}/>
    
}

export default ListPageContainer
