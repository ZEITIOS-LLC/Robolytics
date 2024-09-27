import Image from 'next/image'
import React from 'react'

export const TeamSection = () => {
  return (
    <section id='the-team'>
        <div className="container mx-auto relative py-[5%] px-8 lg:px-6 min-h-screen" >
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='md:w-[30%]'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-poppins font-[700] uppercase'> Our Professionals</h1>
                    <h3 className='text-primary text-2xl font-poppins font-semibold uppercase my-3'>Meet Our Team</h3>
                </div>
                <div className='md:w-[60%]'>
                    <span className='border-b-4 border-primary flex w-16'></span>
                    <p className='mt-8 text-lg opacity-75 font-montserrat font-medium'></p>
                </div>
            </div>
            
            <div className='mt-10 flex flex-col gap-10 justify-between'>
                <div className='team-card rounded flex flex-col lg:flex-row justify-around border border-primary'>
                    <div className='relative lg:h-fit lg:w-2/5 border border-primary'>
                        <Image width={900} height={0} className='w-full h-full' src='/assets/iyanu-odebode.png' />
                        <p className='absolute bottom-0 left-0 bg-black text-base uppercase font-bold font-montserrat p-5'>Iyanuoluwa Odebode</p>
                    </div>
                    <p className='p-5 lg:w-3/5 bg-primary md:text-lg text-black'>Dr. Iyanuoluwa Odebode, a versatile entrepreneur with a PhD in Data Science from the University of Maryland, Baltimore County, specializes in Data Science, AI and system technologies in IoT. As an expert consultant, Dr. Odebode has supported numerous projects across government and industry sectors, leveraging his technical skills to address complex challenges. His contributions to developing advanced AI/ML solutions for public institutions underscore his ability to blend cutting-edge technology with practical applications, making him an invaluable asset to the proposed SBIR project.</p>
                </div>

                <div className='team-card rounded flex flex-col lg:flex-row justify-around border border-primary'>
                    <div className='relative border border-primary lg:w-2/5'>
                        <Image width={900} height={0} className='w-full h-full lg:min-h-fit' src='/assets/biplab.jpeg' />
                        <p className='absolute bottom-0 left-0 bg-black text-base uppercase font-montserrat font-semibold p-5'>Dr. Biplab Pal</p>
                    </div>
                    <p className='md:text-lg p-5 lg:w-3/5'>An accomplished entrepreneur and academic, brings over 24 years of experience in research and development of IoT, Optical, Acoustic and edge AI products. He holds a PhD in Electronics Engineering from the Indian Institute of Technology, Kharagpur. Dr. Pal has founded multiple companies, including Machinesense and Opteev Technologies (all in Baltimore, MD), which focus on smart sensor technology. As an Adjunct Associate Professor at the University of Maryland, Baltimore County, he is involved in pioneering research in AI IoT sensors and autonomy in military applications. He has extensive experience in research and development of sensors, opto-mechanical signal processing and simulation as demonstrated by his notable publications and 20+ US patents in this area. Dr. Pal’s significant product contributions include the development of several innovative IoT and edge AI products such as Virawarn, the world’s first viral load detection system, and Feverwarn, a commercially successful automated fever screening system. His work in developing cloud-based predictive maintenance systems for industrial applications has led to the deployment of IoT products in over 1,000 US factories.
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}
