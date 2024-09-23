import React,{useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import discover1 from '../assets/Images/Discover-img1.webp'
import christian from '../assets/Images/ChristieKim-Persona.png'
import discover3 from '../assets/Images/Discover-img3.jpg'
import discover4 from '../assets/Images/Discover-img4.jpg'
import discover6 from '../assets/Images/Discover-image6.jpg'
import discover7 from '../assets/Images/Discover-img7.jpg'
import discover8 from '../assets/Images/Discover-img8.jpg';
import discover9 from '../assets/Images/Discover-img9.jpeg';
import Discover9 from '../assets/Images/Discover-img9.webp';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import Tulip from "../assets/Images/Tulip.jpg"
import Labelbox from "../assets/Images/Labelbox.jpg"
import { faRobot, faSpaceShuttle, faDna, faLeaf, faShoppingCart, faShieldAlt, faTools, faGraduationCap, faBuilding, faChartLine, faHospital, faTruck, faBrain, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import discover5 from'../assets/Images/Discover-img5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import person1 from '../assets/Images/person1.jpeg'
import Section10 from '../components/Section10';
 




function DiscoverSection() {
  const [activeItem, setActiveItem] = useState('ALL');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
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
        <div className="container-fluid discover1">
      <div className="row">
        <div className="col-12">
          <h1 className="discover" style={{color:'#0d3d35'}}>Discover</h1>
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
                <a href="./Featuredlist" >Featured lists</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  

      <div className="container-fluid w-100">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-xl-12 col-lg-12">
            <div className="wellfoundbar">
              <h5  className="wellfoundbar-text txt1">
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
        {/* /*{Section2}*/}
        <div className='container mt-5 '>
          <div className='row'>
            {/* /*{coulum1 card1}*/}
            <div className='col-xl-4 col-sm-12  col-md-12  col-lg-6'>
            <div className="card h1" style={{ width: '23rem', height: '70vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover1} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: '-5%', fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title">
                    Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text pt-2">
                    Russ Rizzo <span style={{ fontSize: 'small' }} className="mt-1">Read full Details &gt;</span>
                  </p>
                </div>
              </a>
            </div>
            {/* /*{coulumn1 card2}*/}
           
            <div className="card cd mt-4" style={{ width: '11rem', height: '35vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-body">
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-titlecard1">
                    Developers Tools
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card2-txt1 pt-2">
                  306 Startups
                  </p>
                </div>
              </a>
              </div>
              {/* /*{coulumn1 card3}*/} 
              <div className="cad cd2 " style={{ width: '11rem', height: '35vh', borderRadius: '8px', border:'2px solid #d3d3d3' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-body">
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-titlecard2">
                      Health Care
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card3-txt1 pt-2">
                  2.5k Startups
                  </p>
                </div>
              </a>
              </div>
 {/* /*{column1 card4}*/}
 <div className="card mt-4 h2" style={{ width: '23rem', height: '20vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover6} className="card-img-top card-image2 p-4" alt="..." />
                <div className="card-body">
                  <p className='paracard4 ' style={{ fontSize:'1.4rem'}}>Apptentive</p>
                  {/* <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1">
                    Chrristie Kim| COO Intervie....
                  </h1> */}
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txtcard4 pt-2">
              Actionable Mobile Customer Feedback
                  </p>
                </div>
              </a>
              </div>
            </div>

             {/* /*{coulumn2}*/}
            <div className='col-xl-4 col-sm-12  col-md-12   col-lg-6'>
              {/* /*{coulumn2 card1}*/}
            <div className="card h3 " style={{ width: '23rem', height: '35vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={christian} className="card-img-top card-image1 p-4" alt="..." />
                <div className="card-body">
                  <p className='para1 ' style={{color:"gray", fontSize:'1rem'}}>From the Founders</p>
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1">
                    Chrristie Kim| COO Intervie....
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txt1 pt-2">
                 " I am always chafed at that fact that i go into some companies and....."
                  </p>
                </div>
              </a>
              </div>
              {/* /*{column2 card2}*/}
              <div className="card mt-4 h4" style={{ width: '23rem', height: '20vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover3} className="card-img-top card-image2 p-4" alt="..." />
                <div className="card-body">
                  <p className='para2 ' style={{ fontSize:'1.4rem'}}>All Trails</p>
                  {/* <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1">
                    Chrristie Kim| COO Intervie....
                  </h1> */}
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txt2 pt-2">
                Your Guide to the outdoor
                  </p>
                </div>
              </a>
              </div>
              {/* /*{column2 card3}*/}
              <div className="card mt-4 h5 " style={{ width: '23rem', height: '70vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover1} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: '-5%', fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title">
                    Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text pt-2">
                    Russ Rizzo <span style={{ fontSize: 'small' }} className="mt-1">Read full Details &gt;</span>
                  </p>
                </div>
              </a>
            </div>
            </div>
            {/* /*{column3 }*/}
            <div className='col-xl-4 col-sm-12 col-md-12  col-lg-12 '>
   {/* /*{column3 card1 }*/}
 <div className="card mt-4 h6" style={{ width: '23rem', height: '20vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover4} className="card-img-top card-image2 p-4" alt="..." />
                <div className="card-body">
                  <p className='para3 ' style={{ fontSize:'1.4rem'}}>Duck Duck Go</p>
                  {/* <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1">
                    Chrristie Kim| COO Intervie....
                  </h1> */}
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txt3 pt-2">
                The Search engine that doensot track you
                  </p>
                </div>
              </a>
              </div>
    {/* /*{column3 card2 }*/}
    <div className="card mt-4 col3cd2   " style={{ width: '10.5rem', height: '50vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover7} className="card-img-top card-image2 p-4 h-50 w-100" alt="..." />
                <div className="card-body">
                 
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1col3cd2">
                    SAN Fransisco
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txtcol3 pt-2">
             20.k  Startups currentlt hiring in..
                  </p>
                   <p className='paracol3 ' style={{ fontSize:'0.9rem',  color:'gray'}}>View Startups</p>
                </div>
              </a>
              </div>
            
     {/* /*{column3 card3 }*/}
     <div className="cad col3cd3 mt-4  " style={{ width: '10.5rem', height: '50vh', borderRadius: '8px' , border:'2px solid #d3d3d3' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover8} className="card-img-top card-image2 p-4 h-50 w-100" alt="..." />
                <div className="card-body">
                  
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title2col3cd3">
                    Remote
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txtcol3cd3 pt-2">
                  20.k  Startups currentlt hiring in..
                  </p>
                  <p className='paracol3cd3 ' style={{ fontSize:'0.9rem ', color:'gray'}}>View Startups</p>
                </div>
              </a>
              </div>
              {/* /*{coulumn3 card4}*/}
            <div className="card mt-3 acard " style={{ width: '23rem', height: '35vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={discover9} className="card-img-top w-50 p-4 d9" alt="..." />
                <div className="card-body">
                  <p className='paracol3cd4 ' style={{color:"gray", fontSize:'1rem'}}>From the Founders</p>
                  <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-titlecol3cd4">
                   JOE Malandruccol..
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txtcol3cd4 pt-2">
                 " In this  from the founders interview,we talk to joseph..."
                  </p>
                </div>
              </a>
              </div>
              {/* /*{column3 card5}*/}
              <div className="card mt-4 bcard" style={{ width: '23rem', height: '18vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-body">
                  <p className='paracol3cd5 ' style={{ fontSize:'1.4rem',color:'black'}}>Looking For a job</p>
                  {/* <h1 style={{  fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title1">
                    Chrristie Kim| COO Intervie....
                  </h1> */}
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text card-txtcol3cd5 pt-2">
                  Browse through 130k+ jobs at the worlds most innovative startups.Filter by salary,remotes an..
                  </p>
                </div>
              </a>
              </div>
            
  </div>
          </div>
        </div>
        {/* {Section2 end} */}
       
         {/* {Section3 start} */}

         <div className="container startups p-2">
      <hr style={{ width: '100%' }} className="card-divider" />
      <h1 style={{ marginLeft: '-1%', fontWeight: 600 }} className="mt-5 ml-5">
        Find Startup
      </h1>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className="mt-3"
      >
        <h1 style={{ fontWeight: 600, fontSize: '25px' }} className='ml-5'>Aerospace</h1>
        <a
          style={{ textDecoration: 'none', marginLeft: '60%' }}
          href=""
        >
          <p style={{ color: 'gray' }}>
            View All Aerospace Setups{' '}
          </p>
        </a>
      </div>

      {/* After Startup Cards */}
      <div className="container-fluid ">
        <div className="row">
          {/* Card 1 */}
          <div className=" col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div
              className="card dd1"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
                
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img 
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4 im1"
                      src={Tulip}
                      alt="Tulip Interfaces"
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        lineHeight: '1.3rem',
                        marginLeft: '-10%',
                        marginTop: '15%',
                      }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlesec3col1"
                      >
                        Tulip Interfaces
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3col1 w-100 pt-2 pl-1"
                      >
                        The Leader in Frontline Operations
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '14px' }}
                        className="card-textsec3col1 w-100 pl-1"
                      >
                        Enterprise Software . Boston Munich +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '19px',
                          marginLeft: '110%',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-72%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div
              className="card dd2"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
              
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4"
                      src={Labelbox}
                      alt="Labelbox"
                    />
                  </div>
                  <div className="h-75 mt-4">
                    <div
                      style={{ lineHeight: '1.3rem', marginLeft: '-1%' }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlecol3cd2" 
                      >
                        Labelbox
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3cd2 w-100 pt-2 pl-1"
                      >
                        Our Mission is to build the best products for human to
                        Align with Artificial
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '13px' }}
                        className="card-textcol3cd2 w-100 pl-1"
                      >
                        Enterprise Software . Miami, New York City +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '17px',
                          marginLeft: '85%',
                          marginTop: '-3%',
                          position: 'absolute',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-68%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-sm-12 col-lg-12 col-md-12">
            <div
              className="card dd3"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
               
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4"
                      src={Labelbox}
                      alt="Labelbox"
                    />
                  </div>
                  <div className="h-75 mt-4">
                    <div
                      style={{ lineHeight: '1.3rem', marginLeft: '-1%' }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlesec3cd3" 
                      >
                        Labelbox
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3cd3 w-100 pt-2 pl-1"
                      >
                        Our Mission is to build the best products for human to
                        Align with Artificial
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '13px' }}
                        className="card-textsec3cd3 w-100 pl-1"
                      >
                        Enterprise Software . Miami, New York City +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '17px',
                          marginLeft: '85%',
                          marginTop: '-3%',
                          position: 'absolute',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-68%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
          {/* {Section3 end} */}



          {/* {Section4 start} */}

          <div className="container startups p-2">
      <hr style={{ width: '100%' }} className="card-divider" />
      <h1 style={{ marginLeft: '-1%', marginTop:'3%', fontWeight: 600 }} className=" ml-5">
        Mental Health
      </h1>
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className="mt-3"
      >
        <a
          style={{ textDecoration: 'none', marginLeft: '60%' }}
          href=""
        >
          <p style={{ color: 'gray', marginTop:'-15%', marginLeft:'140%' }} className=' w-100' >
            View All Mental Health Setups{' '}
          </p>
        </a>
      </div>

      {/* After Startup Cards */}
      <div className="container-fluid ">
        <div className="row">
          {/* Card 1 */}
          <div className=" col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div
              className="card dd1"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
                
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img 
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4 im1"
                      src={Labelbox}
                      alt="Tulip Interfaces"
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        lineHeight: '1.3rem',
                        marginLeft: '-10%',
                        marginTop: '15%',
                      }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlesec3col1"
                      >
                        Labelbox
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3col1 w-100 pt-2 pl-1"
                      >
                        Our Mission is to build the best products for human to
                        Align with Artificial
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '14px' }}
                        className="card-textsec3col1 w-100 pl-1"
                      >
                        Enterprise Software . Boston Munich +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '19px',
                          marginLeft: '110%',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-72%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div
              className="card dd2"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
                
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4"
                      src={Labelbox}
                      alt="Labelbox"
                    />
                  </div>
                  <div className="h-75 mt-4">
                    <div
                      style={{ lineHeight: '1.3rem', marginLeft: '-1%' }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlecol3cd2" 
                      >
                        Labelbox
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3cd2 w-100 pt-2 pl-1"
                      >
                        Our Mission is to build the best products for human to
                        Align with Artificial
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '13px' }}
                        className="card-textcol3cd2 w-100 pl-1"
                      >
                        Enterprise Software . Miami, New York City +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '17px',
                          marginLeft: '85%',
                          marginTop: '-3%',
                          position: 'absolute',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-68%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-sm-12 col-lg-12 col-md-12">
            <div
              className="card dd3"
              style={{
                maxWidth: '540px',
                width: '23rem',
                height: '47vh',
                borderRadius: '8px',
                
              }}
            >
              <div style={{ height: '12vh' }} className="card-header"></div>
              <a
                href="your-link-url"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <img
                      style={{
                        objectFit: 'cover',
                        height: '21vh',
                        borderRadius: '30px',
                        position: 'absolute',
                        marginLeft: '2%',
                        marginTop: '-18%',
                      }}
                      className="p-4"
                      src={Labelbox}
                      alt="Labelbox"
                    />
                  </div>
                  <div className="h-75 mt-4">
                    <div
                      style={{ lineHeight: '1.3rem', marginLeft: '-1%' }}
                      className="card-body w-100"
                    >
                      <h1
                        style={{
                          lineHeight: '1.5rem',
                          fontSize: '1.7rem',
                          margin: '1%',
                        }}
                        className="card-titlesec3cd3" 
                      >
                        Labelbox
                      </h1>
                      <p
                        style={{ color: 'gray', fontSize: '17px' }}
                        className="card-textsec3cd3 w-100 pt-2 pl-1"
                      >
                        Our Mission is to build the best products for human to
                        Align with Artificial
                      </p>
                      <p
                        style={{ color: 'gray', fontSize: '13px' }}
                        className="card-textsec3cd3 w-100 pl-1"
                      >
                        Enterprise Software . Miami, New York City +2
                      </p>
                      <h1
                        style={{
                          color: 'gray',
                          fontSize: '17px',
                          marginLeft: '85%',
                          marginTop: '-3%',
                          position: 'absolute',
                        }}
                        className="card-text w-100"
                      >
                        {'>'}
                      </h1>
                      <a href="https://wellfound.com/discover">
                        <button
                          className="follow-btn bg-light"
                          style={{
                            width: '26%',
                            height: '5.2vh',
                            position: 'absolute',
                            marginTop: '-68%',
                            marginLeft: '67%',
                            borderRadius: '5px',
                          }}
                        >
                          + follow
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
          {/* {Section4 end} */}
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
            More Featured Lists 
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
                    Russ Rizzo <span style={{ fontSize: "small" }} className="mt-1">Read full Details </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-4 col-xl-4 col-sm-12 col-lg-6 col-md-6">
            <div className="card ml-2 d2" style={{ width: "23rem", height: "70vh", borderRadius: "8px" }}>
              <a href="your-link-url" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={discover5} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: "-5%", fontSize: "1.5rem", fontWeight: "bold" }} className="card-title c-title">
                    Hiring now: 5 Startups Merging the Tech and Sports Industries in 2023
                  </h1>
                  <p style={{ display: "flex", justifyContent: "space-between" }} className="card-text pt-4 mt-4">
                    Coley Gmeinder <span style={{ fontSize: "small" }} className="mt-1">Read full Details </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-xl-4 col-sm-12 col-lg-12 col-md-12">
            <div className="card ml-3 d3" style={{ width: "23rem", height: "70vh", borderRadius: "8px", marginLeft: "-8%" }}>
              <a href="your-link-url" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={Discover9} className="card-img-top card-image p-4" alt="..." />
                <div className="card-body">
                  <h1 style={{ marginTop: "-5%", fontSize: "1.5rem", fontWeight: "bold" }} className="card-title c-title">
                    28 London-Based Startups you'll want to work for in 2023
                  </h1>
                  <p style={{ display: "flex", justifyContent: "space-between" }} className="card-text mt-5 pt-0">
                    Russ Rizzo <span style={{ fontSize: "small" }} className="mt-1">Read full Details </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Section6  end */}
         {/* Section7  start */}
      <div className="container startups p-2">
        <hr style={{ width: '100%' }} className="card-divider" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="mt-3">
          <h1 style={{ fontWeight: 600, fontSize: '28px' }}>From The Founders</h1>
          <a style={{ textDecoration: 'none', marginLeft: '60%' }} href="">
            <p style={{ color: 'gray' }}>
              More Founders Articles <span style={{ color: 'black' }}>&gt;</span>
            </p>
          </a>
        </div>
      </div>

      <div className="container-fluid  p-5">
        <div className="row">
          {/* Col 1 */}
          <div className="col-xl-4 col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="card ml-5 t1" style={{ width: '23rem', height: '70vh', borderRadius: '8px' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={person1} className="card-img-top card-image p-4" alt="Person 1" />
                <div className="card-body">
                  <h1 style={{ marginTop: '-5%', fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title">
                    Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text pt-2">
                    Russ Rizzo <span style={{ fontSize: 'small' }} className="mt-1">Read full Details &gt;</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-xl-4 col-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="card mb-3 ml-2 t2" style={{ maxWidth: '540px', width: '23rem', height: '34vh', borderRadius: '8px', marginLeft: '-12%' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img style={{ height: '35vh', width: '134%', objectFit: 'cover', borderRadius: '30px' }} className="p-4" src={discover9} alt="Discover" />
                  </div>
                  <div className="col-md-8">
                    <div style={{ lineHeight: '1.3rem', padding: '1rem' }} className="card-body ml-3 mt-2">
                      <p style={{ margin: '0%', color: 'gray' }} className="card-text">From the founder.</p>
                      <h1 style={{ lineHeight: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold', margin: '0.3%' }} className="card-title mt-1">
                        Joe Malandruccol..
                      </h1>
                      <p style={{ color: 'gray' }} className="card-text mt-2">"In this from the founders interview, we talk to Joseph..".</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="card ml-2 t3" style={{ maxWidth: '540px', width: '23rem', height: '33.5vh', borderRadius: '8px', marginLeft: '-12%' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img style={{ height: '35vh', width: '134%', objectFit: 'cover', borderRadius: '30px' }} className="p-4" src={discover9} alt="Discover" />
                  </div>
                  <div className="col-md-8">
                    <div style={{ lineHeight: '1.3rem', padding: '1rem' }} className="card-body ml-3 mt-2">
                      <p style={{ margin: '0%', color: 'gray' }} className="card-text">From the founder.</p>
                      <h1 style={{ lineHeight: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold', margin: '0.3%' }} className="card-title mt-1">
                        Joe Malandruccol..
                      </h1>
                      <p style={{ color: 'gray' }} className="card-text mt-2">"In this from the founders interview, we talk to Joseph..".</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Col 3 */}
          <div className="col-xl-4 col-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="card t4" style={{ width: '23rem', height: '70vh', borderRadius: '8px', marginLeft: '-8%' }}>
              <a href="your-link-url" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={Discover9} className="card-img-top card-image p-4" alt="Discover" />
                <div className="card-body">
                  <h1 style={{ marginTop: '-5%', fontSize: '1.5rem', fontWeight: 'bold' }} className="card-title c-title">
                    28 London-Based Startups you'll want to work for in 2023
                  </h1>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="card-text mt-5 pt-0">
                    Russ Rizzo <span style={{ fontSize: 'small' }} className="mt-1">Read full Details &gt;</span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <div style={{ marginLeft: '18%' }} className="text w-75">
              <h1 style={{ fontSize: '2.2rem', fontWeight: 600 }}>
                We have a lot of exciting startup opportunities and candidates - only a few are perfect for you.
              </h1>
              <h4 style={{ color: 'gray', marginLeft: '25%' }} className="mt-4">
                We'll help you find the few
              </h4>
              <button style={{ color: 'white', backgroundColor: 'black', marginLeft: '32%' }} className="btn mt-4">
                Find what's next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container startups p-2 mt-5">
        <hr style={{ width: '100%' }} className="card-divider" />
      </div>
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
  );
}

export default DiscoverSection;