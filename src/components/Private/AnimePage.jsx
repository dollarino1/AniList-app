import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeByIdThunk } from '../../redux/mainReducer';
import Loading from '../../utils/Loading';
import AnimeEntry from './AnimeEntry';

const AnimePage = React.memo(({match}) => {
    let dispatch = useDispatch();
    const queryId = parseInt(match.params.id)
    console.log(queryId)
    useEffect(() => {
        dispatch(getAnimeByIdThunk(queryId))
    }, [])
    const anime = useSelector(state => state.mainPage.animeInfo)
    console.log(anime)

    if(!anime) {
        return <Loading />
    }
    return (
        <AnimeEntry anime={anime[0]}/>
    )
})

export default AnimePage;
