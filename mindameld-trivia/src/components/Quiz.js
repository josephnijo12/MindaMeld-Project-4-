import React, { useState } from "react";
import "./Quiz.css";
import Questions from "./Questions";

export default function Quiz({ loggedInUser, setLoggedInUser  }) {
  const [questions, setQuestions] = useState(null);

  const handleStartQuiz = async () => {
    const url = await fetch(
      "https://opentdb.com/api.php?amount=25&type=multiple"
    );
    const data = await url.json();

    setQuestions(data.results);
  };

  return (
    <>
      <div className="text-center quiz">
        <h4>Quizz</h4>
        {questions && (
          <div>
            <Questions
              questions={questions}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              setQuestions={setQuestions}
            />
          </div>
        )}
        {!questions && (
          <div className="start-ask">
            <h3>"Challenge your Mind, Master your Knowledge!"</h3>
            <button
              onClick={handleStartQuiz}
              className="btn btn-outline-warning"
              style={{ margin: "5% 0 0 0" }}
            >
              P L A Y
            </button>
          </div>
        )}
      </div>
    </>
  );
}
