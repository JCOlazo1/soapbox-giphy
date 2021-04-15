import React, { useState } from 'react';
import { Gif } from '@giphy/react-components';
import GifContainer from './components/gif-container/gif-container'
import VisibilityToggle from './components/visibility-toggle/visibility-toggle'
import DisplayInfo from './components/display-info/display-info'

import './App.scss';


function App() {
  // useState variables
  const [gifs, setGifs] = useState(); // from GifContainer, holds gifs information
  const [selectedGif, setSelectedGif] = useState([]);

  // uses VisibilityToggle to show/hide the gifs -- also doubles as a refresh tool
  const [GifContainerComponent, setToggle] = VisibilityToggle(<GifContainer
    clickGif={(gif, e) => {
      console.log("gif", gif); // the information about a selected gif is stored in 'gif' 
      e.preventDefault(); // this preventDefault stops the gif from going to the gif-link
      setGifs(gif);
      setSelectedGif(gif);
    }}
  />, false);

  // make logic for visible toggle to work:
  // also make it so "show me the gifs" turns to "hide the gifs"
  
  return (
    <div className="App">
      <h1 className='title'>Grid-splosion!</h1>
      <button className='gif-button' onClick={setToggle}>SHOW ME THE GIFS!!</button>
      <div className='display-info'>
        <DisplayInfo 
          title={selectedGif.title}
          trendDate={selectedGif.trending_datetime}
        />
      </div>
      
     {GifContainerComponent}
      {/* click outside the gif to return to grid view */}
      {gifs && (
        <div 
          className='gif-grid'
          onClick={e => {
            e.preventDefault();
            setGifs(undefined);
          }} 
        >
          {/* click a specific grid and view info about it */}
          <Gif 
            className='gif-info'
            gif={gifs} 
            width={450} 
            onGifRightClick={(gif, e) => {
              e.preventDefault();
              return(
                <div>
                  <p>Title: {gif.title}</p>
                  <p>Date Trending: {gif.trending_datetime}</p>
                </div>
              );
            }}
          /> 
        </div>
      )}
    </div>
  );
}

// why is <Gif> being called multiple times? (initially 3)
//--> 'isHovered' fires everytime mouse hovers over gif --> still doesn't answer the first 3 times
const Overlay = ({ gif }) => {
  return(
    <div>
      <p>Title: {gif}</p>
      <p>Trending Date: {gif.trending_datetime}</p>
      {console.log("Below is the overlay info")}
      {console.log(gif.title)}
    </div>
  );
}

export default App;

// API given: https://developers.giphy.com
// axios installed (npm install axios)

/* TODO:
  Monday: 
    - plan to deploy on Wednesday
    - learn CSS
    - learn how to pull project from GitHub and use
    - study CRWN-CLXTHING CSS code and try to implement in codesandbox
    - start some of it today -- pull info from API, etc.
  
  Tuesday:
    - create repo on GitHub
    - start by displaying any info from API w/ axios
    - use CSS to make the webpage look like how you want it
    - implement logic
  
    Wednesday: 
    - finishing touches
    - create detailed instructions on how to download & use app from GitHub
    - email Chris



// oMVmOJUnfMVVgmRjBL1CfhYYBk9cxjMd -- API key
// CA84KcWFuXup9k7kNWe9vg0uKhane8fe -- SDK key

// https://api.giphy.com/v1/gifs/trending?api_key=oMVmOJUnfMVVgmRjBL1CfhYYBk9cxjMd&limit=25&rating=g

// used npm install @giphy/js-fetch-api
// used npm install @giphy/react-components
// used npm install react-resize-observer
// used npm install sass
*/