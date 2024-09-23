
import React from 'react';
import logo from "../assets/Images/logo (1).png";
import twitter from "../assets/Images/twitter (1).png"
import instagram from "../assets/Images/instagram.png"
const Footer = (props) => {
  return (
    <div>
      {/* Footer */}
      <div className="container-fluid footer ">
        <div className="row ">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-5">
            <img className=" ml-5 skill " id='img' src={logo} alt="Brand Logo"/>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-5">
            <h4 className="for mt-4 ml-4" style={{ fontWeight:'900'}}>
              {props.first}
            </h4>
            <ul className="mt-3">
              <li>
                <a href="#">{props.second}</a>
              </li>
              <li>
                <a href="#">{props.third}</a>
              </li>
              <li>
                <a href="#">{props.four}</a>
              </li>
              <li>
                <a href="#">{props.five}</a>
              </li>
              <li>
                <a href="#">{props.six}</a>
              </li>
              <li>
                <a href="#">{props.seven}</a>
              </li>
              <li>
                <a href="#">{props.eight}</a>
              </li>
              <li>
                <a href="#">{props.nine}</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-2 col-md-6 col-sm-12 mt-5">
            <h4 className="for mt-4 ml-4" style={{ fontWeight:'900'}}>
            {props.ten}
            </h4>
            <ul className="mt-3">
              <li>
                <a href="#">{props.eleven}</a>
              </li>
              <li>
                <a href="#">{props.twelve}</a>
              </li>
              <li>
                <a href="#">{props.thirteen}</a>
              </li>
              <li>
                <a href="#">{props.fourteen}</a>
              </li>
              <li>
                <a href="#">{props.fifteen}</a>
              </li>
              <li>
                <a href="#">{props.sixteen}</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 mt-5">
            <h4 className="for mt-4 ml-4" style={{ fontWeight:'900'}}>
            {props.seventeen}
            </h4>
            <ul className="mt-3">
              <li>
                <a href="#">{props.eightteen}</a>
              </li>
              <li>
                <a href="#">{props.nineteen}</a>
              </li>
              <li>
                <a href="#">{props.twenty}</a>
              </li>
              <li>
                <a href="#">{props.tone}</a>
              </li>
              <li>
                <a href="#">{props.ttwo}</a>
              </li>
              <li>
                <a href="#">{props.tthree}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-6 mt-5">
            <div className="ml-5">
              <a href="#"><img className="social" src={twitter} alt="Twitter"/></a>
              <a href="#"><img className="ml-3 social" src={instagram} alt="Instagram"/></a>
              <p className="d-inline ml-3">{props.tfour}</p>
            </div>
          </div>
          <div className="col-xl-6 mt-5">
            <p className="ml-2">{props.tfive} 
              <a  href="#"><ins>{props.tsix}</ins></a>, 
              <a href="#"><ins>{props.tseven}</ins></a>, 
              <a href="#"><ins>{props.teight}</ins></a>, 
              <a href="#"><ins>{props.tnine}</ins></a>, 
              <a href="#"><ins>{props.tten}</ins></a>, 
              <a href="#"><ins>{props.televen}</ins></a>, 
              <a href="#"><ins>{props.ttwelve}</ins></a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default Footer;
