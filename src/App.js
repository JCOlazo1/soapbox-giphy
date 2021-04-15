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
            gif={gifs} 
            width={450} 
          /> 
        </div>
      )}
    </div>
  );
}


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

/*
// API given: https://developers.giphy.com
// axios installed (npm install axios)

// used npm install @giphy/js-fetch-api
// used npm install @giphy/react-components
// used npm install react-resize-observer
// used npm install sass
*/