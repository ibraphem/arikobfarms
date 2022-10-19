import vegetable from "../assets/img/vegetable.png"
import egg from "../assets/img/egg.png"
import livestock from "../assets/img/livestock.png"
import worker from "../assets/img/worker.png"
import plantation from "../assets/img/plantation.png"
import { Link } from "react-router-dom"

const About = () => {
    return (
      <>
    <section className="about-us about-page padding-tb">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-12">
        <div className="about-thumb">
          <img src={vegetable} alt="about-thumb" />
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="section-wrapper">
          <h3>We are an integrated agro-based organic and tourism farm for Your business.</h3>
          <h5>We are unique because we hold ourselves to the highest possible standard in the agro and tourism industry.</h5>
          <p>We pride ourselves in the culture of excellence, the hallmark to greatness. We adhere to international standards and best practices of production.</p>
	  <p>Our staffs and managers are highly trained professionals, hospitable with an incredible sense of humour</p>
          <p>We grow and process high quality agricultural products for safe consumption. We also care about your health and recreational needs</p>
        </div>
        <div className="text-start">
          <Link to="/services" className="lab-btn"><span>What We Do</span></Link>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="counterup-section padding-tb bg_counter bg_img">
  <div className="overlay" />
  <div className="container">
    <div className="section-wrapper">
      <div className="row justify-content-center">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="counter-item">
            <div className="counter-inner">
              <div className="counter-thumb">
                <img src={egg} style={{height:"100px"}} alt="counter" />
              </div>
              <div className="counter-content">
                <h3 className="count-number">15000</h3>
                <p className="count-title">Poultry and Livestock</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="counter-item">
            <div className="counter-inner">
              <div className="counter-thumb">
                <img src={livestock} style={{height:"100px"}}  alt="counter" />
              </div>
              <div className="counter-content">
                <h3 className="count-number">5000</h3>
                <p className="count-title">Crop Plantation and Ranges</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="counter-item">
            <div className="counter-inner">
              <div className="counter-thumb">
              <img src={worker} style={{height:"100px"}}  alt="counter" />
              </div>
              <div className="counter-content">
                <h3 className="count-number">257</h3>
                <p className="count-title">Tourism and Hospitality</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="counter-item">
            <div className="counter-inner">
              <div className="counter-thumb">
              <img src={plantation} style={{height:"100px"}}  alt="counter" />
              </div>
              <div className="counter-content">
                <h3 className="count-number">30000</h3>
                <p className="count-title">Education and Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</>

    );
};

export default About;
