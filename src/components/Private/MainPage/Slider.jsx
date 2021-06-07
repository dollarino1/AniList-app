import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import React from 'react'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (props) => {
    const posters = props.trendingAnimes
    // poster.attributes.posterImage.original
    return (
        <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}>
          {posters.map(poster => <div data-src={poster.bannerImage} key={poster} />)}
      </AutoplaySlider>
    )
}
export default Slider