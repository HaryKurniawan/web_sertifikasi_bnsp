import { Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import HomePage from './pages/HomePage';
import AdminLayout from './pages/AdminLayout';
import AdminPortfolio from './pages/AdminPortfolio';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPortfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
