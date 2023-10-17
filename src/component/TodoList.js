import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  console.log(data, input);
  const [editIt, setEditid] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "" && !editIt) {
      const exists = data.find((item) => item?.value === input);
      if (!exists?.value) {
        let newData = [...data, { id: data.length + 1, value: input }];
        setData(newData);
        setInput("");
      }
      return;
    }

    if (editIt) {
      const edit = data?.find((item) => item?.id === editIt);

      //approcah 1
      // let newdata = data.map((item) => {
      //   return item?.id === edit?.id
      //     ? { id: item?.id, value: input }
      //     : { id: item?.id, value: item?.value };
      // });

      // approach 2
      // let newdata = data.map((item) => {
      //   return item?.id === edit?.id ? { ...item, value: input } : item;
      // });

      //approach 3
      let newdata = data.map((item) => {
        if (item?.id === edit?.id) {
          return { ...item, value: input };
        }
        return item;
      });
      setData(newdata);
      setEditid(0);
      setInput("");
      return;
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item?.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    const edit = data?.find((item) => item?.id === id);
    setInput(edit?.value);
    setEditid(id);
  };
  const todo = data?.map((item) => {
    return (
      <>
        <div key={item?.id} className="d-flex align-items-center gap-2">
          <p className="mb-0 fs-3 fw-semibold">{item?.value}</p>
          <div className="d-flex gap-2">
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleEdit(item?.id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              type="submit"
              onClick={() => handleDelete(item?.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center flex-column">
      <Form className="w-25 d-flex flex-column justify-content-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            value={input}
            placeholder="Enter text"
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={!input}
        >
          Submit
        </Button>
      </Form>

      {data?.length > 0 ? (
        <div className="mt-4">
          <div className="d-flex flex-column items-center gap-2">{todo}</div>
        </div>
      ) : (
        <p className="text-danger mt-3">{"Nodata is there"}</p>
      )}
    </div>
  );
};

export default TodoList;
