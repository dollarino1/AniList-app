import React, { useContext, useEffect } from 'react'
import firebase from 'firebase';
import { Context } from '../../App';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loading from '../../utils/Loading';
const ListPage = () => {
    const db = firebase.firestore()
    const {user} = useContext(Context)

    const [users, loading] = useCollectionData(
        db.collection('users')
    )
    console.log(users)

    if(loading) {
         return <Loading />
    }
    const anime = users[0];
    return (
        <div>
            {anime.email}
            <div className='white'>{anime.animeList.anime}</div>
        </div>
    )
}

export default ListPage
