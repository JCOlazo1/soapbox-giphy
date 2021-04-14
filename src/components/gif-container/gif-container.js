import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("oMVmOJUnfMVVgmRjBL1CfhYYBk9cxjMd");

const GifContainer = ({ clickGif }) => {
  const fetchGifs = (offset) => 
    giphyFetch.trending({ offset, limit: 10}); // Implicit return, no curly braces
  
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <Grid 
        onGifClick={clickGif}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
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
