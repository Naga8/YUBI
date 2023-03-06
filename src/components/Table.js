import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Table.css'

const Table = (props) => {
    const [cityName, setCityName] = useState([])
    const renderTableValues = props.tableValues
    return (
        <>
        <table>
        <thead>
            <tr className="header">
            <th className="header1">Table Name</th>
            <th className="header2">Column Name</th>
            <th className="header3">Distinct Value</th>
            <th className="header4">User Input</th>
            </tr>
        </thead>
        {renderTableValues.map((tableValue) => (
        <tbody>
        <tr>
        <td className="data1">{tableValue.tableName}</td>
        <td className="data2">{tableValue.uniqueColumn}</td>
        <td className="data3">{tableValue.columnName}</td>
        <td className="data4"><input type="text" className="textBox" value={cityName} onChange={(e) => setCityName({ cityName: tableValue.uniqueColumn})} /></td>
        </tr>
        </tbody>
        ))}
        </table>
        <Link to="/">
            <button className="button">Back to Home</button>
        </Link>
        </>
    )
    // return <div>{renderTableValues}</div>
}


export default Table;