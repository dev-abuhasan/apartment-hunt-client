import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import img1 from '../../images/Rectangle 407.png';
import img2 from '../../images/Rectangle 408.png';
import img3 from '../../images/Rectangle 409.png';
import img4 from '../../images/Rectangle 410.png';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Navbars from '../ShearCompo/Navbars';
import './HomeDetails.scss'

const HomeDetails = () => {
    document.title = 'Home Details';
    const [serviceData, setServiceData] = useState([]);
    const [getValuer, setGetValue] = useState([]);
    const location = useLocation();
    const history = useHistory()

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                setGetValue(data[0])

            })
    }, [id])

    const getName = sessionStorage.getItem('name');
    const getEmail = sessionStorage.getItem('user');
    const [formData, updateFormData] = useState({
        name: getName,
        phone: "",
        email: getEmail,
        massage: ""

    });
    
    const getData = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    }

    const onSubmits = (e) => {
        const formsData = new FormData();
        formsData.append("name", formData.name);
        formsData.append("phone", formData.phone);
        formsData.append("email", formData.email);
        formsData.append("massage", formData.massage);
        formsData.append("serviceTitle", getValuer.serviceTitle);
        formsData.append("price", getValuer.price);
        formsData.append("id", getValuer._id);

        fetch(`http://localhost:5000/add-rent`, {
            method: 'POST',
            body: formsData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    alert("Request Add Successfully... Hurray!")
                }
                if (data.success === false) {
                    alert("Request Not Added... Sad!")
                }
            })
            .then(() => {
                let { from } = location.state || { from: { pathname: "/dashboard" } };
                history.push(from);
            })
        e.preventDefault()
    }


    return (
        <Container>
            <Navbars />
            <section>
                <div className="container-fluid row p-3">
                    <div className="col-md-8">
                        {
                            serviceData.map(data =>
                                <div className="mb-2" key={data._id}>
                                    <img src={`data:image/jpeg;base64,${data.createImg.img}`} alt="" />
                                </div>
                            )
                        }
                        <div className=" row ">
                            <div className="col-md-3 col-sm-3 col-6 p-3">
                                <div >
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6 p-3">
                                <div >
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6 p-3">
                                <div >
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-6 p-3">
                                <div >
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                        {serviceData.length > 0 ?
                            serviceData.map(data =>
                                <div className="col-12" key={data._id}>
                                    <div className="details-title-sec">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3>{data.serviceTitle}</h3>
                                            <h3>${data.price}</h3>
                                        </div>
                                        <p>
                                            3000 sq-ft, {data.bedroomNum} Bedroom, Semi-furnished, Luxrious, South faching Apartment for Rent in Rangs Malancha, Melbourne.
                                        </p>
                                    </div>
                                    <div className="project-title-sec mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>{"Price Details"}</h4>
                                        </div>
                                        <li>Rent/Month:$550 (negotiable)</li>
                                        <li>Service Charge:8,000/=TK per month, subject to change</li>
                                        <li>Security Deposit:3 month's rent</li>
                                        <li>Flat Release Policy: 3 months earlier notice required</li>
                                    </div>
                                    <div className="project-title-sec">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>{"Property Details-"}</h4>
                                        </div>
                                        <li>Address & Area:Rangs Malancha,House-68, Read-6A(Dead End Road), Dhanmondi Residential Area.</li>
                                        <li>Flat Size:3000 Sq Feet</li>
                                        <li>Floor : A5 (5th Floor) (6 storied Building) (South Faching Unit)</li>
                                        <li>Room Category: 3 large Bed Room </li>
                                        <li>Room Category: 3 Large Bed Rooms with 3 Werandas, Spacious</li>
                                        <li>Drawing, Dining & Family Living Room, Highly Decorated Kitchen</li>
                                        <li>with Store Room and Servant Room with attached Toilet.</li>
                                        <li>Facilities: 1Modern Lift All Modern Amenities & Semi Furnished.</li>
                                        <li>Additional Facilities:a. Electricity with full generator load, b.</li>
                                        <li>Central Gas Geyser,c.2 Car Parking with 1 Driver's</li>
                                        <li>Accommodation, d.Community Conference Hall,e. Roof Top</li>
                                        <li>Beautified Garden and Grassy Ground, f. Cloth Hanging facility</li>
                                        <li>with CC camera</li>
                                    </div>
                                </div>
                            ) : <LoadingSpinner />
                        }
                    </div>
                    <div className="col-md-4">
                        <div className=" p-3" style={{ backgroundColor: "#F4F4F4" }}>
                            <Form className="" onSubmit={e => onSubmits(e)}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" name="name" placeholder="Full Name" onBlur={(e) => getData(e)} required defaultValue={getName} />
                                </Form.Group>


                                <input type="tel" id="phone" className="form-control" name="phone" placeholder="01812345678" pattern="[0-9]{11}" onBlur={(e) => getData(e)} required /><br />

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" name="email" placeholder="Email Address" onBlur={(e) => getData(e)} required defaultValue={getEmail} />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={6} placeholder="Massage" name="massage" onBlur={(e) => getData(e)} required />
                                </Form.Group>
                                <Button style={{ width: "100%" }} type="submit" id="request-btn">Request Booking</Button>
                            </Form>
                            <Link to="/dashboard">Already have a booking</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default HomeDetails;

