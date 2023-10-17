import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
const colorOption = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "cyan",
  },
  {
    id: 3,
    color: "violet",
  },
  {
    id: 4,
    color: "green",
  },
  {
    id: 5,
    color: "blue",
  },
];

const ColorPicker = () => {
  const [color, setColor] = useState("");
  console.log(color);
  return (
    <div
      className="d-flex  align-items-center justify-content-center w-50 m-auto"
      style={{ height: "500px", backgroundColor: color ? color : "" }}
    >
      <Form.Select
        size="lg"
        className="w-50"
        onChange={(e) => setColor(e.target.value)}
      >
        <option>Select Color</option>
        {colorOption.map((item) => (
          <option value={item?.color} key={item?.id}>
            {item?.color}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default ColorPicker;
