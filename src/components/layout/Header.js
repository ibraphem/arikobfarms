import { Link } from "react-router-dom";

const Header = () => {
    return (
     <header className="header-section transparent-header">
  <div className="header-area">
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="primary-menu">
          <div className="logo">
            <Link to="/" style={{color: "#ffc107", fontSize:"35px"}}><i>Arikob Farms</i></Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="main-area">
              <div className="main-menu">
                <ul className="agri-ul">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
       
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>

    );
};

export default Header;