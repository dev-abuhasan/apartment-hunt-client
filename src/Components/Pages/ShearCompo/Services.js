import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import './Css/Header.scss';
import './Css/MediaQuery.scss';
import './Css/Services.scss';
import LocationOnIcon from '../../images/logos/map-marker-alt-solid 1.png';
import bad from "../../images/logos/bed 1.png";
import bath from "../../images/logos/bath 1.png"

const ServicesData = [
    {
        "id": 1,
        "name": "Washington Avenue",
        "email": "Sincere@april.biz",
        "location": "Nasirabad H/S. Chattogram",
        "price": "194",
        "img": "https://scontent.fdac2-1.fna.fbcdn.net/v/t1.0-9/125198426_1074259753007068_5787106617056582981_o.png?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeEhzGha8B4eYPjWnEU-5X7EamkrXoDrY79qaStegOtjv9G3wDx8My7DoSpxl6fEGtHP58Hjxua_BsfCko_c-bMa&_nc_ohc=j2EUhSpf-XoAX-gtjXB&_nc_ht=scontent.fdac2-1.fna&oh=b4967b6ee57e23f8adfa4112af93ba34&oe=5FD804A1",
        "bad": 3,
        "bathroom": 2,
    },
]

const Services = () => {

    const [serviceData, setServiceData] = useState(ServicesData);

    useEffect(() => {
        fetch(`http://localhost:5000/all-services`)
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
            })
    }, [])

    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/dashboard" } };
    const ClickPathChange = () => {
        history.replace(from);
    }

    return (
        <Row>
            <div className="services-title text-center mt-5 mb-3 col-sm-12">
                <h2 className="card-color main-text">Discover the latest Rent<br />available today</h2>
            </div>
            {serviceData.length > 0 ? serviceData.map(data =>
                <Card className="card-Style" style={{ width: '18rem' }} key={data.id}>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title className="card-color">{data.name}</Card.Title>
                        <Card.Text>
                            <img style={{ width: '15px' }} src={LocationOnIcon} alt="" /> {data.location}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><img style={{ width: '20px' }} src={bad} alt="" /> {data.bad} Bedrooms <span style={{ float: 'right' }}> <img style={{ width: '20px' }} src={bath} alt="" /> {data.bathroom} Bathroom</span></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link className="price">${data.price}</Card.Link>
                        <Card.Link className="card-color">
                            <Link to="/"><Button className="card-btn" variant="success">Wiew Details</Button></Link>
                        </Card.Link>
                    </Card.Body>
                </Card>
            ) : <div className="m-auto">
                    <LoadingSpinner />
                </div>
            }
        </Row>
    );
};

export default Services;