import React from 'react'

export const HeroSection = () => {
  return (
    <section id='home' className="section-hero">
        <div className="container py-[5%] px-8 lg:px-16 flex min-h-[90vh] h-full">
            <div className='mt-auto w-[70%] space-y-5'>
                <h2 className='uppercase text-2xl text-primary font-[700]'>Robotics & Technology</h2>
                <h1 className='uppercase tracking-wide text-8xl font-[800]'>We <span className='text-primary'>create</span> the future</h1>
                <p className='text-lg'>Vestibulum sollicitudin justo vitae leo euismod, eu laoreet diam lobortis. Cras massa risus, hendrerit vel risus sed, cursus fringilla massa. Aenean et finibus lacus. Vestibulum purus ante.</p>
            </div>
            <div></div>
        </div>
    </section>
  )
}
