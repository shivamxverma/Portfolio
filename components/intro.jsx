import React from 'react';
import Image from 'next/image';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Introduction = () => {
  const skillCode = `function greet() {
  console.log("Hello, World!");
}
greet();`;

  return (
    <section className="intro bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Flex container for photo and content */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Photo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Content Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Full-Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Building Interesting Websites and Solving Real-World Problems
            </p>
            {/* Action Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-transform hover:scale-105">
                <Link href="shivamvofficial99@gmail.com">Get in Touch</Link>
              </Button>
              <Button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-transform hover:scale-105">
               <a href="https://github.com/shivamxverma" target="_blank" rel="noopener noreferrer">View Projects</a>
              </Button>
            </div>
            {/* Social Links */}
            <div className="social-links flex justify-center md:justify-start gap-6">
              <Link href="https://www.linkedin.com/in/shivamv99/" className="text-gray-700 hover:text-blue-600 transition-colors">
                <IoLogoLinkedin size={32} />
              </Link>
              <Link href="https://github.com/shivamxverma" className="text-gray-700 hover:text-gray-900 transition-colors">
                <DiGithubBadge size={32} />
              </Link>
              <Link href="https://x.com/Shivam_v99" className="text-gray-700 hover:text-blue-400 transition-colors">
                <AiFillTwitterCircle size={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* About Me, Skills, and Code Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Me Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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

          {/* Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'Python', 'Docker', 'AWS'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Code Block for Skills */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Code Snippet
          </h2>
          <div className="bg-gray-900 p-4 rounded-lg shadow-md">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {skillCode}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            My Great Code
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <script src="https://gist.github.com/shivamxverma"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;