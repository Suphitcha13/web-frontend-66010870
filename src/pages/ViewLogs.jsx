function ViewLogs({ logs, loading, message, currentPage, setCurrentPage, formatDate }) {
  return (
    <div className="content-wrapper">
      <div className="logs-card">
        <div className="logs-header">
          <h2 className="logs-title">Temperature Logs</h2>
          <p className="logs-subtitle">View recent temperature readings</p>
          <div className="logs-info-badge">
            <span className="badge-text">12 records per page</span>
          </div>
        </div>

        {loading && logs.length === 0 && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading logs...</p>
          </div>
        )}

        {message && (
          <div className={`alert ${message.type === 'error' ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

        {logs.length > 0 && (
          <>
            <div className="table-wrapper">
              <table className="table-modern">
                <thead>
                  <tr>
                    <th>Created</th>
                    <th>Country</th>
                    <th>Drone ID</th>
                    <th>Drone Name</th>
                    <th>Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={index}>
                      <td className="date-cell">{formatDate(log.created)}</td>
                      <td className="country-cell">{log.country}</td>
                      <td className="id-cell">{log.drone_id}</td>
                      <td className="name-cell">{log.drone_name}</td>
                      <td className="temp-cell">
                        <span className="temp-value">{log.celsius}°C</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination-modern">
              <button
                className={`page-btn-modern prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1 || loading}
              >
                <span className="btn-arrow">←</span>
                Previous
              </button>
                <div className="page-input-wrapper">
                  <span className="page-label">Page</span>
                  <input
                    type="number"
                    min="1"
                    defaultValue={currentPage}
                    key={currentPage}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const value = parseInt(e.target.value);
                        if (value > 0) {
                          setCurrentPage(value);
                          e.target.blur();
                        }
                      }
                    }}
                    onBlur={(e) => {
                      const value = parseInt(e.target.value);
                      if (value > 0) {
                        setCurrentPage(value);
                      } else {
                        e.target.value = currentPage;
                      }
                    }}
                    className="page-input"
                    disabled={loading}
                  />
                </div>
              <button
                className={`page-btn-modern next ${logs.length < 12 ? 'disabled' : ''}`}
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={logs.length < 12 || loading}
              >
                Next
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </>
        )}

        {!loading && logs.length === 0 && (
          <div className="no-data-container">
            <div className="alert">
              No logs found for this drone.
            </div>
            {currentPage > 1 && (
              <button
                className="back-btn"
                onClick={() => setCurrentPage(1)}
              >
                ← Back to Page 1
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewLogs;