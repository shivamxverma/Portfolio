'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import EngineeringTimeline from '@/components/EngineeringTimeline';
import FeaturedProjects from '@/components/FeaturedProjects';
import CompetitiveProgramming from '@/components/competitiveprogramming';
import TechnicalStack from '@/components/TechnicalStack';
import EngineeringBlog from '@/components/EngineeringBlog';
import Certificates from '@/components/Certificates';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <EngineeringTimeline />
        <FeaturedProjects />
        <CompetitiveProgramming />
        <TechnicalStack />
        <EngineeringBlog />
        <Certificates />
        <GitHubActivity />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
