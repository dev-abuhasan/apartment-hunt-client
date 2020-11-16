import React from 'react';
import './Css/Header.scss';
import { Col, Row } from 'react-bootstrap';
import headerSideImg from '../../images/logos/Frame.png';
import './Css/MediaQuery.scss'

const HeaderBottom = () => {
    return (
        
        <div className="header-Background" style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>
            <h1>FIND YOUR HOUSE RENT</h1><br />
            <input className="inputStyle" type="text" placeholder="Search..." />
            <button className="batStyle" type="button" className="btn btn-primary">Find Now</button>
        </div>
    );
};

export default HeaderBottom;