import React from "react";
import { useState, useEffect } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

export default function Questions({
  questions,
  loggedInUser,
  setLoggedInUser,
  setQuestions,
  setRanks,
}) {
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [isClickable, setIsClickable] = useState(true);
  const navigate = useNavigate();

  const quizData = questions[count];

  useEffect(() => {
    shuffleOptions();
  }, [count]);

  const shuffleOptions = () => {
    const allOptions = [...quizData.incorrect_answers, quizData.correct_answer];
    const shuffledOptions = shuffleArray(allOptions);
    setOptions(shuffledOptions);
  };
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleAnswer = (selectedOption, event) => {
    if (selectedOption === quizData.correct_answer) {
      setScore((score) => score + 10);
      console.log("Correct answer!");
    } else {
      console.log("Incorrect answer!");
    }
    if (count === 24) {
      event.target.style.backgroundColor = "#F0C330";
      setIsClickable(false);

      console.log(document.getElementsByClassName("option")[0]);
    } else {
      setCount((count) => count + 1);
    }
  };

  const handleSubmission = async () => {
    let sendData = { score: score, name: loggedInUser };
    fetch("http://localhost:5000/storedata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    })
      .then((res) => {})
      .catch((err) => {});

    const url = await fetch("http://localhost:5000/getdata");
    const fetchRanks = await url.json();
    setRanks(fetchRanks);

    setQuestions(null);
    setLoggedInUser(loggedInUser);
    navigate("/dashboard");
  };

  return (
    <div className="question">
      <h4 className="score">Score : {score}</h4>
      <h5>
        Ques : {count + 1}&nbsp;&nbsp;
        {/* &nbsp is providing space here i have
        used this because there is counter variable which is dynamic */}
        {quizData.question}
      </h5>
      <div className="option-div">
        {options.map((option, index) => (
          <span
            key={index}
            className="option"
            onClick={isClickable ? (e) => handleAnswer(option, e) : null}
          >
            {option}
          </span>
        ))}
      </div>
      {count === 24 && (
        <button
          type="button"
          onClick={handleSubmission}
          class="btn btn-success btn-lg"
        >
          Submit
        </button>
      )}
    </div>
  );
}
