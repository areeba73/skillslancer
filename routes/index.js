// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import JobSeekers from "../containers/JobSeekers.js";
import ForCompanies from "../containers/ForCompanies.js";
import Customers from "../containers/Customers.js";
import Pricing from "../containers/Pricing.js";
import Login from "../containers/Login.js";
import Signup from "../containers/Signup.js"
import SignupC from "../containers/signupC.js"
import Discover from "../containers/Discover.js";
import Startup from "../containers/Startup.js";
import FeaturedList from "../containers/FeaturedList.js";
import Blogs from "../containers/Blogs.js";
import Tools from "../components/Tools.js"
import FAQ from "../components/Faq.js";
import ForgotPassword from "../containers/ForgotPassword.js";
import Sidebar from "../containers/Sidebar.js"
import Candidate from "../containers/Candidate.js"
import Admindash from "../containers/Admindash.js"
import App  from "../containers/post.js"


const index = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/jobseekers" component={JobSeekers} />
      <Route path="/forcompanies" component={ForCompanies} />
      <Route path="/customer" component={Customers}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/SignupC" component={SignupC}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/Startup" component={Startup}/>
      <Route path="/FeaturedList" component={FeaturedList}/>
      <Route path="/Blogs" component={Blogs}/>
    
      <Route path="/Tools" component={Tools}/>
      <Route path="/FAQ" component={FAQ}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <Route path="/Sidebar" component={Sidebar} />
      <Route path="/Candidate" component={Candidate}/>
      <Route path ="/Adminda" component={Admindash}/>
      <Route path ="/App" component={App}/>

    
      
      
    </Switch>
  );
};

export default index;
