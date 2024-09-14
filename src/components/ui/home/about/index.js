import React from 'react'

export const AboutSection = () => {
  return (
    <section id='about'>
        <div className="container flex flex-col relative py-[5%] px-8 lg:px-16 min-h-[90vh]">
          <span className='text-7xl font-[900] tracking-[0.2em] absolute top-[5%] right-0 opacity-20'>ROBOLYTICS</span>
          <div className='mt-auto space-y-3 lg:w-[75%]'>
            <h2 className='text-primary text-2xl font-bold uppercase'>About Us</h2>
            <p className='font-medium'>At Robolytics LLC, we are dedicated to transforming the way businesses leverage artificial intelligence. Specializing in the integration of large language models (LLMs) with leading enterprise cloud platforms such as Oracle, Google Cloud, Microsoft Azure, and AWS, we help organizations harness the power of advanced AI to improve automation, decision-making, and overall operational efficiency. 
            </p>
            <p className='text-lg font-medium'>
            Our team of engineers and data scientists works closely with clients to create customized AI solutions tailored to their specific needs, ensuring seamless integration and optimal performance.
            Robolytics LLC stands out with proprietary frameworks that allow us to optimize LLMs for specific domains, significantly reducing costs and enhancing system performance. Additionally, our expertise extends to robotics, where we integrate cutting-edge technologies from Boston Dynamics and Clearpath Robotics with advanced multimodal navigation systems.
            With a focus on precision, scalability, and innovation, we are committed to helping businesses unlock the full potential of AI.
            </p>
          </div>
        </div>
    </section>
  )
}
