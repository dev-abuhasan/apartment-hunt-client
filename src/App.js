import React, { createContext, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Pages/Routes';
import { UserAuthProvider } from './Components/AuthData/Auth';
import { ExtraDataProvider } from './Components/ExtraData/ExtraData';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ServicesContext = createContext();

function App() {
  const [serviceData, setServiceData] = useState([]);
  return (
    <ServicesContext.Provider value={{serviceData, setServiceData}}>
    <ExtraDataProvider>
      <UserAuthProvider>
        <Router>
          <Routes />
        </Router>
      </UserAuthProvider>
    </ExtraDataProvider>
    </ServicesContext.Provider>
  );
}

export default App;
