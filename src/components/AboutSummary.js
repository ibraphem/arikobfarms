import tree from "../assets/img/tree.png"
import grainbag from "../assets/img/grainbag.png"
import { Link } from "react-router-dom";


const AboutSummary = () => {
  return (
    <section className="about-us bg_img_1 bg_img padding-tb">
      <div className="shape-about d-none d-xl-block">
        <img src={grainbag} alt="abs-thumb" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div
              className="about-thumb ml-about-thumb wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <img src={tree} alt="about-thumb" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="section-header text-start wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h3>Arikob Farms Qaulity Assuarance Process.</h3>
              <p>
                We pride ourselves in the culture of excellence and adherance to international standards and best practices in production.
              </p>
            </div>
            <div className="section-wrapper">
              <div className="about-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-inner">
                  <div className="about-thumb">
                    <img src="assets/images/about/icon/01.jpg" alt="about" />
                  </div>
                  <div className="about-content">
                    
                      <h5>Unique Expertise</h5>
                    
                    <p>
                      Our staffs and managers are highly trained professionals who are hospitable and with great sense of humour.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="about-inner">
                  <div className="about-thumb">
                    <img src="assets/images/about/icon/02.jpg" alt="about" />
                  </div>
                  <div className="about-content">
                    
                      <h5>Standardized Operations</h5>
                    
                    <p>
                      We continually evolved to stay ahead with best modern practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-start wow fadeInUp" data-wow-delay="0.6s">
              <Link to="/services" className="lab-btn">
                <span>What We Do</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
