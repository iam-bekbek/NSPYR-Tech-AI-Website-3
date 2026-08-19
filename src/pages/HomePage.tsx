import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesGrid } from '../components/ServicesGrid';
import { DirectoryPreview } from '../components/DirectoryPreview';
import { IndustriesSection } from '../components/IndustriesSection';
import { TrustCompliance } from '../components/TrustCompliance';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="min-h-screen">
      <Hero />
      <ServicesGrid />
      <DirectoryPreview />
      <IndustriesSection />
      <TrustCompliance />
    </div>
  );
};
