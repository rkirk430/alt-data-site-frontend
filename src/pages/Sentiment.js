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

    // function weOnOne = () = {
    //     sentiments.map((sentiment))
    // }

    const loaded = () => {
        return sentiments.map((sentiment) =>(
            // console.log(sentiment.ticker);  Change parathasis around row 22 from "(" to "{" to see console.log data
            // console.log(sentiment.name);
            <div>
                <h3>{sentiment.name}</h3>
                <h3>{sentiment.ticker}</h3>
            </div>
        ))
    };
    return sentiments ? loaded() : <h1>Loading...</h1>;
  };
  
  export default Sentiment;