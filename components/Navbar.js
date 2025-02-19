'use client'

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/constants/showcase";



export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav")) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-50">
      <div className="w-full px-5 md:max-w-[75vw] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="/logo.png" className="h-12" alt="Logo" />
        </a>
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-gray-500" /> : <Menu size={24} className="text-gray-500" />}
        </button>
        <ul className={`md:flex space-x-8 font-medium ${mobileMenuOpen ? "block" : "hidden"} md:block`}>
          {navLinks.map((navItem, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {navItem.submenu ? (
                <>
                  <div  className="flex items-center py-2 px-3 text-gray-900 cursor-pointer hover:bg-gray-100">
                    {navItem.label} 
                    <ChevronDown size={16} className="ml-2" />
                  </div>
                  <ul
                    className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md transition-all duration-300 transform scale-y-0 opacity-0 origin-top z-10 p-2 ${openDropdown === index ? "scale-y-100 opacity-100" : ""}`}
                  >
                    {navItem.submenu.map((sub, subIndex) => (
                      <li
                        key={subIndex}
                        className="relative"
                        onMouseEnter={() => setOpenSubDropdown(subIndex)}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        <a href={`/${navItem.label}/${sub.label}`} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                          <span className="w-[90%]">{sub.label}</span> 
                          {sub.subSubmenu && <ChevronDown size={14} />}
                        </a>
                        {sub.subSubmenu && (
                          <ul
                            className={`absolute left-full top-0 mt-0 ml-2 w-48 max-h-52 bg-white shadow-lg rounded-md transition-all duration-300 transform scale-y-0 opacity-0 origin-left z-10 p-2  overflow-y-auto ${openSubDropdown === subIndex ? "scale-y-100 opacity-100" : ""}`}
                          >
                            {sub.subSubmenu.map((subSub, subSubIndex) => (
                              <li key={subSubIndex}>
                                <a href={`/${navItem.label}/${subSub.label}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                  {subSub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={navItem.href} className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                  {navItem.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
