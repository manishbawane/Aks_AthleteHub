import React from "react";
import "../styles/Home.css"; // Add custom styles if needed

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Academy Image */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <h1>Welcome to Our Sports Academy</h1>
              <p>
                We provide the best facilities, coaching, and training to help
                you excel in your favorite sports and achieve your fitness
                goals.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-color-tennis-sport-advertising-background-backgroundmotionwork-outtennistreeshand-paintedfreshhouses-image_75815.jpg"
                alt="Academy"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section my-5">
        <div className="container">
          <h2 className="text-center mb-4">Facilities We Provide</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img
                  src="https://cdn.outsideonline.com/wp-content/uploads/2020/06/17/crossfit-gym-glassman_h.jpg"
                  className="card-img-top"
                  alt="Facility 1"
                />
                <div className="card-body">
                  <h5 className="card-title">State-of-the-Art Gym</h5>
                  <p className="card-text">
                    Enjoy a fully equipped gym with modern equipment to meet
                    your fitness goals.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/52627348e4b0823534b23503/c2b7a531-0687-470e-a070-199a0cc71b32/unique+features.jpg"
                  className="card-img-top"
                  alt="Facility 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Outdoor Fields</h5>
                  <p className="card-text">
                    Train on our professional-grade outdoor fields for various
                    sports.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img
                  src="https://www.physioline.in/wp-content/uploads/2017/09/Sports-Physiotherapy.jpg"
                  className="card-img-top"
                  alt="Facility 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Physiotherapy</h5>
                  <p className="card-text">
                    Physiotherapy is a type of physical therapy that helps
                    athletes recover from injuries, improve their performance,
                    and prevent future injuries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Carousel */}
      <section className="sports-carousel my-5">
        <div className="container">
          <h2 className="text-center mb-4">Explore Our Sports</h2>
          <div
            id="sportsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://cdn.wallpapersafari.com/2/35/vOxGI3.jpg"
                  className="d-block w-100"
                  alt="Sport 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://s1.ticketm.net/dam/c/0ad/ba7bd970-7e94-4c58-a2bc-85b5ee4590ad_105331_TABLET_LANDSCAPE_LARGE_16_9.jpg"
                  className="d-block w-100"
                  alt="Sport 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?semt=ais_hybrid"
                  className="d-block w-100"
                  alt="Sport 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#sportsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#sportsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Fitness Programs Section */}
      <section className="fitness-programs-section my-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Fitness Programs</h2>
          <div className="row">
            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://sunnyhealthfitness.com/cdn/shop/files/sunny-health-fitness-strength-multifunctional-strength-training-home-gym-sf-hg92401-2_750x.jpg?v=1721923023"
                  className="card-img-top"
                  alt="Fitness Program 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Strength Training</h5>
                  <p className="card-text">
                    Build muscle and strength with our specialized weight
                    training program.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://contents.mediadecathlon.com/p1556593/k$d7bcc89145efebced8aa91e0f331da1a/1800x0/2880pt1920/5120xcr3840/fitness-cardio.jpg?format=auto"
                  className="card-img-top"
                  alt="Fitness Program 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Cardio Fitness</h5>
                  <p className="card-text">
                    Improve your endurance and cardiovascular health with our
                    cardio-focused programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://www.localfitness.com.au/images/classes/other/yoga_slide1.jpg"
                  className="card-img-top"
                  alt="Fitness Program 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Yoga & Flexibility</h5>
                  <p className="card-text">
                    Increase your flexibility and mind-body connection through
                    our yoga sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5160bb45e4b0e13a258812c8/1519772807718-CJ7LA9HCLSQJURG7BVRH/2167219_08345.jpg"
                  className="card-img-top"
                  alt="Fitness Program 4"
                />
                <div className="card-body">
                  <h5 className="card-title">HIIT Training</h5>
                  <p className="card-text">
                    Burn fat and get fit with our High-Intensity Interval
                    Training sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://cdn.shopify.com/s/files/1/0671/8088/8296/files/CrossFit_Moorabbin_Melbourne_2048x2048.jpg?v=1717242355"
                  className="card-img-top"
                  alt="Fitness Program 5"
                />
                <div className="card-body">
                  <h5 className="card-title">CrossFit</h5>
                  <p className="card-text">
                    Get stronger and build overall fitness with functional
                    movements and weightlifting.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://www.istockphoto.com/photos/fitness"
                  className="card-img-top"
                  alt="Fitness Program 6"
                />
                <div className="card-body">
                  <h5 className="card-title">Sports Conditioning</h5>
                  <p className="card-text">
                    Enhance your athletic performance and agility with
                    sport-specific conditioning programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="coaches-section my-5">
        <div className="container">
          <h2 className="text-center mb-4">Meet Our Coaches</h2>
          <div className="row">
            {/* Coach 1 */}
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  src="src\images\amit.jpg"
                  className="card-img-top"
                  alt="Coach 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Amit Kadam</h5>
                  <p className="card-text">
                    Amit Kadam is a seasoned cricket and fitness coach with 18
                    years of experience. A former Ranji Trophy captain of
                    Maharashtra, he brings valuable insights into both cricket
                    techniques and fitness training. His coaching expertise
                    blends strategic knowledge with physical conditioning,
                    guiding athletes to excel on and off the field.
                  </p>
                </div>
              </div>
            </div>

            {/* Coach 2 */}
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  src="src\images\shweta.jpg"
                  className="card-img-top"
                  alt="Coach 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Shweta Kadam</h5>
                  <p className="card-text">
                    Shweta Kadam is an experienced cricket and fitness coach
                    with 13 years in the field. A former Ranji Trophy captain of
                    Vidarbha, she combines her leadership and playing experience
                    to mentor athletes. Her coaching focuses on cricket skills
                    and physical fitness, empowering players to reach their full
                    potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Coach 3 */}
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  src="src\images\shubham.jpg"
                  className="card-img-top"
                  alt="Coach 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Shubham Gaikwad</h5>
                  <p className="card-text">
                    Shubham Gaikwad is a dynamic cricket and fitness coach,
                    currently playing for the Indian cricket team. As a young
                    and talented player, he combines his on-field experience
                    with coaching, mentoring new players. His approach focuses
                    on developing cricketing skills, fitness, and the mindset
                    needed to succeed at the highest level.
                  </p>
                </div>
              </div>
            </div>

            {/* Coach 4 */}
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  src="\src\images\aniket.jpg"
                  className="card-img-top"
                  alt="Coach 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Aniket Pawar</h5>
                  <p className="card-text">
                    Aniket Pawar is a dedicated cricket and fitness coach,
                    currently playing for the Maharashtra cricket team. As a
                    young player, he excels in both playing and coaching,
                    helping new players improve their skills. A heavy trainer,
                    Aniket offers personalized fitness training, focusing on
                    strength, conditioning, and overall athletic development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section my-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Achievements</h2>
          <div className="row">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <img
                    src={`/images/achievement${index + 1}.jpg`}
                    className="card-img-top"
                    alt={`Achievement ${index + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Achievement {index + 1}</h5>
                    <p className="card-text">
                      Description of the achievement here.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
