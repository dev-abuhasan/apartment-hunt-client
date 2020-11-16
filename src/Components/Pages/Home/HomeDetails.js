import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../images/Rectangle 406.png';
import img1 from '../../images/Rectangle 407.png';
import img2 from '../../images/Rectangle 408.png';
import img3 from '../../images/Rectangle 409.png';
import img4 from '../../images/Rectangle 410.png';
import Navbars from '../ShearCompo/Navbars';

const HomeDetails = () => {
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
    );
};

export default HomeDetails;

