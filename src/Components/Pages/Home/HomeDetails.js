import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../images/Rectangle 406.png';
import img1 from '../../images/Rectangle 407.png';
import img2 from '../../images/Rectangle 408.png';
import img3 from '../../images/Rectangle 409.png';
import img4 from '../../images/Rectangle 410.png';

const HomeDetails = () => {
    return (
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
                </div>

                <div style={{ backgroundColor: "lightgrey" }} className="col-md-4 p-4 px-3">
                    <Form style={{ backgroundColor: "lightgrey" }} className="my-5 md-3">
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
                        <Button style={{ width: "100%" }} type="submit">Request Booking</Button>
                        {/* <input style={{ width: "100%" }} type="submit" /> */}
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default HomeDetails;

