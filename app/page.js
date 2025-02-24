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
import CompetitiveProgramming from '@/components/competitiveprogramming';
import Contact from "@/components/contact";
import Introduction from '@/components/intro';
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/projectsection";
import TechnicalSkills from "@/components/technicalskill";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <Navbar />

      <main className="space-y-16">
        <section id="about">
          <Introduction />
        </section>
        <section id="skills">
          <TechnicalSkills />
        </section>

        {/* Achievements Section (Placeholder) */}
        {/* <section id="achievements" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Achievements
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A list of my notable achievements (coming soon).
            </p>
          </div>
        </section> */}

        {/* CodeLab Section (Placeholder) */}
        {/* <section id="codelab" className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              CodeLab
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              My coding experiments and snippets (coming soon).
            </p>
          </div>
        </section> */}

        {/* Blog Section (Placeholder) */}
        {/* <section id="blog" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              My latest blog posts (coming soon).
            </p>
          </div>
        </section> */}

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Competitive Programming Section */}
        <section id="competitive-programming" className="py-12 px-6 md:px-12 lg:px-24 bg-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Competitive Programming
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Track record of solving complex algorithmic challenges
            </p>
            <CompetitiveProgramming />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}