import { Link } from "react-router-dom";
import "../footer/Footer.css";

export function Option(props: any) {
  return (
    <div className="d-flex flex-column option">
      <h5 className="p-0 ">{props.h5}</h5>
      <span></span>
      <Link to={props.a1to}>{props.a1name}</Link>
      <Link to={props.a2to}>{props.a2name}</Link>
      <Link to={props.a3to}>{props.a3name}</Link>
      <Link to={props.a4to}>{props.a4name}</Link>
      <Link to={props.a5to}>{props.a5name}</Link>
      <Link to={props.a6to}>{props.a6name}</Link>
      <Link to={props.a7to}>{props.a7name}</Link>
      <Link to={props.a8to}>{props.a8name}</Link>
      <Link to={props.a9to}>{props.a9name}</Link>
      {/* <Link to={props.a10to}>{props.a10name}</Link>
      <Link to={props.a11to}>{props.a11name}</Link> */}
    </div>
  );
}
export function Icon(props: any) {
  return (
    <p className="d-flex icon">
      <i className={props.icon}></i>
      {props.p}
    </p>
  );
}

export function Footer() {
  return (
    <div className="main-footer"   data-aos="zoom-in" data-aos-duration="2000">
      <div className="footer col-lg-12 mx-auto d-flex flex-wrap justify-content-center  pt-5 p-0">
        <div className="col-lg-3 col-md-3 col-12 logo text-center ">
          <img
            className="img-fluid"
            src={require("../../../asset/sample1/PAYGS.png")}
            alt=""
          />
          <br />
          <img
            className="img-fluid"
            src="https://in.rapipay.com/wp-content/uploads/2022/12/googleplay2.png"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-md-3 col-4 mx-lg-0 mx-md-0 mx-1  d-flex justify-content-start align-items-lg-start align-items-md-start align-items-center">
          <Option
            h5={`General`}
            a1to={"/"}
            a1name={`Terms & Conditions`}
            a2to={"/"}
            a2name={`Privacy Policy`}
            a3to={"/"}
            a3name={`Careers`}
            a4to={"/"}
            a4name={`Contact Us`}
            a5to={"/"}
            a5name={``}
            a6to={"/"}
            a6name={""}
            a7to={"/"}
            a7name={""}
            a8to={"/"}
            a8name={""}
            a9to={""}
            a9name={""}
            // a10to={"/"}
            // a10name={"DBO Leads"}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-4 mt-5 mt-lg-0 mt-md-0 d-flex justify-content-start align-items-lg-start align-items-md-start align-items-centerr">
          <Option
            h5={`Services`}
            a1to={"/"}
            a1name={`Banking Services`}
            a2to={"/"}
            a2name={`Payment Services`}
            a3to={"/"}
            a3name={`Tours & Travel Services`}
            a4to={"/"}
            a4name={`Bada Bazar`}
            a5to={"/"}
            a5name={`Suraksha`}
            a6to={"/"}
            a6name={"Loan Services"}
            a7to={"/"}
            a7name={"Devices and Other Services"}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-9 flex-column d-flex justify-content-lg-start  justify-content-md-start justify-content-center align-items-start  foot-address">
          <Option h5={`Corporate Office:`} />
          <Icon
            icon={"fa-solid fa-building"}
            p={`Office Address-- 2-174 Canara Bank Street, Yadiki village and mandal Anantapur Dist Andhra Pradesh 515408`}
          />
          <Icon icon={"fa fa-phone"} p={`9010767138`} />

          <div className="d-flex social">
            <Icon icon={"fa-brands fa-facebook"} />
            <Icon icon={"fa-brands fa-twitter"} />
            <Icon icon={"fa-brands fa-instagram"} />
            <Icon icon={"fa-brands fa-linkedin"} />
            <Icon icon={"fa-brands fa-youtube"} />
          </div>
        </div>

        <p className="text-center mt-4 last col-12">
          © 2023 PAYGS PVT. LTD. ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  );
}
