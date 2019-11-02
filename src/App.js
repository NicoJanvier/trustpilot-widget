import React from 'react';
import './App.scss';
import Widget from './components/widget';
import { ReviewsProvider } from './contexts/reviews';
import ReviewsControl from './components/reviews-control';

function App() {
  return (
    <ReviewsProvider>
      <div className="App">
        <Widget />
        <hr/>
        <ReviewsControl />
        <p className="footer">This widget is fully responsive. Try resizing you window, even after changing pages!</p>
      </div>
    </ReviewsProvider>
  );
}

export default App;
