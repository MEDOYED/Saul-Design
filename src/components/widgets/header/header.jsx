import HeaderDownload from "../../UI/buttons/header-download/header-download";
import CrossSectionLine from "../../UI/lines/cross-section-line/cross-section-line";

import headerLogo from "../../../assets/img/header/header__logo.svg";
import headerImg from "../../../assets/img/header/header__image.svg";
import cv from "../../../assets/img/files-to-download/plan.pdf";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header__nav">
            <div className="header__nav-logo">
              <span>
                <img src={headerLogo} alt="logo" />
              </span>
            </div>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <a href="#header">Home</a>
              </li>
              <li className="header__nav-item">
                <a href="#about">About Me</a>
              </li>
              <li className="header__nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <CrossSectionLine />
        <div className="container">
          <div className="header__content">
            <div className="header__content-text">
              <h1 className="header__content-title">
                <span>creative ui</span> <br />
                designer
              </h1>
              <ul className="header__content-list">
                <li className="header__content-item">
                  <a
                    className="header__content-btn-one button button--active"
                    href="#registration"
                  >
                    Hire me
                  </a>
                </li>
                <li className="header__content-item">
                  <a
                    className="header__content-btn-two button"
                    href={cv}
                    download="planZajenc.pdf"
                  >
                    Download CV
                    <HeaderDownload />
                  </a>
                </li>
              </ul>
            </div>
            <div classNameName="header__img">
              <img src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
