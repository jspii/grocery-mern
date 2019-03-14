import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../Auth/SignOut";

const Navigation = () => (
  <>
    <nav>
      <div className="nav-wrapper green accent-4">
        <div className="container">
          <Link to="/" className="brand-logo">
            Grocerme
          </Link>
          <ul className="right">
            <li>
              <a href="https://github.com">Github</a>
            </li>
            <SignOut />
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navigation;
