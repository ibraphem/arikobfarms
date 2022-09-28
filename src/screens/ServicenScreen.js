import Breadcrumbs from '../components/layout/Breadcrumbs';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const ServicenScreen = () => {
    return (
        <>
            <Header/>
            <Breadcrumbs title="What We Do" page="Services"/> 
            <Services/>
            <Testimonials/>
            <Footer/>
        </>
    );
};

export default ServicenScreen;