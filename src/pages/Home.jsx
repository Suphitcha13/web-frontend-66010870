import { FaHashtag } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

function Home({ config, loading, setPage }) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content-left">
            <h1 className="hero-title-modern">Drone Monitoring System</h1>
            <p className="hero-subtitle-modern">
              Advanced Temperature Tracking & Environmental Monitoring with Real-time Data Collection
            </p>
            <button className="hero-cta-modern" onClick={() => setPage('logs')}>
              VIEW DATA
            </button>
          </div>
          <div className="hero-image-right">
            <img 
              src="src/assets/DJI-Matrice-4T.png" 
              alt="Monitoring Drone"
              className="drone-img-large"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="about-container">
          <div className="about-header">
            <span className="about-label">About System</span>
            <h2 className="about-title">Advanced Drone Monitoring</h2>
            <p className="about-desc">
              Our system provides comprehensive temperature monitoring across multiple locations. 
              Each drone is equipped with precision sensors to collect accurate environmental data in real-time.
            </p>
          </div>

          <div className="about-content">
            <div className="drone-section">
              <img 
                src="src/assets/1.png" 
                alt="Drone"
                className="drone-img"
              />
            </div>

            <div className="info-cards">
              {loading && !config && (
                <div className="loading-small">
                  <div className="spinner-small"></div>
                  <p>Loading drone info...</p>
                </div>
              )}

              {config && (
                <>
                  {/* Drone ID Card */}
                  <div className="info-card">
                    <FaHashtag className="info-icon"/>
                    <h3 className="info-title">DRONE ID</h3>
                    <p className="info-desc">
                      Unique identifier for tracking and monitoring purposes across the system.
                    </p>
                    <div className="info-value">{config.drone_id}</div>
                  </div>

                  {/* Drone Name Card */}
                  <div className="info-card">
                    <TbDrone className="info-icon"/>
                    <h3 className="info-title">DRONE NAME</h3>
                    <p className="info-desc">
                      Designated name for easy identification during operations and data collection.
                    </p>
                    <div className="info-value">{config.drone_name}</div>
                  </div>

                  {/* Light Status Card */}
                  <div className="info-card">
                    <FaLightbulb className="info-icon"/>
                    <h3 className="info-title">LIGHT STATUS</h3>
                    <p className="info-desc">
                      Current lighting system status for night operations and visibility enhancement.
                    </p>
                    <div className="info-value">
                      <span className={`status-badge ${config.light === 'on' ? 'status-on' : 'status-off'}`}>
                        {config.light.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Country Card */}
                  <div className="info-card">
                    <GiWorld className="info-icon"/>
                    <h3 className="info-title">COUNTRY</h3>
                    <p className="info-desc">
                      Primary operation region for environmental data collection and monitoring.
                    </p>
                    <div className="info-value">{config.country}</div>
                  </div>
                </>
              )}

              {/* Load Config Button */}
              {!loading && !config && (
                <div className="info-card-full">
                  <p>Click "View Config" to load drone information</p>
                  <button className="load-btn" onClick={() => setPage('config')}>
                    Load Drone Info
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-grid-section">
        <h2 className="section-title">System Capabilities</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img 
                src="src/assets/temp.png" 
                alt="Temperature" 
                style={{width: '100px', height: '100px'}}
              />
            </div>
            <h3 className="feature-card-title">Temperature Monitoring</h3>
            <p className="feature-card-desc">
              Precise temperature measurement with high accuracy sensors for reliable environmental data.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img 
                src="src/assets/Globalization.png" 
                alt="Globalization" 
                style={{width: '98px', height: '98px'}}
              />
            </div>
            <h3 className="feature-card-title">Global Coverage</h3>
            <p className="feature-card-desc">
              Monitor temperature data from multiple countries and regions around the world.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img 
                src="src/assets/Real-time.png" 
                alt="Real time" 
                style={{width: '100px', height: '100px'}}
              />
            </div>
            <h3 className="feature-card-title">Real-time Data</h3>
            <p className="feature-card-desc">
              Instant data transmission and processing for immediate insights and analysis.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img 
                src="src/assets/Data.png" 
                alt="Data Analytics" 
                style={{width: '100px', height: '100px'}}
              />
            </div>
            <h3 className="feature-card-title">Data Analytics</h3>
            <p className="feature-card-desc">
              Advanced analytics and visualization tools for comprehensive data interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start Monitoring Now</h2>
          <p className="cta-desc">
            Access real-time temperature data and comprehensive monitoring tools
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={() => setPage('form')}>
              Log Temperature
            </button>
            <button className="cta-btn secondary" onClick={() => setPage('logs')}>
              View All Logs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;