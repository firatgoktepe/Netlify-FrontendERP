import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from './components/AddProject'
import Home from './components/Home'
import AddProjectsStatusReport from './components/AddProjectsStatusReport';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addproject" element={<AddProject />} />
        <Route path="add-projects-status-report" element={<AddProjectsStatusReport />} />
      </Routes>
    </div>
  );  
}
export default App;
