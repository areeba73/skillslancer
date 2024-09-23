import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section10 from "../components/Section10";
const ForCompanies = (props) => {
  const[count,setCount]=useState("You have a job.");
  const[count1,setCount1]=useState(" We have 10m+ job seekers.");
  const[count2,setCount2]=useState(" Millions of startup-ready candidates, smart search for hard-to-find talent, and all the tools you need to hire.");
  const[count3,setCount3]=useState(" Sign up");
  const[count4,setCount4]=useState("for free");
  const[count5,setCount5]=useState("in under 10 minutes.");
  const[count6,setCount6]=useState("Sign up now");
  const[count7,setCount7]=useState("Talk to us");
  const[count8,setCount8]=useState("10 million startup-ready candidates");
  const[count9,setCount9]=useState("Connect directly with founders at top startups - no third");
  const[count10,setCount10]=useState("party recruiters allowed.");
  const[count11,setCount11]=useState("Everything you need to know, all upfront. View salary, stock options, and more before applying.");
  const[count12,setCount12]=useState(" Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.");
  const[count13,setCount13]=useState("Unique jobs at startups and tech companies you can’t find anywhere else.");
  const[count14,setCount14]=useState("Unique candidate");
  const[count15,setCount15]=useState("details you can't find ");
  const[count16,setCount16]=useState(" anywhere else ");
  const[count17,setCount17]=useState("  Connect directly with founders at top startups - no third");
  const[count18,setCount18]=useState(" party recruiters allowed. ");
  const[count19,setCount19]=useState(" Everything you need to know, all upfront. View salary, stock options, and more before applying. ");
  const[count20,setCount20]=useState("Say goodbye to cover letters - your profile is all you need. One click to apply and you're done. ");
  const[count21,setCount21]=useState(" Unique jobs at startups and tech companies you can’t find anywhere else.");
  const[count22,setCount22]=useState(" All the tools you need to hire, all in one place.");
  const[count23,setCount23]=useState(" Get everything set up within ");
  const[count24,setCount24]=useState("10 minutes or less ");
  const[count25,setCount25]=useState("Post a job for free ");
  const[count26,setCount26]=useState("Post to our job board and let the applications pour in. We’ll actively recommend your job to relevant candidates. Posting a job is free, and you can always promote it for more views. ");
  const[count27,setCount27]=useState("Message candidates as much as you need ");
  const[count28,setCount28]=useState(" Reach out and pitch your opportunity to candidates or respond to applications, all for free. Messages are unlimited. ");
  const[count29,setCount29]=useState("Track candidates through a free ATS ");
  const[count30,setCount30]=useState("Use our free applicant tracking system or integrate your own ATS within a few clicks. Schedule interviews, coordinate feedback, track a candidate’s progress, and manage multiple candidates across multiple roles. ");
  const[count31,setCount31]=useState(" Source from 10M startup-enthusiasts to find the perfect fit");
  const[count32,setCount32]=useState(" Filter down our 10M candidates to find the most relevant match for your role. Use basic search filters, or upgrade to Recruit Pro for unlimited access to advanced candidate filters.");
  const[count33,setCount33]=useState("Previous");
  const[count34,setCount34]=useState("Next");
  const[count35,setCount35]=useState(" Join the 100K+ startups building their teams with us");
  const[count36,setCount36]=useState("Sign up now");
  






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
<div className="container-fluid p-2 com22">
      <div data-aos="fade-up">
        <div className="row p-5">
          <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 bannerrow">
            <h1 className="titlebanner ">
              {count} <br />
             {count1}
            </h1>
            <p className="parabanner mt-5 text-dark">
             {count2}
              <br />
             {count3} <b>{count4}</b>{count5} 
            </p>
            <ul className="mt-5">
              <li className="d-inline">
              <a href="/browse-jobs">
              <button className="find">{count6}</button>
            </a>
              </li>
              <li className="d-inline">
                <a href="/signup">
              <button className="find2 border-0  mb-4">
                {count7}
              </button>
            </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      {/* Section 2 */}
      <div className="container-fluid">
        <div className="row border bg-light">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
            <video
              src="https://wellfound.com/images/gtm/GIF-RecruiterCuratedAndCuratedGlobal.mp4"
              className="w-100 ml-5"
              controls 
            ></video>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
            <h1 className="m10">{count8}</h1>
            <div className="mt-5 pb-5">
              <div className="box text-center">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
                {count9}
                <br /> {count10}
              </div>

              <div className="box text-center mt-5">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
               {count11} 
              </div>

              <div className="box text-center mt-5">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
              {count12} 
              </div>

              <div className="box text-center mt-5 mb-1">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75 mb-5">
                {count13}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
            <h1 className="m100">{count14} <br /> {count15} <br />{count16}</h1>
            <div className="mt-5 pb-5">
              <div className="box text-center">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e6df60830cc7c2b88b_stairs-up.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
               {count17}
                <br />{count18}
              </div>

              <div className="box text-center mt-5">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e63b04b79dd28c1ca3_books.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
               {count19}
              </div>

              <div className="box text-center mt-5">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e670c0dd6f22eee061_tap.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75">
               {count20} 
              </div>

              <div className="box text-center mt-5 mb-1">
                <img
                  className="mt-2 ml-1"
                  src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/646574e7342fe2d5b929e48c_stars.svg"
                  height="39vh"
                  alt=""
                />
              </div>
              <div className="con w-75 mb-5">
              {count21}  
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
            <img
              src="https://cdn.prod.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a318_AssessmentsProfile.png"
              className="w-100"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="container-fluid">
        <div className="row border bg-light p-5">
          <div className="col sec3col p-5">
            <h1 className="titlese3">{count22}</h1>
            <p className="text-dark every">
             {count23} <b>{count24} </b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-5">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <video
                    src="https://wellfound.com/images/gtm/GIF-RecruiterSource.mp4"
                    className="w-100"
                    controls
                  ></video>
                </div>
                <div className="col-md-6">
                  <h3 className="post">{count25}</h3>
                  <p className="text-dark">
                 {count26}   
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <video
                    src="https://wellfound.com/images/gtm/GIF-RecruiterSource.mp4"
                    className="w-100"
                    controls
                  ></video>
                </div>
                <div className="col-md-6">
                  <h3 className="post2">{count27}</h3>
                  <p className="text-dark">
                  {count28}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <video
                    src="https://wellfound.com/images/gtm/GIF-RecruiterSource.mp4"
                    className="w-100"
                    controls
                  ></video>
                </div>
                <div className="col-md-6">
                  <h3 className="post2">{count29}</h3>
                  <p className="text-dark">
                   {count30} 
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <video
                    src="https://wellfound.com/images/gtm/GIF-RecruiterSource.mp4"
                    className="w-100"
                    controls
                  ></video>
                </div>
                <div className="col-md-6">
                  <h3 className="post2">
                   {count31}
                  </h3>
                  <p className="text-dark">
                   {count32}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="p-3 mr-5 arrowse4" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-arrow-left text-dark"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </span>
          <span className="sr-only bu"  >{count33}</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="p-3 ml-5 arrowse4" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-arrow-right text-dark"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
          <span className="sr-only">{count34}</span>
        </a>
      </div>
    </div>

    <div className="container-fluid conse5 mt-5">
      <div data-aos="fade-up">
        <div className="row p-5">
          <div className="col p-5 sec5col">
            <h1 className="titlese5">
             {count35}
            </h1>
           <a href="/signup">
              <button className="find3 border-0  mb-4">
                {count36}
              </button>
            </a>
          </div>
        </div>
      </div>

      <hr className="w-75  mt-2" style={{ backgroundColor: "white", marginLeft:"12%" }} />

      <div data-aos="fade-up">
        <div className="row p-5">
          <div className="col p-5">
            <div className="marquee-container">
              <ul className="marquee-list">
                {[
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628b41cd93c0cf21c7ad8c_honey.svg",
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628b3aba194301cb70efdc_Peloton.svg",
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628b35c3ca49d758ff6160_ifttt.svg",
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628af04ad24350a0c58787_Nerdwallet.svg",
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628b164ad24350a0c5aec6_Airtable.svg",
                  "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/64628b1df42b09be2956f7ca_Plaid.svg",
                ].map((src, index) => (
                  <li key={index} className="d-inline ml-5">
                    <img src={src} alt={`Brand ${index}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
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
  )
}

export default ForCompanies
