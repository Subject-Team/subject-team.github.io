import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { ProjectsReel } from '@/components/sections/ProjectsReel';
import { SLibLab } from '@/components/sections/SLibLab';
import { ArchitectureMap } from '@/components/sections/ArchitectureMap';
import { TeamSection } from '@/components/sections/TeamSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <ProjectsReel />
        <SLibLab />
        <ArchitectureMap />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
