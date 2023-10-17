import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const options = [
  { id: 1, value: "btech", label: "Btech" },
  { id: 2, value: "bca", label: "BCA" },
  { id: 3, value: "mca", label: "MCA" },
  { id: 4, value: "mtech", label: "Mtech" },
];

const Form = () => {
  const initialvalue = {
    name: "",
    password: "",
    gender: "",
    dob: "",
    address: "",
    course: "",
    // languages: [],
    // photo: "",
  };
  const [formvalues, setFormvalues] = useState(initialvalue);
  // const [selectedgender, setSelectedgender] = useState("male");
  const [languages, setLanguages] = useState([]);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [formerror, setFormerror] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setProfileImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  // const handleInputGenderChange = (e) => {
  //   setSelectedgender(e.target.value);
  // };

  const handleInputlangChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((ele) => ele !== value));
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [year, month, day] = formvalues.dob.split("-");
    const newFormvalues = {
      ...formvalues,
      // gender: selectedgender,
      lang: languages,
      photo: image,
      dob: `${day}-${month}-${year}`,
    };

    validate(newFormvalues);

    if (Object.keys(formerror).length === 0) {
      setFormvalues(newFormvalues);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setLanguages([]);
    setFormvalues(initialvalue);
    // setSelectedgender("");
    setImage("");
    setPreview("");
  };

  const validate = (data) => {
    let error = {};
    const dataarr = Object.entries(data);
    console.log(dataarr);

    dataarr.forEach(([key, value]) => {
      if (value === "" || value.length === 0) {
        error[key] = `Enter your ${key} value`;
      }
    });
    setFormerror(error);
    return false;
  };

  return (
    <form
      className="mt-5"
      style={{ width: "500px", margin: "0 auto" }}
      onSubmit={handleSubmit}
    >
      <h3 className="text-center"> This is a HTML form</h3>
      <table
        border={3}
        height={350}
        width={500}
        bgcolor="pink"
        bordercolor="yellow"
      >
        <tbody>
          <tr>
            <td colSpan={4}>
              {" "}
              <center>
                <b>User Registration</b>
              </center>
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td colSpan={3}>
              <input
                type="text"
                name="name"
                value={formvalues?.name}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td colSpan={3}>
              <input
                type="Password"
                name="password"
                value={formvalues?.password}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td> Gender</td>
            <td colSpan={1}>
              <input
                type="radio"
                name="gender"
                className="me-2"
                value="male"
                // checked={selectedgender === "male"}
                onChange={handleInputChange}
              />
              Male
            </td>
            <td colSpan={2}>
              <input
                type="radio"
                name="gender"
                className="me-2"
                value="female"
                // checked={selectedgender === "female"}
                onChange={handleInputChange}
              />
              Female
            </td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td colSpan={3}>
              <input
                type="Date"
                name="dob"
                value={formvalues?.dob}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td colSpan={3}>
              <textarea
                name="address"
                rows={2}
                cols={25}
                defaultValue={""}
                value={formvalues?.address}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Course</td>
            <td colSpan={3}>
              <select
                name="course"
                value={formvalues?.course}
                onChange={handleInputChange}
              >
                <option>Select</option>
                {options.map((opt) => (
                  <option value={opt?.value}>{opt?.label}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Language Known</td>
            <td>
              <input
                type="checkbox"
                name="language"
                value="english"
                onChange={handleInputlangChange}
              />{" "}
              English
            </td>
            <td>
              <input
                type="checkbox"
                name="language"
                value="hindi"
                onChange={handleInputlangChange}
              />{" "}
              Hindi
            </td>
            <td>
              <input
                type="checkbox"
                name="language"
                value="bengali"
                onChange={handleInputlangChange}
              />{" "}
              Bengali
            </td>
          </tr>
          <tr>
            <td>Images</td>
            <td colSpan={3}>
              {" "}
              <input
                type="file"
                name="user_profile"
                onChange={setProfileImage}
              />
            </td>
          </tr>
          {image && (
            <tr className="image-sec">
              <td colSpan={4}>
                <div style={{ width: "250px", height: "150px" }}>
                  <img
                    src={preview}
                    alt=""
                    className="w-100 h-100 object-fit-cover text-center"
                  />
                </div>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan={4} className="text-center">
              <button
                className="btn btn-info me-2"
                onClick={handleShow}
                // disabled={formvalues.name === "" && true}
              >
                {" "}
                Submit
              </button>
              <button className="btn btn-info" onClick={handleReset}>
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Email: {formvalues?.name}</ListGroup.Item>
              <ListGroup.Item>Gender: {formvalues.gender}</ListGroup.Item>
              <ListGroup.Item>Date: {formvalues?.dob}</ListGroup.Item>
              <ListGroup.Item>Address: {formvalues?.address}</ListGroup.Item>
              <ListGroup.Item>Course: {formvalues?.course}</ListGroup.Item>
              <ListGroup.Item>
                Languages: {formvalues?.lang?.map((ele) => ele + ", ")}
              </ListGroup.Item>
              <ListGroup.Item className="d-flex">
                Photo:{" "}
                <div
                  style={{ width: "250px", height: "150px" }}
                  className="ms-3"
                >
                  <img
                    src={preview}
                    alt=""
                    className="w-100 h-100 object-fit-cover text-center"
                  />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default Form;
