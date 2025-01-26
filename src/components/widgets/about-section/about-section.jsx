import img from "../../../assets/img/about_me/about__img.svg";

import "./about-section.css";

const AboutSection = () => {
  return (
    <>
      <section class="about" id="about">
        <div class="container">
          <div class="about__content">
            <h2 class="about__content-title title">
              About <span class="title-blue">me</span>
            </h2>
            <p class="about__content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Curabitur
              tempus urna at turpis condimentum lobortis
            </p>
          </div>

          <img
            class="about__image"
            loading="lazy"
            src={img}
            alt="about illustrarion"
          />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
