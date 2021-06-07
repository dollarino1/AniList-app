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
    return (
        <div>
            <div className='entry__banner'>
                <img src={anime.bannerImage} alt="banner" />
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
            </div>
            
        </div>
    )
}

export default AnimeEntry
