import { FaHashtag } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

function ViewConfig({ config, loading, message, DRONE_ID }) {
  return (
    <div className="content-wrapper">
      <div className="config-card">
        <div className="config-header">
          <h2 className="config-title">Drone Configuration</h2>
          <p className="config-subtitle">View drone details and settings</p>
          <div className="drone-id-badge">
            <span className="id-label">Drone ID:</span>
            <span className="id-value">{DRONE_ID}</span>
          </div>
        </div>
        
        {loading && !config && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading configuration...</p>
          </div>
        )}

        {message && (
          <div className={`alert ${message.type === 'error' ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

        {config && (
          <div className="config-grid-modern">
            <div className="config-card-item">
              <TbDrone className="info-icon"/>
              <label className="config-label">Drone Name</label>
              <div className="config-value">{config.drone_name}</div>
            </div>
            <div className="config-card-item">
              <FaLightbulb className="info-icon"/>
              <label className="config-label">Light Status</label>
              <div className="config-value">
                <span className={`status-badge-modern ${config.light === 'on' ? 'status-on' : 'status-off'}`}>
                  {config.light === 'on' ? '● ON' : '○ OFF'}
                </span>
              </div>
            </div>
            <div className="config-card-item">
              <GiWorld className="info-icon"/>
              <label className="config-label">Country</label>
              <div className="config-value">{config.country}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewConfig;