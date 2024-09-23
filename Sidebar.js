// Import necessary dependencies
import React, { useState } from 'react'; // Import useState for state handling
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; // Use Switch instead of Routes
import { MdOutlineHome, MdOutlinePerson, MdOutlineWork, MdOutlineList, MdOutlineExplore } from 'react-icons/md';
import "../css/Sidebar.css";

// Sidebar Component with Icons
const Sidebar = ({ appliedJobs }) => {
  return (
    <div className="sidebar">
      {/* Home link at the top */}
      <Link to="./home" className="nav-link">
      <MdOutlineHome className="icon" />
      <span>Home</span>
      </Link>

      {/* Existing Sidebar links */}
      <Link to="/profile" className="nav-link">
      <MdOutlinePerson className="icon" />
      <span>Profile</span>
      </Link>
      <Link to="/jobs" className="nav-link">
      <MdOutlineWork style={{ backgroundColor: 'transparent', color: '#000' }} className="icon" />

      <span>Jobs</span>
      </Link>
      <Link to="/applied" className="nav-link">
      <MdOutlineList className="icon" />
      <span>Applied</span>
      {/* <span className="applied-count">Applied {appliedJobs.length}</span> */}
      </Link>
      {/* <Link to="/applied">
        <FaClipboardList className="icon" /> Applied
        {/* Show number of applied jobs *
        <span className="applied-count">{appliedJobs.length}</span>
      </Link> */}
    
      {/* Discover link below Messages */}
      <Link to="./discover" className="nav-link">
      <MdOutlineExplore className="icon" />
      <span> Discover</span>
      </Link>
    </div>
  );
};

// Home Component
const Home = () => <div className="home"><h2>Welcome to Home</h2></div>;
const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Manage active tab
  const [name, setName] = useState(''); // Default name
  const [location, setLocation] = useState(''); // Default location
  const [primaryRole, setPrimaryRole] = useState(''); // Default primary role
  const [openRoles, setOpenRoles] = useState(['']); // Default open roles
  const [experience, setExperience] = useState(''); // Default experience
  const [bio, setBio] = useState(''); // Default bio
  const [profilePhoto, setProfilePhoto] = useState(null); // Placeholder for profile photo
  const [description, setDescription] = useState('');
  const [motivation, setMotivation] = useState('');
  const [careerTrack, setCareerTrack] = useState('');
  const [workEnvironment, setWorkEnvironment] = useState('');
  const [remoteWorkPolicy, setRemoteWorkPolicy] = useState('');
  const [quietOffice, setQuietOffice] = useState('');
  const [marketsInterested, setMarketsInterested] = useState('');
  const [marketsNotInterested, setMarketsNotInterested] = useState('');
  const [technologiesInterested, setTechnologiesInterested] = useState('');
  const [technologiesNotInterested, setTechnologiesNotInterested] = useState('');

  const handleSave = () => {
    // Handle form submission logic
    console.log({
      description,
      motivation,
      careerTrack,
      workEnvironment,
      remoteWorkPolicy,
      quietOffice,
      marketsInterested,
      marketsNotInterested,
      technologiesInterested,
      technologiesNotInterested,
    });
  };

  // Function to handle file upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="profile-section">
      {/* Profile Heading */}
      <h1 className='ed'>Edit Your SkillLancer Profile</h1>

      {/* Tabs for Profile, CV, Preferences, Culture */}
      <div className="profile-tabs">
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>
          Profile
        </button>
        <button onClick={() => setActiveTab('cv')} className={activeTab === 'cv' ? 'active' : ''}>
          CV
        </button>
        <button onClick={() => setActiveTab('preferences')} className={activeTab === 'preferences' ? 'active' : ''}>
          Preferences
        </button>
        <button onClick={() => setActiveTab('culture')} className={activeTab === 'culture' ? 'active' : ''}>
          Culture
        </button>
      </div>

      {/* Display content based on the active tab */}
      <div className="tab-content">
        {activeTab === 'profile' && (
          <div className="profile-tab">
            <h3>Profile Information</h3>
            <p>Here, you can edit your personal profile details like name, contact information, etc.</p>

            {/* Form Elements */}
            <div className="form-group mt-5">
              <label htmlFor="name">Your name*</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mt-5">
              <label htmlFor="profile-photo ">Profile Photo</label>
              <div className="profile-photo ">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="uploaded-photo " />
                ) : (
                  <div className="photo-placeholder">Upload a new photo</div>
                )}
                <input type="file" id="profile-photo" onChange={handlePhotoUpload} />
              </div>
            </div>

            <div className="form-group mt-5">
              <label htmlFor="location">Where are you based?*</label>
              <input
                type="text"
                id="location"
                placeholder="e.g., San Francisco"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group mt-5">
              <label htmlFor="primary-role">Select your primary role*</label>
              <select
                id="primary-role"
                value={primaryRole}
                onChange={(e) => setPrimaryRole(e.target.value)}
              >
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Full Stack Engineer">Full Stack Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Full Stack Engineer">Full Stack Engineer</option>
                {/* Add more roles as needed */}
              </select>
            </div>

            <div className="form-group mt-5">
  <label htmlFor="open-roles">Open to the following roles</label>
  <select
    id="open-roles"
    value={openRoles.join(', ')}
    onChange={(e) => setOpenRoles(e.target.value.split(', '))}
  >
    <option value="Role 1">Frontend Engineer</option>
    <option value="Role 2">Backend Engineer</option>
    <option value="Role 3">Full Stack Engineer</option>
    <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Full Stack Engineer">Full Stack Engineer</option>
    {/* Add more roles as needed */}
  </select>
</div>

            <div className="form-group mt-5">
              <label htmlFor="experience">Years of experience*</label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                {/* Add more experience levels */}
              </select>
            </div>

            <div className="form-group mt-5">
              <label htmlFor="bio">Your bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength="160"
              />
              <p>{bio.length} / 160</p>
            </div>

<hr className='mt-5'></hr>

             <h4 className='mt-5 y'>Social Profiles</h4>
            <div className="form-group mt-5">
              <label htmlFor="location">Website</label>
              <input
                type="text"
                id="location"
                placeholder="https://"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">Linkdin</label>
              <input
                type="text"
                id="location"
                placeholder="https://Linkdin.com/in/username"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">GitHub</label>
              <input
                type="text"
                id="location"
                placeholder="https://GitHub.com/username"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">Twitter</label>
              <input
                type="text"
                id="location"
                placeholder="https://Twitter.com/in/username"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <hr className='mt-5'></hr>
            <h4 className='mt-5 y'>Your Work experience</h4>
            <div className="form-group mt-5">
              <label htmlFor="location">Company</label>
              <input
                type="text"
                id="location"
                placeholder="Company name"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">Title</label>
              <input
                type="text"
                id="location"
                placeholder="title"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">Start Date</label>
              <input
                type="text"
                id="location"
                placeholder="Start Date"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">End Date</label>
              <input
                type="text"
                id="location"
                placeholder="End Date"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="bio">Description</label>
              <textarea
                id="bio"
                value={bio}
                 placeholder="Description"
                onChange={(e) => setBio(e.target.value)}
                maxLength="300"
              />
              <p>{bio.length} / 300</p>
            </div>
            <div className="form-group mt-4">
              <select
                id="experience"
                placeholder="This position is a"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1 Year">This is a sales position </option>
                <option value="2 Years">This is a technical position </option>
              </select>
              <button className='ca mt-4'>Cancel</button>
              <button className='ml-4 mt-4 sa'>Save</button>
            </div>
            <hr className='mt-5'></hr>
            <h4 className='mt-5 y'>Education</h4>
            <div className="form-group mt-5">
              <label htmlFor="location">Education</label>
              <input
                type="text"
                id="location"
                placeholder="College/University"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">Graduation</label>
              <input
                type="text"
                id="location"
                placeholder="Graduation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <div className="form-group mt-5">
              <label>Degree & Major</label>
              <select
                id="experience"
                placeholder="Degree Type"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="1 Year"> BS-IT </option>
                <option value="2 Years"> BS-CS</option>
              </select>
              
            </div>
            </div>
           
            <div className="form-group mt-4">
              <input
                type="text"
                id="location"
                placeholder="Major / Field of study"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="location">GPA</label>
              <input
                type="text"
                id="location"
                placeholder="GPA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
               <button className='ca mt-4'>Cancel</button>
               <button className='ml-4 mt-4 sa'>Save</button>
            </div>
           
            <hr className='mt-5'></hr>
            <h4 className='mt-5 y'>Achievments</h4>
            <div className="form-group mt-5">
              <textarea
                id="bio"
                value={bio}
                 placeholder="Details"
                onChange={(e) => setBio(e.target.value)}
                maxLength="1000"
              />
              <p>{bio.length} / 1000</p>
            </div>
            <hr className='mt-5'></hr>
            <h4 className='mt-5 y'>Your Skills</h4>
            <div className="form-group mt-5">
              <input
                type="text"
                id="location"
                placeholder="e.g.,Python,React"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* CV Tab */}
        {activeTab === 'cv' && (
          <div className="cv-tab">
            <h4 className='mt-4 mb-5'>Upload your recent resume or CV</h4>
            <p className='mb-5'>Upload your most up-to-date resume. File types: DOC, DOCX, PDF, TXT</p>

            <div className="uploaded-file">
              <span >_CV__(2).pdf</span>
              <a href="#view" className="view-resume">View your resume</a> | 
              <a href="#upload" className="upload-new-file">Upload new file</a>
            </div>

            {/* File Upload Box */}
            <div className="upload-box mt-5 mb-5">
              <label htmlFor="upload-cv">
                <img src="path-to-pdf-icon" alt="PDF Icon" />
                <p>Upload new file</p>
              </label>
              <input type="file" id="upload-cv" style={{ display: 'none' }} />
            </div>

            {/* Checkbox for Resume Review */}
            <div className="resume-review">
              <input type="checkbox" id="resume-review" />
              <label htmlFor="resume-review">I'd like a free resume review</label>
            </div>

            {/* Remove Resume Link */}
            <a href="#remove" className="remove-resume">Remove your resume</a>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="previous-btn">Previous</button>
              <button className="next-btn">Next</button>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
  <div className="preferences-tab ml-3" >
    <h3 >Preferences</h3>
    <p>Set your job preferences, such as location, industry, and type of employment you're looking for.</p>
    
    {/* Job Search Status */}
    <div className="form-group">
      <label className='mt-4'>Where are you in your job search?</label>
      <select>
        <option value="interview">Ready to Interview</option>
        <option value="not-looking">Not Actively Looking</option>
      </select>
    </div>

    {/* US Work Authorization */}
    <div className="form-group">
      <label className='mt-5 mb-4'>US Work Authorization</label>
      
      <div className="radio-group">
        <input type="radio" id="sponsorship-no" name="sponsorship" value="no" />
        <label htmlFor="sponsorship-no">No Sponsorship Required</label>

        <input type="radio" id="sponsorship-yes" name="sponsorship" value="yes" />
        <label htmlFor="sponsorship-yes">Sponsorship Required</label>
      </div>

      <div className="radio-group">
        <input type="radio" id="us-auth-no" name="us-auth" value="no" />
        <label htmlFor="us-auth-no">No US Authorization</label>

        <input type="radio" id="us-auth-yes" name="us-auth" value="yes" />
        <label htmlFor="us-auth-yes">Authorized to Work in the US</label>
      </div>
    </div>

    {/* Job Type Preference */}
    <div className="form-group">
      <label className='mt-5'>What type of job are you interested in?</label>
      <select>
        <option value="full-time">Full-time Employee</option>
        <option value="contractor">Contractor</option>
        <option value="intern">Intern</option>
        <option value="co-founder">Co-founder</option>
      </select>
    </div>

    {/* Location Preference */}
    <div className="form-group">
      <label className='mt-5'>What locations do you want to work in?</label>
      <input type="text" placeholder="e.g., San Francisco" />

      <div className="checkbox-group">
        <input className='mt-5' type="checkbox" id="remote-work" name="remote-work" />
        <label htmlFor="remote-work" className='mt-5'>Open to working remotely</label>
      </div>

      <input type="text" placeholder="Select your remote preference..." />
    </div>

    {/* Salary Preference */}
    <div className="form-group">
      <label className='mt-5'>What is your desired salary?</label>
      <div className="salary-input">
        <select>
          <option value="usd">United States Dollars ($)</option>
          <option value="eur">Euros (€)</option>
          <option value="gbp">British Pounds (£)</option>
        </select>
        <input type="number" placeholder="$70,000" />
      </div>
    </div>

    {/* Company Size Preference */}
    <div className="form-group">
      <label className='mt-5'>Would you like to work at companies of these sizes?</label>
      
      {["Seed (1 - 10 employees)", "Early (11 - 50 employees)", "Mid-size (51 - 200 employees)", "Large (201 - 500 employees)", "Very Large (501 - 1000 employees)", "Massive (1001+ employees)"].map((size, index) => (
        <div className="company-size" key={index}>
          <span>{size}</span>
          <div className="radio-group">
            <input type="radio" id={`ideal-${index}`} name={`size-${index}`} value="ideal" />
            <label htmlFor={`ideal-${index}`}>Ideal</label>

            <input type="radio" id={`yes-${index}`} name={`size-${index}`} value="yes" />
            <label htmlFor={`yes-${index}`}>Yes</label>

            <input type="radio" id={`no-${index}`} name={`size-${index}`} value="no" />
            <label htmlFor={`no-${index}`}>No</label>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Culture Tab */}
        {activeTab === 'culture' && (
          <div className="culture-tab">
             <div className="culture-form">
     {/* First section from the original form */}
     <div className="form-group">
       <label >Describe what you are looking for in your next job</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe what you are looking for in your next job"
          rows="4"
          maxLength="300"
        />
      </div>

      <div className="form-group">
        <label className='mt-4'>What motivates you more?</label>
        <div>
          <label>
            <input
              type="radio"
              value="solving-technical-problems"
              checked={motivation === 'solving-technical-problems'}
              onChange={() => setMotivation('solving-technical-problems')}
            />
            Solving technical problems
          </label>
          <label>
            <input
              type="radio"
              value="building-products"
              checked={motivation === 'building-products'}
              onChange={() => setMotivation('building-products')}
            />
            Building products
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className='mt-5'>Over the next five years, what career track do you want to follow?</label>
        <div>
          <label>
            <input
              type="radio"
              value="individual-contributor"
              checked={careerTrack === 'individual-contributor'}
              onChange={() => setCareerTrack('individual-contributor')}
            />
            Individual contributor
          </label>
          <label>
            <input
              type="radio"
              value="manager"
              checked={careerTrack === 'manager'}
              onChange={() => setCareerTrack('manager')}
            />
            Manager
          </label>
        </div>
      </div>

      <div className="form-group">
        <label className='mt-5'>What environment do you work better in?</label>
        <div>
          <label>
            <input
              type="radio"
              value="clear-role"
              checked={workEnvironment === 'clear-role'}
              onChange={() => setWorkEnvironment('clear-role')}
            />
            Clear role and set of responsibilities. Consistent feedback from management.
          </label>
          <label>
            <input
              type="radio"
              value="figure-it-out"
              checked={workEnvironment === 'figure-it-out'}
              onChange={() => setWorkEnvironment('figure-it-out')}
            />
            Employees wear a lot of hats. Assignments often require employees to "figure it out" on their own.
          </label>
        </div>
      </div>

      {/* Checkbox section */}
      <div className="form-group">
        <h3 className='mt-5'>What's most important to you in your next job? (Max 2)</h3>
        <label>
          <input type="checkbox" id="say_in_work" name="say_in_work" /> Having a say in what I work on and how I work
        </label>
        <label>
          <input type="checkbox" id="opportunities" name="opportunities" /> Opportunities to progress within the company
        </label>
        <label>
          <input type="checkbox" id="team_members" name="team_members" /> Team members I can learn from
        </label>
        <label>
          <input type="checkbox" id="company_growth" name="company_growth" /> A company with a good growth trajectory
        </label>
        <label>
          <input type="checkbox" id="say_in_company" name="say_in_company" /> Having a say in the company's and/or my team's direction
        </label>
        <label>
          <input type="checkbox" id="mentorship" name="mentorship" /> Mentorship opportunities
        </label>
        <label>
          <input type="checkbox" id="learn_skills" name="learn_skills" /> Learn new things and develop my skills
        </label>
        <label>
          <input type="checkbox" id="challenging_problems" name="challenging_problems" /> Challenging problems to work on
        </label>
        <label>
          <input type="checkbox" id="diverse_team" name="diverse_team" /> A diverse team
        </label>
      </div>

      {/* Radio button section for remote work */}
      <div className="form-group">
        <h3 className='mt-5'> How important is it that your next job has a flexible remote work policy?</h3>
        <label>
          <input
            type="radio"
            id="very_important"
            name="remote_policy"
            value="very_important"
            checked={remoteWorkPolicy === 'very_important'}
            onChange={() => setRemoteWorkPolicy('very_important')}
          />
          Very important
        </label>
        <label>
          <input
            type="radio"
            id="important"
            name="remote_policy"
            value="important"
            checked={remoteWorkPolicy === 'important'}
            onChange={() => setRemoteWorkPolicy('important')}
          />
          Important
        </label>
        <label>
          <input
            type="radio"
            id="not_important"
            name="remote_policy"
            value="not_important"
            checked={remoteWorkPolicy === 'not_important'}
            onChange={() => setRemoteWorkPolicy('not_important')}
          />
          Not important
        </label>
      </div>

      {/* Radio button section for quiet office */}
      <div className="form-group">
        <h3 className='mt-5'>How important is it that you work in a quiet office?</h3>
        <label>
          <input
            type="radio"
            id="quiet_very_important"
            name="quiet_office"
            value="very_important"
            checked={quietOffice === 'very_important'}
            onChange={() => setQuietOffice('very_important')}
          />
          Very important
        </label>
        <label>
          <input
            type="radio"
            id="quiet_important"
            name="quiet_office"
            value="important"
            checked={quietOffice === 'important'}
            onChange={() => setQuietOffice('important')}
          />
          Important
        </label>
        <label>
          <input
            type="radio"
            id="quiet_not_important"
            name="quiet_office"
            value="not_important"
            checked={quietOffice === 'not_important'}
            onChange={() => setQuietOffice('not_important')}
          />
          Not important
        </label>
      </div>

      {/* Markets selection */}
      <div className="form-group">
        <h3 className='mt-5'>Which markets are you MOST interested in working in?</h3>
        <select
          value={marketsInterested}
          onChange={(e) => setMarketsInterested(e.target.value)}
        >
          <option value="">-</option>
          <option value="market1">Market 1</option>
          <option value="market2">Market 2</option>
        </select>
      </div>

      <div className="form-group">
        <h3 className='mt-5'>Which markets are you NOT willing to work in?</h3>
        <select
          value={marketsNotInterested}
          onChange={(e) => setMarketsNotInterested(e.target.value)}
        >
          <option value="">-</option>
          <option value="market1">Market 1</option>
          <option value="market2">Market 2</option>
        </select>
      </div>

      {/* Technologies selection */}
      <div className="form-group">
        <h3 className='mt-5'>Which technologies are you MOST interested in working with?</h3>
        <select
          value={technologiesInterested}
          onChange={(e) => setTechnologiesInterested(e.target.value)}
        >
          <option value="">-</option>
          <option value="tech1">Technology 1</option>
          <option value="tech2">Technology 2</option>
        </select>
      </div>

      <div className="form-group">
        <h3 className='mt-5'>Which technologies are you NOT willing to work with?</h3>
        <select
          value={technologiesNotInterested}
          onChange={(e) => setTechnologiesNotInterested(e.target.value)}
        >
          <option value="">-</option>
          <option value="tech1">Technology 1</option>
          <option value="tech2">Technology 2</option>
        </select>
      </div>

      <button type="button" className='next-btn' onClick={handleSave}>
        Save
      </button>
    </div>
 </div>
        )}
      </div>
    </div>
  );
};

const jobData = [
  {
    id: 1,
    company: 'Agenta Ai',
    tagline: 'Derivatives without liquidation',
    employees: '1-10 Employees',
    jobTitle: 'Frontend Engineer',
    locations: 'Singapore · Bengaluru · Remote only',
    salary: '$35k – $80k',
    equity: '0.1% – 0.25%',
    posted: '1 week ago',
    active: true,
    logo:'https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/9630068-92ef794f75d9c2247f227e8e1d75c6bb-medium_jpg.jpg'
  },
  {
    id: 2,
    company: 'TrueFoundry',
    tagline: 'Cloud-native Machine Learning Training',
    employees: '51-200 Employees',
    jobTitle: 'Senior FrontEnd Engineer',
    locations: 'Bangalore Urban · Onsite or remote',
    salary: '₹25L – ₹50L',
    equity: '0.06% – 0.1%',
    posted: '2 weeks ago',
    active: true,
    logo:'https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/8560564-04bfd4f557b970c5a641f1ca2fa76718-medium_jpg.jpg'

  },
  {
    id: 3,
    company: 'Tool Jet',
    tagline: 'Cloud-native Machine Learning Training',
    employees: '51-200 Employees',
    jobTitle: 'Senior FrontEnd Engineer',
    locations: 'Bangalore Urban · Onsite or remote',
    salary: '₹25L – ₹50L',
    equity: '0.06% – 0.1%',
    posted: '2 weeks ago',
    active: true,
    logo:'https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/8331267-8abd0af44d23a30ddc74d2d879017ba4-medium_jpg.jpg'
  },
  {
    id: 4,
    company: 'Beyond Technologies',
    tagline: 'Cloud-native Machine Learning Training',
    employees: '51-200 Employees',
    jobTitle: 'Senior FrontEnd Engineer',
    locations: 'Bangalore Urban · Onsite or remote',
    salary: '₹25L – ₹50L',
    equity: '0.06% – 0.1%',
    posted: '2 weeks ago',
    active: true,
    logo:'https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/10234286-ac7cdd841655ca307b35865156f9d11f-medium_jpg.jpg'
  },
  {
    id: 5,
    company: 'Zapit',
    tagline: 'Cloud-native Machine Learning Training',
    employees: '51-200 Employees',
    jobTitle: 'Senior FrontEnd Engineer',
    locations: 'Bangalore Urban · Onsite or remote',
    salary: '₹25L – ₹50L',
    equity: '0.06% – 0.1%',
    posted: '2 weeks ago',
    active: true,
    logo:'https://wellfound.com/cdn-cgi/image/width=140,height=140,fit=scale-down,gravity=0.5x0.5,quality=90,format=auto/https://photos.wellfound.com/startups/i/7162833-7e0f019d5f3bf336c14f34e0cec970e0-medium_jpg.jpg'
  },
  
];

// Jobs Component
const Jobs = ({ onApply, appliedJobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job); // Open the modal for job details
  };

  const isJobApplied = (jobId) => appliedJobs.some((job) => job.id === jobId);

  return (
    <div className="jobs-section">
      <h1 className='ed'>Jobs Section</h1>
      {jobData.map((job) => (
        <div
          key={job.id}
          className={`job-card ${isJobApplied(job.id) ? 'applied-job' : ''}`}
          onClick={() => handleJobClick(job)}
        >
          <div className="job-header">
            <div className="company-logo">
            <img src={job.logo} alt={`${job.company} logo`} width="50" height="50" />
            </div>
            <div className="job-info">
              <h3>{job.company}</h3>
              <p>{job.tagline}</p>
              <p>{job.employees}</p>
            </div>
            {job.active && <span className="active-status">Actively Hiring</span>}
          </div>
          <div className="job-details">
            <p>
              <strong>{job.jobTitle}</strong>
            </p>
            <p>
              {job.locations} · {job.salary} · {job.equity}
            </p>
          </div>
          <div className="job-footer">
            <p>Posted: {job.posted}</p>
            <div className="job-actions">
              {isJobApplied(job.id) ? (
                <button className="applied-status" disabled>
                  Applied
                </button>
              ) : (
                <button
                  className="learn-more-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents modal from opening
                    handleJobClick(job); // Opens modal
                  }}
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Modal for showing job details */}
      {selectedJob && (
        <div className="job-details-modal">
          <div className="modal-content">
            <h3>{selectedJob.jobTitle} at {selectedJob.company}</h3>
            <p>{selectedJob.tagline}</p>
            <p>{selectedJob.locations}</p>
            <p>{selectedJob.salary}</p>
            {!isJobApplied(selectedJob.id) && (
              <button
                className="apply-btn"
                onClick={() => {
                  onApply(selectedJob.id); // Apply functionality
                  setSelectedJob(null); // Close modal after applying
                }}
              >
                Apply
              </button>
            )}
            <button
              className="close-modal"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Applied Section component
const Applied = ({ appliedJobs }) => {
  return (
    <div className="applied">
      <h2>Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p>No applied jobs yet.</p>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.id} className="applied-job-card">
            <h3>{job.jobTitle} at {job.company}</h3>
            <p>{job.locations}</p>
          </div>
        ))
      )}
    </div>
  );
};

// Parent component to manage the job application logic
const JobApp = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (jobId) => {
    const appliedJob = jobData.find((job) => job.id === jobId);
    if (appliedJob && !appliedJobs.includes(appliedJob)) {
      setAppliedJobs([...appliedJobs, appliedJob]); // Add job to appliedJobs list
    }
  };

  return (
    <div className="job-app">
      <div className="jobs">
        <Jobs onApply={handleApply} appliedJobs={appliedJobs} />
      </div>
      <div className="applied-section">
        <Applied appliedJobs={appliedJobs} />
      </div>
    </div>
  );
};


// Discover Component
const Discover = () => <div className="discover"><h2>Discover New Things</h2></div>;

// Main App Component
const App = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (jobId) => {
    const appliedJob = jobData.find((job) => job.id === jobId);
    if (appliedJob && !appliedJobs.includes(appliedJob)) {
      setAppliedJobs([...appliedJobs, appliedJob]); // Add job to appliedJobs list
    }
  };

  return (
    <Router>
      <div className="app">
        {/* Sidebar with applied jobs passed as a prop */}
        <Sidebar appliedJobs={appliedJobs} />
        
        {/* Main content */}
        <div className="main-content">
          <Switch>
            <Route exact path="./home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/jobs">
              <Jobs onApply={handleApply} appliedJobs={appliedJobs} />
            </Route>
            <Route path="/applied">
              <Applied appliedJobs={appliedJobs} />
            </Route>
            <Route path="./discover" component={Discover} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
