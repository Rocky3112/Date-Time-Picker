import React, { useState } from 'react'
import {faqData} from '../demoDB/date'

const FaqSection = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className='lg:py-16 py-8 px-4 lg:w-2/3 lg:mx-auto'>
            <div className='text-center pb-5'>
                <h2 className='text-4xl text-[#212121] font-bold pb-2'>Frequently Asked Questions(FAQ)</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate repellendus</p>
            </div>
            <div className="rounded-lg font-sans">
                {faqData.map((data, idx) => (
                    <div key={idx} className="border-b border-gray-300 ">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between py-4 text-left font-medium text-black dark:text-white">
                            <span className="sm:text-lg lg:text-xl">{data.title}</span>
                            <span className="rounded-full p-2 ">
                                <svg className="ml-8 mr-7 shrink-0 fill-black dark:fill-white" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                </svg>
                            </span>
                        </button>
                        <div className={`grid overflow-hidden text-gray-800 transition-all duration-300 ease-in-out dark:text-gray-400 ${isOpen === idx ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden pr-4">{data.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqSection