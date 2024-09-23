import React, { useEffect ,useState} from "react";
import Section6 from "../components/Section6";
import IconSection from "../components/Icons Section";
import Tools from "../components/Tools"
// Importing Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section3 from "../components/Section3";
import Slider from "../components/Slider";

import Section9 from "../components/Section9";
import Section10 from "../components/Section10"
import FAQ from '../components/Faq.js'

export default function Home(props) {
  const[count,setCount]=useState("Find what's next");
  const[count1,setCount1]=useState(" Where startups and job seekers connect");
  const[count2,setCount2]=useState("Find your next hire");
  const[count3,setCount3]=useState("Find your next job");
  const[count4,setCount4]=useState(" Got talent?");
  const[count5,setCount5]=useState("Why job seekers love us");
  const[count6,setCount6]=useState(" Connect directly with founders at top startups - no third party recruiters allowed.");
  const[count7,setCount7]=useState("Everything you need to know, all upfront. View salary, stock options, and more before applying.");
  const[count8,setCount8]=useState("Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.");
  const[count9,setCount9]=useState("  Unique jobs at startups and tech companies you can’t find anywhere else.");
  const[count10,setCount10]=useState("Learn more");
  const[count11,setCount11]=useState("Sign up");
  const[count12,setCount12]=useState("Need talent?");
  const[count13,setCount13]=useState("Why job seekers love us");
  const[count14,setCount14]=useState("Tap into a community of 10M+ engaged, startup-ready candidates.");
  const[count15,setCount15]=useState("Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.");
  const[count16,setCount16]=useState("A free applicant tracking system, or free integration with any ATS you may already use.");
  const[count17,setCount17]=useState("Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.");
  const[count18,setCount18]=useState("  Learn more");
  const[count19,setCount19]=useState("Sign up");
  const[count20,setCount20]=useState("Early Access");
  const[count21,setCount21]=useState("Meet  Wellfound's AI recruiter.");
  const[count22,setCount22]=useState(" Here to help with all the logistics. RecruiterCloud finds the best fit candidates, vets for interest, and schedules your favorites on your calendar — all in a matter of days.");
  const[count23,setCount23]=useState("It's that easy.");
  const[count24,setCount24]=useState("Learn more");
  const[count25,setCount25]=useState("  Our top picks for 2023 are here!");
  const[count26,setCount26]=useState(" We've selected 10 top startups across 10 trending industries to showcase as we");
  const[count27,setCount27]=useState(" close out 2023. We selected these teams based on their potential to not only");
  const[count28,setCount28]=useState(" succeed, but to transform their respective industries.");
  const[count29,setCount29]=useState("Explore our 10 of 10");
  const[count30,setCount30]=useState("RecruiterCloud");

  useEffect(() => {
    const tags = document.querySelectorAll('.tag');
    const tagArray = Array.from(tags);
    const banner = document.querySelector('.banner');
    const bannerRect = banner.getBoundingClientRect();

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    tagArray.forEach(tag => {
      const x = Math.random() * (bannerRect.width - tag.offsetWidth);
      const y = Math.random() * (bannerRect.height - tag.offsetHeight);
      tag.style.left = `${x}px`;
      tag.style.top = `${y}px`;
      tag.style.opacity = 1;

      tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.2)';
      });

      tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
      });
    });

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateTags() {
      tagArray.forEach(tag => {
        const tagRect = tag.getBoundingClientRect();
        // Calculate opposite direction
        const dx = (tagRect.left + tagRect.width / 2 - mouseX) * 0.2;
        const dy = (tagRect.top + tagRect.height / 2 - mouseY) * 0.2;

        tag.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      requestAnimationFrame(animateTags);
    }

    animateTags();
  }, []);

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

      <div className="banner">
        <h1 className="pt-4 pl-4 pr-4 pb-0 firt " style={{color:'#0d3d35'}}>{count}</h1>
        <div className="tags-container">
          {[
            "Full Stack Developers",
            "Front End Developers",
            "iOS Developers",
            "Android Developers",
            "React Developers",
            "Node JS Developers",
            "Vue JS Developers",
            "Flutter Developers",
            "Blockchain Developers",
            "Denver",
            "Artificial Intelligence",
            "Web3",
            "Mental Health",
            "Hardware",
            "SaaS",
            "Robotics",
            "E-commerce",
            "Aerospace",
            "Cyber Security",
            "Databases",
          ].map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              
            </div>
           
          ))}
         
        </div>
        
      </div>
      <hr style={{ width: '100%' }} className="card-divider" />
      <div className="container mb-5">
      <div className="row mt-5">
        <div className="col mt-5">
          <h1 className="mt-5 sec2" style={{ textAlign: "center",color:'#0d3d35' }}>
           {count1}
          </h1>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col mb-5 mt-5">
          <div className="d-inline">
            <a href="./for companies.html">
              <button className="find6 border-0 p-3 pl-5 pr-5 ">
                {count2}
              </button>
            </a>
          </div>
          <div className="ml-3 d-inline">
            <a href="">
              <button className="find8 p-3 pl-5 pr-5 mb-5">
                {count3}
              </button>
            </a>
          </div>
        </div>
      </div>
      </div>
      
      <Section3/>
      <IconSection/>
      <div className="container-fluid mt-5 ">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-5">
            <div className="ml-5 mt-5">
              <div className="got">
               {count4}
                <h2 className="why mt-2">{count5}</h2>
              </div>
              <div className="mt-5 pb-5 ">
                {/* Box 1 */}
                <div
                  className="box text-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"
                    height="39vh"
                    alt="Stairs Up"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                 {count6}
                </div>
                {/* Box 2 */}
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"
                    height="39vh"
                    alt="Books"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1500"
                >
                 {count7} 
                </div>
                {/* Box 3 */}
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
                    alt="Tap"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                 {count8} 
                </div>
                {/* Box 4 */}
                <div
                  className="box text-center mt-5 mb-1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"
                    height="39vh"
                    alt="Stars"
                  />
                </div>
                <div
                  className="con w-75 mb-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                {count9}
                </div>
              </div>
              <a href="">
                <button
                  className="mt-2 ml-3 p-2 pl-4 pr-4 learn"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  {count10} 
                </button>
              </a>
              <a href="./signup.html">
                <button
                  className="ml-2 mt-2 border-0 p-2 pl-4 pr-4 sign"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
                  {count11}
                </button>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 need pb-5">
            <div className="ml-5 mt-5">
              <div className="got">
                {count12}
                <h2 className="why mt-2">{count13}</h2>
              </div>
              <div className="mt-5 pb-5">
                {/* Box 1 */}
                <div
                  className="box text-center"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"
                    height="39vh"
                    alt="Stairs Up"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1000"
                >
                {count14}  
                </div>
                {/* Box 2 */}
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"
                    height="39vh"
                    alt="Books"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1500"
                >
                 {count15} 
                </div>
                {/* Box 3 */}
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
                    alt="Tap"
                  />
                </div>
                <div
                  className="con w-75"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2000"
                >
               {count16}   
                </div>
                {/* Box 4 */}
                <div
                  className="box text-center mt-5"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                  <img
                    className="mt-2 ml-1"
                    src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"
                    height="39vh"
                    alt="Stars"
                  />
                </div>
                <div
                  className="con w-75 mb-3"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="2500"
                >
                 {count17} 
                </div>
                <a href="">
                  <button
                    className="mt-3 ml-3 bg-transparent p-2 pl-4 pr-4 learn"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                  {count18}
                  </button>
                </a>
                <a href="./signup.html">
                  <button
                    className="ml-2 mt-3 border-0 p-2 pl-4 pr-4 sign"
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
      <div className="container mt-5">
      <div
        className="row"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        {/* Left Column */}
        <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6 early">
          <span className="access p-1 pl-3 ml-3 pr-3"><b>{count20}</b></span>
          <h1 className="meet ml-3 mt-5">
            {count21} <b>{count30}</b>.
          </h1>
          <p className="here ml-4 mt-5">
          {count22}   <br />
            <em>{count23}</em>
          </p>
          <a href="">
            <button className="p-2 pl-4 pr-4 more ml-3"><b>{count24}</b></button>
          </a>
        </div>

        {/* Right Column */}
        <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6 rec">
          <div>
            <img
              className="w-100 h-50 mt-5 mb-5"
              src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/651c8dc4feb114a88edaa1b4_Hero-Graphic-RC-p-800.png"
              alt="RecruiterCloud Graphic"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
    <Slider/>
  
        {/* Section 8 Start */}
        {/* <div className="container-fluid mt-5 mb-5">
        <div className="row ml-1">
          <div className="col-xl-4 ml-5 shape">
            <div className="col1 pt-5 pb-5">
              <img
                className="img1"
                src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/6578bd30d69eac21ba1fe484_Group%20147.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-7 col3">
            <div className="pt-5 col2">
              <h1 className="our" style={{ color: '#0d3d35', fontWeight: 600 }}>
              {count25}
              </h1>
              <p className="mt-4 w-100 selected">
               {count26}
                <br />
               {count27}
                <br />
               {count28}
              </p>
              <a href="/">
                <button className="border-0 exp mt-3">
                  <b>{count29}</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <hr className="mb-5 w-50" style={{marginLeft:'25%'}} />
      {/* Section 8 End */}

   <Tools/>
   
   <hr className="mb-5 w-50 mt-5" style={{marginLeft:'25%'}} />
<FAQ/>
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
