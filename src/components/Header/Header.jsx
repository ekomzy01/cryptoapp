import React from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Nav__Link = [
    {
      display: "Product",
      url: "/desktop",
    },
    {
      display: "Support",
      url: "",
    },
    {
      display: "Crypto News",
      url: "",
    },
    {
      display: "Company",
      url: "",
    },
  ];

  return (
    <header className="header">
      <Container>
        <nav className="navigation d-flex align-item-center justify-content-around">
          <div className="logo d-flex align-item-center">
            <span></span>
            <h2 className="d-flex">
              <NavLink to="/">Exodus</NavLink>
            </h2>
          </div>

          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                {Nav__Link.map((item, index) => (
                  <NavLink to={item.url} key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </li>
            </ul>
          </div>

          <button className="header__btn">Download</button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
