import TruncateText from '@/app/utils/TruncateText'
import { BookmarkCheck, CloudUpload, Unplug } from 'lucide-react'
import React from 'react'

export const ServicesSection = () => {
  return (
    <section id='services' className="min-h-screen">
        <div className="container mx-auto flex flex-col relative py-[5%] px-4 lg:px-8">
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='md:w-[30%]'>
                    <h1 className='text-5xl font-poppins font-[700] uppercase'>Solution & focus area</h1>
                    <h3 className='text-primary text-2xl font-poppins font-semibold uppercase my-3'>Our services</h3>
                </div>
                <div className='md:w-[60%]'>
                    <span className='border-b-4 border-primary flex w-16'></span>
                    <p className='mt-8 text-lg opacity-75 font-montserrat font-medium'>At Robolytics LLC, we specialize in the seamless integration of large language models (LLMs) into leading enterprise cloud platforms such as Oracle, Google Cloud, Microsoft Azure, and AWS. Our expert team leverages advanced AI capabilities to help businesses unlock the full potential of their data, enhancing automation, decision-making, and overall operational efficiency.
                    </p>
                </div>
            </div>
            <div className='md:w-[60%] ml-auto flex flex-col py-[5%] md:flex-row gap-4 justify-around'>
                <div className='md:w-1/2 h-fit border space-y-4 border-gray-700 rounded p-6 md:p-10 hover:bg-[#777]/20'>
                    <CloudUpload strokeWidth={1} size={70} className='text-primary' />
                    <h2 className='text-2xl text-primary font-bold'>LLM Integration Services</h2>
                    <div className='text-lg opacity-70'>
                        <TruncateText
                            text="Our team of experienced engineers and data scientists works closely with your organization to integrate state-of-the-art LLMs into your cloud infrastructure. We ensure that the integration process is tailored to meet your unique business needs, offering end-to-end solutions that include model deployment, fine-tuning, and optimization.
                            Proprietary Frameworks for Optimized Performance
                            Robolytics LLC goes beyond standard integration. We have developed proprietary frameworks designed to adapt known LLM models to purpose-fitted domains, ensuring that the models are precisely aligned with your business requirements. This approach allows us to significantly reduce server costs and computational demands while delivering faster, more responsive AI solutions."
                            wordLimit={30} 
                        />
                    </div>
                </div>

                <div className='md:mt-[15%] md:w-1/2 h-fit border space-y-4 border-gray-700 rounded p-6 md:p-10 hover:bg-[#777]/20'>
                    <Unplug strokeWidth={1} size={70} className='text-primary' />
                    <h2 className='text-2xl font-montserrat text-primary font-bold'>System Integration with Robots</h2>
                    <div className='text-lg opacity-70'>
                        <TruncateText
                            text="The Robolytics team is skilled in integrating various sensory payloads with robots from Boston Dynamics and Clearpath Robotics. They have expertise in developing custom ROS (Robot Operating System) code for autonomous navigation. Their experience includes working with multimodal navigation systems utilizing optical EO, night vision IR cameras, and mm-wave radar technologies."
                            wordLimit={30} 
                        />
                    </div>
                </div>
                {/* <div className='md:w-[40%] bg-black border border-primary p-6 rounded-xl flex flex-col space-y-2'>
                    <BookmarkCheck size={40} />
                    <h2 className='text-xl font-medium'>LLM Integration Services</h2>
                    <p className=' opacity-70'>
                        Our team of experienced engineers and data scientists works closely with your organization to integrate state-of-the-art LLMs into your cloud infrastructure. We ensure that the integration process is tailored to meet your unique business needs, offering end-to-end solutions that include model deployment, fine-tuning, and optimization.
                        Proprietary Frameworks for Optimized Performance
                        Robolytics LLC goes beyond standard integration. We have developed proprietary frameworks designed to adapt known LLM models to purpose-fitted domains, ensuring that the models are precisely aligned with your business requirements. This approach allows us to significantly reduce server costs and computational demands while delivering faster, more responsive AI solutions.
                    </p>
                </div>
                <div className='md:w-[40%] bg-black border border-primary p-6 rounded-xl flex flex-col space-y-2'>
                    <BookmarkCheck size={40} />
                    <h2 className='text-xl font-medium'>System Integration with Robots</h2>
                    <p className=' opacity-70'>
                    The Robolytics team is skilled in integrating various sensory payloads with robots from Boston Dynamics and Clearpath Robotics. They have expertise in developing custom ROS (Robot Operating System) code for autonomous navigation. Their experience includes working with multimodal navigation systems utilizing optical EO, night vision IR cameras, and mm-wave radar technologies.
                    </p>
                </div> */}
            </div>
        </div>
    </section>
  )
}
