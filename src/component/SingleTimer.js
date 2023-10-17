import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { LuTimer } from "react-icons/lu";

const SingleTimer = ({ seconds, removeItem }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timeInterval);
      removeItem();
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [time, removeItem]);
  return (
    <Col md={4} sm={12}>
      <div className="d-flex gap-1 align-items-center fs-4 bg-primary justify-content-center text-white p-2 mb-4">
        <LuTimer />
        {time}s
      </div>
    </Col>
  );
};

export default SingleTimer;
