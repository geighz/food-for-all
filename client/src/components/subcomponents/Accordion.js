import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div className={`title`} onClick={() => handleChange(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${activeIndex === index ? "active" : ""} content`}>
          <p>{item.content}</p>
          <p>{item.moreContent}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
