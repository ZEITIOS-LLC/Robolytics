import React from 'react'

export const ServicesSection = () => {
  return (
    <section id='services' className="min-h-screen bg-[url('/assets/geo-data.png')] bg-no-repeat bg-cover bg-center">
        <div className="container flex flex-col space-y-4 relative py-[5%] px-8 lg:px-16">
            <div>
                <h2 className='text-primary text-2xl font-bold uppercase my-3'>Services</h2>
                <p className='text-lg font-medium'>At Robolytics LLC, we specialize in the seamless integration of large language models (LLMs) into leading enterprise cloud platforms such as Oracle, Google Cloud, Microsoft Azure, and AWS. Our expert team leverages advanced AI capabilities to help businesses unlock the full potential of their data, enhancing automation, decision-making, and overall operational efficiency.
                </p>
            </div>
            <div className='flex justify-between my-5'>
                <div className='w-[40%] border border-primary p-2 rounded flex flex-col space-y-2'>
                    <h2>LLM Integration Services</h2>
                    <p>
                        Our team of experienced engineers and data scientists works closely with your organization to integrate state-of-the-art LLMs into your cloud infrastructure. We ensure that the integration process is tailored to meet your unique business needs, offering end-to-end solutions that include model deployment, fine-tuning, and optimization.
                        Proprietary Frameworks for Optimized Performance
                        Robolytics LLC goes beyond standard integration. We have developed proprietary frameworks designed to adapt known LLM models to purpose-fitted domains, ensuring that the models are precisely aligned with your business requirements. This approach allows us to significantly reduce server costs and computational demands while delivering faster, more responsive AI solutions.
                    </p>
                </div>
                <div className='w-[40%] border border-primary p-2 rounded flex flex-col space-y-2'>
                    <h2>System Integration with Robots</h2>
                    <p>
                    The Robolytics team is skilled in integrating various sensory payloads with robots from Boston Dynamics and Clearpath Robotics. They have expertise in developing custom ROS (Robot Operating System) code for autonomous navigation. Their experience includes working with multimodal navigation systems utilizing optical EO, night vision IR cameras, and mm-wave radar technologies.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
