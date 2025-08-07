import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJava, 
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaGripLines, 
  FaCode,
} from 'react-icons/fa';

const SkillCard = ({ title, skills, gradient, icons }) => {
  return (
    <motion.div
      className={`p-6 rounded-xl shadow-md border ${gradient} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        {title} <FaCode className="text-gray-600" />
      </h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            whileHover={{ x: 5 }}
          >
            {icons[index] && <span className="text-xl">{icons[index]}</span>}
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const TechnicalSkills = () => {
  const skillData = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'JavaScript'],
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-200 border-blue-100',
      icons: [<FaPython />, <FaJava />, <FaJsSquare />],
    },
    {
      title: 'Web Development',
      skills: ['React.js/Next.js', 'Node.js/Express.js', 'Docker'],
      gradient: 'bg-gradient-to-br from-green-50 to-green-200 border-green-100',
      icons: [<FaReact />, <FaNodeJs />, <FaDocker />],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL' , 'Redis'],
      gradient: 'bg-gradient-to-br from-purple-50 to-purple-200 border-purple-100',
      icons: [<FaDatabase />, <FaDatabase />, <FaDatabase />, <FaGripLines />, <FaDatabase />], // Placeholder for GraphQL
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white shadow-lg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              skills={skill.skills}
              gradient={skill.gradient}
              icons={skill.icons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;