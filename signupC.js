import React, { useState } from 'react';
import logo from "../assets/Images/logo (1).png";
import google from '../assets/Images/google (1).png';
import last from '../assets/Images/RecruitCompanies.svg';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
     setError('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page on successful signup
        history.push('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 c2">
          <div>
            <div className="sha">
              <h1 className='powerful'>Powerful, FREE recruiting tools to find your perfect match!</h1>
            </div>
            <div className='sha2'>
              <h4 className='post'>Post your job and source candidates for FREE</h4>
              <h4 className='post'>Save time with intelligent applicant sorting</h4>
              <h4 className='post'>Free built-in ATS to manage your pipeline</h4>
              <h4 className='post'>Industry high 40% candidate response rate</h4>
            </div>
            <img src={last} alt="last img" className='lastimg' />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="well">
            <div>
              <img className="w-75 top1" src={logo} alt="Wellfound Logo" />
            </div>
            <div className="top">
              <h1 className="login">Create Account</h1>
              <p style={{ fontWeight: 500 }} className="loginf">
                Where the best startups find their teams
              </p>
              {/* <button className="google p-2">
                <img src={google} alt="Google" /> Sign up with Google
              </button> */}
            </div>
            <div className="row p-4 w-75 hr" style={{ border: "none", marginLeft: "-6%" }}>
             
              <div className="col-xl-6 mt-1 email">
                Sign up with Email
              </div>
             
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="fullName">Full Name</label><br />
                <input
                  type="text"
                  id="fullName"
                  placeholder="&nbsp;&nbsp; enter text"
                  className="input1 p-2"
                  value={formData.fullName}
                  onChange={handleChange}
                /><br /><br />
                <label htmlFor="email">Email</label><br />
                <input
                  type="email"
                  id="email"
                  placeholder="&nbsp;&nbsp; mail@website.com"
                  className="input1 p-2"
                  value={formData.email}
                  onChange={handleChange}
                /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input
                  type="password"
                  id="password"
                  placeholder="&nbsp;&nbsp; min 8 characters"
                  className="input1 p-2"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="submit" className="black p-2 mt-4 border-0">
                  <b>Sign up</b>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <p className="text-center">
              <a href="./signup.html" className="account" style={{ marginLeft: "-12%" }}>Terms and conditions</a> <br />
              {' '}{' '}
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
