import React from 'react';
import './Css/Footer.scss';
import FooterCol from './FooterCol';
import facebook from '../../images/logos/Group 2.png';
import ins from '../../images/logos/Vector-1.png';
import lin from '../../images/logos/Vector-2.png';
import google from '../../images/logos/Vector-3.png';

const Footer = () => {
    const noNamed = [
        { name: "H#340(4th Floor), Road #24," },
        { name: "Now DOHS, Mohakhali, Dhaka, BAngladash" },
        { name: "Phono: 018XXXXXXXXX" },
        { name: "E-mail: info@company.com" }
    ]
    const ourAddress = [
        { name: `We are the top real estate agenay in sydney. with agents available to cnswer any question 24/7.` }

    ]
    const oralHealth = [
        { name: "About" },
        { name: "Sito Map" },
        { name: "Support Center" },
        { name: "Terms Conditions" },
        { name: "Submit Usting" }
    ]
    const services = [
        { name: "Quick Links" },
        { name: "Rantals" },
        { name: "Contact" },
        { name: "Terms Conditions" },
        { name: "Our Blog" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"!"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Company" menuItems={services} />
                    <FooterCol key={3} menuTitle="Quik Links" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="About us" menuItems={ourAddress}>
                        <div className="mt-5">
                            <img style={{ width: '25px', marginLeft: '25px' }} src={facebook} alt="" />
                            <img style={{ width: '25px', marginLeft: '25px' }} src={ins} alt="" />
                            <img style={{ width: '25px', marginLeft: '25px' }} src={lin} alt="" />
                            <img style={{ width: '25px', marginLeft: '25px' }} src={google} alt="" />
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center pb-3">
                    <p className="pb-0 mb-0"> © {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;