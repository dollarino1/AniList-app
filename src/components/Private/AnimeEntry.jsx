import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';

const AnimeEntry = ({anime}) => {
    return (
        <div>
            <div className='entry__banner'>
                <img src={anime.bannerImage} alt="banner" />
            </div>
            
            <div className="entry__block">
                <div className="entry__imageblock">
                    <img src={anime.coverImage.extraLarge} alt="cover" />
                    <ButtonGroup variant='contained' color="secondary" variant="outlined">
                        <Button>Set as watching</Button>
                        <Button>Set as Planning</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
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
