import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {
  const initialvalues = { email: "", password: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formvalues?.email && formvalues?.password) {
      console.log(formvalues);
    } else {
      alert("Enter email and password");
    }
  };
  return (
    <div className="vh-100 w-50 d-flex align-items-center justify-content-center m-auto">
      <Form className="w-75 d-flex justify-content-center flex-column">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formvalues?.email}
            onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formvalues?.password}
            onChange={handleInputs}
          />
        </Form.Group>
        {/* <input type='submit' value='Sign up' className="btn btn-primary"/> */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
