import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Check from './pages/Check';
import Home from './pages/Home';
import Question from './pages/Question';
import Report from './pages/Report';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Check />} />
            <Route path="/checkout" element={<Question />} />
            <Route path="/checkout" element={<Report />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
