import send from "../../../assets/img/registration/reg-send.svg";
import img1 from "../../../assets/img/registration/registration__image.svg";

import "./registration-section.css";

const RegistrationSection = () => {
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
              >
                <span>Send Message</span>
                <span>
                  <img src={send} alt="" />
                </span>
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
