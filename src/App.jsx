import Header from "./components/widgets/header/header";
import AboutSection from "./components/widgets/about-section/about-section";
import CrossSectionLine from "./components/UI/lines/cross-section-line/cross-section-line";
import WorksSection from "./components/widgets/works-section/works-section";
import RegistrationSection from "./components/widgets/registration-section/registration-section";

import "./App.css";

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <CrossSectionLine />
        <AboutSection />
        <CrossSectionLine />
        <WorksSection />
        <CrossSectionLine />
        <RegistrationSection />

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
