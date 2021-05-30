import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import React from 'react'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (props) => {
    const posters = props.animePosters
    return (
        <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}>
          {posters.map(poster => <div data-src={poster.attributes.posterImage.original} />)}
      </AutoplaySlider>
    )
}
export default Slider