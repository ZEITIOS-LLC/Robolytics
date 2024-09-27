import React from 'react'

const WhyCard = ({icon, header, text, classname}) => {
  return (
    <div className={`${classname} why-card lg:w-[75%] flex gap-2 items-start`}>
        {icon}
        <div className='w-fit'>
            <h2 className='text-primary font-montserrat font-medium text-2xl md:text-3xl mb-2'>{header}</h2>
            <p className='text-white font-poppins text-base md:text-lg'>{text}</p>
        </div>
    </div>
  )
}

export default WhyCard