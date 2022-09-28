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
          <h3>We are Best Organic Agro-based company for Your business.</h3>
          <h5>We are unique beacuse we hold ourselves to the highest possible standard in the agro-business.</h5>
          <p>We pride ourselves in our culture of excellence and adherance to the best practices and standards. Our work force are highly trained professionals who knows their onions</p>
          <p>We grow and process high quality agricultural Products for safe and quality consumption. We care about what goes into our planting and processess.</p>
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
                <p className="count-title">Poultry Capacity</p>
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
                <p className="count-title">Diary Capacity</p>
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
                <p className="count-title">Farm Workers</p>
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
                <p className="count-title">Plantation Acres</p>
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