import React, { useState } from "react";
import "../styles/Pricing.css";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleRegister = () => {
    navigate("/registration");
  };

  return (
    <div className="pricing-container">
      <div className="container">
        <div className="row">
          {/* Section Header */}
          <div className="col-xl-12 text-center">
            <h1 className="pricing-title">Choose Your Plan</h1>
            <p className="pricing-intro">
              Select the best plan that suits your fitness goals and budget.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="col-xl-4">
            <div className="pricing-card">
              <h3>Monthly Plan</h3>
              <p className="price">$50 / month</p>
              <button onClick={() => handlePlanSelect("monthly")} className="btn-select">
                Select Plan
              </button>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="pricing-card">
              <h3>Quarterly Plan</h3>
              <p className="price">$135 / quarter</p>
              <button onClick={() => handlePlanSelect("quarterly")} className="btn-select">
                Select Plan
              </button>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="pricing-card">
              <h3>Yearly Plan</h3>
              <p className="price">$480 / year</p>
              <button onClick={() => handlePlanSelect("yearly")} className="btn-select">
                Select Plan
              </button>
            </div>
          </div>

          {/* Sports Selection */}
          <div className="col-xl-12 text-center">
            <h2>Select Your Sport</h2>
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/200"
                  alt="Sport"
                />
                <div className="card-body">
                  <h5 className="card-title">Football</h5>
                  <button onClick={handleRegister} className="btn-register">
                    Register
                  </button>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/200"
                  alt="Sport"
                />
                <div className="card-body">
                  <h5 className="card-title">Basketball</h5>
                  <button onClick={handleRegister} className="btn-register">
                    Register
                  </button>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src="https://via.placeholder.com/200"
                  alt="Sport"
                />
                <div className="card-body">
                  <h5 className="card-title">Tennis</h5>
                  <button onClick={handleRegister} className="btn-register">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel for Each Sport Plan */}
          <div className="col-xl-12">
            <div className="carousel-container">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h3>Football Plan</h3>
                    <p>Details about the football plan and facilities provided.</p>
                  </div>
                  <div className="carousel-item">
                    <h3>Basketball Plan</h3>
                    <p>Details about the basketball plan and facilities provided.</p>
                  </div>
                  <div className="carousel-item">
                    <h3>Tennis Plan</h3>
                    <p>Details about the tennis plan and facilities provided.</p>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
