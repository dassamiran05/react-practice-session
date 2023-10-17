import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./git.css";

const GitHubRepositories = () => {
  const [input, setInput] = useState("");
  const [reposData, setReposdata] = useState([]);
  console.log(reposData);

  const fetchGitRepo = async () => {
    try {
      if (input) {
        const url = `https://api.github.com/users/${input}/repos`;
        const res = await axios.get(url);
        console.log(res);
        if (res.data.length > 0) {
          setReposdata(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGitRepo();
  }, [input]);

  const singleRepodata = reposData?.map((repo) => {
    return (
      <>
        <Card className="card" key={repo?.id}>
          <Card.Body>
            <Card.Title>{repo?.name}</Card.Title>
            <Card.Text>{repo?.url}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <div className="vh-100  d-flex align-items-center justify-content-center m-auto">
        <div className="container d-flex flex-column h-100">
          <div className="w-50 d-flex justify-content-center flex-column align-items-center my-3 m-auto h-100">
            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
              {/* <Form.Label>Title</Form.Label> */}
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={(e) => setInput(e.target.value)}
                className="py-3"
              />
            </Form.Group>
          </div>
          {reposData && reposData?.length > 0 && (
            <div className="card-data mb-4">{singleRepodata}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GitHubRepositories;
