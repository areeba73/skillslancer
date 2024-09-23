import React, { useEffect, useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import '../css/Admin.css'; // Ensure you have this CSS file for styling

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> Admin Dashboard
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'><a href=""><BsGrid1X2Fill className='icon' /> Dashboard</a></li>
        <li className='sidebar-list-item'><a href=""><BsMenuButtonWideFill className='icon' /> Reports</a></li>
        <li className='sidebar-list-item'><a href=""><BsFillGearFill className='icon' /> Setting</a></li>
      </ul>
    </aside>
  );
}

function Home() {
  const [signupCount, setSignupCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/dashboard')
      .then((response) => response.json())
      .then((data) => {
        setSignupCount(data.signupCount);
      })
      .catch((error) => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  const data = [
    { name: 'For job', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Candid', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'For job', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Candi ', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'For job', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Candid', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'For Job', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'><div className='card-inner'><h3>Total Signups</h3><BsPeopleFill className='card_icon' /></div><h1>{signupCount}</h1></div>
        <div className='card'><div className='card-inner'><h3>Startups</h3><BsFillArchiveFill className='card_icon' /></div><h1>300</h1></div>
        <div className='card'><div className='card-inner'><h3>Applied</h3><BsFillGrid3X3GapFill className='card_icon' /></div><h1>12</h1></div>
        <div className='card'><div className='card-inner'><h3>Hired</h3><BsPeopleFill className='card_icon' /></div><h1>33</h1></div>
        <div className='card'><div className='card-inner'><h3>Rejected</h3><BsFillBellFill className='card_icon' /></div><h1>0</h1></div>
      </div>
      <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default App;
