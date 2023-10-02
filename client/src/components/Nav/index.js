import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <div className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </div>
          <div className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <div className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </div>
          
          <div className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </div>
          
        </ul>
      );
    }
  }

  return (
    <div className="navbar-container">
    <header className="flex-row align-middle px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🍃</span>
          GreenTech
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
    </div>
  );
}

export default Nav;
