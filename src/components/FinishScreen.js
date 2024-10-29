function FinishScreen({ score, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (score / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage < 80) emoji = "🏁";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{score}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore">Highscore: {highScore} Points</p>
      <button
        className="btn btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
