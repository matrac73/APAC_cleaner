import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Segments from './pages/Segments';
import Energy from './pages/Energy';
import Water from './pages/Water';
import Waste from './pages/Waste';
import Sources from './pages/Sources';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Sources" element={<Sources />} />
      <Route path="/Segments" element={<Segments />} />
      <Route path="/Energy" element={<Energy />} />
      <Route path="/Water" element={<Water />} />
      <Route path="/Waste" element={<Waste />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);