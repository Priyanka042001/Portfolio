import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          {/* Left Column - Profile and Introduction */}
          <div className="profile-section">
            <img 
              src="/image1.jpg" 
              alt="Profile" 
              className="profile-img"
            />
            <h1 className="profile-name">Priyanka Kumari</h1>
            <p className="profile-role">Software Developer</p>
            <p className="profile-intro">
              I am a Software developer with a passion for creating beautiful and functional user interfaces. 
              My expertise in React and modern web technologies allows me to build scalable and visually appealing applications and solving complex problems as well.
            </p>
          </div>

          {/* Right Column - Skills and Achievements */}
          <div className="info-section">
            <div className="info-item">
              <h2 className="info-title">Skills</h2>
              <ul className="info-list">
                <li>Python</li>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML & CSS</li>
                <li>Bootstrap & Material-UI</li>
                <li>Responsive Design</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
            <div className="info-item">
              <h2 className="info-title">Key Achievements</h2>
              <ul className="info-list">
                <li>Developed a high-traffic e-commerce website using React and Redux.</li>
                <li>Contributed to an open-source project that gained 500+ stars on GitHub.</li>
                <li>Completed a certificate course in Advanced JavaScript and Web Development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
