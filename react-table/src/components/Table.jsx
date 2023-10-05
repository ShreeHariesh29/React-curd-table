import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css';

function Table() {

    const [field, setField] = useState([]);
    const [records, setRecords] = useState([]);

useEffect(() =>{
    axios.get('http://localhost:3031/posts')
    .then (res => {
        setField(Object.keys(res.data[0]))
        setRecords(res.data)

    })

}, [])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    {field.map((c, i) => (
                        <th key={i}>{c}</th>

                    ))}
                </tr>   
            </thead>
            <tbody>
                {records.map((d, i) =>(
                    <tr key={i}>
                        <td>{d.name}</td>
                        <td>{d.Dept}</td>
                        <td>{d.Year}</td>
                        <td>{d.Register_no}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table