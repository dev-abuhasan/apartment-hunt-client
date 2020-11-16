import React from 'react';
import './Css/Header.scss';
import './Css/MediaQuery.scss'

const HeaderBottom = () => {
    return (
        <div className="header-Background text-center">
            <div className="black">
                <h1>FIND YOUR HOUSE RENT</h1><br />
                <input className="inputStyle" type="text" placeholder="Search..." />
                <button className="batStyle btn btn-primary" type="button">Find Now</button>
            </div>
        </div>
    );
};

export default HeaderBottom;