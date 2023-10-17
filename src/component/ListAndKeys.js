import React from "react";
import "./listandkeys.css";

const ListAndKeys = () => {
  const data = ["react", "html", "css", "node", "mongodb", "bootstrap"];
  const data2 = [
    { id: 1, tech: "html" },
    { id: 2, tech: "react" },
    { id: 3, tech: "css" },
    { id: 4, tech: "node" },
    { id: 5, tech: "mongodb" },
    { id: 6, tech: "bootstrap" },
  ];

  const objData = [
    { id: 1, name: "Ram", email: "ram@123", add: "delhi", tech: "react" },
    { id: 2, name: "shyam", email: "shyam@123", add: "Kolkata", tech: "php" },
    { id: 3, name: "Hari", email: "Hari@123", add: "Mumbai", tech: "java" },
    {
      id: 4,
      name: "Bishnu",
      email: "Bishnu@123",
      add: "chennai",
      tech: "python",
    },
    {
      id: 5,
      name: "Krishna",
      email: "Krishna@123",
      add: "rajasthan",
      tech: "mongo",
    },
    { id: 6, name: "Shib", email: "Shib@123", add: "pune", tech: "angular" },
  ];

  const output = data.map((item, indx) => (
    <ul
      className="w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
      key={indx}
    >
      <li>{item}</li>
    </ul>
  ));
  const output2 = data2.map((item, indx) => (
    <ol
      className="w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
      key={indx}
    >
      <li>{item.tech}</li>
    </ol>
  ));
  const output3 = (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Technology</th>
        </tr>
      </thead>
      <tbody>
        {objData.map((item) => (
          <tr key={item.id}>
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.add}</td>
            <td>{item?.tech}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <div>
        {output}
        <hr />
        {output2}
        {output3}
      </div>
    </>
  );
};

export default ListAndKeys;
