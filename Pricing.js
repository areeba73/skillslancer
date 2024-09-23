import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section10 from '../components/Section10';
import Slider from '../components/Slider';
import FAQ from '../components/Faq.js';

const Pricing = () => {
    const[count,setCount]=useState("pricing");
        const[count1,setCount1]=useState("From pre-seed to post-IPO");
        const[count2,setCount2]=useState("We have options to fit your team's needs");
        const[count3,setCount3]=useState("Access");
        const[count4,setCount4]=useState("free");
        const[count5,setCount5]=useState("Post jobs");
        const[count6,setCount6]=useState("Review applicants");
        const[count7,setCount7]=useState("ATS integration");
        const[count8,setCount8]=useState("Track built-in ATS");
        const[count9,setCount9]=useState("Limited access to Source");
        const[count10,setCount10]=useState("sign up now");
        const[count11,setCount11]=useState("learn More");
        const[count12,setCount12]=useState("Recruit Pro");
        const[count13,setCount13]=useState(" $499");
        const[count14,setCount14]=useState("Includes all free features and:");
        const[count15,setCount15]=useState("Advanced search filters");
        const[count16,setCount16]=useState("Pitch templates");
        const[count17,setCount17]=useState("Resumes & social links");
        const[count18,setCount18]=useState("Instant scheduling");
        const[count19,setCount19]=useState(" sign up now");
        const[count20,setCount20]=useState("learn More");
        const[count21,setCount21]=useState("Unlimited Access");
        const[count22,setCount22]=useState("Custom");
        const[count23,setCount23]=useState("Need access to unlimited Curated candidates?");
        const[count24,setCount24]=useState("Access unlimited hand-picked, qualified, and ready to interview candidates.");
        const[count25,setCount25]=useState("Talk to our team to configure a custom package for your team.");
        const[count26,setCount26]=useState(" schedule a call");
        const[count27,setCount27]=useState(" How do I start hiring on Skillancer?");
        const[count28,setCount28]=useState(" Getting started on AngelList Talent is easy - simply sign up and you'll immediately be onboarded onto our Recruit Pro product. You’ll be prompted to find your company profile in our startup database, or create a new one. From there, you’ll be able to post jobs and source candidates with the best tools in the game. Get candidates in your pipeline and track them with our low-touch ATS system to keep your process agile & organized.");
        const[count29,setCount29]=useState(" You can also try out our advanced sourcing tier, Curated, where we <b>pre-vet and highlight the top 20% of candidates</b> that fit your criteria, taking the heavy lifting off of your team. Let the right candidates fall into your inbox & hire the best of the best at lightning speed.");
        const[count30,setCount30]=useState("How does Curated work?");
        const[count31,setCount31]=useState("Curated is a premium add-on that gives you direct access to top software engineers, designers, product managers, data scientists, and sales employees across the US, including top talent in San Francisco, New York, and Los Angeles.");
        const[count32,setCount32]=useState(" We ensure you stay ahead of the competition by...");
        const[count33,setCount33]=useState("Analyzing intent signals to invite relevant candidates to Curated before they hit the market");
        const[count34,setCount34]=useState("Personally vetting candidates to ensure they are high caliber and ready to interview immediately");
        const[count35,setCount35]=useState("Showcasing new candidates every Tuesday and Thursday.");
        const[count36,setCount36]=useState("Getting commitment from candidates ahead of time that they'll respond within a week");
        const[count37,setCount37]=useState("  What is the difference between A-List and Curated?");
        const[count38,setCount38]=useState("They're the same thing! We formally renamed A-List to Curated in June 2020. Curated now serves the same purpose and more, including expansion into non-US markets with Curated Global.");
        const[count39,setCount39]=useState(" How do I access my team's company profile?");
        const[count40,setCount40]=useState(" Sign up to create a free account. Select your company from our startup database, and get access by authenticating with your work email. If you are having issues, please reach out to talent@wellfound.com.");
        const[count41,setCount41]=useState(" What ATS providers does the Recruit product integrate with?");
        const[count42,setCount42]=useState(" We currently integrate with Greenhouse, Lever, Ashby, and Workable. If you have requests for other ATS providers, please let us know at talent@wellfound.com."); 
    const [open, setOpen] = useState(null);

    const handleToggle = (id) => {
        setOpen(open === id ? null : id);
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

            {/* Banner Section */}
            <div className="container-fluid pric">
                <div data-aos="fade-up">
                    <div className="row p-5">
                        <div className="col bannercol">
                            <h4 className="pban">{count}</h4>
                            <p className="titlebannerr">{count1}</p>
                            <p className="parabannerr">{count2}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1 */}
            <div className="container-fluid">
                <div className="row p-3  bg-light">
                    <div className="col p-5 border sec1 bg-white">
                        <h5>{count3}</h5>
                        <h3 className="mt-3">{count4}</h3>
                        <ul className="mt-4">
                            <li>{count5}</li>
                            <li>{count6}</li>
                            <li>{count7}</li>
                            <li>{count8}</li>
                            <li>{count9}</li>
                        </ul>
                        <ul className="mt-5">
                            <li className="d-inline">
                                <button className="p-2 butonse1 mr-2 d-inline" style={{ backgroundColor: '#7f9d96 ',border:'none', color: 'white' }}>
                                    {count10}
                                </button>
                            </li>
                            <li className="d-inline">
                                <button className="p-2 buton2se1 d-inline">{count11}</button>
                            </li>
                        </ul>
                    </div>

                    <div className="col p-5 ml-2  sec1 bg-light" style={{border:'2px solid #0d3d35'}}>
                        <h5>{count12}</h5>
                        <h3 className="mt-3">
                           {count13}
                            <span style={{ fontSize: 'large', fontWeight: 100 }}>/ month</span>
                        </h3>
                        <ul className="mt-4">
                            <li style={{ listStyle: 'none' }}><b>{count14} </b></li>
                            <li>{count15}</li>
                            <li>{count16}</li>
                            <li>{count17}</li>
                            <li>{count18}</li>
                        </ul>
                        <ul className="mt-5">
                            <li className="d-inline">
                                <button className="p-2 butonse1 mr-2" style={{ backgroundColor: '#7f9d96 ',border:'none', color: 'white' }}>
                                   {count19}
                                </button>
                            </li>
                            <li className="d-inline">
                                <button className="p-2 buton22se1">{count20}</button>
                            </li>
                        </ul>
                    </div>

                    <div className="col p-5 ml-2 border sec1 bg-white">
                        <h5>{count21}</h5>
                        <h3 className="mt-3">{count22}</h3>
                        <p className="txt">{count23}</p>
                        <p className="txt">{count24}</p>
                        <p className="txt">{count25}</p>
                        <button className="p-2 butonse1 b3 mt-4" style={{ backgroundColor: '#7f9d96 ',border:'none', color: 'white' }}>
                           {count26}
                        </button>
                    </div>
                </div>
            </div>

            <Slider/>

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

export default Pricing;
