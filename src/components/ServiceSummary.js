import veg from "../assets/img/veg.png"
import honey from "../assets/img/honey.png"
import grain from "../assets/img/grain.png"
import fruit from "../assets/img/fruit.png"
import livestock from "../assets/img/livestock.png"
import machine from "../assets/img/machine.png"
import lis from "../assets/img/lis.png"
import comb from "../assets/img/comb.png"
import bag from "../assets/img/bag.png"

const ServiceSummary = () => {
  return (
    <section className="feature-section padding-tb">
      <div className="shape-feature d-none d-xl-block">
        <img
          src={lis}
          alt="feature-thumb"
          className="shape-1"
        />
        <img
          src={comb}
          alt="feature-thumb"
          className="shape-2"
        />
        <img
          src={bag}
          alt="feature-thumb"
          className="shape-3"
        />
      </div>

      <div className="container">
        <div className="section-header wow fadeInUp" data-wow-delay="0.3s">
          <h3>Arikob Farms Ecology Products</h3>
          <p>
            We are unique beacuse we hold ourselves to the highest possible standard in the agro-business.
          </p>
        </div>
        <div className="section-wrapper">
          <div className="row">
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={veg} alt="feature" />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Fresh Vegetable</h5>
                   
                    <p>Green and rich edible plants for growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={honey} alt="Honey" />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Natural Honey</h5>
                   
                    <p>Hybrid training of bees for quality life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={fruit} alt="Fruit" />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Fresh Fruits</h5>
                   
                    <p>Diets Suppliments for healthy living and growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={grain} alt="Grain" />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Awesome Wheats</h5>
                   
                    <p>Qualitative grains and fibre for strength.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={livestock} alt="livestock" />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Diferent Livestock</h5>
                   
                    <p>Diary and breeding quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="feature-item">
                <div className="feature-inner">
                  <div className="feature-thumb">
                    <img src={machine} alt={machine} />
                  </div>
                  <div className="feature-content">
                    
                      <h5>Agro Machinery</h5>
                   
                    <p>Modernised and advanced machinery farming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
