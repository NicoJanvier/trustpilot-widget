const RATINGS = {
  1: "Bad",
  2: "Poor",
  3: "Average",
  4: "Great",
  5: "Excellent"
}

const useScores = (reviews = []) => {
  const total = reviews.length;
  const sum = reviews.map(({ starRating }) => parseInt(starRating, 10)).reduce((s, c) => s + c);
  const average = sum / total;
  const floorAverage = Math.floor(average);
  const displayScore = Math.round(average) === average ? average : average.toFixed(1);
  const wordedScore = RATINGS[floorAverage]
  return {
    floorAverage,
    displayScore,
    wordedScore,
    total,
  }
}

export default useScores;
