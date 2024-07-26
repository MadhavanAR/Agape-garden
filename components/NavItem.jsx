import React from 'react';

function NavItem({ text, isActive, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded ${isActive ? 'bg-pink-500 text-white' : 'bg-transparent text-black'} hover:bg-pink-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default NavItem;
