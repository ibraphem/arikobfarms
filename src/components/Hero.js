import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="banner banner-pad-1 bg_img">
      <div className="container">
        <div className="banner-content">
          <div className="banner-title">Arikob Farms</div>
          <div className="banner-desc">
            We grow and process high quality agricultural products for safe consumption.
            We also care about your health and recreational needs.
          </div>
          <Link to="/about" className="lab-btn">
            <span>Discover Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
