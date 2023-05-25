import { createRoot } from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
createRoot(document.getElementById('root')).render(
    
  // استخدم createRoot بدلاً من ReactDOM.render
  <Router basename='/portfilio2023'>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
);

reportWebVitals();