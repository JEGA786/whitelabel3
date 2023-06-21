import { Mail } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Contactus() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="contactus">
          <h1
            data-aos="slide-right" data-aos-duration="2000"
            className="text-center d-flex align-items-center text-white justify-content-center"
          >
            Contact us
          </h1>
        </div>

        <div className="py-md-5 py-2">
          <h1 data-aos="fade-right" data-aos-duration="2000" className="text-center fw-bold">
            We are here to help
          </h1>
          <div
            className="d-flex flex-wrap col-md-11 mx-auto"
            data-aos="fade-up" data-aos-duration="2000"
          >
            <Mail
              icon={"fa fa-phone"}
              p1={`+91 9010767138`}
              p2={`(7:00 AM to 11:00 PM, All days)`}
            />
            <Mail icon={"fa-solid fa-building"} p1={`2-174 Canara Bank Street, Yadiki village and mandal Anantapur Dist Andhra Pradesh 515408`} />
            <Mail 
              icon={"fa fa-envelope"}
              p2={`paygs.in@gmail.com `}
            />
          </div>
        </div>

        <div className="col-lg-11 col-12 mx-auto d-flex p-0 flex-wrap ">
          <div className="col-md-6 col-12 p-3" data-aos="fade-up" data-aos-duration="2000">
            <h3 className="mb-3 fw-bold">Spice Money Corporate Office</h3>
            <p>
              <strong>Address:</strong>2-174 Canara Bank Street, Yadiki village and mandal Anantapur Dist Andhra Pradesh 515408
            </p>
            <p>
              <strong>Contact No:</strong>9010767138 (Monday to Friday, 10:00
              AM to 6:00 PM)
            </p>
            <p>
              <strong>Email ID:</strong>paygs.in@gmail.com
            </p>

            <div className="about-input py-4">
              <h3 className="fw-bold">Fill the form to Connect with us</h3>

              <input
                className="col-12"
                name="firstname"
                type="text"
                placeholder="First Name"
              />
              <div className="d-flex flex-wrap justify-content-between">
                <input
                  className="col-sm-5 col-12"
                  type="text"
                  name="mail"
                  placeholder="E-mail"
                />
                <input
                  className="col-sm-5 col-12"
                  type="number"
                  name="number"
                  placeholder="Number"
                />
              </div>
              <textarea
                className="col-12"
                name="Message"
                placeholder="Message"
              />

              <button>Submit</button>
            </div>
          </div>
          <div className="col-md-6 col-12" data-aos="zoom-in" data-aos-duration="2000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15411.835266580654!2d77.87271255812671!3d15.050394018268856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6a1babbc7e7b9%3A0xeb1c453620f22f57!2sYadiki%2C%20Andhra%20Pradesh%20515408!5e0!3m2!1sen!2sin!4v1687361039574!5m2!1sen!2sin" 
              className="map"
              loading="lazy"
            ></iframe>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
