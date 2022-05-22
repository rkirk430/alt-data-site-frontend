import { data } from "autoprefixer";
import { useState, useEffect } from "react";

function Sentiment(props) {
    const [sentiments, setSentiment] = useState(null);
    const getSentiment = async () => {
        const response = await fetch(props.URL + "sentiment");
        const data = await response.json();
        console.log(data.results); //data.results[0].ticker
        setSentiment(data.results);
    };

    useEffect(() => {
        getSentiment()
    }, []);


    const loaded = () => {
        return sentiments.map((sentiment, idx) =>(
            // console.log(sentiment.ticker);  Change parathasis around row 22 from "(" to "{" to see console.log data
            // console.log(sentiment.name);
            <div key = {idx}>
                <p>{sentiment.rank} {sentiment.name} {sentiment.ticker}</p>
            </div>
        ))
    };
    return sentiments ? loaded() : <h1>Loading...</h1>;
  };
  
  export default Sentiment;