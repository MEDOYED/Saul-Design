import "./work-item.css";

const WorkItem = ({ srcImg }) => {
  return (
    <>
      <li className="works__item">
        <a href="#" className="works__link">
          <div className="works__image-box">
            <img src={srcImg} loading="lazy" alt="" />
          </div>
        </a>
      </li>
    </>
  );
};

export default WorkItem;
