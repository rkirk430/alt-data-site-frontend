import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

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
        return (
            <div className="sentiment">
            <h1>Reddit Sentiment Data</h1>
            <Table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Sentiment Ranking</th>
                        <th scope="col">Ticker</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Mentions</th>
                        <th scope="col">Upvotes</th>
                    </tr>
                </thead>
                <tbody>
                {sentiments.map((sentiment, idx) => (
                    <tr key = {idx}>
                        <th scope="row">{sentiment.rank}</th>
                        <td>{sentiment.name}</td>
                        <td>{sentiment.ticker} </td>
                        <td>{sentiment.mentions} </td>
                        <td>{sentiment.upvotes} </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
        )
        // return sentiments.map((sentiment, idx) =>(
        //     // console.log(sentiment.ticker);  Change parathasis around row 22 from "(" to "{" to see console.log data
        //     // console.log(sentiment.name);
        //     <div className="government"> 
        //         {/* <p key = {idx}>{sentiment.rank} {sentiment.name} {sentiment.ticker} {sentiment.mentions} {sentiment.upvotes}</p> */}
        //     </div>
        // ))
    };
    return sentiments ? loaded() : <h1>Loading...</h1>;
  };
  
  export default Sentiment;