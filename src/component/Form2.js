import { useFormik } from "formik";
import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import TableShow from "./TableShow";

const Form2 = () => {
  const [data, setData] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name required";
    }

    if (!values.lastName) {
      errors.lastName = " Last name required";
    }

    if (!values.email) {
      errors.email = "Email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password required";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password required";
    }

    if (!values.address) {
      errors.address = "Address required";
    }

    if (!values.pincode) {
      errors.pincode = "Pincode required";
    }

    if (!values.companyName) {
      errors.companyName = "Company Name required";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile required";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "Invalid Mobile Number ";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
      address: "",
      pincode: "",
      companyName: "",
      mobile: "",
    },
    validate,
    onSubmit: (values) => {
      //   console.log(JSON.stringify(values, null, 2));
      setData([...data, values]);
      formik.handleReset();
    },
  });

  return (
    <>
      <Container>
        <div className={`w-75 m-auto mt-5`}>
          <Form
            onSubmit={formik.handleSubmit}
            className={`${data?.length > 0 ? "mb-3" : ""}`}
          >
            <Form.Group as={Row} className="mb-3">
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  style={{
                    border:
                      formik.touched.firstName &&
                      formik.errors.firstName &&
                      "1px solid red",
                  }}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-danger">{formik.errors.firstName}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  style={{
                    border:
                      formik.touched.lastName &&
                      formik.errors.lastName &&
                      "1px solid red",
                  }}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-danger">{formik.errors.lastName}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  style={{
                    border:
                      formik.touched.email &&
                      formik.errors.email &&
                      "1px solid red",
                  }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  style={{
                    border:
                      formik.touched.password &&
                      formik.errors.password &&
                      "1px solid red",
                  }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password again"
                  name="cpassword"
                  onChange={formik.handleChange}
                  value={formik.values.cpassword}
                  style={{
                    border:
                      formik.touched.cpassword &&
                      formik.errors.cpassword &&
                      "1px solid red",
                  }}
                />
                {formik.touched.cpassword && formik.errors.cpassword ? (
                  <div className="text-danger">{formik.errors.cpassword}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  style={{
                    border:
                      formik.touched.address &&
                      formik.errors.address &&
                      "1px solid red",
                  }}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">{formik.errors.address}</div>
                ) : null}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  placeholder="Enter the pincode"
                  name="pincode"
                  onChange={formik.handleChange}
                  value={formik.values.pincode}
                  style={{
                    border:
                      formik.touched.pincode &&
                      formik.errors.pincode &&
                      "1px solid red",
                  }}
                />
                {formik.touched.pincode && formik.errors.pincode ? (
                  <div className="text-danger">{formik.errors.pincode}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Company name</Form.Label>
                <Form.Control
                  placeholder="Enter company name"
                  name="companyName"
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                  style={{
                    border:
                      formik.touched.companyName &&
                      formik.errors.companyName &&
                      "1px solid red",
                  }}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="text-danger">{formik.errors.companyName}</div>
                ) : null}
              </Col>
              <Col md={4} sm={12} className="mb-2 mb-md-0">
                <Form.Label>Mobile numnber</Form.Label>
                <Form.Control
                  placeholder="Enter the mobile number"
                  name="mobile"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  style={{
                    border:
                      formik.touched.mobile &&
                      formik.errors.mobile &&
                      "1px solid red",
                  }}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className="text-danger">{formik.errors.mobile}</div>
                ) : null}
              </Col>
            </Form.Group>

            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="info" onClick={formik.handleReset}>
                Reset
              </Button>
            </div>
          </Form>
          {data && data?.length > 0 && <TableShow result={data} />}
        </div>
      </Container>
    </>
  );
};

export default Form2;
