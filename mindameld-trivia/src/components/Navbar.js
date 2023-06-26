import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo.png";

function Navbar({ loggedInUser, setLoggedInUser }) {
  const navigate = useNavigate();

  const playButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    setLoggedInUser(data.username);
    navigate("/dashboard");
  };

  return (
    <nav className="  navbar " style={{ background: "rgba(0,0,0,0.7)" }}>
      <div className="container-fluid">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="50px" />
          <span style={{ margin: "0px 20px", color: "#ddd" }}>
            MINDAMELD-TRIVIA
          </span>
          {loggedInUser && (
            <span className="navbar-message" style={{ color: "#fff099" }}>
              {`Welcome Test Your Knowledge Against the World:  `}
              {loggedInUser}
              {` 👋`}
            </span>
          )}
        </div>
        <div className="d-flex">
          {!loggedInUser && (
            <div className=" d-flex">
              <form onSubmit={playButton} className="d-flex">
                <input type="text" name="username" required />
                <button className="btn btn-success" type="submit">
                  Enter Name
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
