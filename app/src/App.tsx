import React from 'react';

// React Router DOM
import { Route, Routes } from "react-router-dom";

// Components/Features
import Home from './Features/Home';
import ChannelSelection from './Features/ChannelSelection';
import Dashboard from './Features/Dashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channelselect" element={<ChannelSelection />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
