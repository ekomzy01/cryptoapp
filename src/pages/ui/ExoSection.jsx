import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import bgBanner from "../../assests/images/ramp-banner-background.png";
import bgBannerSm from "../../assests/images/ramp-banner-background-sm.png";
import bgDevices from "../../assests/images/ramp-banner-devices.png";
import bgDevicesSm from "../../assests/images/ramp-banner-devices-sm.png";
import "./exoz_section.css";

const ExoSection = () => {
  return (
    <section className="home">
      <Container>
        <div className="home__content">
          <h1 className="home__heading text-center">
            Exodus Bitcoin &
            <br />
            Crypto Wallet
          </h1>
          <p className="home_text">
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
        </div>
        <div className="home__more">
          <img src={bgBanner} alt="" className="w-100" />
          <img src={bgBannerSm} alt="" className="bg-sm" />
          <div className="home__more-content d-flex justify-content-center align-item-center">
            <div className="home__more-content-text">
              <h4>Buy Crypto with USD, EUR, and GBR 0% fees.</h4>
              <p className="home__more-text">
                Pay by credit/debit card, bank transfer, or Apple Pay and enjoy
                0% fees on Bitcoin and select assets for a limited time.
              </p>
            </div>
            <img src={bgDevices} alt="" className="bg__devices w-56" />
            <img src={bgDevicesSm} alt="" className="bg-sm w-56" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExoSection;
