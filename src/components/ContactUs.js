import React from 'react';

const ContactUs = () => {
    return (
      <div className="contact-section padding-tb">
  <div className="container">
    <div className="contac-top">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-6 col-12">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="icofont-google-map" />
            </div>
            <div className="contact-details">
              <p>A778/9, Outer Ring Road, Accra. GHANA</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-12">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="icofont-phone" />
            </div>
            <div className="contact-details">
              <p>
                +233-242-551-065, +233-244-087-335</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-12">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="icofont-envelope" />
            </div>
            <div className="contact-details">
              <p>arikofarmsb@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contac-bottom">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="contact-form">
            <form className="comment-form">
              <input type="text" name="name" className placeholder="Name*"  required/>
              <input type="email" name="email" className placeholder="Email*" required/>
              <input type="text" name="subject" className placeholder="Subject*" required />
              <textarea name="text" id="role" cols={30} rows={10} placeholder="Message*" defaultValue={""} />
              <button type="submit" className="lab-btn">
                <span>Submit Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default ContactUs;
