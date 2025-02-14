import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container bg-gradient-light">
      <div className="container py-5">
        <div className="row">
          {/* Section Header */}
          <div className="col-xl-12 text-center py-5">
            <h1 className="about-title display-4 text-uppercase text-dark font-weight-bold mb-4">About Us</h1>
            <p className="about-intro lead text-muted">
              At Sports Academy, we provide world-class facilities, top-notch training programs, and coaching for all sports enthusiasts. Whether you’re a beginner or a seasoned pro, our mission is to help you achieve your fitness and sporting goals.
            </p>
          </div>

          {/* Academy Overview */}
          <div className="col-xl-6 mb-4">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body">
                <h3 className="card-title text-success">Academy Overview</h3>
                <p className="card-text">
                  Our academy is a hub for aspiring athletes. With a focus on holistic development, we offer professional coaching across multiple sports, state-of-the-art facilities, and personalized training plans that elevate athletes to their peak potential.
                </p>
              </div>
            </div>
          </div>

          {/* Training & Facilities */}
          <div className="col-xl-6 mb-4">
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body">
                <h3 className="card-title text-success">Training & Facilities</h3>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle"></i> Personal training sessions tailored to your needs.</li>
                  <li><i className="bi bi-check-circle"></i> Comprehensive programs for sports like soccer, basketball, tennis, and swimming.</li>
                  <li><i className="bi bi-check-circle"></i> Fully equipped gym and fitness facilities for strength and conditioning.</li>
                  <li><i className="bi bi-check-circle"></i> Indoor and outdoor sports courts and training areas.</li>
                  <li><i className="bi bi-check-circle"></i> High-tech performance analysis tools for measurable results.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Fitness is Important */}
          <div className="col-xl-12 text-center my-5">
            <h3 className="text-uppercase text-danger mb-4">Why Fitness is Important</h3>
            <p className="lead text-muted">
              Fitness is not just about physical strength, it’s about building mental resilience, improving overall well-being, and creating a foundation for a healthy lifestyle. At our academy, fitness is at the core of everything we do, and we empower athletes to embrace a fit and active lifestyle.
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title text-success">Physical Health</h5>
                    <p className="card-text">
                      Regular fitness training helps prevent diseases, improves cardiovascular health, and boosts energy levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title text-success">Mental Clarity</h5>
                    <p className="card-text">
                      Fitness not only improves physical strength but also enhances focus, mood, and mental well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title text-success">Increased Confidence</h5>
                    <p className="card-text">
                      Achieving fitness goals boosts self-esteem, creating a positive feedback loop of growth and improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         


        </div>
      </div>
    </div>
  );
};

export default About;
