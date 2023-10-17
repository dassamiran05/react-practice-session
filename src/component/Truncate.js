import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";

const Truncate = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [showwholeString, setShowwholeString] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = value.trim();
    if (val?.length > 0) {
      setData([...data, val]);
      setValue("");
    }
  };

  const showtrunket = (item) => {
    const showItem = item?.length <= 5 ? item : item.slice(0, 5) + "...";
    return showItem;
  };
  const handleString = (itm) => {
    if (itm?.length > 5) {
      setShow(true);
      setShowwholeString(itm);
    }
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
          {data && data?.length > 0 && (
            <>
              <Row className="mt-3">
                {data?.map((item, indx) => {
                  return (
                    <>
                      <Col md={4} sm={12} key={indx}>
                        <h1
                          className="fs-4"
                          onClick={() => {
                            // handleShow();
                            handleString(item);
                          }}
                        >
                          {showtrunket(item)}
                        </h1>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </>
          )}
        </Form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{showwholeString}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Truncate;
