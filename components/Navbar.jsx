'use client'; 
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Achievements', path: '#achievements' },
    { name: 'CodeLab', path: '#codelab' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
    { name: 'Resume', path: '/Shivam_Resume_SDE.pdf' }, 
  ];

  return (
    <nav className="navbar bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Shivam Kumar Verma
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isDownload ? (
                <a
                  key={item.name}
                  href={item.path}
                  download="Shivam_Resume_SDE.pdf" 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:block">
            {/* Uncomment if you want the Edit button */}
            {/* <Button
              onClick={() => router.push('/app/edit')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Edit
            </Button> */}
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              item.isDownload ? (
                <a
                  key={item.name}
                  href={item.path}
                  download="Shivam_Resume_SDE.pdf"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* Uncomment if you want the Edit button in mobile view */}
            {/* <Button
              onClick={() => router.push('/app/edit')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
            >
              Edit
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;