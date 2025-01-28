import imgAboutMe from "../../../assets/img/footer/footer__about-me.svg";
import imgContact from "../../../assets/img/footer/footer__contact.svg";
import imgHome from "../../../assets/img/footer/footer__home.svg";
import facebookIcon from "../../../assets/img/footer/facebook.svg";
import instagramIcon from "../../../assets/img/footer/instagram.svg";
import twitterIcon from "../../../assets/img/footer/twitter.svg";
import youtubeIcon from "../../../assets/img/footer/youtube.svg";

import "./contact-section.css";

const ContactSection = () => {
  return (
    <>
      <footer className="contact" id="contact">
        <div className="container">
          <ul className="contact__list">
            <li className="contact__item">
              <img src={imgHome} alt="" />
              <a href="#header">Home</a>
            </li>

            <li className="contact__item">
              <img src={imgAboutMe} alt="" />
              <a href="#about">About me</a>
            </li>

            <li className="contact__item">
              <img src={imgContact} alt="" />
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ul className="contact__socials-list">
            <li className="contact__socials-item">
              <a className="contact__socials-сircle">
                <img src={facebookIcon} alt="" />
              </a>
            </li>

            <li className="contact__socials-item">
              <a href="#" className="contact__socials-сircle">
                <img src={instagramIcon} alt="инстаграм" />
              </a>
            </li>

            <li className="contact__socials-item">
              <a href="#" className="contact__socials-сircle">
                <img src={twitterIcon} alt="" />
              </a>
            </li>

            <li className="contact__socials-item">
              <a href="#" className="contact__socials-сircle">
                <img src={youtubeIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
