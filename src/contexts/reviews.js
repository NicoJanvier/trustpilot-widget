import React from "react";
import { staticReviews } from '../data'

const ReviewsContext = React.createContext();
function ReviewsProvider({ children }) {
  const [reviews, setState] = React.useState(staticReviews);
  const addReviews = (n) => setState([...reviews, ...staticReviews.slice(0, n)]);
  const resetReviews = () => setState(staticReviews);
  return (
    <ReviewsContext.Provider value={{reviews, addReviews, resetReviews}}>
      {children}
    </ReviewsContext.Provider>
  );
}
export { ReviewsProvider, ReviewsContext };
