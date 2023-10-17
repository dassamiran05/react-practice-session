import React, { useState, useEffect } from "react";

const Funcsprops = (props) => {
  const { name } = props;
  const data = "React";
  const [msg, setMsg] = useState(data);
  //   console.log(msg);
  const [state1, setState1] = useState(false);

  useEffect(() => {
    if (state1) {
      setMsg("MERN");
    } else {
      setMsg(data);
    }
  }, [state1]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setState1(!state1);
    // setMsg("Mern");
  };
  return (
    <div>
      <h1>I am a {name} developer with 2 years experience</h1>

      {/* <button onClick={handleUpdate}>Update</button> */}
    </div>
  );
};

export default Funcsprops;
