import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section10 from '../components/Section10'
import Tulip from '../assets/Images/Tulip.jpg'
import Labelbox from '../assets/Images/Labelbox.jpg'
const Startup = () =>
     {
        const [activeItem, setActiveItem] = useState('ALL');

        const handleItemClick = (item) => {
          setActiveItem(item);
        };return (
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
          <h1 className="discover" style={{color:'#0d3d35'}}>Startup</h1>
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
      {/* {Section3 start} */}

      <div className="container startups p-2">
     
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
            <span style={{ color: 'black' }}>></span>
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
                        className="card-titlecol3cd2" style={{marginTop:'4%'}}
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
                        className="card-titlesec3cd3" style={{marginTop:'4%'}}
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
            <span style={{ color: 'black' }}>></span>
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
                        className="card-titlecol3cd2" style={{marginTop:'4%'}}
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
                        className="card-titlesec3cd3" style={{marginTop:'4%'}}
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

export default Startup
