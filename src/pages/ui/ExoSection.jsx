import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./exoz_section.css";

const ExoSection = () => {
  return (
    <section className="home">
      <Container>
        <h1 className="home__heading text-center">
          Exodus Bitcoin &
          <br />
          Crypto Wallet
        </h1>
        <p>
          Send, receive, and exchange Bitcoin and 200+ cryptocurrencies with
          ease on the world's leading <strong>Desktop, Mobile</strong> and
          <strong> Hardware</strong> crypto wallets
        </p>

        <div className="home__btn d-flex align-item-center text-center justify-content-center">
          <Link to="#" className="watch btn__home ">
            <i className="ri-play-mini-fill"></i>Watch video
          </Link>
          <Link to="#" className="get btn__home ">
            Get Exodus Now
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ExoSection;
