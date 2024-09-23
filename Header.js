// Init
import React from 'react';
import logo from "../assets/Images/logo (1).png";

import{link} from "react-router-dom"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// Component
export default function Header(props) {
  return (
    <div>
  <nav className="navbar navbar-light topbar">
        <span className="box1">{props.first}</span>
        <p className="dis" style={{ color: 'white' }}>
         {props.Second}
        </p>
        <form className="form-inline">
        <Link to="./discover"><button className="btn btn3 my-2 my-sm-0" type="submit">{props.Third}</button></Link>  
        </form>
      </nav> 
       <nav className="navbar border-0 navbar-expand-lg navbar-light sticky-top navbar-scroll nav p-0 w-100" id="navbar">
        <a className="navbar-brand" href="./home">
          <img className="im" src={logo} alt="Brand Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0  navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link text-dark nav-link-ltr" href="./discover">{props.four}</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark nav-link-ltr" to="/jobseekers">{props.five}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark nav-link-ltr" to="/forcompanies">{props.six}</Link>
            </li>
            <li className="nav-item">
              <Link to="/login"><button className="btn btn1" type="submit" style={{ color:'black' }}>{props.seven}</button></Link>
            </li>
            <li className="nav-item dropdown">
  <a
    href="#"
    className="btn btn2 dropdown-toggle"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {props.eight}
  </a>
  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    
    <li>
      <Link className="dropdown-item" to="/signup">
        {props.nine}
      </Link>
    </li>
    <li>
      <a className="dropdown-item" href="./signupC">
        {props.ten}
      </a>
    </li>
  </ul>
</li>

          </ul>
        </div>
      </nav> 
    </div>
  );
}