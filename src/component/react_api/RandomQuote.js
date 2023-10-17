import axios from "axios";
import React, { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState();
  const [id, setId] = useState(1);
  console.log(id);

  const fetchQuoteApi = async () => {
    const { data } = await axios.get(`https://dummyjson.com/quotes/${id}`);
    setQuote(data);
  };

  useEffect(() => {
    fetchQuoteApi();
  }, [id]);

  const randomgenerateId = (e) => {
    e.preventDefault();
    setId(Math.floor(Math.random() * 30));
  };

  return (
    <>
      <div className="vh-100 w-50 d-flex align-items-center justify-content-center m-auto">
        <div className="gridItem d-flex flex-column justify-content-center align-items-center">
          <h5 className="text-center">{quote?.quote}</h5>
          <h2 className="text-center">{quote?.author}</h2>
          <button className="btn btn-primary" onClick={randomgenerateId}>
            Random Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
