import React from 'react';
import {BrowserRouter, Routes,Route,} from "react-router-dom"
import Header from "./components/Header.js"
import CablePage from "./Pages/CablePage.js"
import LinePage from './Pages/LinePage.js'
import MotorPage from './Pages/MotorPage'

function App() {
  return (
      <BrowserRouter >
        <div className="main" style={{"maxWidth":"1200px","margin":"auto"}}>
        <Header/>
        
        <Routes>
          <Route exact path="/" element={<CablePage/>}/>
          <Route exact path="/CablePage" element={<CablePage/>}></Route>
          <Route exact path="/LinePage" element={<LinePage/>}></Route>
          <Route exact path="/MotorPage" element={<MotorPage/>}></Route>
        </Routes>

        </div>
      </BrowserRouter>
      
  );
}

export default App;
