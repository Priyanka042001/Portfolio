import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling

function Home() {
  return (
    <section className="home d-flex align-items-center justify-content-center">
      <div className="home-content container d-flex flex-column flex-lg-row align-items-center">
        {/* Text Content */}
        <div className="text-section col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Priyanka Kumari</span></h1>
          <p className="hero-subtitle">A Software Developer</p>
          <p className="hero-description">
            I specialize in building dynamic and responsive web applications. 
            Dive into my work and let's build something amazing together!
          </p>
          <a href="/projects" className="btn btn-dark">View My Work</a>
        </div>

        {/* Image Section */}
        <div className="image-section col-lg-6 text-center">
          <img src="/image1.jpeg" alt="React Developer" className="img-fluid custom-img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
