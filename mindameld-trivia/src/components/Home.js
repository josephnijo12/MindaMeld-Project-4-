import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container intro">
        <h1>
          It's time to <br /> Questionnaire
        </h1>
        <p>Play to test your knowledge!</p>
        <Link className="btn btn-lg btn-success" to={""}>
          Play
        </Link>
      </div>
    </div>
  );
}

export default Home;
