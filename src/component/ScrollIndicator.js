import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollpercentage, setScrollpercentage] = useState(0);

  async function fetchdata(geturl) {
    try {
      setLoading(true);

      const response = await fetch(geturl);
      const result = await response.json();

      if (result && result?.products && result?.products?.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  function handleScrollpercentage() {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);

    const scrollmeasure =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollpercentage((scrollmeasure / height) * 100);
  }

  useEffect(() => {
    fetchdata(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollpercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollpercentage);

  return (
    <>
      <div className="scroll-indicator">
        <div className="top-container">
          <h1>Custom Scroll indicator</h1>
          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollpercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="data-container">
          {data && data?.length > 0
            ? data?.map((item, indx) => {
                return <h4>{item?.title}</h4>;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default ScrollIndicator;
