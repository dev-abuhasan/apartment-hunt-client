import React from 'react';
import './Css/Footer.scss';
import { Button, Col, Form } from 'react-bootstrap';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const noNamed = [
        {name: "H#340(4th Floor), Road #24,"},
        {name: "Now DOHS, Mohakhali, Dhaka, BAngladash"},
        {name: "Phono: 018XXXXXXXXX"},
        {name: "E-mail: info@company.com"}
    ]
    const ourAddress = [
        {name: `We are the top real estate agenay in sydney. with agents available to cnswer any question 24/7.`}
       
    ]
    const oralHealth = [
        {name: "Abut"},
        {name: "Sito Map"},
        {name: "Support Center"},
        {name: "Terms Conditions"},
        {name: "Submit Usting"}
    ]
    const services = [
        {name: "Quick Links"},
        {name: "Rantals"},
        {name: "Contact"},
        {name: "Terms Conditions"},
        {name: "Our Blog"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Quik Links" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="About us" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>icon</h6>
                            </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;