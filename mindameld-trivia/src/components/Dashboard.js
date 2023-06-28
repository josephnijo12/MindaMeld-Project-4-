import { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Ranks from "./Ranks";
import Quiz from "./Quiz";
import Questions from "./Questions";

function Dashboard({ loggedInUser, setLoggedInUser }) {

  // If logged in user does not exists then we want only show the nav bar and create div so the user knows he is not logged in and if they do exist then we are going to show the quiz which is the full dashboard
  if (!loggedInUser) {
    return (
      <div>
        <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <div className="not-logged-in">SIGN IN BY ENTERING!</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <section className="dashboard container-fluid">
        <div className="row border-style">
          <div className="col-md-3 top-rank ">
            <Ranks
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </div>
          <div className="col-md-9 quiz-cat ">
            <Quiz
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
