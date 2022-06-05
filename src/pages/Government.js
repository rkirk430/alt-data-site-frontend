import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Container, Row } from "react-bootstrap"


function Government(props) {
    const [governments, setGovernment] = useState(null);
    const getGovernment = async () => {
        const response = await fetch(props.URL+ "government");
        const data = await response.json();
        console.log(data[0].Ticker);
        setGovernment(data);
    };

    useEffect(() => {
        getGovernment()
        // eslint-disable-next-line
    }, []);

    const loaded = () => {
        return (
            <div>
            <Container>
                <Row>
                    <div className="governmentdata">
                    <h4> Congressional Trading Data </h4>
                    <h6> About: Tracks the stock transactions by members of the U.S. Congress involving any given secruity. </h6>
                    <h6> Upload Frequency: Data is a live feed and is parsed as securities trade data is provided by members of congress. Members are required to disclose transactions within 45 days of its occurance. </h6>
                    </div>
                </Row>
            </Container>
            <Table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col"> Date Trade Reported </th>
                        <th scope="col"> Transaction Date </th>
                        <th scope="col"> Ticker</th>
                        <th scope="col"> Government Representative </th>
                        <th scope="col"> Purchase / Sale </th>
                        <th scope="col"> Amount ($) </th>
                    </tr>
                </thead>
                <tbody>
                {governments.map((government, idx) => (
                    <tr key = {idx}>
                        <th scope="row">{government.ReportDate}</th>
                        <td> {government.TransactionDate} </td>
                        <td> {government.Ticker} </td>
                        <td> {government.Representative} </td>
                        <td> {government.Transaction} </td>
                        <td> {government.Amount} </td>
                    </tr>
                )
                )}
                </tbody>
            </Table>
            </div>
        )
    };

    // return governments.map((government, idx) => (
    //     <div key = {idx}>
    //         <p>{government.ReportDate} {government.Ticker} {government.Representative} {government.Transaction} {government.Amount}</p>
    //     </div>
    // ))
    
    return governments ? loaded() : <h1>Loading...</h1>
    
};

export default Government;









