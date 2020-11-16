import React from 'react';
import { Container } from 'react-bootstrap';
import './Css/Header.scss';
import HeaderBottom from './HeaderBottom';
import Navbars from './Navbars';

const Header = () => {
    return (
        <header id="header-main" className="">
            <Container>
                <Navbars />
            </Container>
        </header>
    );
};

export default Header;