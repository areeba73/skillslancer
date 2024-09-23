import React, { useState } from 'react';
import sign from "../assets/Images/sign.png";
import signup from "../assets/Images/signup.png";
import logo from "../assets/Images/logo (1).png";
import google from '../assets/Images/google (1).png';
import { useHistory } from 'react-router-dom';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!fullName || !email || !password) {
      alert("Please fill out all fields.");
      return; // Prevent proceeding if any field is empty
    }

    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: fullName, email, password }),
    });

    if (response.ok) {
      history.push('/login'); // Redirect to login on success
    } else {
      const errorData = await response.json();
      alert(errorData.message); // Display error message
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6">
          <img className="the" src={sign} alt="Sign" />
          <div>
            <div className="made">
              <h1 className="you">Find the job made for you.</h1>
              <p className="Browse">Browse over 130K jobs at top companies and fast-growing startups.</p>
            </div>
          </div>
          <img className="the2" src={signup} alt="Signup" />
        </div>
        <div className="col-xl-6">
          <div className="well">
            <div>
              <img className="w-50 top1" src={logo} alt="Wellfound Logo" />
            </div>
            <div className="top">
              <h1 className="login">Create Account</h1>
              <p style={{ fontWeight: 500 }} className="login f">Find your next opportunity!</p>
              <button className="google p-2">
                <img src={google} alt="Google" /> Sign up with Google
              </button>
            </div>
            <div className="row p-4 w-75 hr" style={{ border: "none", marginLeft: "-6%" }}>
              <div className="col-xl-3 mr-1 d"><hr style={{ width: '150%' }} /></div>
              <div className="col-xl-6 mt-1 email">or Sign up with Email</div>
              <div className="col-xl-3 pl-0 pl d"><hr style={{ width: '130%' }} /></div>
            </div>
            <form className="form" onSubmit={handleSignup}>
              <label htmlFor="fullName">Full Name</label><br />
              <input 
                type="text" 
                id="fullName" 
                placeholder="&nbsp;&nbsp; enter text" 
                className="input1 p-2"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              /><br /><br />
              <label htmlFor="email">Email</label><br />
              <input 
                type="email" 
                id="email" 
                placeholder="&nbsp;&nbsp; mail@website.com" 
                className="input1 p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br /><br />
              <label htmlFor="password">Password</label><br />
              <input 
                type="password" 
                id="password" 
                placeholder="&nbsp;&nbsp; min 8 characters" 
                className="input2 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="black p-2 mt-4 border-0" type="submit">
                <b>Sign up</b>
              </button>
            </form>
          </div>
          <div className="mt-4">
            <p className="text-center">
              <a href="./signup.html" className="account" style={{ marginLeft: "-12%" }}>Terms and conditions</a>  <br />
              <a href="./signup.html" className="account" style={{ marginLeft: "-12%" }}>privacy policy</a>.
            </p>
            <h6 className="looking mt-4">
              Already have an account?{' '}
              <a href="./login" className="account">Log In</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
