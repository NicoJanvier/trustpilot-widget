import React from 'react'
import { ReviewsContext } from '../../contexts/reviews'
import Slider from '../slider'
import Review from '../review'
import ImageRating from '../image-rating'
import useScores from './useScores'
import './_widget.scss'

const Widget = () => {
  const { reviews } = React.useContext(ReviewsContext)
  const { floorAverage, displayScore, total, wordedScore } = useScores(reviews);
  return (
    <article className="widget">
      <h1>Check our score on TrustPilot</h1>
      <div className="widget__rating">
        {wordedScore}
        <ImageRating starRating={floorAverage} />
      </div>
      <p className="widget__details">
        {displayScore}/5 based on {total} reviews on
        <img src="http://cdn.trustpilot.net/brand-assets/1.7.0/logo-black.svg" alt="TrustPilot logo"/>
      </p>
      <Slider className="widget__reviews">
        {reviews.map((review, idx) => <Review key={idx} {...review} />)}
      </Slider>
    </article>
  )
}

export default Widget
