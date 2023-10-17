import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  //SetInterval
  const [Intervaltimer, setIntervaltimer] = useState(0);
  const timerIdRef = useRef(null);

  //Set Time out
  const [timeouttimer, setTimeouttimer] = useState(0);
  const [start, setStart] = useState(false);
  const timerIdRef2 = useRef(null);

  //SetInterval
  const handleTimer = () => {
    timerIdRef.current = setInterval(incrementvalue, 1000);
  };

  const incrementvalue = () => {
    setIntervaltimer((prev) => prev + 1);
  };

  //Set Time out

  useEffect(() => {
    if (start) {
      timerIdRef2.current = setTimeout(() => {
        setTimeouttimer(timeouttimer + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerIdRef2.current);
    };
  }, [timeouttimer, start]);

  const handleTimeTimer = () => {
    setStart(true);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center gap-2">
      <div
        style={{ width: "40%", height: "400px" }}
        className="d-flex align-items-center justify-content-center flex-column shadow"
      >
        <h1>Set Interval</h1>
        <h2 className="fs-3 fw-bold">{Intervaltimer}</h2>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-primary" onClick={handleTimer}>
            Start
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              clearInterval(timerIdRef.current);
              setIntervaltimer(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div
        style={{ width: "40%", height: "400px" }}
        className="d-flex align-items-center justify-content-center flex-column shadow"
      >
        <h1>Set Timeout</h1>
        <h2 className="fs-3 fw-bold">{timeouttimer}</h2>
        <div className="d-flex gap-2 align-items-center">
          <button className="btn btn-primary" onClick={handleTimeTimer}>
            Start
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              clearTimeout(timerIdRef2.current);
              setStart(false);
              setTimeouttimer(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
