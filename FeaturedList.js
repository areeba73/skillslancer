import React,{useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section10 from '../components/Section10';
import { faRobot, faSpaceShuttle, faDna, faLeaf, faShoppingCart, faShieldAlt, faTools, faGraduationCap, faBuilding, faChartLine, faHospital, faTruck, faBrain, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import discover1 from '../assets/Images/Discover-img1.webp'
import discover9 from '../assets/Images/Discover-img9.jpeg';
import Discover9 from '../assets/Images/Discover-img9.webp';
import discover5 from'../assets/Images/Discover-img5.jpg';
const FeaturedList = () => {
    const [activeItem, setActiveItem] = useState('ALL');

    const handleItemClick = (item) => {
      setActiveItem(item);
    }; return (
    <div>
         <Header
        first="10 OF IN 10 2023"
        Second="Discover our ten top startups across ten trending industries"
        Third="Learn More"
        four="Discover"
        five="For job seekers"
        six="For companies"
        seven="Log In"
        eight="Sign up"
        nine="I'm Looking for a job"
        ten="I'm Looking for a candidate"
      />
       {/* *{section1}* */}
       <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="discover" style={{color:'#0d3d35'}}>Featured List</h1>
          <div className="border border-dark border-container">
            <ul className="C p-1">
              <li 
                className={`li-item aa mt-2 ${activeItem === 'ALL' ? 'active' : ''}`} 
                onClick={() => handleItemClick('ALL')}
              >
                <a href="./discover">ALL</a>
              </li>
              <li 
                className={`li-item ml-4 mt-2 ${activeItem === 'Startup' ? 'active' : ''}`} 
                onClick={() => handleItemClick('Startup')}
              >
                <a href="./Startup">Startup</a>
              </li>
              <li 
                className={`li-item ml-4 mt-2 ${activeItem === 'Blogs' ? 'active' : ''}`} 
                onClick={() => handleItemClick('Blogs')}
              >
                <a href="./Blogs">Blogs</a>
              </li>
              <li 
                className={`li-item ml-4 mt-2 ${activeItem === 'Featured lists' ? 'active' : ''}`} 
                onClick={() => handleItemClick('Featured lists')}
              >
                <a href="./FeaturedList" >Featured lists</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  

      <div className="container-fluid w-100">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-xl-12 col-lg-12">
            <div className="wellfoundbar">
              <h5 style={{ }} className="wellfoundbar-text txt1">
                <b style={{ color: 'red' }}>10 </b>GroundBreaking Teams
              </h5>
              <img className="wellfound-image" src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/6578bd30d69eac21ba1fe484_Group%20147.svg" alt="" />
              <h5 style={{  }} className="txt2">
                <b style={{ color: 'red' }} >10 </b> Trending Industries
              </h5>
            </div>
          </div>
        </div>
      </div>
      </div>
      
        {/* *{section1 end}* */}
         {/* Section5 start */}
         <div className="container">
      <hr style={{ width: '100%' }} className="card-divider mt-5" />
      <div className="row">
        <div className="col">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '35px', fontWeight: 700 }} className="mt-5">
              Discover Industries
            </h1>
          </div>

          {/* First Line */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="discover-industries mt-3">
            <ul className="industry-list">
              <li className="industry-item">
                <a href="/discover/ai-ml" className="industry-link">
                  <FontAwesomeIcon icon={faRobot} /> AI/ML
                </a>
              </li>
              <li className="industry-item">
                <a href="/discover/aerospace" className="industry-link">
                  <FontAwesomeIcon icon={faSpaceShuttle} /> Aerospace
                </a>
              </li>
              <li className="industry-item">
                <a href="/discover/biotech" className="industry-link">
                  <FontAwesomeIcon icon={faDna} /> Biotech
                </a>
              </li>
              <li className="industry-item">
                <a href="/discover/cleantech" className="industry-link">
                  <FontAwesomeIcon icon={faLeaf} /> Cleantech
                </a>
              </li>
              <li className="industry-item">
                <a href="/discover/consumer" className="industry-link">
                  <FontAwesomeIcon icon={faShoppingCart} /> Consumer
                </a>
              </li>
            </ul>
          </div>

          {/* Second Line */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="discover-industries-1 mt-2">
            <ul className="industry-list-1">
              <li className="industry-item-1">
                <a href="/discover/cyber-security" className="industry-link-1">
                  <FontAwesomeIcon icon={faShieldAlt} /> Cyber Security
                </a>
              </li>
              <li className="industry-item-1">
                <a href="/discover/developer-tools" className="industry-link-1">
                  <FontAwesomeIcon icon={faTools} /> Developer Tools
                </a>
              </li>
              <li className="industry-item-1">
                <a href="/discover/e-commerce" className="industry-link-1">
                  <FontAwesomeIcon icon={faShoppingCart} /> E-Commerce
                </a>
              </li>
              <li className="industry-item-1">
                <a href="/discover/edtech" className="industry-link-1">
                  <FontAwesomeIcon icon={faGraduationCap} /> Edtech
                </a>
              </li>
              <li className="industry-item-1">
                <a href="/discover/enterprise" className="industry-link-1">
                  <FontAwesomeIcon icon={faBuilding} /> Enterprise
                </a>
              </li>
            </ul>
          </div>

          {/* Third Line */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-2">
            <ul className="industry-list-2">
              <li className="industry-item-2">
                <a href="/discover/fintech" className="industry-link-2">
                  <FontAwesomeIcon icon={faChartLine} /> Fintech
                </a>
              </li>
              <li className="industry-item-2">
                <a href="/discover/health-care" className="industry-link-2">
                  <FontAwesomeIcon icon={faHospital} /> Health Care
                </a>
              </li>
              <li className="industry-item-2">
                <a href="/discover/insurance" className="industry-link-2">
                  <FontAwesomeIcon icon={faShieldAlt} /> Insurance
                </a>
              </li>
              <li className="industry-item-2">
                <a href="/discover/logistics" className="industry-link-2">
                  <FontAwesomeIcon icon={faTruck} /> Logistics
                </a>
              </li>
              <li className="industry-item-2">
                <a href="/discover/mental-health" className="industry-link-2">
                  <FontAwesomeIcon icon={faBrain} /> Mental Health
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Line */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-2">
            <ul className="industry-list-3">
              <li className="industry-item-3">
                <a href="/discover/real-estate" className="industry-link-3">
                  <FontAwesomeIcon icon={faBuilding} /> Real Estate
                </a>
              </li>
              <li className="industry-item-3">
                <a href="/discover/saas" className="industry-link-3">
                  <FontAwesomeIcon icon={faCloud} /> SaaS
                </a>
              </li>
              <li className="industry-item-3">
                <a href="/discover/web3-crypto" className="industry-link-3">
                  <FontAwesomeIcon icon={faBitcoin} /> Web3/Crypto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
           {/* Section5  end */}
            {/* Section6  start */}
   <div className="container startups p-2">
      <hr style={{ width: "100%" }} className="card-divider" />
      <div style={{ display: "flex", justifyContent: "space-between" }} className="mt-3">
        <h1 style={{ fontWeight: 600, fontSize: "38px", marginLeft: "8%" }}>Featured lists</h1>
        <a style={{ textDecoration: "none", marginLeft: "60%" }} href="#">
          <p  style={{ color: "gray",  }}>
            More Featured Lists <span style={{ color: "black" }}>></span>
          </p>
        </a>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-xl-4 col-sm-12 col-lg-6 col-md-6 ">
            <div className="card ml-2 d1" style={{ width: "21rem", height: "70vh", borderRadius: "8px" }}>
              <a href="your-link-url" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={discover1} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: "-5%", fontSize: "1.5rem", fontWeight: "bold" }} className="card-title c-title">
                    Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now
                  </h1>
                  <p style={{ display: "flex", justifyContent: "space-between" }} className="card-text pt-2">
                    Russ Rizzo <span style={{ fontSize: "small" }} className="mt-1">Read full Details ></span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-4 col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div className="card ml-2 d2" style={{ width: "21rem", height: "70vh", borderRadius: "8px" }}>
              <a href="your-link-url" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={discover5} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: "-5%", fontSize: "1.5rem", fontWeight: "bold" }} className="card-title c-title">
                    Hiring now: 5 Startups Merging the Tech and Sports Industries in 2023
                  </h1>
                  <p style={{ display: "flex", justifyContent: "space-between" }} className="card-text pt-4 mt-4">
                    Coley Gmeinder <span style={{ fontSize: "small" }} className="mt-1">Read full Details ></span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-xl-4 col-sm-12 col-lg-12 col-md-12">
            <div className="card ml-3 d3" style={{ width: "21rem", height: "70vh", borderRadius: "8px", marginLeft: "-8%" }}>
              <a href="your-link-url" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={Discover9} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: "-5%", fontSize: "1.5rem", fontWeight: "bold" }} className="card-title c-title">
                    28 London-Based Startups you'll want to work for in 2023
                  </h1>
                  <p style={{ display: "flex", justifyContent: "space-between" }} className="card-text mt-5 pt-0">
                    Russ Rizzo <span style={{ fontSize: "small" }} className="mt-1">Read full Details ></span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Section6  end */}
        
        <Section10/>
        <Footer
        first="For Candidates"
        second="Overview"
        third="Startup Jobs"
        four="Web3 Jobs"
        five="Featured"
        six="Salary Calculator"
        seven="Startup Hiring Data"
        eight="Tech Startups"
        nine="Remote"
        ten="For Recruiters"
        eleven="Overview"
        twelve="Recruit Pro"
        thirteen="Curated"
        fourteen="RecruiterCloud"
        fifteen="Hire Developers"
        sixteen="Pricing"
        seventeen="Company"
        eighteen="About"
        nineteen="AngelList Venture"
        twenty="Help"
        tone="Blog"
        ttwo="Terms & Risks"
        tthree="Privacy & Cookies"
        tfour="Copyright © 2024 Wellfound (formerly AngelList Talent). All rights reserved."
        tfive="Browse by:"
        tsix="Jobs"
        tseven="Remote Jobs"
        teight="Locations"
        tnine="Startups"
        tten="Startups Hiring"
        televen="Industries"
        ttwelve="Tech Hubs"
      />
    </div>
  )
}

export default FeaturedList
