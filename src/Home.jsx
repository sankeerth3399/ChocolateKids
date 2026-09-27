import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { branches } from "./data";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    "All",
    ...new Set(
      branches.map((branch) => branch.location.split(",")[0])
    ),
  ];

  const filteredBranches =
    selectedLocation === "All"
      ? branches
      : branches.filter((branch) =>
          branch.location.includes(selectedLocation)
        );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="navbar-container">

          <Link to="/" className="logo" onClick={closeMenu}>

            <span className="logo-symbol">✦</span>

            <span>
              Bright<span>Future</span>
            </span>

          </Link>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#branches" onClick={closeMenu}>
              Branches
            </a>

            <a href="#academics" onClick={closeMenu}>
              Academics
            </a>

            <a href="#campus" onClick={closeMenu}>
              Campus Life
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              className="nav-admission"
              onClick={closeMenu}
            >
              Admissions
            </a>

          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            Inspiring Excellence Since 2001
          </div>

          <h1>
            Inspiring Young Minds.
            <br />
            <span>Building Bright Futures.</span>
          </h1>

          <p>
            A modern learning community where curiosity meets
            knowledge, creativity meets opportunity, and every
            child is empowered to dream bigger.
          </p>

          <div className="hero-buttons">

            <a
              href="#branches"
              className="primary-button"
            >
              Explore Our School
              <span>→</span>
            </a>

            <a
              href="#about"
              className="secondary-button"
            >
              Discover Our Story
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-avatars">
              <span>👨🏻</span>
              <span>👩🏻</span>
              <span>👨🏽</span>
              <span>👩🏽</span>
            </div>

            <div>
              <strong>5,000+ happy learners</strong>
              <small>Growing with us every day</small>
            </div>

          </div>

        </div>

        <a href="#about" className="scroll-down">
          <span>Scroll to explore</span>
          <b>↓</b>
        </a>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-item">
            <h2>
              8<span>+</span>
            </h2>
            <p>Branches</p>
          </div>

          <div className="stat-item">
            <h2>
              5,000<span>+</span>
            </h2>
            <p>Students</p>
          </div>

          <div className="stat-item">
            <h2>
              350<span>+</span>
            </h2>
            <p>Teachers</p>
          </div>

          <div className="stat-item">
            <h2>
              25<span>+</span>
            </h2>
            <p>Years of Excellence</p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section about-section" id="about">

        <div className="about-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning in classroom"
          />

          <div className="experience-card">

            <strong>25+</strong>

            <span>
              Years of
              <br />
              Excellence
            </span>

          </div>

        </div>


        <div className="about-content">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Education that goes
            <span> beyond the classroom.</span>
          </h2>

          <p>
            BrightFuture School is a community built around
            curiosity, character and continuous learning.
            We believe education is not simply about grades —
            it is about helping young people understand the
            world and discover their place in it.
          </p>

          <p>
            With multiple campuses, experienced educators and
            a future-focused curriculum, we create an environment
            where every student can discover their strengths.
          </p>

          <div className="values-grid">

            <div className="value-item">
              <span>✓</span>
              <strong>Student First</strong>
            </div>

            <div className="value-item">
              <span>✓</span>
              <strong>Future Focused</strong>
            </div>

            <div className="value-item">
              <span>✓</span>
              <strong>Inclusive Community</strong>
            </div>

            <div className="value-item">
              <span>✓</span>
              <strong>Character Building</strong>
            </div>

          </div>

          <a
            href="#academics"
            className="primary-button dark-button"
          >
            Discover Our Approach
            <span>→</span>
          </a>

        </div>

      </section>


      {/* ================= BRANCHES ================= */}

      <section
        className="branches-section"
        id="branches"
      >

        <div className="section-heading">

          <span className="section-label">
            OUR CAMPUSES
          </span>

          <h2>
            Find your
            <span> school community.</span>
          </h2>

          <p>
            Explore our campuses and discover the unique learning
            experience each location offers.
          </p>

        </div>


        {/* FILTERS */}

        <div className="branch-filters">

          {locations.map((location) => (

            <button
              key={location}
              className={
                selectedLocation === location
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedLocation(location)
              }
            >
              {location}
            </button>

          ))}

        </div>


        {/* BRANCH CARDS */}

        <div className="branch-container">

          {filteredBranches.map((branch) => (

            <article
              className="branch-card"
              key={branch.id}
            >

              <div className="branch-image-wrapper">

                <img
                  src={branch.image}
                  alt={branch.name}
                />

                <span className="specialty-tag">
                  {branch.specialty}
                </span>

              </div>


              <div className="branch-content">

                <span className="branch-location">
                  📍 {branch.location}
                </span>

                <h3>
                  {branch.name}
                </h3>


                <div className="branch-info">

                  <div>
                    <strong>
                      {branch.students.toLocaleString()}
                    </strong>

                    <span>
                      Students
                    </span>
                  </div>


                  <div>
                    <strong>
                      {branch.teachers}
                    </strong>

                    <span>
                      Teachers
                    </span>
                  </div>


                  <div>
                    <strong>
                      {branch.classes}
                    </strong>

                    <span>
                      Classes
                    </span>
                  </div>

                </div>


                <Link
                  to={`/branch/${branch.slug}`}
                  className="branch-link"
                >
                  Explore Campus
                  <span>→</span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= ACADEMICS ================= */}

      <section
        className="section academics-section"
        id="academics"
      >

        <div className="section-heading">

          <span className="section-label">
            ACADEMICS
          </span>

          <h2>
            A curriculum built for the
            <span> future.</span>
          </h2>

          <p>
            A carefully designed learning journey that develops
            knowledge, creativity, confidence and critical thinking.
          </p>

        </div>


        <div className="academic-container">

          <div className="academic-card">

            <div className="academic-number">
              01
            </div>

            <h3>
              Pre-Primary
            </h3>

            <p>
              Building curiosity through activity-based learning,
              creativity and exploration.
            </p>

            <ul>
              <li>Activity Based Learning</li>
              <li>Creative Arts</li>
              <li>Language Development</li>
              <li>Logical Thinking</li>
            </ul>

          </div>


          <div className="academic-card featured">

            <div className="academic-number">
              02
            </div>

            <h3>
              Primary
            </h3>

            <p>
              Developing strong foundations in academics,
              communication and technology.
            </p>

            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Computer Science</li>
            </ul>

          </div>


          <div className="academic-card">

            <div className="academic-number">
              03
            </div>

            <h3>
              High School
            </h3>

            <p>
              Preparing students for higher education and
              future professional opportunities.
            </p>

            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= SPECIALTIES ================= */}

      <section className="specialties-section">

        <div className="section-heading light-heading">

          <span className="section-label">
            WHAT MAKES US DIFFERENT
          </span>

          <h2>
            More than a school.
            <span> A launchpad.</span>
          </h2>

          <p>
            We help students develop the skills, confidence and
            character they need for tomorrow.
          </p>

        </div>


        <div className="specialty-grid">

          <div className="specialty-card">
            <div className="specialty-icon">🔬</div>
            <h3>STEM Education</h3>
            <p>
              Hands-on science, technology, engineering and
              mathematics learning.
            </p>
            <span className="card-arrow">↗</span>
          </div>


          <div className="specialty-card">
            <div className="specialty-icon">🏆</div>
            <h3>Sports Excellence</h3>
            <p>
              Professional coaching and opportunities to
              participate in competitions.
            </p>
            <span className="card-arrow">↗</span>
          </div>


          <div className="specialty-card">
            <div className="specialty-icon">🎨</div>
            <h3>Arts & Culture</h3>
            <p>
              Music, dance, theatre, visual arts and cultural
              activities.
            </p>
            <span className="card-arrow">↗</span>
          </div>


          <div className="specialty-card">
            <div className="specialty-icon">💻</div>
            <h3>Smart Learning</h3>
            <p>
              Technology-enabled classrooms and modern digital
              learning resources.
            </p>
            <span className="card-arrow">↗</span>
          </div>


          <div className="specialty-card">
            <div className="specialty-icon">🌱</div>
            <h3>Holistic Development</h3>
            <p>
              Balanced academic, physical, social and emotional
              development.
            </p>
            <span className="card-arrow">↗</span>
          </div>


          <div className="specialty-card">
            <div className="specialty-icon">🚀</div>
            <h3>Future Ready</h3>
            <p>
              Programs designed to develop creativity, leadership
              and problem solving.
            </p>
            <span className="card-arrow">↗</span>
          </div>

        </div>

      </section>


      {/* ================= CAMPUS LIFE ================= */}

      <section
        className="section campus-section"
        id="campus"
      >

        <div className="section-heading">

          <span className="section-label">
            CAMPUS LIFE
          </span>

          <h2>
            Learning happens
            <span> everywhere.</span>
          </h2>

          <p>
            From classrooms and laboratories to sports fields
            and cultural events, every corner of our campus
            creates an opportunity to learn.
          </p>

        </div>


        <div className="gallery">

          <div className="gallery-item gallery-large">

            <img
              src="https://images.unsplash.com/photo-1569074187119-c87815b476da?auto=format&fit=crop&w=1200&q=85"
              alt="School classroom"
            />

            <div className="gallery-overlay">
              <span>Classrooms</span>
              <b>↗</b>
            </div>

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=85"
              alt="Student life"
            />

            <div className="gallery-overlay">
              <span>Student Life</span>
              <b>↗</b>
            </div>

          </div>


          <div className="gallery-item">

            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85"
              alt="School campus"
            />

            <div className="gallery-overlay">
              <span>Campus</span>
              <b>↗</b>
            </div>

          </div>


          <div className="gallery-item gallery-wide">

            <img
              src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=85"
              alt="School activities"
            />

            <div className="gallery-overlay">
              <span>Activities & Events</span>
              <b>↗</b>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EVENTS ================= */}

      <section className="events-section">

        <div className="section-heading">

          <span className="section-label">
            WHAT'S HAPPENING
          </span>

          <h2>
            School
            <span> events & news.</span>
          </h2>

        </div>


        <div className="events-container">

          <article className="event-card">

            <div className="event-date">
              <strong>15</strong>
              <span>AUG</span>
            </div>

            <div>
              <h3>Annual Sports Day</h3>

              <p>
                A celebration of talent, teamwork and
                sporting spirit.
              </p>

              <a href="#contact">
                Learn more →
              </a>
            </div>

          </article>


          <article className="event-card">

            <div className="event-date">
              <strong>22</strong>
              <span>AUG</span>
            </div>

            <div>
              <h3>Science Exhibition</h3>

              <p>
                Students showcase innovative science and
                technology projects.
              </p>

              <a href="#contact">
                Learn more →
              </a>
            </div>

          </article>


          <article className="event-card">

            <div className="event-date">
              <strong>30</strong>
              <span>AUG</span>
            </div>

            <div>
              <h3>Parent-Teacher Meeting</h3>

              <p>
                An opportunity for parents and teachers to
                discuss student progress.
              </p>

              <a href="#contact">
                Learn more →
              </a>
            </div>

          </article>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-content">

          <span className="section-label">
            START YOUR JOURNEY
          </span>

          <h2>
            Give your child a
            <span> brighter tomorrow.</span>
          </h2>

          <p>
            Come visit us, meet our educators and experience
            the BrightFuture community.
          </p>

          <div className="contact-buttons">

            <button className="primary-button">
              Schedule a Visit →
            </button>

            <button className="outline-button">
              Admission Enquiry
            </button>

          </div>

        </div>


        <div className="contact-info">

          <div className="contact-item">

            <span>📍</span>

            <div>
              <small>MAIN OFFICE</small>
              <p>
                Hyderabad, Telangana, India
              </p>
            </div>

          </div>


          <div className="contact-item">

            <span>☎</span>

            <div>
              <small>CALL US</small>
              <p>
                +91 98765 43210
              </p>
            </div>

          </div>


          <div className="contact-item">

            <span>✉</span>

            <div>
              <small>EMAIL</small>
              <p>
                info@brightfuture.edu
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <Link to="/" className="logo">

              <span className="logo-symbol">
                ✦
              </span>

              <span>
                Bright<span>Future</span>
              </span>

            </Link>

            <p>
              Inspiring young minds and building brighter
              futures through meaningful education.
            </p>

          </div>


          <div className="footer-links">

            <div>

              <h4>Explore</h4>

              <a href="#about">
                About Us
              </a>

              <a href="#branches">
                Branches
              </a>

              <a href="#academics">
                Academics
              </a>

              <a href="#campus">
                Campus Life
              </a>

            </div>


            <div>

              <h4>Connect</h4>

              <a href="#contact">
                Admissions
              </a>

              <a href="#contact">
                Contact
              </a>

              <a href="#contact">
                Careers
              </a>

              <a href="#contact">
                Visit Us
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 BrightFuture School. All rights reserved.
          </span>

          <span>
            Made with ❤️ for better education.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;