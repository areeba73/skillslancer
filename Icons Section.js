import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faShoppingCart, faGraduationCap, faHome, faAppleAlt, faUsers, faPlane, faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import "../css/Icons.css";

// Import images directly at the top
import HealthImage from "../assets/Images/Healthcare.png";
import ECommerceImage from '../assets/Images/E-Commerce.png';
import EducationImage from '../assets/Images/Education-2.png';
import RealEstateImage from '../assets/Images/Real-Estate-1.png';
import LifestyleImage from '../assets/Images/LifeStyle-1.png';
import SocialNetworkingImage from '../assets/Images/Famlicious.png';
import TravelImage from '../assets/Images/Travel-Tourism-1.png';
import OnDemandImage from '../assets/Images/On-Demand-service.png';

const iconData = [
  {
    id: 1,
    title: 'Healthcare',
    content: 'Build custom health tech solutions to streamline processes, improve patient outcomes, and enhance the overall healthcare experience of your organization.',
    icon: faHeartbeat,
    image: HealthImage, // Link the image directly here
  },
  {
    id: 2,
    title: 'E-Commerce',
    content: 'Create ecommerce platforms that offer a seamless user experience, secure payment options, and advanced analytics to drive sales and growth.',
    icon: faShoppingCart,
    image: ECommerceImage,
  },
  {
    id: 3,
    title: 'Education',
    content: 'Develop on-demand educational technology solutions and provide students and teachers with access to personalized and interactive learning experiences.',
    icon: faGraduationCap,
    image: EducationImage,
  },
  {
    id: 4,
    title: 'Real Estate',
    content: 'Find technological solutions for streamlining property transactions, providing data-driven insights, and enhancing the overall experience for buyers, sellers, and real estate professionals..',
    icon: faHome,
    image: RealEstateImage,
  },
  {
    id: 5,
    title: 'Lifestyle',
    content: 'Providing the lifestyle industry with design & development services for platforms and products concerning the fashion, beauty, wellness, and personal development sectors.',
    icon: faAppleAlt,
    image: LifestyleImage,
  },
  {
    id: 6,
    title: 'Social Networking',
    content: 'Disrupting social networking platforms for connecting individuals and communities, facilitating communication and collaboration, and providing advanced security and privacy features.',
    icon: faUsers,
    image: SocialNetworkingImage,
  },
  {
    id: 7,
    title: 'Travel & Tourism',
    content: 'Devising custom software solutions for streamlined operations, enhanced customer experiences, and growth of your business in the travel and tourism industry',
    icon: faPlane,
    image: TravelImage,
  },
  {
    id: 8,
    title: 'On-Demand Services',
    content: 'Delivering innovative software solutions for the fast-paced and constantly evolving world of on-demand services.',
    icon: faConciergeBell,
    image: OnDemandImage,
  },
];

function IconSection() {
  const [activeIcon, setActiveIcon] = useState(1);

  const handleIconClick = (id) => {
    setActiveIcon(id);
  };

  const activeIconData = iconData.find(icon => icon.id === activeIcon);

  return (
    <div className='container mt-5'>
      <h4 style={{textAlign:"center",fontWeight:'700'}}>Industries </h4>
      <h1 className='mt-3' style={{fontWeight:800,textAlign:"center"}}>Creating disruptive, customized software solutions to revolutionize various industries</h1>
      <div className="box-container mt-5" style={{
        backgroundColor:'#ffffff',
        width: '90%',
        maxWidth: '1200px',
        margin:'0 auto', 
        padding: '20px',
        border:'2px solid #e0e0e0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <div className="icon-section-container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}>
          <div className="icon-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '20px',
          }}>
            {iconData.map((icon) => (
              <div
                key={icon.id}
                className={`icon-item ${activeIcon === icon.id ? 'active' : ''}`}
                onClick={() => handleIconClick(icon.id)}
                style={{
                  cursor: 'pointer',
                  padding: '5px',
                  textAlign: 'center',
                  transition: 'background-color 0.3s ease',
                  backgroundColor: activeIcon === icon.id ? '#0d3d35' : '#f0f0f0',
                  color: activeIcon === icon.id ? 'white' : 'black',
                  borderRadius: '10px',
                  width: '100px',
                }}
              >
                <FontAwesomeIcon icon={icon.icon} size="2x" style={{ marginBottom: '10px', color: activeIcon === icon.id ? 'white' : 'black' }} />
                <p>{icon.title}</p>
              </div>
            ))}
          </div>

          <div className="content-box" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px',
            width: '100%',
          }}>
            <p style={{ width: '70%' }}>{activeIconData.content}</p>
            <img src={activeIconData.image} alt="Related" style={{ width: '40%', height: '40vh', marginLeft: '20px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconSection;
