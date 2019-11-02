import React from 'react'
import { ReviewsContext } from '../../contexts/reviews'
import './_reviews-control.scss'

const ReviewsControl = () => {
  const { addReviews, resetReviews } = React.useContext(ReviewsContext)
  return (
    <aside className="control-panel">
      <h2>Control Panel</h2>
      <div className="reviews-control">
        <button onClick={() => addReviews(5)}>Add 5 reviews</button>
        <button onClick={() => addReviews(3)}>Add 3 reviews</button>
        <button onClick={resetReviews}>Reset reviews</button>
      </div>
    </aside>
  )
}

export default ReviewsControl
