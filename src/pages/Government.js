import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

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
    }, []);

    const loaded = () => {
        return (
            <div className="governmentdata">
            <h1> Congress Trade Data </h1>
            <h3> About the Dataset </h3>
            <Table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col"> Reported Trade Date </th>
                        <th scope="col"> Government Representative </th>
                        <th scope="col"> Purchase / Sale </th>
                        <th scope="col"> Amount ($) </th>
                    </tr>
                </thead>
                <tbody>
                {governments.map((government, idx) => (
                    <tr key = {idx}>
                        <th scope="row">{government.ReportDate}</th>
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









