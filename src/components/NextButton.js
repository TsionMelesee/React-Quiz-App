function NextButton({ dispatch, answer, index, questionLength }) {
  const hasAns = answer !== null;
  if (index < questionLength - 1) {
    return (
      <div>
        {hasAns ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
  if (index === questionLength - 1) {
    return (
      <div>
        {hasAns ? (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finish" })}
          >
            Finish
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NextButton;
