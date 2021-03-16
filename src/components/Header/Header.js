import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <a href="/">
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "190px",
            paddingTop: "10px",
          }}
          src={logo}
          alt=""
        />
      </a>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/shop">
                  <b>Shop</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/order">
                  <b>Order</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="inventory">
                  <b>Inventory</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
