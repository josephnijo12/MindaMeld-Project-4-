import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../../public/images/logo.png";
function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src="../../public/images/icon2.jpeg" alt="MINDAMELD TRIVIA" />
        </div>
        <div className="d-flex">
          <div className=" d-flex">
            <input type="text" placeholder="Enter Name" />
            <Link className="btn btn-success" to={""}>
              Play
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
