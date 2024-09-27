import React from 'react'

export const Contact = () => {
  return (
    <section id='contact-us' className='flex min-h-[75vh] lg:min-h-[100dvh] my-[5%] mb-20 md:mb-10 lg:mb-5'>
        <div className="hidden lg:w-[40%] lg:flex justify-between flex-col bg-[url('/assets/robot-head.jpg')] bg-cover bg-no-repeat" >
            <div className='container mx-[5%] space-y-2 text-white font-medium text-xl pb-[10%] md:px-5 mt-auto justify-end'>
                <p>Email: info@robolytics.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 123 Technology Street, LLM Town, USA</p>
            </div>
        </div>
        <section className="bg-[url('/assets/robot-head.jpg')] bg-cover bg-no-repeat px-[5%] py-5 lg:bg-none lg:bg-transparent w-full lg:w-[60%]">
            <div className='container max-w-screen-md px-4 mx-auto flex flex-col md:flex-row'>
                <div className=''>
                    <h1 className='text-3xl md:text-5xl font-poppins font-[700] uppercase'> Contact</h1>
                    <h3 className='text-primary text-xl md:text-2xl font-poppins font-semibold uppercase my-3'>Reach out to us</h3>
                </div>
                <div className=''>
                    <span className='border-b-4 border-primary flex w-0'></span>
                    <p className='mt-8 text-lg opacity-75 font-montserrat font-medium'></p>
                </div>
            </div>
            <div className="container lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 hidden text-4xl tracking-tight font-extrabold text-center text-primary">Get in Touch</h2>
                {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary dark:text-gray-300">Your name</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know your name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@robolytics.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary sm:w-fit hover:bg-primary/80 focus:ring-4 focus:outline-none dark:focus:ring-primary-800">Send Message</button>
                </form>
            </div>
            <div className='container lg:hidden mx-[5%] space-y-2 text-primary font-medium text-sm sm:text-base pt-[10%] mt-auto justify-end'>
                <p>Email: info@robolytics.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 123 Technology Street, LLM Town, USA</p>
            </div>
        </section>
    </section>
  )
}
