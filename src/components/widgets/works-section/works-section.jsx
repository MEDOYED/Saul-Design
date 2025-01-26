import "./works-section.css";

const WorksSection = () => {
  return (
    <>
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
    </>
  );
};

export default WorksSection;
