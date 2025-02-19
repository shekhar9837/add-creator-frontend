'use client'
import React, { useEffect, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navItems = ["Solutions", "Features", "Pricing"]
  const [isMenu, setIsMenu] = useState(false)
  const menuRef  = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent)=>{
    const target = e.target as Node;
    if( menuRef.current && !menuRef.current.contains(target)){
      setIsMenu(false);
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])


  return (
    <nav className="fixed top-0 w-full z-50  backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-white">Adora</div>
        <div className="hidden md:flex gap-8 ">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <div>
            <button className="px-4 py-2 text-white">Sign in</button>
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>

          <button 
            className="md:hidden flex" 
            onClick={()=> setIsMenu(!isMenu)}
            aria-expanded={isMenu}
            aria-controls="mobile-menu"
          >
            {isMenu ?  <IoClose size={30} className="text-white"/>:
           <HiMenuAlt4 size={30} className="text-white"  /> 
          }
          </button>

        {isMenu && 
        <div 
        ref={menuRef}
          className="absolute top-12 right-4 rounded-md bg-neutral-900 h-fit w-[14rem] py-10 md:gap-8 gap-4 flex flex-col transition-all duration-300 ease-in-out"
          id="mobile-menu"
        >
          {navItems.map((item) => (
            <button
              key={item}
              className="text-gray-300 hover:text-white transition-colors"
              >
              {item}
            </button>
          ))}
          <div className="flex md:flex-row flex-col items-center">
            <button className="px-4 py-2 text-white">Sign in</button>
            <button className="px-4 py-2 w-fit md:w-md bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </div>
            }
      </div>
    </nav>
  );
};

export default Navbar;
