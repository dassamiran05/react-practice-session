import React, { useState } from "react";
import "./accordion.css";

const Accordion = () => {
  const [selecteddata, setSelectedData] = useState({});
  const [show, setShow] = useState(false);
  const data = [
    {
      id: 1,
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 2,
      title: "Why do we use it?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 3,
      title: "Where does it come from?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 4,
      title: "Where can I get some?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 5,
      title: "Sed ut perspiciatis unde omnis iste natus?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      id: 6,
      title: "Lorem Ipsum is simply dummy?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ];
  const handleClick = (id) => {
    const selected = data.find((item) => item.id === id);
    if (selected) {
      setSelectedData(selected);
      setShow(true);
    }
  };
  const item = data?.map((dt) => {
    return (
      <>
        <div className="w-100" key={dt?.id}>
          <h2 className="head-title" onClick={() => handleClick(dt?.id)}>
            {dt?.title}
          </h2>
          <p
            className={`head-answer ${
              show && selecteddata?.id === dt?.id ? "active" : ""
            }`}
          >
            {dt?.desc}
          </p>
        </div>
      </>
    );
  });
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center flex-column w-50 m-auto">
      {item}
    </div>
  );
};

export default Accordion;
