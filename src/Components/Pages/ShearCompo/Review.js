import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Css/Review.scss';

const ReviewData = [
    {
        "id": 1,
        "name": "Washington Avenue",
        "Description": "With a robust selection of popular properties on hand, as well as leading properties from experts.",
        "img": "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/125388010_1074606742972369_3101237880769144479_n.png?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeEanKYh8kxWWHl_g45Jp3ZJ87bWxhZZCLzzttbGFlkIvFrd50tL9rsTOzBL5bUMEYbP5Oq6Xy7OQjzdVrsrxCNW&_nc_ohc=SIfDTLnY750AX-7IiKS&_nc_ht=scontent-del1-1.xx&oh=36ba241fc6738aa98c12cf6cdbf827a1&oe=5FD9784E",
    },
    {
        "id": 2,
        "name": "Financing Made Easy",
        "Description": "With a robust selection of popular properties on hand, as well as leading properties from experts.",
        "img": "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/125124440_1074606749639035_2551577639534463473_n.png?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_eui2=AeHyLIgj-f-XqwUCYvRo_9Ryl0t6H8W3wg2XS3ofxbfCDaBEQjopF70m_IxA4QIK-cP3YQB-VYXy1Yk5jTNuqGPz&_nc_ohc=f5YMmx8tbxQAX9w8T0F&_nc_ht=scontent-del1-1.xx&oh=a4e7645f76e11dd6909c87b7e8ac092a&oe=5FD9605B",
    },
    {
        "id": 3,
        "name": "Trusted by Thousands",
        "Description": "With a robust selection of popular properties on hand, as well as leading properties from experts.",
        "img": "https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/124985564_1074606736305703_3356707887268721644_n.png?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeFdeZO31L3cv07jZ0BWV9zTZckfm4CNwAFlyR-bgI3AAT3XS-ob9GI7Y3PLihzKBYwuvtIuenN5SPtRnWQJUR29&_nc_ohc=WyA9Luqq_mgAX-vlUwn&_nc_ht=scontent-del1-1.xx&oh=cd9b4687f9b72a4e005ea61eff751c8f&oe=5FD80167",
    },
]

const Review = () => {
    const [reviewData, setReviewData] = useState(ReviewData);

    return (
        <section className="services-container mt-5">
                <h1 className="taitle text-center">We're an agency tailored to all<br/>clients'needs that always delivers</h1>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {reviewData.map(review =>
                            <div key={review.id} className="col-md-4 text-center service">
                                <img style={{ width: '100px' }} src={review.img} alt="" />
                                <h5 className="mt-3 mb-3 card-color">{review.name}</h5>
                                <p className="text-secondary">{review.Description}</p>
                        </div>
                             
                    )}
                </div>
            </div>
        </section>
    );
};

export default Review;