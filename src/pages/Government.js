import { useState, useEffect } from "react";

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
        return governments.map((government, idx) => (
            <div key = {idx}>
                <p>{government.ReportDate} {government.Ticker} {government.Representative} {government.Transaction} {government.Amount}</p>
            </div>
        ))
    };

    return governments ? loaded() : <h1>Loading...</h1>

};

export default Government;









