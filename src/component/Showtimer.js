import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SingleTimer from "./SingleTimer";

const Showtimer = () => {
  const [value, setValue] = useState("");
  const [timers, setTimers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const seconds = parseInt(value, 10);
      if (!isNaN(seconds) && seconds > 0) {
        setTimers((prev) => [...prev, { seconds, id: new Date().getTime() }]);
      }
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  const removeitem = (id) => {
    const updateTimers = timers.filter((item) => item?.id !== id);
    setTimers(updateTimers);
  };

  return (
    <Container>
      <div className="w-75 m-auto mt-5">
        <Form>
          <Row className="d-flex justify-content-center">
            <Col md={4} sm={12} className="mb-2 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Col>
            <Col md={3} sm={12}>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
          {timers && timers?.length > 0 && (
            <Row className="mt-3">
              {timers?.map((item) => (
                <SingleTimer
                  key={item?.id}
                  seconds={item?.seconds}
                  removeItem={() => removeitem(item?.id)}
                />
              ))}
            </Row>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Showtimer;
