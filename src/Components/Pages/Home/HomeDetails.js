import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img1 from '../../images/Rectangle 407.png';
import img2 from '../../images/Rectangle 408.png';
import img3 from '../../images/Rectangle 409.png';
import img4 from '../../images/Rectangle 410.png';
<<<<<<< HEAD
import Navbars from '../ShearCompo/Navbars';
=======
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Navbars from '../ShearCompo/Navbars';
import './HomeDetails.scss'
>>>>>>> 2e538676d35836a930dba8bea7ce8045a0c58955

const HomeDetails = () => {
    document.title = 'Home Details';
    const [serviceData, setServiceData] = useState([])

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            })
    }, [id])


    return (

        <>
        <Navbars></Navbars>
        <section>
            <div className="container-fluid row p-5">
                <div className="col-md-8">
                    <div className="mb-2">
                        <img src={img} alt="" />
                    </div>
                    <div className=" row ">
                        <div className="col-md-3 col-sm-3 col-6 p-3">
                            <div >
                                <img src={img1} alt="" />
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
                                            3000 sq-ft, {"3"} Bedroom, Semi-furnished, Luxrious, South faching Apartment for Rent in Rangs Malancha, Melbourne.
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
                            <Form className="">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="name" placeholder="Full Name" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="phone" placeholder="Phone No." />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={6} placeholder="Massage" />
                                </Form.Group>
                                <Button style={{ width: "100%" }} type="submit" id="request-btn">Request Booking</Button>
                            </Form>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
            <div className="container-fluid row p-5">
               <div className="col-md-8">
                   <h4><strong>Family Apartment<span style={{float: "right"}}>$9898</span></strong></h4>
                   <br/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet iusto dignissimos vitae. Incidunt, aperiam veniam facere quae officiis saepe.</p>
                   <br/><br/>
                   <h4><strong>Price Details</strong></h4>
                   <br/>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea minus odio rerum neque atque tenetur perspiciatis rem expedita. Quia magnam illum deleniti voluptate repellendus natus reprehenderit ipsam id repudiandae nobis. Quos consequatur expedita, a quas nemo quis in ea modi aperiam molestias assumenda aspernatur, impedit voluptates? Dicta, corrupti odit.</p>
                   <br/><br/>
                   <h4><strong>Property Details</strong></h4>
                   <br/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolores alias facilis quae ea blanditiis, minima nesciunt doloremque odio magnam, necessitatibus quia, nihil expedita ab? Aliquam placeat veritatis iusto repellendus nam in quae dolor voluptas, ex accusantium quos tempore vel eos nihil laborum quaerat. Animi eos quos repudiandae doloremque quod sint quo consequuntur praesentium dolorum adipisci expedita voluptatum corrupti vel quisquam molestiae nemo, et sit culpa quam nesciunt nihil sed dolorem veniam. Maxime excepturi aliquid qui nobis dolorem ab soluta iure, sit perferendis sint quae doloremque! Adipisci ad quas, quod, non accusantium atque aperiam, aliquid odit provident dolores incidunt praesentium maiores sunt eius obcaecati asperiores? Doloribus, labore ratione! Dolore libero suscipit eaque distinctio voluptatibus numquam voluptates corporis laborum, iure cumque repellendus cupiditate enim nesciunt vero similique perferendis tempore et sit ex, quam accusantium, minima odio explicabo. Eos eaque consequatur cum, voluptatibus culpa quam sunt maxime, quos esse nihil exercitationem, ipsa eum? In illo mollitia nulla tempore! Unde, laudantium expedita! Fuga voluptatum maiores tempora est consectetur error quia consequatur, dolorem similique obcaecati velit, aspernatur laborum. Expedita deleniti laborum necessitatibus tempore earum, voluptatum nulla perspiciatis autem vitae perferendis veritatis modi nam, ut animi tenetur accusamus dolore culpa. Mollitia esse dolorum fuga maxime.</p>
               </div>
               <div className="col-md-4"></div> 
            </div>
        </section>
        </>
=======
            </section>
        </Container>
>>>>>>> 2e538676d35836a930dba8bea7ce8045a0c58955
    );
};

export default HomeDetails;

