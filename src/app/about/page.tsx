import AboutHero from '@/components/AboutHero';
import FAQ from '@/components/FAQ';
import WeAre from '@/components/WeAre';
import WhoWeAre from '@/components/WhoWeAre';
import React from 'react'


function AboutPage() {
  return (
    <div className='w-full'>
        <AboutHero />
        <WeAre />
        <WhoWeAre />
        <FAQ />
    </div>
  )
}

export default AboutPage;