// src/Sidebar.jsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { sidebarItems } from './data';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 text-gray-900 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-44'
        } w-56 shadow-lg flex flex-col`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 absolute top-2 right-2"
        >
          {isOpen ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
        </button>
        <h2 className="text-2xl font-bold mb-6 mt-10 pl-4">Sidebar</h2>
        <div className="flex-1 overflow-y-auto pl-4 pr-2 sidebar-content">
          <ul>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
