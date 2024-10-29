function Options({ question, dispatch, answer }) {
  const hasAns = answer !== null;
  return (
    <div className="options">
      {question.options.map((op, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAns ? (i === question.correctOption ? "correct" : "wrong") : ""
          }`}
          key={op}
          disabled={hasAns}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default Options;
