import React, { useState } from 'react';
import { Gif } from '@giphy/react-components';
import GifContainer from './components/gif-container/gif-container'
import VisibilityToggle from './components/visibility-toggle/visibility-toggle'

import './App.scss';

function App() {
  // useState variables
  const [gifs, setGifs] = useState(); // stores the gifs?

  // uses VisibilityToggle to show/hide the gifs
  const [GifContainerComponent, setToggle] = VisibilityToggle(<GifContainer
    gifClick={(gif, e) => {
      console.log("gif", gif);
      e.preventDefault();
      setGifs(gif);
    }}
  />, false);

  // make logic for visible toggle to work:
  // also make it so "show me the gifs" turns to "hide the gifs"

  const test = () => {
    console.log(gifs)
  }

  return (
    <div className="App">

      <h1 className='title'>Grid-splosion!</h1>
      <button className='gif-button' onClick={setToggle}>SHOW ME THE GIFS!!</button>
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
          <Gif gif={gifs} width={200} />
        </div>
      )}
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

//https://api.giphy.com/v1/gifs/trending?api_key=oMVmOJUnfMVVgmRjBL1CfhYYBk9cxjMd&limit=25&rating=g

// used npm install @giphy/js-fetch-api
// used npm install @giphy/react-components
// used npm install react-resize-observer
// used npm install sass
*/