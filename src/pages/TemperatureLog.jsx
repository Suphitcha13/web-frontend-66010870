import { GiWorld } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";

function TemperatureLog({ 
  message, 
  celsius, 
  setCelsius, 
  selectedCountry, 
  setSelectedCountry, 
  loading, 
  handleSubmit 
}) {
  return (
    <div className="content-wrapper">
      <div className="temp-log-card">
        <div className="temp-log-header">
          <h2 className="temp-log-title">Temperature Log Form</h2>
          <p className="temp-log-subtitle">Submit new temperature reading</p>
        </div>

        {message && (
          <div className={`alert ${message.type === 'error' ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">
          <div className="temp-form-group">
            <label className="temp-form-label">
              <GiWorld className="label-icon"/>
              Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="temp-input temp-select"
              disabled={loading}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Thailand">Thailand</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
              <option value="Brazil">Brazil</option>
              <option value="Egypt">Egypt</option>
              <option value="Russia">Russia</option>
              <option value="Germany">Germany</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>

          <div className="temp-form-group">
            <label className="temp-form-label">
              <FaTemperatureHigh className="label-icon"/>
              Temperature in Celsius
            </label>
            <div className="temp-input-wrapper">
              <input
                type="number"
                step="1"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                placeholder="Enter temperature (e.g., 25)"
                className="temp-input temp-number-input"
                disabled={loading}
              />
              <span className="temp-unit">°C</span>
            </div>
          </div>

          <button
            type="submit"
            className={`temp-submit-btn ${loading ? 'disabled' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="btn-spinner"></span>
                Submitting...
              </>
            ) : (
              <>
                <span className="btn-icon"></span>
                Submit Data
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TemperatureLog;