import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" />
        </div>
        <i className="fa fa-bars menu-toggle"></i>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/Automobile">Automobiles</Link>
          </li>
          <li>
            <Link to="/Service">Services and offers</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>
        <div className="search">
          <form>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </form>
        </div>
      </header>
    </>
  );
}
export default Nav;
