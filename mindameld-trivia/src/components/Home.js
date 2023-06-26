import Navbar from "./Navbar";
import "./Home.css";

function Home({ loggedInUser, setLoggedInUser }) {
  return (
    <div>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <div className="container-fluid intro">
        <h1>
          It's time to <br /> questionnaire
        </h1>
        <h4>Test your knowledge!{loggedInUser}</h4>
      </div>
    </div>
  );
}

export default Home;
