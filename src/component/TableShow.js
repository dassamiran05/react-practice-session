import React from "react";
import { Table } from "react-bootstrap";

const TableShow = ({ result }) => {
  // console.log({firstName, lastName, email, address, pincode, companyName, mobile})
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>address</th>
          <th>Pincode</th>
          <th>Company name</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {result?.map((data, index) => {
          const {
            firstName,
            lastName,
            email,
            address,
            pincode,
            companyName,
            mobile,
          } = data;
          return (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{pincode}</td>
                <td>{companyName}</td>
                <td>{mobile}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableShow;
