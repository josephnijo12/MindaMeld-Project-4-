import { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Ranks from "./Ranks";
import Quiz from "./Quiz";
import Questions from "./Questions";

function Dashboard({ loggedInUser, setLoggedInUser }) {


  return (
    <div>
      <h1>WTHIS IS WOKRING</h1>
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
