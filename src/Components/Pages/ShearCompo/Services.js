import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import './Css/Header.scss';
import './Css/MediaQuery.scss';
import './Css/Services.scss';
import LocationOnIcon from '../../images/logos/map-marker-alt-solid 1.png';
import bad from "../../images/logos/bed 1.png";
import bath from "../../images/logos/bath 1.png";

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            })
    }, [])

    const location = useLocation();
    const history = useHistory()

    const pathChange = (id) => {
        let { from } = location.state || { from: { pathname: `/details/${id}` } };
        history.replace(from);
    }

    return (
        <Row>
            <div className="services-title text-center mt-5 mb-3 col-sm-12  d-flex justify-content-center">
                <h2 className="card-color main-text">Discover the latest Rent<br />available today</h2>
            </div>
            { serviceData.length > 0 ? serviceData.map(data =>
                <Col md={6} lg={4} className="p-4" key={data._id}>
                    <div className="service-card">
                        <div className="text-center">
                            <img src={`data:image/png;base64,${data.createImg.img}`} alt="img" />
                        </div>
                        <div className="px-3">
                            <h3 className="title_color">{data.serviceTitle}</h3>
                            <div className="service-location">
                                <p>
                                    <img style={{ width: '15px' }} src={LocationOnIcon} alt="" className="mr-2" /> {data.location}
                                </p>
                                <div className="service-content d-flex justify-content-between mb-3">
                                    <p><img src={bad} alt="img" style={{ width: "25px" }} className="pr-1" /> {data.bathroomNum} Bedrooms</p>
                                    <p><img src={bath} alt="img" style={{ width: "25px" }} className="pr-1" /> {data.bedroomNum} Bathroom</p>
                                </div>
                                <div className="service-price d-flex justify-content-between align-items-center mb3 ">
                                    <p className="price">${data.price}</p>
                                    <p><Button className="card-btn" variant="success" onClick={() => pathChange(`${data._id}`)}>View Details</Button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            ) : <div className="m-auto">
                    <LoadingSpinner />
                </div>}
        </Row>
    );
};

export default Services;