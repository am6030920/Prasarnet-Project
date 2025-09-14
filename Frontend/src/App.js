import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRoutes from './appRoutes';
import Header from './project/component/common/Header';
import Sidebar from './project/component/common/Sidebar';

function App() {
const [headerName, setHeaderName]=useState("");

  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "row", background: "#f0f4f8"}}>
          <Sidebar setHeaderName={setHeaderName}/>
          <div style={{ display: "flex",width:"85vw",flexDirection: "column"}}>
            <Header headerName={headerName}/>
            <AppRoutes />
          </div>  
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
