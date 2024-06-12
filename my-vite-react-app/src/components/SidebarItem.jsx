// src/SidebarItem.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const SidebarItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="mb-2">
      <div
        className={`flex items-center p-2 rounded-md cursor-pointer mb-1 ${
          isExpanded ? 'bg-gray-200' : 'hover:bg-gray-200'
        }`}
        onClick={toggleExpand}
      >
        {item.childNode && item.childNode.length > 0 && (
          <span className="mr-2">
            {isExpanded ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
          </span>
        )}
        <a href="#" className="block text-gray-900">
          {item.name}
        </a>
      </div>
      {isExpanded && item.childNode && item.childNode.length > 0 && (
        <ul className="pl-4 border-l border-gray-300 ml-2">
          {item.childNode.map((child) => (
            <SidebarItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
