import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Postform = () => {
  const initialvalues = { title: "", body: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/posts";
    const newformvalue = { ...formvalues, userId: 11 };
    if (formvalues?.title && formvalues?.body) {
      const res = await axios.post(url, newformvalue);
      console.log(res);
    } else {
      alert("Enter title and description");
    }
  };
  return (
    <>
      <div className="vh-100 w-50 d-flex align-items-center justify-content-center m-auto">
        <Form className="w-75 d-flex justify-content-center flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Title</Form.Label> */}
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              value={formvalues?.title}
              onChange={handleInputs}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Description</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              name="body"
              placeholder="Enter desc"
              value={formvalues?.body}
              onChange={handleInputs}
            />
          </Form.Group>
          {/* <input type='submit' value='Sign up' className="btn btn-primary"/> */}
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Postform;
