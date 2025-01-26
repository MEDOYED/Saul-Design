import Header from "./components/widgets/header/header";
import AboutSection from "./components/widgets/about-section/about-section";
import CrossSectionLine from "./components/UI/lines/cross-section-line/cross-section-line";

import "./App.css";

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <CrossSectionLine />
        <AboutSection />
        <CrossSectionLine />

        <section class="works" id="works">
          <div class="container">
            <h2 class="works__title title">
              My recent <span class="title-blue">works</span>
            </h2>

            <div class="works__button-box">
              <button
                class="works__button button button--active"
                type="button"
                data-filter="all"
              >
                All
              </button>
              <button
                class="works__button button"
                type="button"
                data-filter=".category-a"
              >
                UI
              </button>
              <button
                class="works__button button"
                type="button"
                data-filter=".category-b"
              >
                UX
              </button>
              <button
                class="works__button button"
                type="button"
                data-filter=".category-c"
              >
                Web Design
              </button>
            </div>

            <ul class="works__list target">
              <li class="mix category-a works__item">
                <a href="#" class="works__link">
                  <div class="works__image-box">
                    <img
                      src="./src/img/works/1.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </a>
              </li>

              <li class="mix category-b works__item">
                <a href="#" class="works__link">
                  <div class="works__image-box">
                    <img
                      src="./src/img/works/2.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </a>
              </li>

              <li class="mix category-c works__item">
                <a href="#" class="works__link">
                  <div class="works__image-box">
                    <img
                      src="./src/img/works/3.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>

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
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="257" height="368" fill="none">
                      <ellipse cx="95" cy="356" fill="#000" fill-opacity=".5" rx="95" ry="12" />
                      <rect width="45.031" height="92.944" x="119.196" y="255.056" fill="#00ADB5" rx="3.515" />
                      <rect width="45.031" height="92.944" x="119.196" y="255.056" stroke="#000" stroke-linejoin="round" stroke-width="1.645" rx="3.515" />
                      <rect width="45.031" height="66.105" x="1.395" y="281.895" fill="#EEE" rx="3.515" />
                      <rect width="45.031" height="66.105" x="1.395" y="281.895" stroke="#000" stroke-linejoin="round" stroke-width="1.645" rx="3.515" />
                      <rect width="45.031" height="195.974" x="210.338" y="152.026" fill="#00ADB5" rx="3.515" />
                      <rect width="45.031" height="195.974" x="210.338" y="152.026" stroke="#000" stroke-linejoin="round" stroke-width="1.645" rx="3.515" />
                      <path fill="#00ADB5" d="M61.16 128.16h46.3s-7.38 67.44-17.42 78.49c-10.04 11.06-62.6 41.38-62.6 41.38l-17.7-10.86 33-51.97s-3.63-20.27 18.42-57.04Z" />
                      <path stroke="#000" stroke-width="1.399" d="M107.46 128.16s-7.38 67.44-17.42 78.49c-10.04 11.06-62.6 41.38-62.6 41.38l-17.7-10.86 33-51.97s-3.63-20.27 18.42-57.04h46.3Z" />
                      <path fill="#EEE" d="M28.19 247.42 9.74 237.17.4 247.22s15.74 9.12 26.72 12.7l-4.65-6.13 5.72-6.37Z" />
                      <path stroke="#000" stroke-linejoin="round" stroke-width="1.399" d="m28.19 247.42-5.72 6.37 4.65 6.13C16.14 256.34.4 247.22.4 247.22l9.34-10.05 18.45 10.25Z" />
                      <path fill="#00ADB5" d="m61.36 127.18 50.59-.07s28.12 24.73 31.66 39.24c3.55 14.51-.49 67.17-.49 67.17l-20.45 9.04-21.11-55.62s-22.07-20.9-40.2-59.76Z" />
                      <path stroke="#000" stroke-width="1.399" d="M111.95 127.11s28.12 24.73 31.66 39.24c3.55 14.51-.49 67.17-.49 67.17l-20.45 9.04-21.11-55.62s-22.07-20.9-40.2-59.76l50.59-.07Z" />
                      <mask id="a" fill="#fff">
                        <path
                          fill-rule="evenodd"
                          d="M105.736 44.685a10.538 10.538 0 0 0 3.246-1.886c7.548-6.43 4.311-16.132-.256-21.183-4.568-5.05-32.512-3.036-19.33 20.363.055.034.112.067.17.101 1.473 4.69.23 8.712-1.26 13.538-.61 1.968-1.259 4.07-1.782 6.406l13.981-1.001c3.842-5.218 5.299-10.478 5.231-16.338Z"
                          clip-rule="evenodd"
                        />
                      </mask>
                      <path
                        fill="#F5B9AB"
                        fill-rule="evenodd"
                        d="M105.736 44.685a10.538 10.538 0 0 0 3.246-1.886c7.548-6.43 4.311-16.132-.256-21.183-4.568-5.05-32.512-3.036-19.33 20.363.055.034.112.067.17.101 1.473 4.69.23 8.712-1.26 13.538-.61 1.968-1.259 4.07-1.782 6.406l13.981-1.001c3.842-5.218 5.299-10.478 5.231-16.338Z"
                        clip-rule="evenodd"
                        mask="url(#a)"
                      />
                      <path
                        fill="#000"
                        d="M105.454 43.912q1.669-.609 2.995-1.739 4.84-4.123 4.131-10.39-.605-5.347-4.464-9.615-1.567-1.732-6.233-1.97-5.046-.257-9.127 1.674-4.68 2.216-5.745 6.54-1.312 5.33 3.101 13.163l-.716.404.42-.707.17.101q.13.078.224.197.095.119.14.263 1.55 4.934-1.26 14.028-1.247 4.04-1.764 6.343l-.802-.18-.059-.82 13.981-1.002.059.82-.663-.487q5.174-7.026 5.071-15.84-.001-.064.009-.127.009-.063.027-.124.019-.06.046-.117.028-.058.064-.11.036-.052.08-.098.043-.046.094-.085.05-.039.106-.07.055-.03.115-.052Zm.563 1.545-.281-.772.822-.01q.11 9.366-5.391 16.835-.107.146-.265.233-.159.087-.339.1l-13.98 1.002q-.121.008-.239-.018-.079-.018-.153-.05-.074-.033-.14-.08-.067-.047-.123-.105-.055-.059-.099-.127-.043-.069-.072-.144-.03-.076-.043-.156-.014-.08-.012-.16.002-.082.02-.16.53-2.368 1.797-6.47 2.659-8.603 1.262-13.049l.785-.246-.42.707-.17-.101q-.189-.112-.297-.303-4.733-8.402-3.265-14.364 1.252-5.084 6.639-7.633 4.454-2.11 9.913-1.83 5.347.272 7.37 2.509 4.214 4.66 4.878 10.533.808 7.136-4.699 11.827-1.551 1.322-3.498 2.032Z"
                      />
                      <path fill="#00ADB5" d="M86.88 27.84c-2.19 3.05.17 10.57 1.91 12.45-14.41-8-5.29-26.03-.84-22.74.72-6.67 8.37-9.02 13.59-3.39 13.08-10.56 13.77 7.44 9.15 10.18-4.62 2.73-10.22.13-13.12 1.54-2.91 1.41-4.7 9.96-5.64 5.21-.94-4.74-2.31-7.05-5.05-3.25Z" />
                      <path stroke="#000" stroke-width="1.645" d="M86.88 27.84c2.74-3.8 4.11-1.49 5.05 3.25.94 4.75 2.73-3.8 5.64-5.21 2.9-1.41 8.5 1.19 13.12-1.54 4.62-2.74 3.93-20.74-9.15-10.18-5.22-5.63-12.87-3.28-13.59 3.39-4.45-3.29-13.57 14.74.84 22.74-1.74-1.88-4.1-9.4-1.91-12.45Z" />
                      <path fill="#EEE" d="M113.64 128.26c15.08-10.03 8.78-44.68 6.64-54.54-.39-1.77-.96-3.47-1.65-5.15C112.93 54.8 98.87 43.7 85.4 50.1c-28.69 13.63-24.42 57.12-24.15 78.49l52.39-.33Z" />
                      <path stroke="#000" stroke-linejoin="round" stroke-width="1.645" d="m113.64 128.26-52.39.33c-.27-21.38-4.54-64.88 24.17-78.5 13.47-6.39 27.51 4.71 33.21 18.48.69 1.68 1.27 3.4 1.65 5.18 2.15 9.88 8.42 44.49-6.64 54.51Z" />
                      <path fill="#EEE" fill-rule="evenodd" d="m146.89 66.6 12.1 14.77s-38.13 40.12-55.24 41.64c-9.4.83-27.89-27.88-27.89-27.88L92.93 68.6l13.18 26.53 40.78-28.53Z" />
                      <path stroke="#000" stroke-width="1.645" d="M93.83 70.53 106 94.31l40.89-27.71 12.1 14.77s-35.94 39.87-56.95 41.74" />
                      <path fill="#F5B9AB" d="m150.91 63.93-4.79 3.08 12.03 15.24 3.79-3.06c4.02-3.26 4.66-9.16 1.43-13.21a9.443 9.443 0 0 0-12.46-2.05Z" />
                      <path stroke="#000" stroke-linejoin="round" stroke-width="1.645" d="M150.91 63.93a9.443 9.443 0 0 1 12.46 2.05c3.23 4.05 2.59 9.95-1.43 13.21l-3.79 3.06-12.03-15.24 4.79-3.08Z" />
                      <path fill="#EEE" d="m143.36 231.6-20.69 10.79 3.56 13.48 27.63-17.01-8.13 1.1-2.37-8.36Z" />
                      <path stroke="#000" stroke-linejoin="round" stroke-width="1.399" d="m143.36 231.6 2.37 8.36 8.13-1.1-27.63 17.01-3.56-13.48 20.69-10.79Z" />
                    </svg> */}
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
                    <label
                      class="registration__form-label"
                      for="email"
                    >
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
                  <label
                    class="registration__form-label"
                    for="message"
                  >
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
                    {/* <svg class="registration-plane" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <desc>Created with Pixso.</desc>
                      <defs>
                        <clipPath id="clip1_4350">
                          <rect width="24.000000" height="24.000000" transform="translate(0.000000 -0.500000)" fill="white" fill-opacity="0" />
                        </clipPath>
                      </defs>
                      <rect width="24.000000" height="24.000000" transform="translate(0.000000 -0.500000)" fill="#FFFFFF" fill-opacity="0" />
                      <g clip-path="url(#clip1_4350)">
                        <path d="M22 1.5L11 12.5" stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        <path d="M15 21.5L11 12.5L2 8.5L22 1.5L15 21.5Z" stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                      </g>
                    </svg> */}
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div class="line"></div>
        </section>

        <footer class="contact" id="contact">
          <div class="container">
            <ul class="contact__list">
              <li class="contact__item">
                {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <clipPath id="clip1_4420">
                      <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                    </clipPath>
                  </defs>
                  <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                  <g clip-path="url(#clip1_4420)">
                    <path d="M12 2L21 9L21 20C21 20.53 20.78 21.03 20.41 21.41C20.03 21.78 19.53 22 19 22L5 22C4.46 22 3.96 21.78 3.58 21.41C3.21 21.03 3 20.53 3 20L3 9L12 2Z" stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                    <path d="M9 22L9 12L15 12L15 22" stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                  </g>
                </svg> */}
                <a href="#header">Home</a>
              </li>

              <li class="contact__item">
                {/* <img src="./src/img/footer/footer__about-me.svg" alt="">  */}
                {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip1_4425">
                      <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                    </clipPath>
                  </defs>
                  <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                  <g clip-path="url(#clip1_4425)">
                    <path d="M20 21L20 19C20 17.93 19.57 16.92 18.82 16.17C18.07 15.42 17.06 15 16 15L8 15C6.93 15 5.92 15.42 5.17 16.17C4.42 16.92 4 17.93 4 19L4 " stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                    <path d="M12 11C9.79 11 8 9.2 8 7C8 4.79 9.79 3 12 3C14.2 3 16 4.79 16 7C16 9.2 14.2 11 12 11Z" stroke="#EEEEEE" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                  </g>
                </svg> */}

                <a href="#about">About me</a>
              </li>

              <li class="contact__item">
                {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip1_4430">
                      <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                    </clipPath>
                  </defs>
                  <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                  <g clip-path="url(#clip1_4430)">
                    <path
                      d="M22 19.92C22 20.19 21.94 20.47 21.83 20.72C21.72 20.98 21.55 21.21 21.35 21.4C21.14 21.59 20.9 21.73 20.64 21.82C20.37 21.91 20.09 21.94 19.82 21.92C16.74 21.58 13.78 20.53 11.19 18.85C8.77 17.31 6.72 15.26 5.18 12.85C3.49 10.24 2.44 7.27 2.11 4.18C2.09 3.9 2.12 3.62 2.21 3.36C2.3 3.09 2.44 2.85 2.63 2.65C2.82 2.44 3.04 2.28 3.3 2.17C3.55 2.05 3.83 2 4.1 2L7.1 2C7.59 1.99 8.06 2.16 8.43 2.48C8.8 2.8 9.04 3.23 9.1 3.72C9.23 4.68 9.47 5.62 9.81 6.53C9.94 6.88 9.97 7.27 9.89 7.65C9.81 8.02 9.62 8.36 9.35 8.64L8.09 9.91C9.51 12.41 11.58 14.48 14.09 15.91L15.36 14.64C15.63 14.37 15.97 14.18 16.34 14.1C16.72 14.02 17.11 14.05 17.46 14.19C18.37 14.52 19.31 14.76 20.28 14.89C20.76 14.95 21.2 15.2 21.52 15.57C21.84 15.95 22.01 16.42 22 16.92L22 19.92Z"
                      stroke="#EEEEEE"
                      stroke-opacity="1.000000"
                      stroke-width="2.000000"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg> */}
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <ul class="contact__socials-list">
              <li class="contact__socials-item">
                <a class="contact__socials-сircle">
                  {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip1_4435">
                        <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                      </clipPath>
                    </defs>
                    <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                    <g clip-path="url(#clip1_4435)">
                      <path
                        d="M15 2C13.67 2 12.4 2.52 11.46 3.46C10.52 4.4 10 5.67 10 7L10 10L7 10L7 14L10 14L10 22L14 22L14 14L17 14L18 10L14 10L14 7C14 6.73 14.1 6.48 14.29 6.29C14.48 6.1 14.73 6 15 6L18 6L18 2L15 2Z"
                        stroke="#EEEEEE"
                        stroke-opacity="0.750000"
                        stroke-width="2.000000"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg> */}
                </a>
              </li>

              <li class="contact__socials-item">
                <a href="#" class="contact__socials-сircle">
                  <img
                    src="./src/img/footer/instagram.svg"
                    alt="инстаграм"
                  />
                </a>
              </li>

              <li class="contact__socials-item">
                <a href="#" class="contact__socials-сircle">
                  {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip1_4447">
                        <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                      </clipPath>
                    </defs>
                    <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                    <g clip-path="url(#clip1_4447)">
                      <path
                        d="M19.86 4.53C19.25 3.83 18.45 3.34 17.56 3.12C16.67 2.9 15.73 2.95 14.88 3.28C14.02 3.61 13.28 4.19 12.77 4.95C12.25 5.71 11.98 6.61 12 7.53L12 8.53C10.24 8.57 8.5 8.18 6.93 7.39C5.36 6.6 4.01 5.43 3 4C3 4 -1 13 8 17C5.94 18.39 3.48 19.09 1 19C10 24 21 19 21 7.5C20.99 7.22 20.97 6.94 20.92 6.67C21.94 5.66 22.66 4.39 23 3C22.04 3.67 20.98 4.19 19.86 4.53Z"
                        stroke="#EEEEEE"
                        stroke-opacity="0.750000"
                        stroke-width="2.000000"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg> */}
                </a>
              </li>

              <li class="contact__socials-item">
                <a href="#" class="contact__socials-сircle">
                  {/* <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>Created with Pixso.</desc>
                    <defs>
                      <clipPath id="clip1_4450">
                        <rect width="24.000000" height="24.000000" fill="white" fill-opacity="0" />
                      </clipPath>
                    </defs>
                    <rect width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                    <g clip-path="url(#clip1_4450)">
                      <path
                        d="M21.83 5.15C21.49 4.8 21.07 4.55 20.6 4.42C18.87 4 12 4 12 4C12 4 5.12 4 3.4 4.45C2.92 4.59 2.5 4.84 2.16 5.19C1.82 5.55 1.57 5.98 1.46 6.45C1.14 8.2 0.99 9.97 1 11.75C0.98 13.53 1.14 15.32 1.46 17.08C1.59 17.53 1.83 17.95 2.17 18.29C2.51 18.63 2.93 18.87 3.4 19C5.12 19.45 12 19.45 12 19.45C12 19.45 18.87 19.45 20.6 19C21.07 18.86 21.49 18.61 21.83 18.26C22.17 17.9 22.42 17.47 22.54 17C22.85 15.26 23 13.51 23 11.75C23.01 9.96 22.85 8.17 22.54 6.42C22.42 5.94 22.17 5.51 21.83 5.15Z"
                        stroke="#EEEEEE"
                        stroke-opacity="0.750000"
                        stroke-width="2.000000"
                        stroke-linejoin="round"
                      />
                      <path d="M15.5 11.75L9.75 8.47L9.75 15.02L15.5 11.75Z" stroke="#EEEEEE" stroke-opacity="0.750000" stroke-width="2.000000" stroke-linejoin="round" />
                    </g>
                  </svg> */}
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
