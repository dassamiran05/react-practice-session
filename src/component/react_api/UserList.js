import axios from "axios";
import React, { useEffect, useState } from "react";
import "../product.css";
import { Card } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchdata = async () => {
    // const url = `https://api.example.com/users`;
    const url = `https://jsonplaceholder.typicode.com/users`;
    const { data } = await axios.get(url);
    setUsers(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const user = users?.map((user) => {
    return (
      <>
        <Card className="card" key={user?.id}>
          <Card.Body>
            <Card.Title>{user?.name}</Card.Title>
            <Card.Text>{user?.email}</Card.Text>
            <Card.Text>{user?.phone}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <div className="userlist my-5">
        <div className="container">
          <div className="gridItem">{user}</div>
        </div>
      </div>
    </>
  );
};

export default UserList;
