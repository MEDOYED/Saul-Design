import { useRef, useState } from "react";

import send from "../../../assets/img/registration/reg-send.svg";
import img1 from "../../../assets/img/registration/registration__image.svg";

import "./registration-section.css";

const RegistrationSection = () => {
  // анимация самолетика при нажатии на кнопку
  // document
  //   .querySelector(".registration__form-send")
  //   .addEventListener("click", function () {
  //     var plane = document.querySelector(".registration-plane");
  //     plane.classList.add("plane-animation");
  //     plane.removeEventListener("click", arguments.callee);
  //     plane.addEventListener("animationend", function () {
  //       plane.classList.remove("plane-animation");
  //       plane.addEventListener("click", arguments.callee);
  //     });
  //   });

  const [isAnimating, setIsAnimating] = useState(false);
  const btnRef = useRef(null);

  const planeFly = () => {
    if (isAnimating === true) {
      btnRef.current.classList.add("plane-animation");
    } else {
      btnRef.current.classList.remove("plane-animation");
    }
  };

  const handleBtnSendClick = e => {
    e.preventDefault();
    setIsAnimating(true);
    planeFly();
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
    planeFly();
  };

  return (
    <>
      <section class="registration" id="registration">
        <div class="container">
          <div class="registration__inner">
            <div class="registration__main">
              <h2 class="registration__main-title title">
                Got a project in <br />
                <span class="registration__title title-blue">
                  mind?
                </span>
              </h2>
              <div class="registraition__main-image">
                <span>
                  <img src={img1} alt="" />
                </span>
              </div>
            </div>

            <form
              class="registration__form"
              id="registration__form"
              action="#"
              method="post"
            >
              <div class="registration__form-inner">
                <p class="registration__form-username">
                  <label
                    class="registration__form-label"
                    for="username"
                  >
                    Your name
                  </label>
                  <input
                    class="registration__form-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Name"
                    required
                  />
                </p>

                <p class="registration__form-email">
                  <label class="registration__form-label" for="email">
                    Your email
                  </label>
                  <input
                    class="registration__form-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </p>
              </div>

              <p class="registration__form-message">
                <label class="registration__form-label" for="message">
                  Your Message
                </label>
                <textarea
                  class="registration__form-textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </p>
              <button
                class="registration__form-send button button--active"
                id="sendButton"
                type="submit"
                form="registration__form"
                onClick={handleBtnSendClick}
              >
                Send Message
                <div className="registration-plane-btn">
                  <img
                    className="registration-plane"
                    ref={btnRef}
                    src={send}
                    alt=""
                    onAnimationEnd={handleAnimationEnd}
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
        <div class="line"></div>
      </section>
    </>
  );
};

export default RegistrationSection;
