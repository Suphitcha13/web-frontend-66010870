# Drone Monitoring Web Frontend (66010870)

Modern web application for monitoring drone temperature data with real-time visualization.

**Author:** Suphitcha Yuennan  
**Student ID:** 66010870

---

## Features

- **Home Page** - Landing page with system overview
- **View Config** - Display drone configuration details
- **Temperature Log** - Interactive form to submit temperature readings
- **View Logs** - Browse historical temperature data with pagination
- **Profile** - Developer information

## Technologies

- React 18.3.1
- Vite 5.4.21
- Axios 1.13.1
- React Icons 5.5.0
- CSS3 with modern animations

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Suphitcha13/web-frontend-66010870
cd web-frontend-66010870
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://drone-api-66010870.onrender.com
VITE_DRONE_ID=3001
```

**Environment Variables:**
- `VITE_API_BASE_URL` - Backend API URL from Assignment #1
- `VITE_DRONE_ID` - Your assigned drone ID

### 4. Run development server

```bash
npm run dev
```

The application will run on `http://localhost:5173`

### 5. Build for production

```bash
npm run build
```

Production files will be in the `dist/` folder.

### 6. Preview production build

```bash
npm run preview
```

## Project Structure

```
web-frontend-66010870/
├── src/
│   ├── assets/          # Images and icons
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── ViewConfig.jsx      # Config display page
│   │   ├── TemperatureLog.jsx  # Temperature form page
│   │   ├── ViewLogs.jsx        # Logs table page
│   │   └── Profile.jsx         # About developer page
│   ├── App.jsx          # Main component
│   ├── App.css          # Styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages Overview

### 1. Home Page
- Hero section with drone image
- System overview and features
- Quick navigation to other pages
- Drone information cards

### 2. View Config
- Display drone ID, name, light status, and country
- Modern card-based layout
- Auto-loads configuration data
- Status indicators with color coding

### 3. Temperature Log Form
- Country selection dropdown
- Temperature input with validation
- Submit functionality with loading states
- Success/error message alerts

### 4. View Logs
- Table display with 12 records per page
- Pagination (Previous/Next + Page input)
- Sortable by creation date (newest first)
- Temperature display with visual indicators

### 5. Profile
- Developer information
- Student ID and university details
- Clean modern design

## Features Highlights

### UI/UX Design
- Modern glassmorphism effects
- Smooth animations and transitions
- Responsive mobile-friendly layout
- Color-coded status indicators
- Interactive hover effects

### Temperature Monitoring
- Real-time data submission
- Multi-country support
- Celsius temperature unit
- Input validation

### Data Visualization
- Clean table layout
- Pagination controls
- Page number input
- Date formatting
- Temperature badges

## API Integration

Connects to backend API endpoints:

- `GET /configs/:droneId` - Fetch drone configuration
- `GET /logs/:droneId?page=1&perPage=12` - Fetch temperature logs
- `POST /logs` - Submit new temperature reading

## Deployment

### Vercel
1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables:
   - `VITE_API_BASE_URL`
   - `VITE_DRONE_ID`
4. Deploy

### Netlify
1. Push code to GitHub
2. Create new site at [netlify.com](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables
5. Deploy

### GitHub Pages (with Vite)
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repo-name/',
     plugins: [react()],
   })
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## Dependencies

```json
{
  "dependencies": {
    "axios": "^1.13.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

## Design Features

### Color Scheme
- Primary: `#4CAF50` (Green)
- Secondary: `#45a049` (Dark Green)
- Background: `#f8f9fa` (Light Gray)
- Text: `#1a1a1a` (Dark Gray)

### Animations
- Float effect for drone images
- Pulse effect for icons
- Hover transitions
- Loading spinners
- Smooth page transitions

## Troubleshooting

### Port already in use
```bash
# Change port in vite.config.js or kill process
lsof -ti:5173 | xargs kill -9
```

### Environment variables not working
- Ensure variable names start with `VITE_`
- Restart dev server after changing .env
- Check `.env` is not in `.gitignore`

### API connection error
- Verify `VITE_API_BASE_URL` is correct
- Check backend API is running
- Verify CORS is enabled on backend

## Author

**Suphitcha Yuennan (สุพิชชา ยืนนาน)**
- Student ID: 66010870
- Major: ระบบไอโอทีและสารสนเทศ
- Faculty: วิศวกรรมศาสตร์
- University: มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง

## License

Copyright (c) 2025 Suphitcha Yuennan (66010870). All rights reserved.

This project is created for educational purposes as part of a university assignment.

---