import React from 'react';
import Footer from '../ShearCompo/Footer';
import Header from '../ShearCompo/Header';
import Review from '../ShearCompo/Review';
import Services from '../ShearCompo/Services';
import './Home.scss';

const Home = () => {
    document.title = "Creative-Agency Home";
    return (
        <>
           <Header />
           <main id="main" className="container">
                <Services />
                <Review />
                <Footer />
           </main>
        </>
    );
};

export default Home;