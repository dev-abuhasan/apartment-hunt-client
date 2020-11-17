import React, { useState } from 'react';
import './Css/Review.scss';
import './Css/MediaQuery.scss';
import { addToCart } from '../../../redux/actions/cartActions';
import { connect } from 'react-redux';



const Review = (props) => {
    const {reviewData} = props;
    
    return (
        <section className="review mt-5">
            <h1 className="taitle text-center ">We're an agency tailored to all<br />clients'needs that always delivers</h1>
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

const mapStateToProps = state => {
    return {
        cart: state.cart,
        reviewData: state.reviewData
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}
//1 const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//1 connectToStore(Review);
//2connect(mapStateToProps, mapDispatchToProps)(Review);

export default connect(mapStateToProps, mapDispatchToProps)(Review);