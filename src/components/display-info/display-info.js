import React from 'react'

import './display-info.styles.scss'

const DisplayInfo = ({ gif, title, trendDate }) => {
  return (
    <div className='display-info'>
      <p>{gif}</p>
      <p>GIF Title: {title}</p>
      <p>Trending Date: {trendDate}</p>
    </div>
  )
}

export default DisplayInfo
