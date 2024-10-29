function Progress({ index, questionLength, score, maxPossiblePoint, answer }) {
  return (
    <header className="progress">
      <progress max={questionLength} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {questionLength}
      </p>
      <p>
        <strong>
          {score}/{maxPossiblePoint}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
