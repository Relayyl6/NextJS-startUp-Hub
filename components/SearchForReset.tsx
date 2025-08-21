"use client"
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HamburgerProps {
  isOpen: boolean;          // Your useState boolean
  size?: number;            // Size in pixels (default: 24)
  strokeWidth?: number;     // Line thickness (default: 2)
  color?: string;           // Line color (default: 'currentColor')
  className?: string;       // Additional CSS classes
  animationDuration?: string; // Animation speed (default: '0.3s')
}

export const AnimatedHamburgerMenu = ({
  isOpen,
  size = 24,
  color = 'currentColor',
  className = '',
  animationDuration = '0.3s'
}: HamburgerProps ) => {
  return (
    <div 
        className={`relative cursor-pointer ${className}`} 
        style={{ width: size, height: size }}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) form.reset();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const history = [];

  return (
    <>
      <button
        className='size-[50px] rounded-full bg-black text-white flex justify-center items-center !important'
        aria-label="Reset search form"
        onClick={handleReset} type="reset">
            <Link href="/">
              <X className="size-5"/>
            </Link>
      </button>
      <button
          className='size-[50px] rounded-full bg-black text-white flex justify-center items-center !important'
          aria-label="Reset search form"
          onClick={toggleMenu} type="button">
              <AnimatedHamburgerMenu
                  isOpen={isMenuOpen}
                  size={28}
                  color='#ffffff'
              />
      </button>

      {
        isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="absolute p-8 rounded-lg max-w-sm w-full mx-4 bg-white">
              <div className="gap-4 flex justify-around ">
                <h3 className="text-xl font-bold">Mobile Search History</h3>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute top-7.5 right-8 size-[35px] bg-black text-white rounded-full flex items-center justify-center hover:bg-black/30 transition-all duration-800">
                  <AnimatedHamburgerMenu
                    isOpen={true}
                    size={19}
                    color='#ffffff'
                  />
                </button>
              </div>
              <p className="mb-6">This is the search menu to recall prior searches</p>
              {/* {
                <ul>

                </ul>
              } */}
            </div>
          </div>
        )
      }
    </>
  )
}

export default SearchForReset