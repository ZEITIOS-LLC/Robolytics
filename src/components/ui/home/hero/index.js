import React from 'react'

export const HeroSection = () => {
  return (
    <section id='home' className="section-hero">
        <div className="container py-[5%] px-8 lg:px-16 flex min-h-[90vh] h-full">
            <div className='mt-auto md:w-[70%] space-y-5'>
                <h2 className='uppercase text-lg sm:text-xl md:text-2xl text-primary font-[700]'>Robotics & Technology</h2>
                <h1 className='uppercase tracking-wide text-4xl sm:text-6xl md:text-8xl font-[800]'>We <span className='text-primary'>create</span> the future</h1>
                <p className='text-sm sm:text-base md:text-lg'>Robolytics LLC stands out with proprietary frameworks that allow us to optimize LLMs for specific domains, significantly reducing costs and enhancing system performance.</p>
            </div>
            <div></div>
        </div>
    </section>
  )
}
