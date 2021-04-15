import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";


const giphyFetch = new GiphyFetch("oMVmOJUnfMVVgmRjBL1CfhYYBk9cxjMd");

const GifContainer = ({ clickGif }) => {
  const fetchGifs = (offset) => 
    giphyFetch.trending({ offset, limit: 10}); // Implicit return, no curly braces
  
  const [width, setWidth] = useState(window.innerWidth);
  const [gifSize, setGifSize] = useState(3);

  return (
    <>
    <div>
      <select onChange={(e) => {
        const chosenSize = e.target.value;
        setGifSize(chosenSize);
        // setWidth(chosenSize);
      }}>
       <option value={3}>Big</option> 
       <option value={5}>Medium</option> 
       <option value={7}>Small</option> 
      </select>
      {console.log(gifSize)}
    </div>
   
      <Grid 
        onGifClick={clickGif}
        fetchGifs={fetchGifs}
        width={width}
        columns={gifSize}
        gutter={7}
      />
      <ResizeObserver 
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
      
    </>
  )
}

export default GifContainer
