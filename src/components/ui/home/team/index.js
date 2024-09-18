import Image from 'next/image'
import React from 'react'

export const TeamSection = () => {
  return (
    <section id='the-team'>
        <div className="container mx-auto relative py-[5%] px-8 lg:px-0 min-h-screen" >
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='md:w-[30%]'>
                    <h1 className='text-5xl font-poppins font-[700] uppercase'> Our Professionals</h1>
                    <h3 className='text-primary text-2xl font-poppins font-semibold uppercase my-3'>Meet Our Team</h3>
                </div>
                <div className='md:w-[60%]'>
                    <span className='border-b-4 border-primary flex w-16'></span>
                    <p className='mt-8 text-lg opacity-75 font-montserrat font-medium'></p>
                </div>
            </div>
            
            <div className='mt-10'>
                <div className='team-card flex justify-around border border-primary'>
                    <div className='relative w-1/4 h-fit'>
                        <Image width={900} height={0} className='w-full h-full' src='/assets/iyanu-odebode.png' />
                        <p className='absolute bottom-0 left-0 bg-black text-xl font-semibold font-montserrat p-4'>Iyanuoluwa Odebode</p>
                    </div>
                    <p className='w-2/4'>Dr. Iyanuoluwa Odebode, a versatile entrepreneur with a PhD in Data Science from the University of Maryland, Baltimore County, specializes in Data Science, AI and system technologies in IoT. As an expert consultant, Dr. Odebode has supported numerous projects across government and industry sectors, leveraging his technical skills to address complex challenges. His contributions to developing advanced AI/ML solutions for public institutions underscore his ability to blend cutting-edge technology with practical applications, making him an invaluable asset to the proposed SBIR project.</p>
                </div>
            </div>

        </div>
    </section>
  )
}
