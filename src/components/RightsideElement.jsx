import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import vector from '../images/Vector.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RightsideElement = ({handleDateChange, pickerDate,selectedRemind,selectedTime}) => {
  return (
    <div>
         <div className='flex items-center gap-5 mb-5'>
                        <img src="https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034957463?e=2147483647&v=beta&t=0SFHyDkPN7RGKIO0VEy33a6KrtluAN3aAvxkL2dbHSM" alt="" className='w-28 rounded-lg' />
                        <div>
                            <h1 className='text-2xl font-bold'>Jonathan Doe</h1>
                            <h3 className='py-2 flex items-center gap-2 text-sm font-semibold'><span className='text-green-500 text-xl'><FaLocationDot /></span> 125/12B, Frankfruit, Germany</h3>
                            <p className='flex items-center gap-2 font-bold'> <span className='text-yellow-400 text-xl'><FaStar /></span>4.8 <span className='text-green-500'>(87)</span></p>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <div className='flex items-center gap-3'>
                            <p className='p-3 rounded text-green-500 bg-gray-300 text-2xl'><FaRegStar /></p>
                            <h2 className='font-bold text-sm'>Servicing Wheels & Mechine (Including Carburator and all of these)</h2>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='p-3 rounded text-green-500 bg-gray-300 text-2xl'><FaRegStar /></p>
                            <div className="mb-4 font-bold w-fit p-2 mt-3 relative">
                                <DatePicker
                                    selected={pickerDate}
                                    onChange={handleDateChange}
                                    dateFormat="d/MM/yyyy"
                                    className='cursor-pointer'
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='p-3 rounded text-green-500 bg-gray-300 text-2xl'><FaRegStar /></p>
                            
                        {selectedTime ? (
                            <div className="font-bold text-center">
                                {selectedTime}
                            </div>
                        ) : (
                            <h2>12.00 AM</h2>
                        )
                        }
                    
                        </div>
                        <div className='flex items-center gap-3 pt-3'>
                            <p className='p-3 rounded text-green-500 bg-gray-300 text-2xl'><FaRegStar /></p>
                            
                        {selectedRemind ? (
                            <div className="font-bold text-center">
                                {selectedRemind}
                            </div>
                        ) : (
                            <h2>30 MIN</h2>
                        )
                        }
                    
                        </div>

                    </div>
                    <hr className='mx-5 border-[1.5px]' />
                    <div className='px-7 py-5'>
                        <h2 className='flex items-center justify-between'><span className='text-gray-600'>Price</span> <span className='font-bold'>$250</span></h2>
                        <h2 className='flex items-center justify-between py-2'><span className='text-gray-600'>Deposite Required</span> <span className='font-bold'>$250</span></h2>
                        <hr className='my-3 border-[1.5px]' />
                        <h2 className='flex items-center justify-between pb-5'><span className='text-gray-600'>Total</span> <span className='font-bold'>$270</span></h2>
                        <div className='flex items-center gap-2 bg-yellow-100 rounded-sm text-sm p-2'>
                            <img src={vector} alt="" />
                            <h3>Total price is $250, you have to pay the rest once order is complete at business.</h3>
                        </div>
                        <button className=' my-5 w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold'>Confirm & Pay</button>


                    </div>
                    <div>
                        <iframe
                            width="330"
                            height="210"
                            src="https://www.youtube.com/embed/rGgXrDKMyqM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
    </div>
  )
}

export default RightsideElement