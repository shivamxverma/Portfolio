import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineEye } from "react-icons/ai";

const Project = ({ name, description, image, techStack, projectDefine, github, live }) => {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-gray-100">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-600">{description}</p>

      {image && (
        <div className="relative w-full h-48 mt-4">
          <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      )}

      {/* Icons Section */}
      <ul className="flex gap-2 mt-4">
        {techStack.map((Tech, index) => (
          <li key={index} className="text-2xl">{Tech}</li>
        ))}
      </ul>

      {/* Data Section */}
      <ul className="mt-4">
        {projectDefine.map((d, i) => (
          <li key={i} className="text-gray-700">{d}</li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="mt-4 flex gap-4">
        {github && (
          <Link href={github} passHref>
            <Button asChild>
              <a target="_blank" rel="noopener noreferrer">
                <DiGithubBadge className="mr-2" /> View Code
              </a>
            </Button>
          </Link>
        )}
        {live && (
          <Link href={live} passHref>
            <Button asChild variant="outline">
              <a target="_blank" rel="noopener noreferrer">
                <AiOutlineEye className="mr-2" /> Live Demo
              </a>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
