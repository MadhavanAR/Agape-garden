"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import EnquireButton from './EnquireButton';

const navItems = ['Home', 'About us', 'Features', 'Testimonial', 'Gallery'];

function Header() {
  const [activeNav, setActiveNav] = useState(null);

  return (
    <header className="sticky top-0 flex justify-center items-center self-stretch px-16 py-2 w-full text-xl font-medium leading-9 text-black bg-pink-50 bg-opacity-30 backdrop-blur-lg max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1136px] max-md:flex-wrap max-md:max-w-full">
        <Logo />
        <nav className="flex gap-0 items-start my-auto max-md:flex-wrap">
          <div className="flex flex-auto gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between my-auto max-md:flex-wrap">
              {navItems.map((item, index) => (
                <NavItem 
                  key={index} 
                  text={item} 
                  isActive={activeNav === index}
                  onClick={() => setActiveNav(index)}
                />
              ))}
            </div>
            <EnquireButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;


