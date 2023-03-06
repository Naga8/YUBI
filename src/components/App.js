// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import api from '../api/tableValues';
import './App.css';
import ManualUpdate from './ManualUpdate';
import Table from './Table'

function App() {

  const [tableValues, setTableValues] = useState([]);

  const retriveTableValues = async () => {
    const response = await api.get("/tableValues");
    return response.data;
  }

  const updateHandler = async (tableValue) => {
    const request = {
      id: uuid(),
      ...tableValue
    }

    const response = await api.post('http://localhost:3006/tableValues', request)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    console.log("res", response)
    setTableValues([...tableValues, response.data])
  }

  useEffect(() => {
    const getAllTableValues = async () => {
      const allTableValues= await retriveTableValues();
      if (allTableValues) setTableValues(allTableValues);
    };

    getAllTableValues();
}, []);

  useEffect(() => {

  }, [tableValues])


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"  
          exact
          element={<ManualUpdate updateHandler={updateHandler} />}
        />
        <Route 
        path="/updated" 
        element={<Table tableValues={tableValues}/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
