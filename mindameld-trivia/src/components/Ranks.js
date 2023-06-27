import React, { useEffect, useState } from "react";
import "./Ranks.css";

export default function Ranks({ }) {

  const [leaderBoard, setLeaderBoard] = useState()
  useEffect(() => {
    const leaderBoardData = await fetchScoreData()
  })
  const fetchScoreData = async () => {
    const res = await fetch('https://649a246479fbe9bcf8404f40.mockapi.io/api/highscores', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    const data = await res.json()
    setLeaderBoard(data)
    console.log(leaderBoard)
  }
  return (
    <div
      className="text-center"
      style={{
        margin: "50px 0px 0px 0px",
      }}
    >
      <h3>Top 10 Ranks</h3>

      <div style={{ margin: "25px 0 0 0" }}>
        <div
          style={{
            margin: "0 0 0 13%",
            width: "85%",
            height: "35px",
          }}
        >
          <div className="rank-title ">Rank</div>
          <div className="rank-title rank-title2">Score</div>
        </div>
        <ol className="list-group list-group-numbered">
          {/* {leaderBoard.map((score) => (
          <li className="list-group-item d-flex justify-content-between align-items-start no-border">
            <div className="ms-2 me-auto">{score.name.toUpperCase()}</div>
            <span className="badge rounded-pill">{obj.score}</span>
            </li>
          ))} */}
        </ol>
      </div>
    </div>
  );
}
