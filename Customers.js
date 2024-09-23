import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section10 from "../components/Section10"

const Customers = () => {
  const[count,setCount]=useState("Customer Stories");
  const[count1,setCount1]=useState(" Our mission at Wellfound is to help startups grow their team,");
  const[count2,setCount2]=useState("and help talent find their team -- we practice what we preach.");
  const[count3,setCount3]=useState("Read up on all the success stories from our community.");
  const[count4,setCount4]=useState("Feature Stories");
  const[count5,setCount5]=useState(" view success story");
    const stories = [
        {
          image: 'https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/66827df261bfb3113a1d9192_dosulogo.svg',
          text: '”If you know what you\'re looking for, and you\'re looking to save a ton of time, it\'s a no brainer. The feedback loop and the scope of search is great. When you don\'t have the resources and time you need to recruit, RecruiterCloud gives you an easy and streamlined workflow extended on this morning to work out.',
          name: 'Devin Stein',
          position: 'CEO & Founder of Dosu',
          link: '#',
        },
        {
          image: 'https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c19569cbfc120d339b77d_adonis-logo.svg',
          text:'”If you know what you\'re looking for, and you\'re looking to save a ton of time, it\'s a no brainer. The feedback loop and the scope of search is great. When you don\'t have the resources and time you need to recruit, RecruiterCloud gives you an easy and streamlined workflow extended on this morning to work out.',
          name: 'Max',
          position: 'Head of Recruiting',
          link: '#',
        },
        {
          image: 'https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c40711decb0faa01a07d9_xander-logo-black.png',
          text:'”If you know what you\'re looking for, and you\'re looking to save a ton of time, it\'s a no brainer. The feedback loop and the scope of search is great. When you don\'t have the resources and time you need to recruit, RecruiterCloud gives you an easy and streamlined workflow extended on this morning to work out.',
          name: 'Alex Westner',
          position: 'CEO of Xander',
          link: '#',
        },
      ];
    
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
  <div className="container-fluid cus">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
          <h1 className="titlebanner" style={{color:'#0d3d35'}}>{count}</h1>
          <p className="parabanner">
           {count1} 
          {count2}   
          {count3}  
          </p>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/BsAryP4s0cw?si=Fr8DcIkM2Bx2-TWo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
 <div className="container-fluid">
      <div className="row">
        <div className="col ml-5">
          <h3 className="mb-0 ">{count4}</h3>
        </div>
      </div>
      <div className="row">
        {stories.map((story, index) => (
          <div className="col p-5" key={index}>
            <div className="card cd1">
              <img
                src={story.image}
                className="card-img-top w-50 p-3"
                alt="Story"
              />
              <div className="card-body bg-white">
                <p className="card-para">{story.text}</p>
                <h6 className="card-title mt-5">{story.name}</h6>
                <p className="card-text mt-2">{story.position}</p>
                <a href={story.link} className="text-danger">
                 {count5}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
    <div className="container-fluid">
      {[1, 2, 3, 4].map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {[1, 2, 3].map((col, colIndex) => (
            <div className="col p-5" key={colIndex}>
              <div className="card">
                <img
                  src={
                    rowIndex === 0
                      ? "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c0b26f7c5f153d56034aa_branch-logo.png"
                      : rowIndex === 1
                      ? "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c0be312c3c74f421d46be_trace-logo.svg"
                      : rowIndex === 2
                      ? "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c0b26f7c5f153d56034aa_branch-logo.png"
                      : "https://cdn.prod.website-files.com/64626a4a74818ca87606a2c4/667c0be312c3c74f421d46be_trace-logo.svg"
                  }
                  className="card-img-top w-50 p-3"
                  alt="..."
                />
                <div className="card-body bg-white ">
                  <p className="card-para">
                    {rowIndex === 0
                      ? "“What I like about Curated is how refined the candidates are. We have a lot of great, qualified candidates, and the response rate on Curated is really good.“"
                      : rowIndex === 1
                      ? "“With the growth of our company and commitment to culture, I can't imagine us scaling our team without them.”"
                      : rowIndex === 2
                      ? "“What I like about Curated is how refined the candidates are. We have a lot of great, qualified candidates, and the response rate on Curated is really good.“"
                      : "“With the growth of our company and commitment to culture, I can't imagine us scaling our team without them.”"}
                  </p>
                  <h6 className="card-title mt-4">
                    {rowIndex === 0 || rowIndex === 2
                      ? "Gabriel Aranda"
                      : "Moe Amaya"}
                  </h6>
                  <p className="card-text">
                    {rowIndex === 0 || rowIndex === 2
                      ? "Recruiter"
                      : "Head of Engineering @ Monograph"}
                  </p>
                  <a href="" className="text-danger">
                   {count5}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
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

export default Customers
