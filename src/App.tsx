import './App.css';
import { Routes, Route } from 'react-router';
import Layout from '@/layout/Layout';
import Analytics from './pages/analytics/Analytics';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='analytics' element={<Analytics />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
