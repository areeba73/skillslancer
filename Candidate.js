import React, { useState } from "react";
import "../css/Candidate.css";
import InviteTeam from "../components/InviteTeam";
import StartRecu from "../components/StartRecu"
;
const App = () => {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="continer">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="mt-4">
          <li onClick={() => setActiveSection("account")}>Set up your account</li>
          <li onClick={() => setActiveSection("team")}>Invite your team</li>
          <li onClick={() => setActiveSection("details")}>Company details</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === "account" && (
          <div>
            <h2 className="w1">Let's Create Your Account</h2>
            <p className="u1">About your Company</p>
            <small>Keep in mind you can always update this later</small>

            {/* Form Section */}
            <form className="account-form">
              {/* Company Name */}
              <div className="form-group">
                <label>Company Name*</label>
                <input type="text" placeholder="Enter your company name" />
              </div>

              {/* Logo Upload */}
              <div className="form-group">
                <label>Logo*</label>
                <div className="upload-logo">
                  <input type="file" id="logo" />
                  <label htmlFor="logo" className="upload-button">
                    Upload Logo or drag it in
                  </label>
                </div>
              </div>

              {/* Work Email */}
              <div className="form-group">
                <label>Work Email*</label>
                <input type="email" placeholder="Enter work email" />
              </div>

              {/* Website */}
              <div className="form-group">
                <label>Website*</label>
                <input type="url" placeholder="Enter your website URL" />
              </div>

             
              <div className="account-section mb-5">
            <label>One line pitch</label>
            <p>Describe what your company does in just a few words</p>
            <input type="text" placeholder="Your one-line pitch" />

            <h3>About You</h3>
            <div className="upload-photo">
              <label>Upload Your Photo*</label>
              <div className="upload-button ml-5">
                <input type="file" id="photo" required />
                <label htmlFor="photo">Upload Photo</label>
              </div>
            </div>

            <div className="form-group">
              <label>Name*</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email*</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Phone Number*</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label>Your Role*</label>
              <input type="text" placeholder="Enter your role" required />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I have read and accepted the Guidelines and Terms of Service.
              </label>
            </div>
             {/* Buttons */}
             <div className="button-group mb-5">
                <button type="button" className="back-button">Back</button>
                <button type="submit" className="next-button">Next up: Invite your team</button>
              </div>
            </div>
            </form>
          </div>
        )}

        {activeSection === "team" && (
         <InviteTeam/>
        )}

        {activeSection === "details" && (
          <StartRecu/>
        )}
      </div>
    </div>
  );
};

export default App;
