import React from 'react';
import Image from 'next/image';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Introduction = () => {
  const skillCode = `const developer = {
  name: 'Shivam Kumar Verma',
  role: 'FullStack Developer',
  skills: ['Node.js', , 'PostgreSQL', 'React', 'Javascript'],
  currentProject: 'Building scalable web applications',
  funFact: 'Loves solving algorithmic puzzles!'
};`;

  const skillsList = [
    'JavaScript', 'React', 'Node.js', , 'Docker', 'AWS', , 'PostgreSQL'
  ];

  return (
    <section className="intro bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Flex container for photo and content */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Shivam Kumar Verma"
              width={200}
              height={200}
              className="rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300 object-cover"
              priority 
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-md">
              Crafting innovative web solutions and tackling real-world challenges with code.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-transform hover:scale-105">
                <Link href="mailto:shivam0xverma@gmail.com">Get in Touch</Link>
              </Button>
              <Button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-transform hover:scale-105">
                <Link href="https://github.com/shivamxverma" target="_blank" rel="noopener noreferrer">
                  View Projects
                </Link>
              </Button>
            </div>
            <div className="social-links flex justify-center md:justify-start gap-6">
              <Link href="https://www.linkedin.com/in/shivamv99/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <IoLogoLinkedin size={32} />
              </Link>
              <Link href="https://github.com/shivamxverma" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors" aria-label="GitHub">
                <DiGithubBadge size={32} />
              </Link>
              <Link href="https://x.com/Shivam_v99" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <AiFillTwitterCircle size={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* Grid for About Me and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Me Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-gray-700 mb-6">
              I’m a passionate developer who thrives on building scalable full-stack applications and solving complex problems with clean, efficient code.
            </p>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Education</h3>
              <p className="text-gray-700 font-semibold">Indian Institute of Information Technology Nagpur</p>
              <p className="text-gray-600 mb-4">B.Tech in Computer Science</p>
              <div>
                <strong className="text-gray-700">Key Courses:</strong>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Data Structures & Algorithms</li>
                  <li>Database Management Systems</li>
                  <li>Computer Networks</li>
                  <li>Object-Oriented Programming</li>
                  <li>Operating Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Card with Code */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Skills Snapshot
            </h2>
            {/* <div className="bg-gray-900 p-4 rounded-lg mb-6">
              <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ fontSize: '0.9rem' }}>
                {skillCode}
              </SyntaxHighlighter>
            </div> */}
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-110 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;