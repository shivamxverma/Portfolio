import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button"; // Assuming this is your Button component
import Link from 'next/link';

const Introduction = () => {
  return (
    <section className="intro bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Full-Stack Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Building Interesting Websites and Solving Real-World Problems
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Get in Touch
          </Button>
          <Button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md">
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="social-links flex justify-center gap-6 mb-12">
          <Link href="https://www.linkedin.com/in/shivamv99/" className="text-gray-700 hover:text-blue-600">
            <IoLogoLinkedin size={32} />
          </Link>
          <Link href="https://github.com/shivamxverma" className="text-gray-700 hover:text-gray-900">
            <DiGithubBadge size={32} />
          </Link>
          <Link href="https://x.com/Shivam_v99" className="text-gray-700 hover:text-blue-400">
            <AiFillTwitterCircle size={32} />
          </Link>
        </div>

        {/* About Me Section */}
        <div className="text-left bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-6">
            Passionate about building scalable full-stack applications and solving complex algorithmic challenges.
          </p>

          {/* Education */}
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
            <p className="text-gray-700 font-semibold">Indian Institute of Information Technology Nagpur</p>
            <p className="text-gray-600 mb-4">Bachelor of Technology in Computer Science</p>
            <div>
              <strong className="text-gray-700">Relevant Coursework:</strong>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Object-Oriented Programming</li>
                <li>Operating Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;