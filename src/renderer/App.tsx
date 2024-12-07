import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';

const Uuid = lazy(() => import('./utilities/Uuid'));
const Home = lazy(() => import('./utilities/Home'));
const JsonFormatter = lazy(() => import('./utilities/JsonFormatter'));
const Base64 = lazy(() => import('./utilities/Base64'));

export default function App() {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uuid" element={<Uuid />} />
          <Route path="/jsonformat" element={<JsonFormatter />} />
          <Route path="/base64" element={<Base64 />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
