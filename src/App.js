import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Pages/Routes';
import { UserAuthProvider } from './Components/AuthData/Auth';
import { ExtraDataProvider } from './Components/ExtraData/ExtraData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ExtraDataProvider>
      <UserAuthProvider>
        <Router>
          <Routes />
        </Router>
      </UserAuthProvider>
    </ExtraDataProvider>

  );
}

export default App;
