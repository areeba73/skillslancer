import React, { useState } from 'react';
import '../css/Tools.css'; // Add styling as needed
import java from "../assets/Images/java.png"
const App = () => {
  // State to manage selected category
  const [selectedTab, setSelectedTab] = useState('Mobile');

  // Define data for each category
  const data = {
    Mobile: [
      { name: 'Java',
       image: java },
      { name: 'Kotlin', icon: '📱' },
      { name: 'Swift', icon: '🍏' },
      { name: 'Objective-C', icon: '📱' },
      { name: 'Android', icon: '🤖' },
      { name: 'iOS', icon: '📱' },
      { name: 'Flutter', icon: '🦋' },
      { name: 'SQLite', icon: '🗄️' },
      { name: 'Core Data', icon: '💾' },
      { name: 'Room', icon: '🏢' },
      { name: 'Realm', icon: '🔑' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Alamofire', icon: '🌊' },
      { name: 'Retrofit', icon: '🔄' },
      { name: 'Twilio', icon: '📞' },
      { name: 'Pusher', icon: '📡' },
    ],
    Web: [
      { name: 'HTML', icon: '🔤' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Ruby', icon: '💎' },
      { name: 'PostgreSQL', icon: '🗃️' },
      { name: 'MySQL', icon: '🗃️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔄' },
      { name: 'SQLite', icon: '🗄️' },
      { name: 'ReactJS', icon: '⚛️' },
      { name: 'VueJS', icon: '🖥️' },
      { name: 'StimulusJS', icon: '🔲' },
      { name: 'Hotwired', icon: '🔥' },
      { name: 'Turbo', icon: '🚀' },
      { name: 'Bootstrap', icon: '🧰' },
      { name: 'Tailwind', icon: '🌬️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Amazon Web Services', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Ruby on Rails', icon: '🔧' },
      { name: 'Laravel', icon: '🛠️' },
      { name: 'ExpressJS', icon: '🚂' },
    ],
    UIUX: [
      { name: 'Adobe XD', icon: '🖌️' },
      { name: 'Figma', icon: '🎨' },
      { name: 'InVision', icon: '🖼️' },
      { name: 'Sketch', icon: '🖍️' },
      { name: 'Miro', icon: '📋' },
    ],
    Blockchain: [
      { name: 'Ethereum', icon: '🟪' },
      { name: 'Solana', icon: '🌞' },
      { name: 'Polygon', icon: '🔺' },
      { name: 'Avalanche', icon: '🏔️' },
      { name: 'Fantom', icon: '👻' },
      { name: 'Solidity', icon: '🔗' },
      { name: 'Rust', icon: '🦀' },
      { name: 'Web3.js', icon: '🌐' },
      { name: 'Ether.js', icon: '🔗' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟩' },
    ],
    ECommerce: [
      { name: 'Shopify', icon: '🛒' },
      { name: 'WordPress', icon: '📝' },
      { name: 'React', icon: '⚛️' },
      { name: 'HTML', icon: '🔤' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Liquid', icon: '💧' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'NodeJS', icon: '🟩' },
      { name: 'Shopify Polaris', icon: '🛒' },
      { name: 'Shopify OS 2.0', icon: '🛠️' },
    ],
    DevOps: [
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Travis CI', icon: '🚥' },
      { name: 'CircleCI', icon: '🔵' },
      { name: 'GitLab CI/CD', icon: '🅰️' },
      { name: 'TeamCity', icon: '🏙️' },
      { name: 'Git', icon: '🗃️' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Bitbucket', icon: '🔵' },
      { name: 'Ansible', icon: '📜' },
      { name: 'Puppet', icon: '🧸' },
      { name: 'Chef', icon: '🍳' },
      { name: 'SaltStack', icon: '🧂' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'CloudFormation', icon: '☁️' },
      { name: 'Prometheus', icon: '📈' },
      { name: 'Grafana', icon: '📊' },
      { name: 'ELK Stack', icon: '📚' },
      { name: 'New Relic', icon: '🔍' },
      { name: 'Docker Compose', icon: '🐳' },
      { name: 'Terraform', icon: '🌍' },
      { name: 'Amazon Web Services', icon: '☁️' },
      { name: 'Google Cloud Platform', icon: '☁️' },
    ],
  };

  return (
    <div className='container '>
    <div className="Ap">
      <header>
        <h4>Tools & Technologies</h4>
        <h2 style={{fontWeight:700}}>Strategic technology partners for world-class development services
        </h2>

        <nv>
          <ul>
            {Object.keys(data).map((tab) => (
              <li
                key={tab}
                className={selectedTab === tab ? 'active' : ''}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nv>
      </header>

      <section className="content">
        <h2>{selectedTab}</h2>
        <div className="grid">
          {data[selectedTab].map((item) => (
            <div key={item.name} className="car">
              <span className="icon">{item.icon}</span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default App;
