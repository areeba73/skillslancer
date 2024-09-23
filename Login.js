import React, { useState } from 'react';
import logo from "../assets/Images/logo (1).png";
import col2 from "../assets/Images/col2.png";
import google from "../assets/Images/google (1).png";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      history.push('/dashboard'); // Redirect to dashboard on success
    } else {
      const errorData = await response.json();
      alert(errorData.message); // Display error message
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 ">
          <div className="well">
            <div className="to">
              <img className="w-75" src={logo} alt="skillnacer Logo" />
            </div>
            <div className="top">
              <h1 className="login">Login</h1>
              <p style={{ fontWeight: '500' }}>{/* Your text here */}</p>
              {/* <button className="google p-2">
                <img src={google} alt="Google" /> Log In with Google
              </button> */}
            </div>
            <div className="row p-4  hr" style={{ border: "none", marginLeft: '-5%' }}>
              
              <div className="col-xl-6 mt-1 email"> Login with Email

              </div>
              
            </div>
            <form className="form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="&nbsp;&nbsp; Email"
                className="input1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /><br />
              <input
                type="password"
                placeholder="&nbsp;&nbsp; Password"
                className="input1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='pass  mt-4'> <a href="./ForgotPassword">Forgot Password?</a></div>
              <button className="black p-2 border-0 mt-4" type="submit">
                <b>Log In</b>
              </button>
            </form>
          </div>
          <div className="mt-4">
            <p className="text-center acc">
              Not registered? <a href="./signup" className="account">Create an Account</a>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-md-6 c2">
          <img className="the" src={col2} alt="Job Search" />
          <div>
            <div className="made">
              <h1 className="you">Find the job made for you.</h1>
              <p className="Browse">Browse over 130K jobs at top companies and fast-growing startups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
