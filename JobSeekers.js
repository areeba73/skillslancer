import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import semicircle from "../assets/Images/semicircle.png"
import downarrow from "../assets/Images/down-arrow.png"
import Slider from "../components/Slider";
import Section6 from '../components/Section6';
import Section10 from '../components/Section10';
import Section9 from '../components/Section9';
import Section3 from '../components/Section3';
import IconSection from "../components/Icons Section"
const JobSeekers = () => {
  const[count,setCount]= useState(" Find the job made for you.");
  const[count1,setCount1]= useState("  We make it easy to find what's next.");
  const[count2,setCount2]= useState(" Browse over 100,000 jobs — from top companies to fast-growing startups.");
  const[count3,setCount3]= useState("Create your profile");
  const[count4,setCount4]= useState("Browse jobs");
  const[count5,setCount5]= useState(" 8M+");
  const[count6,setCount6]= useState(" Matches Made");
  const[count7,setCount7]= useState("   150K+");
  const[count8,setCount8]= useState("Tech Jobs");
  const[count9,setCount9]= useState(" 10M+");
  const[count10,setCount10]= useState("Startup Ready Candidates");
  const[count11,setCount11]= useState("Startups who used our platform");
  const[count12,setCount12]= useState(" Create a profile that highlights your unique");
  const[count13,setCount13]= useState("skills and preferences, then apply to jobs");
  const[count14,setCount14]= useState("with just one click");
  const[count15,setCount15]= useState("One click apply");
  const[count16,setCount16]= useState("Say goodbye to cover letters - your profile is all you need. One click to apply then you're done.");
  const[count17,setCount17]= useState("Set your preferences");
  const[count18,setCount18]= useState("Streamline the interview process by setting your expectations (salary, industry, culture, etc.) upfront.");
  const[count19,setCount19]= useState("Create your profile for free");
  const[count20,setCount20]= useState("Find work that works for you");
  const[count21,setCount21]= useState(" A personalized and private job search, with all the info you care about, all upfront");
  const[count22,setCount22]= useState("Personalized search");
  const[count23,setCount23]= useState("Personalized filters make it quick and easy to find the jobs you care about.");
  const[count24,setCount24]= useState("Unique roles, exciting teams");
  const[count25,setCount25]= useState("Discover unique jobs with future-defining teams");
  const[count26,setCount26]= useState(" Browse jobs");
  const[count27,setCount27]= useState("Let the right opportunity find you");
  const[count28,setCount28]= useState("Top companies apply to you with job opportunities that match your preferences");
  const[count29,setCount29]= useState("Easy onboarding");
  const[count30,setCount30]= useState(" Your profile is all you need. Apply to companies that interest you, and get hired.");
  const[count31,setCount31]= useState("Vetted companies");
  const[count32,setCount32]= useState("Only the best companies, verified and trusted, can contact you.");
  const[count33,setCount33]= useState(" Get started");



  
  
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
       <div className="container mb-5 jobcont">
      <div className="row mt-5">
        <div className="col mt--5">
          <h1 className="sec2" style={{ textAlign: 'center' }}>
           {count}
          </h1>
          <p
            style={{ color: 'black', textAlign: 'center' }}
            className="wemake mt-4"
          >
          {count1} <br />
           {count2}
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col mb-5 mt-3">
          <div className="d-inline">
            <a href="/signup">
              <button className="find4  mb-4">
                {count3}
              </button>
            </a>
          </div>
          <div className=" d-inline">
            <a href="/browse-jobs">
              <button className="find5">{count4}</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    


    <div>
      <Section3/>
      {/* Section 3 */}
      <div className="container-fluid" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5 mt-5">
            <div className="mt-5 ml-3">
              <img
                className="prod ml-5"
                src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a317_Frame%2520288-p-800.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 need pb-5" style={{backgroundColor:'white'}}>
            <div className="mt-5 brand">
              <div className="got">
                <h2 className="why mt-2">Brand yourself for new opportunities</h2>
                <p style={{ color: 'black' }} className="profile mt-5">
                 {count12}
                  <br /> {count13}
                  <br /> {count14}
                </p>
              </div>
              <div className="pb-5">
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <h5 style={{ fontWeight: 600 }}>{count15}</h5>
                  <p style={{ color: 'black' }}>
                   {count16} 
                  </p>
                </div>
                <div
                  className="box text-center mt-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646d73bb4fc8cb7461f6ac35_tabler-icon-toggle-right.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75 mb-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <h5 style={{ fontWeight: 600 }}>{count17}</h5>
                  <p style={{ color: 'black' }}>
                    {count18}
                  </p>
                </div>

                <a href="./signup.html">
                  <button
                    className="mt-3 ml-2 border-0 p-3 pl-4 pr-4 sign2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    {count19}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 end */}

      {/* Section 3.1 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 need pb-5"style={{backgroundColor:'white'}}>
            <div className="mt-5 brand">
              <div className="got">
                <h2 className="why mt-2">{count20}</h2>
                <p style={{ color: 'black' }} className="profile mt-5">
                {count21} 
                </p>
              </div>
              <div className="pb-5">
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <h5 style={{ fontWeight: 600 }}>Stay in the know</h5>
                  <p style={{ color: 'black' }}>
                    No guessing games. View salary and stock options before you apply.
                  </p>
                </div>
                <div
                  className="box text-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646d75631aaeadb21e18efc6_settings.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <h5 style={{ fontWeight: 600 }}>{count22}</h5>
                  <p style={{ color: 'black' }}>
                   {count23} 
                  </p>
                </div>
                <div
                  className="box text-center mt-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/647d04daca07a115af9c05ce_send.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <h5 style={{ fontWeight: 600 }}>{count24}</h5>
                  <p style={{ color: 'black' }}>{count25}</p>
                </div>

                <a href="./signup.html">
                  <button
                    className="mt-3 ml-2 border-0 p-3 pl-4 pr-4 sign2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                   {count26}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5 mt-5">
            <div className="mt-5 ml-3">
              <img
                className="prod ml-5"
                src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a315_Frame%2520289-p-800.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 3.1 end */}

      {/* Section 3.2 */}
      <div className="container-fluid" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5 mt-5" >
            <div className="mt-5 ml-3">
              <img
                className="prod ml-5"
                src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a319_Frame%2520290-p-800.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 need pb-5" style={{backgroundColor:'white'}}>
            <div className="mt-5 brand">
              <div className="got">
                <h2 className="why mt-2">{count27}</h2>
                <p style={{ color: 'black' }} className="profile mt-5">
                 {count28} 
                </p>
              </div>
              <div className="pb-5">
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <h5 style={{ fontWeight: 600 }}>{count29}</h5>
                  <p style={{ color: 'black' }}>
                  {count30} 
                  </p>
                </div>
                <div
                  className="box text-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646d73bb4fc8cb7461f6ac35_tabler-icon-toggle-right.svg"
                    height="39vh"
                    alt=""
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  <h5 style={{ fontWeight: 600 }}>{count31}</h5>
                  <p style={{ color: 'black' }}>
                   {count32} 
                  </p>
                </div>

                <a href="./signup.html">
                  <button
                    className="mt-3 ml-2 border-0 p-3 pl-4 pr-4 sign2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                   {count33}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3.2 end */}
    </div>
    <Slider/>
   <IconSection/>
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

export default JobSeekers
