import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs'; 

const projects = [
  {
    name: "CodeSM",
    description:
      "A role-based coding platform that stores problems in AWS and runs submissions inside isolated Docker containers.",
    techStack: ["Node.js", "React.js", "MongoDB", "AWS", "Docker"],
    projectDefine: [
      "➢ Developed a role-based system to author and store 12 coding problems in AWS buckets, organizing input test cases as text files in structured folders.",
      "➢ Enabled 6 users to solve problems, with isolated Docker containers handling code execution.",
      "➢ Designed user profiles using the Shadcn UI library, displaying details and avatars for 4 active users, maintaining daily coding-streak.",
      "➢ Implemented rate limiting to curb abuse, reducing failed requests and ensuring high availability.",
    ],
    image: "/codesm.png",          
    github: "https://github.com/shivamxverma/codesm",
    live: "https://code-sm.vercel.app/",
  },
  {
    name: "DeepDoc",
    description:
      "An AI-powered document-chat app that lets users query the contents of uploaded PDFs through Gemini-driven conversations.",
    techStack: ["Next.js", "Vercel Blob", "LangChain", "Gemini API", "Pinecone"],
    projectDefine: [
      "➢ Built a web app allowing users to upload and query content from 10 PDFs via a chatbot powered by Gemini API.",
      "➢ Leveraged LangChain to extract text and generate embeddings, storing vectors in Pinecone.",
      "➢ Developed a responsive Next.js frontend with Multer for secure uploads, supporting more than 4 concurrent users with minimal downtime.",
    ],
    image: "/deepdoc.png",
    github: "https://github.com/shivamxverma/DeepDoc",     
    live: "https://deep-doc-six.vercel.app/",
  },
  {
    name: "Chatterly",
    description:
      "A real-time group chat system featuring WebSockets, Redis caching, and persistent message storage.",
    techStack: ["Node.js", "React", "PostgreSQL", "Redis"],
    projectDefine: [
      "➢ Engineered a chat system supporting real-time group chats for up to 4 users via WebSockets.",
      "➢ Optimized Redis caching to reduce message-retrieval latency.",
      "➢ Integrated PostgreSQL to persistently store 150 messages and user data for 4 accounts, ensuring data integrity.",
      "➢ Crafted a responsive React frontend, improving UI responsiveness by 20% during active sessions.",
    ],
    image: "/chatterly.png",
    github: "https://github.com/shivamxverma/Chatterly",     
    live: "https://chatterly-olive.vercel.app/",
  },
  {
    name: "BookTicket",
    description:
      "A multi-role event-booking platform with secure payments, real-time dashboards, and analytics for hosts.",
    techStack: ["Flask", "React", "PostgreSQL (SQLAlchemy)"],
    projectDefine: [
      "➢ Built a platform where users can browse events, view sessions, and purchase tickets securely.",
      "➢ Designed RESTful Flask APIs with SQLAlchemy ORM to manage events, sessions, bookings, and role-based permissions, reducing boilerplate by 25%.",
      "➢ Implemented facilitator dashboard with real-time notifications and booking analytics, enabling hosts to monitor attendee counts and update session details.",
      "➢ Developed a responsive React UI that lets users track past and upcoming bookings while facilitators manage their events from any device.",
    ],
    image: "/bookticket.png",
    github: "https://github.com/shivamxverma/BookTicket",    
    live: "#",                                               
  },
  {
    name: "NoteStack",
    description:
      "A full-stack note-taking and bookmark manager with robust REST APIs, JWT authentication, and powerful search capabilities.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Render"],
    projectDefine: [
      "➢ Implemented JWT-secured user registration, login, and logout endpoints.",
      "➢ Built CRUD APIs for notes and bookmarks with text-search and tag-filtering capabilities.",
      "➢ Added favoriting and pagination, improving retrieval speed by 35%.",
      "➢ Deployed on Render with CI/CD pipelines and environment-based configuration.",
      "➢ Wrote end-to-end tests with Supertest, achieving >90% API coverage.",
    ],
    image: "/notestack.png",
    github: "https://github.com/shivamxverma/NoteStack",
    live: "https://notestack-o6b5.onrender.com/",
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