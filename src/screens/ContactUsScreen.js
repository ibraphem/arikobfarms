import React from 'react';
import ContactUs from '../components/ContactUs';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const ContactUsScreen = () => {
    return (
        <>
             <Header/>
            <Breadcrumbs title="Get in touch" page="Contact Us"/> 
            <ContactUs/>
            <Footer/>
        </>
    );
};

export default ContactUsScreen;