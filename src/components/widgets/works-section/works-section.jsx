import { useState } from "react";

import WorkItem from "../work-item/work-item";

import imgOne from "../../../assets/img/works/1.png";
import imgTwo from "../../../assets/img/works/2.png";
import imgThree from "../../../assets/img/works/3.png";

import "./works-section.css";

const WorksSection = () => {
  const [curentBtn, setCurentBtn] = useState("all");

  const onAll = () => {
    setCurentBtn("all");
  };

  const onUi = () => {
    setCurentBtn("ui");
  };

  const onUx = () => {
    setCurentBtn("ux");
  };

  const onDesign = () => {
    setCurentBtn("design");
  };

  return (
    <>
      <section className="works" id="works">
        <div className="container">
          <h2 className="works__title title">
            My recent <span className="title-blue">works</span>
          </h2>

          <div className="works__button-box">
            <button
              className="works__button button"
              type="button"
              onClick={onAll}
            >
              All
            </button>
            <button
              className="works__button button"
              type="button"
              onClick={onUi}
            >
              UI
            </button>
            <button
              className="works__button button"
              type="button"
              onClick={onUx}
            >
              UX
            </button>
            <button
              className="works__button button"
              type="button"
              onClick={onDesign}
            >
              Web Design
            </button>
          </div>

          <ul className="works__list target">
            {curentBtn === "all" && (
              <>
                <WorkItem srcImg={imgOne} />
                <WorkItem srcImg={imgTwo} />
                <WorkItem srcImg={imgThree} />
              </>
            )}

            {curentBtn === "ui" && <WorkItem srcImg={imgOne} />}

            {curentBtn === "ux" && <WorkItem srcImg={imgTwo} />}

            {curentBtn === "design" && <WorkItem srcImg={imgThree} />}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
