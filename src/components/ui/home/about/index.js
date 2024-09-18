import Image from 'next/image'
import React from 'react'

export const AboutSection = () => {
  return (
    <section id='about' className="bg-[url('/assets/geo-data.png')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto flex flex-col relative py-[5%] px-8 lg:px-0 min-h-screen">
          <div className='absolute top-[5%] left-0 space-y-5'>
            <span className='text-8xl font-[900] tracking-[0.15em] opacity-5'>ROBOLYTICS</span>
            <h2 className="text-6xl font-[700] font-poppins tracking-wide">FUTURE IS NOW</h2>
            <h2 className='text-primary text-xl font-bold uppercase w-fit'><span className='border-b-4 border-primary pb-5'>About</span> Robolytics</h2>
          </div>
          <div className='mt-auto pt-[10%] flex flex-col md:flex-row justify-between space-y-3'>
            <div className='md:w-[35%]'>
              <p className='font-medium'>At Robolytics LLC, we are dedicated to transforming the way businesses leverage artificial intelligence. Specializing in the integration of large language models (LLMs) with leading enterprise cloud platforms such as Oracle, Google Cloud, Microsoft Azure, and AWS, we help organizations harness the power of advanced AI to improve automation, decision-making, and overall operational efficiency. 
              </p>
              <Image 
                src='/assets/space.jpg' 
                height={0} 
                width={900}
                className="md:h-60 w-full mt-5"
              />
            </div>
            <p className='font-medium md:w-[35%] bg-white/20 p-5 rounded backdrop-blur-sm'>
            Our team of engineers and data scientists works closely with clients to create customized AI solutions tailored to their specific needs, ensuring seamless integration and optimal performance.
            Robolytics LLC stands out with proprietary frameworks that allow us to optimize LLMs for specific domains, significantly reducing costs and enhancing system performance. Additionally, our expertise extends to robotics, where we integrate cutting-edge technologies from Boston Dynamics and Clearpath Robotics with advanced multimodal navigation systems.
            With a focus on precision, scalability, and innovation, we are committed to helping businesses unlock the full potential of AI.
            </p>
          </div>
        </div>
    </section>
  )
}
