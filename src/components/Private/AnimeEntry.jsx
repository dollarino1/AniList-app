import React, { useContext, useEffect } from 'react'
import { Button } from '@material-ui/core';
import watching from './../../images/watching2.png'
import planning from './../../images/planning.png'
import completed from './../../images/completed2.png'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactPlayer from 'react-player';
import { Context } from '../../App';
import firebase from 'firebase';
import StyledMenu, {StyledMenuItem } from './../../css/styledmenu'
import { useHistory } from 'react-router-dom'
import { getAnimeByIdThunk } from '../../redux/mainReducer';
import { useDispatch } from 'react-redux';

const AnimeEntry = ({anime}) => {
  const {user} = useContext(Context);
  console.log('user id', user.uid)
  const db = firebase.firestore()
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory()
  console.log('history', history)
  const hist = history.location.pathname.slice(13)
  console.log('hist', parseInt(hist))

  useEffect(() => {
      console.log('render')
      dispatch(getAnimeByIdThunk(parseInt(hist)))
  }, [hist])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdd = (event) => {
    setAnchorEl(null);
    const listStatus = event.target.textContent.slice(7);
    console.log(status)
    console.log(anime.id, anime.title.english)
    db.collection('users').doc(user.uid).collection('animes').doc(anime.id.toString()).set({
        id: anime.id, 
        nameEN: anime.title.english, 
        nameJP: anime.title.romaji, 
        imgURL: anime.coverImage.extraLarge,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        listStatus: listStatus,
        startDate: anime.seasonYear,
        status: status,
        episodes: anime.episodes,
        description: anime.description,
        rating: anime.averageScore,
        myRating: null,
        genres: genres,
        season: season,
        nextAiringEpisode: anime.nextAiringEpisode,
    })
  }

  function convertToLowerCase(item) {
    var oldItem = item.toLowerCase();
    return oldItem[0].toUpperCase() + oldItem.slice(1);
    
  }
  const status = convertToLowerCase(anime.status).replace(/_/g, ' ')
  if(anime.season) {
    var season = convertToLowerCase(anime.season)
  }
  
  const type = convertToLowerCase(anime.type)
  if(anime.source) {
    var source = convertToLowerCase(anime.source)
  }
  
  let genres = anime.genres.toString().replace(/([A-Z])/g, ' $1')

  function secondsToDhm(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    
    var dDisplay = d > 0 ? d + (d === 1 ? "d " : "d ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? "m " : "m ") : "";
    return dDisplay + hDisplay + mDisplay;
    }

    if(anime.nextAiringEpisode) {
      var timeUntilAiring = secondsToDhm(anime.nextAiringEpisode.timeUntilAiring)
    }

      let characters = [anime.characters.edges.map(({node}) => (
        node
      )).sort((a, b) => b.favourites - a.favourites)]
      let removed = characters[0].splice(12)

      let arrStudios = [anime.studios.edges.map(({node}) => (
        node.name
      ))]
      let studios = arrStudios.toString().replace(/(,)/g, '$1 ')
    return (
        <div>
            <div className='entry__banner'>
              {anime.bannerImage ? <img src={anime.bannerImage} alt="banner" /> : null}
            </div>
            
            <div className="entry__block">
                <div className="entry__imageblock">
                    <img src={anime.coverImage.extraLarge} alt="cover" />
                    <div className='entry__menu'>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            add to list
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem onClick={handleAdd} value='watching'>
                              <ListItemIcon>
                                  <img src={watching} alt="watching" />
                              </ListItemIcon>
                              <ListItemText primary="Set as watching" />
                            </StyledMenuItem>

                            <StyledMenuItem onClick={handleAdd} value='planning'>
                              <ListItemIcon>
                                  <img src={planning} alt="planning" />
                              </ListItemIcon>
                              <ListItemText primary="Set as planning" />
                            </StyledMenuItem>

                            <StyledMenuItem onClick={handleAdd} value='completed'>
                              <ListItemIcon>
                                  <img src={completed} alt="completed" />
                              </ListItemIcon>
                              <ListItemText primary="Set as completed" />
                            </StyledMenuItem>
                        </StyledMenu>
                      </div>
                </div>
                <div className="entry__description">
                    <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
                    <div><p dangerouslySetInnerHTML={{__html: anime.description}} /></div>
                </div>
                
                  <div className="entry__short">
                    <div className="entry__wrapper">
                      {anime.nextAiringEpisode ? <p className="airing"><strong>Airing:</strong> Ep {anime.nextAiringEpisode.episode}: {timeUntilAiring}</p> : null}
                      <p><strong>Type:</strong> {type}</p>
                      <p><strong>Format:</strong> {anime.format}</p>
                      <p><strong>Status:</strong> {status}</p>
                      {anime.episodes ? <p><strong>Episodes:</strong> {anime.episodes}</p> : anime.nextAiringEpisode ? <p><strong>Episodes: </strong> {anime.nextAiringEpisode.episode - 1}</p> : null}
                      {anime.duration && <p><strong>Duration:</strong> {anime.duration} min</p>}
                      {anime.season && <p><strong>Season:</strong> {season} {anime.seasonYear}</p>}
                      <p><strong>Start date:</strong> {anime.startDate.day}/{anime.startDate.month}/{anime.startDate.year}</p>
                      <p><strong>Genres:</strong> {genres}</p>
                      {source && <p><strong>Source:</strong> {source}</p>}
                      <p><strong>Studio:</strong> {studios}</p>
                      {anime.averageScore ? <p><strong>Average score:</strong> {anime.averageScore}%</p> : null}
                    </div>
                  </div>
                  <div className="entry__info">
                    <div className="entry__card">
                      {characters[0].map((char) => (
                        <div className="entry__actor" key={char.id}>
                          <img src={char.image.large} alt='char-img'></img>
                          <span>{char.name.full}</span>
                        </div>
                      ))}
                    </div>
                    {anime.trailer ? 
                      <div className="entry__video">
                          <ReactPlayer url={`https://www.youtube.com/watch?v=${anime.trailer.id}`} />
                      </div> : null}
                  </div>
                </div>


                
         
        </div>
    
    )
}

export default AnimeEntry
