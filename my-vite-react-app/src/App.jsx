// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <Sidebar/>
    </div>
  );
}

export default App;
