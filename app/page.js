'use client';
import Image from "next/image";
import React from "react";
import Link from 'next/link';
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Technical } from "@/components/technical";
import Project from "@/components/project";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import CompetiveProgramming from '@/components/competitiveprogramming';
import Contact from "@/components/contact";

const projects = [
  {
    name: "Devbytes Medium Application",
    description: "A secure and scalable payment exchange platform built with modern technologies.",
    techStack: ["Nextjs", "Reactjs", "MonoRepo", "Prisma", "Postgres"],
    projectDefine: ["➢ Feature 1", "➢ Feature 2", "➢ Feature 3"],
    image: "", 
    github: "https://github.com/shivamxverma/devbytes",
    live: "https://devbytes.live",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <Button onClick={() => router.push('/edit')}>Edit</Button>
        {/* Uncomment and structure this as a proper nav */}
        {/* 
          Shivam Kumar Verma
          About | Skills | Achievements | CodeLab | Blog | Contact | Resume 
        */}
      </div>

      <div className="intro">
        <h1>FullStack Developer</h1>
        <p>Building Interesting Websites and Solving Real-World Problems</p>
        <div>
          <Button>Get in Touch</Button>
          <Button>View Projects</Button>
        </div>
        <div className="social-links">
          <Link href="https://www.linkedin.com/in/shivamv99/"><IoLogoLinkedin /></Link>
          <Link href="https://github.com/shivamxverma"><DiGithubBadge /></Link>
          <Link href="https://x.com/Shivam_v99"><AiFillTwitterCircle /></Link>
        </div>

        <div>
          <h1>About Me</h1>
          <p>Passionate about building scalable full-stack applications and solving complex algorithmic challenges.</p>
          <div>
            <h3>Education</h3>
            <p>Indian Institute of Information Technology Nagpur</p>
            <p>Bachelor of Technology in Computer Science</p>
            <div>
              <strong>Relevant Coursework:</strong>
              <ul>
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Computer Networks</li>
                <li>Object-Oriented Programming</li>
                <li>Operating Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>Technical Skills</h2>
          <Technical title="Languages" skills={["Python", "C/C++", "JavaScript/TypeScript"]} />
          <Technical title="Web Development" skills={["Reactjs/Nextjs", "Node.js/Express.js", "Docker/Kubernetes"]} />
          <Technical title="Databases" skills={["PostgreSQL", "MongoDB", "MySQL", "GraphQL", "Vector SQL"]} />
        </div>

        <div>
          <h1>Featured Projects</h1>
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              image={project.image} 
              projectDefine={project.projectDefine}
              techStack={project.techStack}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
        <div>
          <h1>Competitive Programming</h1>
          <p>Track record of solving complex algorithmic challenges</p>
          <CompetiveProgramming/>
          <Contact/>
        </div>
      </div>
    </>
  );
}