import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import ViewConfig from './pages/ViewConfig.jsx';
import TemperatureLog from './pages/TemperatureLog.jsx';
import ViewLogs from './pages/ViewLogs.jsx';
import Profile from './pages/Profile.jsx';

// ตั้งค่าการเชื่อมต่อ API
const API_URL = import.meta.env.VITE_API_BASE_URL;
const DRONE_ID = import.meta.env.VITE_DRONE_ID;

function App() {
  // State สำหรับจัดการหน้าต่างๆ
  const [page, setPage] = useState('home');
  const [config, setConfig] = useState(null);
  const [logs, setLogs] = useState([]);
  const [celsius, setCelsius] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');

  // โหลด Config อัตโนมัติเมื่อเข้าหน้า config หรือ home
  useEffect(() => {
    if ((page === 'config' || page === 'home') && !config) {
      loadConfig();
    }
  }, [page, config]);

  // โหลด Logs อัตโนมัติเมื่อเข้าหน้า logs หรือเปลี่ยนหน้า
  useEffect(() => {
    if (page === 'logs') {
      loadLogs(currentPage);
    }
  }, [page, currentPage]);

  // ตั้งค่าประเทศจาก config
  useEffect(() => {
    if (config && !selectedCountry) {
      setSelectedCountry(config.country);
    }
  }, [config]);

  // ฟังก์ชันดึงข้อมูล Config จาก API
  const loadConfig = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/configs/${DRONE_ID}`);
      if (!res.ok) throw new Error('Failed to load config');
      const data = await res.json();
      setConfig(data);
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to load config' });
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันดึงข้อมูล Logs จาก API
  const loadLogs = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/logs/${DRONE_ID}?page=${page}&perPage=12`);
      if (!res.ok) throw new Error('Failed to load logs');
      const data = await res.json();
      setLogs(data);
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to load logs' });
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันส่งข้อมูลอุณหภูมิ
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!config) {
      setMessage({ type: 'error', text: 'Please load config first' });
      return;
    }

    if (!celsius || isNaN(celsius)) {
      setMessage({ type: 'error', text: 'Please enter a valid temperature' });
      return;
    }

    if (!selectedCountry) {
      setMessage({ type: 'error', text: 'Please select a country' });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const payload = {
        drone_id: config.drone_id,
        drone_name: config.drone_name,
        country: selectedCountry,
        celsius: parseFloat(celsius)
      };

      const res = await fetch(`${API_URL}/logs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to submit log');
      
      setMessage({ type: 'success', text: 'Temperature log submitted successfully!' });
      setCelsius('');
      
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to submit log' });
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันแปลงวันที่ให้อ่านง่าย
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="app">
      {/* ========== NAVIGATION BAR ========== */}
      <nav className="nav">
        <div className="container">
          <div className="logo" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>
          <div className="logo-text">DJI Matrice 4 Series</div>
        </div>
          <div className="nav-buttons">
            <button
              className={`nav-btn ${page === 'home' ? 'active' : ''}`}
              onClick={() => setPage('home')}
            >
              Home
            </button>
            <button
              className={`nav-btn ${page === 'config' ? 'active' : ''}`}
              onClick={() => setPage('config')}
            >
              View Config
            </button>
            <button
              className={`nav-btn ${page === 'form' ? 'active' : ''}`}
              onClick={() => setPage('form')}
            >
              Temperature Log
            </button>
            <button
              className={`nav-btn ${page === 'logs' ? 'active' : ''}`}
              onClick={() => setPage('logs')}
            >
              View Logs
            </button>
            <button 
              className={`nav-btn about ${page === 'profile' ? 'active' : ''}`}
              onClick={() => setPage('profile')}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main">
        {page === 'home' && (
          <Home 
            config={config} 
            loading={loading} 
            setPage={setPage} 
          />
        )}

        {page === 'config' && (
          <ViewConfig 
            config={config} 
            loading={loading} 
            message={message} 
            DRONE_ID={DRONE_ID} 
          />
        )}

        {page === 'form' && (
          <TemperatureLog 
            message={message}
            celsius={celsius}
            setCelsius={setCelsius}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        )}

        {page === 'logs' && (
          <ViewLogs 
            logs={logs}
            loading={loading}
            message={message}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            formatDate={formatDate}
          />
        )}

        {page === 'profile' && (
          <Profile />
        )}
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">🚁 DJI Drone</h3>
            <p className="footer-text">The world's leader in consumer and professional drones</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Products</h4>
            <p className="footer-link">Mavic Series</p>
            <p className="footer-link">Phantom Series</p>
            <p className="footer-link">Inspire Series</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Support</h4>
            <p className="footer-link">Documentation</p>
            <p className="footer-link">Contact Us</p>
            <p className="footer-link">Warranty</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Company</h4>
            <p className="footer-link">About Us</p>
            <p className="footer-link">Careers</p>
            <p className="footer-link">Press</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Drone Monitoring System - 66010870. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;