import { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Ranks from "./Ranks";
import Quiz from "./Quiz";

function Dashboard({ loggedInUser, setLoggedInUser }) {
  const [ranks, setRanks] = useState([]);

  const getRanks = async () => {
    const url = await fetch("http://localhost:5001/getdata");
    const fetchRanks = await url.json();
    setRanks(fetchRanks);
  };

  useEffect(() => {
    //getRanks();
  }, []);

  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <section className="dashboard container-fluid">
        <div className="row border-style">
          <div className="col-md-3 top-rank ">
            <Ranks
              ranks={ranks}
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          </div>
          <div className="col-md-9 quiz-cat ">
            <Quiz
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              setRanks={setRanks}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
