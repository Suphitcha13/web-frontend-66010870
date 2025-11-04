# Weather Station Dashboard

A modern web application for monitoring and recording weather station data.

**Student:** Suphitcha Yuennan  
**ID:** 66010870

## Features

- 📍 **Station Info** - View weather station details and status
- 🌡️ **Record Temperature** - Interactive temperature recording with slider
- 📊 **Temperature History** - Browse historical temperature data with pagination

## Technologies

- React 18
- Vite
- Axios
- CSS3 with modern animations

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
VITE_API_BASE_URL=https://drone-api-66010870.onrender.com
VITE_DRONE_ID=3001
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
web-frontend-66010870/
├── src/
│   ├── pages/
│   │   ├── StationInfo.jsx
│   │   ├── RecordTemp.jsx
│   │   └── TempHistory.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
└── package.json
```

## Features

- Modern glassmorphism UI design
- Smooth animations and transitions
- Color-coded temperature indicators
- Interactive temperature slider
- Responsive mobile-friendly layout
- Real-time status indicators

## API Integration

Connects to backend API at: `https://drone-api-66010870.onrender.com`

Endpoints used:
- GET /configs/:stationId
- GET /logs/:stationId
- POST /logs