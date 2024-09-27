import { ChartNoAxesCombined, Cog, Cpu, Scale } from 'lucide-react'
import React from 'react'
import WhyCard from './utils/why-card'

export const Whysection
 = () => {
  return (
    <section id='why-us' className="bg-[url('/assets/geo-data.png')] bg-no-repeat bg-cover">
    <div className="container mx-auto relative py-[5%] px-8 xl:px-4 min-h-screen" >
        <div className='flex flex-col justify-between lg:flex-row'>
            <div className='lg:w-[30%]'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-poppins font-[700] uppercase'> Why choose Robolytics llc?</h1>
                <h3 className='text-primary text-lg sm:text-xl md:text-2xl font-poppins font-semibold uppercase my-3'>Our approach</h3>
            </div>
            <div className='lg:w-[60%]'>
                <span className='border-b-4 border-primary flex w-10 md:w-16'></span>
                <p className='mt-8 text-lg opacity-75 font-montserrat font-medium'></p>
                <div className='flex flex-col gap-8'>
                    <WhyCard 
                        icon={<Cpu size={80} className='w-48' strokeWidth={1} />}
                        header='Expert Integration'
                        text='With extensive experience in LLM integration across various cloud platforms, we provide a smooth transition from traditional processes to advanced AI-driven workflows.'
                        classname=''
                    />
                    <WhyCard 
                        icon={<Cog size={80} className='w-48' strokeWidth={1} />}
                        header='Customized Optimization'
                        text='Our proprietary frameworks allow us to shrink LLM models to fit specific domains, making them more efficient and cost-effective without compromising performance.'
                        classname='lg:ml-auto'
                    />
                    <WhyCard 
                        icon={<ChartNoAxesCombined size={80} className='w-48' strokeWidth={1} />}
                        header='Enhanced Performance'
                        text='By focusing on domain-specific optimization, our models deliver faster response times and better accuracy, enabling your enterprise to operate at peak efficiency.'
                        classname=''
                    />
                    <WhyCard 
                        icon={<Scale size={80} className='w-48' strokeWidth={1} />}
                        header='Scalable Solutions'
                        text='Whether you`re looking to deploy a single model or a large-scale AI infrastructure Robolytics LLC has the expertise and resources to meet your needs.
                        Transform your business with the power of AI. Contact Robolytics LLC today to learn how we can help you integrate cutting-edge LLM technology into your enterprise cloud environment.'
                        classname='lg:ml-auto'
                    />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
