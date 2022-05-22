import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function LastPrice(props) {

  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  // console.log(params);
  const symbol = params.symbol;
  // console.log(symbol);

  const url =`https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=bd2e518d854f51531fbc091749c45bdf`;
  

  const [price, setPrice] = useState("null");

  const getPrice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data[0].symbol);
    setPrice(data);
  };

  useEffect(() => {
    getPrice();
  }, []);

  const loaded = () => {
    return (
      <div>
        {/* <h1> The value of one share of {price[0].symbol} is ${price[0].price}</h1> */}
      </div>
    );
  };

  return price ? loaded() : <h1> Loading...</h1>
};

export default LastPrice;