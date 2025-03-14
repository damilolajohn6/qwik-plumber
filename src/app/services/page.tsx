import Categories from '@/components/Categories'
import ServiceHero from '@/components/ServiceHero'
import Services from '@/components/Services'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
        <ServiceHero />
        <Services />
        <WhoWeAre />
        <Categories />
    </div>
  )
}

export default ServicePage