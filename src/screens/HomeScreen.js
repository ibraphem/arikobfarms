import React from 'react';
import AboutSummary from '../components/AboutSummary';
import Hero from '../components/Hero';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ServiceSummary from '../components/ServiceSummary';
import Testimonials from '../components/Testimonials';

const HomeScreen = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <ServiceSummary/>
            <AboutSummary/>
            <Testimonials/>
            <Footer/>
        </>
    );
};

export default HomeScreen;