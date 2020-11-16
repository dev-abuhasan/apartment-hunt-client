import React, { useContext } from 'react';
import { Col, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import './Dashboard.scss'
import { AuthContext } from '../AuthData/Auth';
import { ExtraDataContext } from '../ExtraData/ExtraData';
import Oder from './Order/Oder';
import Sidebar from './Sidebar/Sidebar';
import ClientService from './ClientService/ClientService';
import AdminService from './AdminService/AdminService';
import { Link } from 'react-router-dom';
import logo from '../images/logos/Logo.png';

const Dashboard = () => {
    document.title = "Dashboard Page";
    const auth = useContext(AuthContext);
    const { logOut } = auth;
    const ExtraData = useContext(ExtraDataContext);
    const { seeData } = ExtraData;

    const getName = sessionStorage.getItem('name');
    const handLogOut = () => {
        logOut();
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div className="container-fluid">
            <Row className="p-4">
                <Col lg={2} md={3} className="pt-3">
                    <h3 className="dash-title">
                        <Link to="/" id="header-logo">
                            <img src={logo} alt="logo.png" />
                        </Link>
                    </h3>
                    <Sidebar />
                </Col>
                <Col lg={10} md={9} >
                    <Navbar bg="">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="mr-auto">
                            <Nav.Link className="text-dark">
                                <h3 className="dash-title">
                                    {seeData.serviceAdmin === true ? "Booking List" : ""}
                                    {seeData.order === true ? "Add Rent House" : ""}
                                    {seeData.serviceClient === true ? "My Rent" : ""}
                                </h3>
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown title={`${getName !== null ? getName : "Undefined"}`} id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={() => handLogOut()}
                                    className="logout-btn"
                                >LogOut</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                    <section id="content-section">
                        {seeData.order === true ? <Oder /> : ""}
                        {seeData.serviceClient === true ? <ClientService /> : ""}
                        {seeData.serviceAdmin === true ? <AdminService /> : ""}
                    </section>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;