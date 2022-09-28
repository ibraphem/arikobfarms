import React from 'react';
import About from '../components/About';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Testimonials from '../components/Testimonials';

const AboutScreen = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs title="Who We Are" page="About Us"/>
            <About/>
            <Testimonials/>
            <Footer/>
        </>
    );
};

export default AboutScreen;