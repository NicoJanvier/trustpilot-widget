import React from 'react'

const ImageRating = ({ starRating, ...props }) => {
  const url = `http://cdn.trustpilot.net/brand-assets/1.7.0/stars-${starRating}.svg`
  return (
    <img src={url} alt={`Rating Stars ${starRating}`} {...props}/>
  )
}

export default ImageRating
