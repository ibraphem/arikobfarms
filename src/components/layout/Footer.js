import React from "react";
import { Link } from "react-router-dom";
import livestock from "../../assets/img/livestock.png";
import vegetable from "../../assets/img/vegetable.png";
import honey from "../../assets/img/honey.png";
import machine from "../../assets/img/machine.png";
import grain from "../../assets/img/grain.png";
import fruit from "../../assets/img/fruit.png";

const Footer = () => {
  return (
    <footer className="footer-section padding-tb pb-0">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item">
                <div className="footer-inner">
                  <div className="footer-logo">
                    <Link to="/" style={{ color: "#ffc107", fontSize: "35px" }}>
                      <i>Arikob Farms</i>
                    </Link>
                  </div>
                  <div className="footer-desc">
                    <p>
                      We grow and process high quality agricultural Products for
                      safe and quality consumption.
                    </p>
                    <p>
                      We pride ourselves in our culture of excellence and
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-addtess">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>Keep In Touch</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <div className="icon">
                          <i className="icofont-google-map" />
                        </div>
                        <div className="detalis">
                          <p>
                            Block 141 -145, Gbadamosi Avenue, Ikoyi, Lagos
                            Nigeria.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icofont-phone" />
                        </div>
                        <div className="detalis">
                          <p>
                            +234-703-987-2351, +234-803-987-2351,
                            +233-803-687-2351
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icofont-envelope" />
                        </div>
                        <div className="detalis">
                          <p>arikob@gmail.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-blog">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>Usefull Links</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <div className="detalis">
                          <Link to="/">
                            <h6>Home</h6>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="detalis">
                          <Link to="/about">
                            <h6>About Us</h6>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="detalis">
                          <Link to="/services">
                            <h6>Our Services</h6>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="detalis">
                          <Link to="/contact">
                            <h6>Contact Us</h6>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="footer-item footer-gallery">
                <div className="footer-inner">
                  <div className="footer-title">
                    <h5>Our Expertise</h5>
                  </div>
                  <div className="footer-body">
                    <ul className="agri-ul">
                      <li>
                        <img src={livestock} alt="footer-gallery" />
                      </li>
                      <li>
                        <img src={vegetable} alt="footer-gallery" />
                      </li>
                      <li>
                        <img src={honey} alt="footer-gallery" />
                      </li>
                      <li>
                        <img src={machine} alt="footer-gallery" />
                      </li>
                      <li>
                        <img src={fruit} alt="footer-gallery" />
                      </li>
                      <li>
                        <img src={grain} alt="footer-gallery" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2022
            <a href="index.html" target="_blank">
              <span>Chashi</span>
            </a>
            All Rights Reserved By
            <Link to="/">
              <span>Arikob Farms</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
