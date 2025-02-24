import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs'; 

const projects = [
  {
    name: "AI Short Video Generator",
    description: "An AI-powered short video generation platform that automates content creation and streamlines video production workflows.",
    techStack: ["Next.js", "React", "OpenAI GPT-4",],
    projectDefine: [
      "➢ Automated text-to-video pipeline with dynamic GPT-4 scripts",
      "➢ AI-driven voiceovers and auto-generated subtitles",
      "➢ Optimized rendering reducing processing time by 40%",
      "➢ Secure payment processing with real-time transaction tracking",
      "➢ Fully automated system for efficient video creation",
    ],
    image: "/shivam.jpg", // Add path to screenshot if available (e.g., "/ai-video-gen-screenshot.jpg")
    github: "https://github.com/shivamxverma/snap-cut",
    live: "https://github.com/shivamxverma/snap-cut",
  },
  {
    name: "Todoist",
    description: "A scalable task management application designed for efficient productivity tracking and user engagement.",
    techStack: ["Next.js", "React", "PostgreSQL", "Prisma"],
    projectDefine: [
      "➢ User authentication with role-based access control",
      "➢ Full CRUD operations with normalized database",
      "➢ Efficiency tracking system for daily productivity",
      "➢ Responsive and interactive UI design",
      "➢ Scalable database operations with Prisma ORM",
    ],
    image: "/shivam.jpg", // Add path to screenshot if available (e.g., "/scalable-todo-screenshot.jpg")
    github: "https://github.com/shivamxverma/ScalableTodo",
    live: "https://github.com/shivamxverma/ScalableTodo"
  },
  {
    name: "Devbytes Medium Application",
    description: "A secure and scalabl blog application built with modern technologies.",
    techStack: ["Next.js", "React.js", "MonoRepo", "Prisma", "Postgres"],
    projectDefine: [
      "➢ User Can Create Blog Application",
      "➢ User authentication",
      "➢ User Can Generate Blog with AI",
    ],
    image: "/shivam.jpg", // Existing placeholder
    github: "https://github.com/shivamxverma/DevBytes-medium",
    live: "https://github.com/shivamxverma/DevBytes-medium",
  },
];

const Project = ({ name, description, image, projectDefine, techStack, github, live }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      {image ? (
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700">Features:</h4>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {projectDefine.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href={github} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
          <FaGithub className="mr-1" /> GitHub
        </Link>
        {/* <Link href={live} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
          <BsGlobe className="mr-1" /> Live
        </Link> */}
      </div>
    </div>
  );
};

const ProjectsSection = () => { 
  return (
    <section className="projects bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default ProjectsSection;