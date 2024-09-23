import React from 'react'
import HalfCircle from '../assets/Images/half-circle.png'; // Update the path according to your project structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Section6 = () => {
  return (
    <div>
      <div className="container-fluid mt-4">
      <div className="row">
        {/* Get Featured Section */}
        <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6 trans">
          <div className="get ml-3">
            <div className="pt-5 ml-4">
              <b>Get Featured</b>
              <h2 className="why gap mt-3">Let us show you off</h2>
            </div>
            <div className="apply w-75 ml-4 pb-3">
              <p style={{ color: 'white' }}>
                Apply to be featured and let the opportunities come to you. We'll highlight your profile to top recruiters and companies searching for your skills.
                <br />
                <br />
                Oh, it's also 100% free.
              </p>
            </div>
            <a href="/" className="l1" style={{ textDecoration: 'none' , color:' #0d3d35'}}>
              Learn more
            </a>
          
          </div>
        </div>

        {/* Salary Calculator Section */}
        <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6 trans">
          <div className="sal mr-3">
            <div className="pt-5 ml-5" style={{ color: 'white' }}>
              <p>
                <b>Salary Calculator</b>
              </p>
              <h2 className="why gap mt-2" style={{ color: 'white' }}>
                Know your Worth
              </h2>
            </div>
            <div className="apply2 w-50 ml-5">
              <p className='data'>
                We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.
              </p>
            </div>
            <div>
              <a href="/" className="l2" style={{ textDecoration: 'none' }}>
                Calculated
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Section6
