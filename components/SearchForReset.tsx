"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  isOpen: boolean;          // Your useState boolean
  onClick: () => void;      // Toggle function
  size?: number;            // Size in pixels (default: 24)
  strokeWidth?: number;     // Line thickness (default: 2)
  color?: string;           // Line color (default: 'currentColor')
  className?: string;       // Additional CSS classes
  animationDuration?: string; // Animation speed (default: '0.3s')
}

const AnimatedHamburgerMenu = ({
  isOpen,
  onClick,
  size = 24,
  color = 'currentColor',
  className = '',
  animationDuration = '0.3s'
}: Props ) => {
  return (
    <div 
        className={`relative cursor-pointer ${className}`} 
        style={{ width: size, height: size }}
        onClick={onClick}
        aria-label="Toggle menu">
      {/* Top line */}
      <span
        className="absolute left-0 block h-0.5 bg-current transform transition-all origin-center"
        style={{
          width: size,
          top: size * 0.25,
          transitionDuration: animationDuration,
          transform: isOpen
            ? `translateY(${size * 0.25}px) rotate(45deg)`
            : 'translateY(0) rotate(0)',
          backgroundColor: color
        }}
      />
      {/* Middle line */}
      <span
        className="absolute left-0 block h-0.5 bg-current transition-all"
        style={{
          width: size,
          top: size * 0.5,
          transitionDuration: animationDuration,
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          backgroundColor: color
        }}
      />
      {/* Bottom line */}
      <span
        className="absolute left-0 block h-0.5 bg-current transform transition-all origin-center"
        style={{
          width: size,
          top: size * 0.75,
          transitionDuration: animationDuration,
          transform: isOpen 
            ? `translateY(-${size * 0.25}px) rotate(-45deg)` 
            : 'translateY(0) rotate(0)',
          backgroundColor: color
        }}
      />
    </div>
  );
};

const SearchForReset = () => {

const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleReset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) form.reset();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
        className='size-[50px] rounded-full bg-black text-white flex justify-center items-center !important'
        aria-label="Reset search form"
        onClick={handleReset} type="reset">
            <AnimatedHamburgerMenu
                isOpen={isMenuOpen}
                onClick={toggleMenu}
                size={28}
                color='#ffffff'
            />
    </button>
  )
}

export default SearchForReset