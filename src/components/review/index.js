import React from 'react'
import ImageRating from '../image-rating'
import './_review.scss'

const Review = ({
  fullName,
  location,
  reviewTitle,
  reviewBody,
  starRating,
}) => {
  return (
    <div className="review">
      <ImageRating {...{ starRating }} className="image-rating" />
      <p className="review__title clamp clamp--2">{reviewTitle}</p>
      <p className="review__body clamp clamp--5">{reviewBody}</p>
      <p className="review__name">
        {fullName}
        {location &&
          <span className="review__location">, {location}</span>
        }
      </p>
    </div>
  )
}

export default Review
