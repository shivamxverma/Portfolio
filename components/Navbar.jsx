'use client';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' }, // Added
    { name: 'Achievements', path: '#achievements' },
    { name: 'CodeLab', path: '#codelab' },
    { name: 'Blog', path: '#blog' },
    { name: 'Competitive Programming', path: '#competitive-programming' }, // Added
    { name: 'Contact', path: '#contact' },
    { name: 'Resume', path: '/Shivam_Resume_SDE.pdf', isDownload: true },
  ];

  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/profile.jpeg" // Replace with your actual image path
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold hover:text-yellow-300 transition-colors">
                Shivam Kumar Verma
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isDownload ? (
                <a
                  key={item.name}
                  href={item.path}
                  download="Shivam_Resume_SDE.pdf"
                  className="text-white hover:text-yellow-300 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-yellow-300 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-yellow-300 focus:outline-none"
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
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white text-gray-900`}>
          <div className="flex flex-col space-y-4 py-4 px-4">
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
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;