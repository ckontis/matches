

import './App.css'
import MatchList from './MatchList'
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AloneMatch from './aloneMatch'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MatchList />} />
      <Route path="/match/:id" element={<AloneMatch />} />
    </Routes>
  );

}
export default App;
