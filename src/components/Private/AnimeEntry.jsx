import React from 'react'
import { Button } from '@material-ui/core';
import watching from './../../images/watching.svg'
import planning from './../../images/planning.svg'
import completed from './../../images/completed.svg'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactPlayer from 'react-player';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const AnimeEntry = ({anime}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function convertToLowerCase(item) {
    var oldItem = item.toLowerCase();
    return oldItem[0].toUpperCase() + oldItem.slice(1);
    
  }
  const status = convertToLowerCase(anime.status).replace(/_/g, ' ')
  if(anime.season) {
    var season = convertToLowerCase(anime.season)
  }
  
  const type = convertToLowerCase(anime.type)
  const source = convertToLowerCase(anime.source)
  let genres = anime.genres.toString().replace(/([A-Z])/g, ' $1')

  function secondsToDhm(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    
    var dDisplay = d > 0 ? d + (d == 1 ? "d " : "d ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
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
                            <StyledMenuItem>
                            <ListItemIcon>
                                <img src={watching} alt="watching" />
                            </ListItemIcon>
                            <ListItemText primary="Set as watching" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                            <ListItemIcon>
                                <img src={planning} alt="planning" />
                            </ListItemIcon>
                            <ListItemText primary="Set as planning" />
                            </StyledMenuItem>
                            <StyledMenuItem>
                            <ListItemIcon>
                                <img src={completed} alt="planning" />
                            </ListItemIcon>
                            <ListItemText primary="Set as completed" />
                            </StyledMenuItem>
                        </StyledMenu>
                      </div>
                </div>
                <div className="entry__description">
                    <span>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
                    <div dangerouslySetInnerHTML={{__html: anime.description}} />
                </div>
                  
                <div className="entry__short">
                  <div className="entry__wrapper">
                    {anime.nextAiringEpisode ? <p className="airing"><strong>Airing:</strong> Ep {anime.nextAiringEpisode.episode}: {timeUntilAiring}</p> : null}
                    <p><strong>Type:</strong> {type}</p>
                    <p><strong>Format:</strong> {anime.format}</p>
                    <p><strong>Status:</strong> {status}</p>
                    {anime.episodes ? <p><strong>Episodes:</strong> {anime.episodes}</p> : anime.nextAiringEpisode ? <p><strong>Episodes: </strong> {anime.nextAiringEpisode.episode - 1}</p> : null}
                    {anime.duration ? <p><strong>Duration:</strong> {anime.duration} min</p> : null}
                    {anime.season ? <p><strong>Season:</strong> {season} {anime.seasonYear}</p> : null}
                    <p><strong>Start date:</strong> {anime.startDate.day}/{anime.startDate.month}/{anime.startDate.year}</p>
                    <p><strong>Genres:</strong> {genres}</p>
                    <p><strong>Source:</strong> {source}</p>
                    <p><strong>Studio:</strong> {studios}</p>
                    {anime.averageScore ? <p><strong>Average score:</strong> {anime.averageScore}%</p> : null}
                  </div>
                </div>
                <div className="entry__info">
                  <div className="entry__card">
                    {characters[0].map((char) => (
                      <div className="entry__actor" key={char.id}>
                        <img src={char.image.large}></img>
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
