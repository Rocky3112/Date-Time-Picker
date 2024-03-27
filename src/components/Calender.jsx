import React, { useState } from 'react';
import { days } from '../demoDB/date'
import { FaUsers } from "react-icons/fa";
import { dummyName } from '../demoDB/date'
import { remindtime } from '../demoDB/date'
import RightsideElement from './RightsideElement';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    const currentDate =new Date()
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [pickerDate, setPickerDate] = useState(currentDate);
    const [selectedTime, setSelectedTime] = useState();
    const [selectedRemind, setSelectedRemind] = useState();
    const handleDateChange = date => {
        setSelectedDate(date);
        setPickerDate(date);
    };
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };
    const handleTimeRemined = (time) => {
        setSelectedRemind(time);
    };
    return (
        <div className='pt-20 lg:container lg:mx-auto lg:px-5 mx-3'>
            <div className='lg:flex gap-10'>
                <div className='lg:w-[70%] bg-white p-5 my-16 rounded-xl'>
                    {/* for Staff selection with Dropdown */}
                    <div className='border mb-10 flex justify-between lg:px-5 rounded px-3'>
                        <label htmlFor="names" className='flex items-center lg:w-40 lg:text-xl gap-2  w-44'><span className='text-green-500'><FaUsers /></span> Select Staff</label>
                        <select id="names" className='w-full py-4 px-6 cursor-pointer' >
                            {dummyName.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <div className='flex justify-between px-10 py-5'>
                            <h2 className='text-lg font-semibold'>Select a Date</h2>
                            <div className=''>
                            <DatePicker
                            selected={pickerDate}
                            onChange={handleDateChange}
                            dateFormat="d/MM/yyyy"
                            showIcon
                            className='cursor-pointer border rounded'
                        />
                            </div>
                        </div>
                        {/* for date selection */}
                        <div className="lg:flex justify-between gap-5 lg:mx-8  grid grid-cols-3">
                            {days.map((day, index) => (
                                <div
                                    key={index}
                                    className={`text-center border border-gray-300 px-3 py-1 rounded cursor-pointer ${selectedDate && selectedDate.getDate() === day.date ? 'bg-green-100 border-green-600' : ''}`}
                                    onClick={() => {
                                        const selectedDate = new Date(pickerDate);
                                        selectedDate.setDate(day.date);
                                        setSelectedDate(selectedDate);
                                        setPickerDate(selectedDate);
                                    }}
                                >
                                    <h2>{day.day}</h2>
                                    <h2 className='text-lg font-bold'>{day.date}</h2>
                                    <h2>{day.month}</h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold pb-4 pt-6'>Available Time Slots</h2>
                        {/* for Morning time */}
                        <h2 className='text-xl font-bold pb-5'>Morning</h2>
                        <div className="lg:flex gap-5 lg:mx-8 justify-between grid grid-cols-3">

                            {days.map((day, index) => (
                                <div key={index} className={`text-center border p-3 my-2 hover:bg-green-300 rounded hover:border-green-600 ${selectedTime === day.timeAM? 'bg-green-600 text-white' : ''}`}>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleTimeSelect(day.timeAM, day)}
                                        >
                                            {day?.timeAM}
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* for Afternoon time */}
                    <div>
                        <h2 className='text-xl font-bold py-5'>Afternoon</h2>
                        <div className="lg:flex gap-5 lg:mx-8 justify-between grid grid-cols-3">

                            {days.map((day, index) => (
                                <div key={index} className={`text-cente`}>

                                    <div className="flex gap-3">
                                        <button
                                            className={`text-center border p-3 my-2 hover:bg-green-300 rounded hover:border-green-600 ${selectedTime === day.timePM? 'bg-green-600 text-white' : ''}`}
                                            
                                            onClick={() => handleTimeSelect(day.timePM, day)}
                                        >
                                            {day.timePM}
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-xl font-bold py-5'>Afternoon</h2>
                            <div className="flex lg:gap-5 lg:mx-8 gap-3">

                                {remindtime.map((remindTime, index) => (
                                    <div key={index} className={`text-center `}>

                                        <div className="flex gap-3">
                                            <button
                                                className={`text-center border p-1 lg:w-12 lg:text-base text-sm bg-green-200 hover:bg-green-500 hover:text-white rounded-full border-gray-300 hover:border-green-600 ${selectedRemind === remindTime.t1 ? 'bg-green-600 text-white' : ''}`}
                                                onClick={() => handleTimeRemined(remindTime.t1)}
                                            >
                                                {remindTime.t1}
                                            </button>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold pt-5 pb-3'>Leave a note(Optional)</h2>
                        <textarea name="" id="" cols="30" rows="6" className='w-full border p-2' placeholder='Type Max 500 Characters'></textarea>
                    </div>
                </div>
                {/* Right side  */}
                <div className='lg:w-[30%]  bg-white p-5 my-16 rounded-xl'>
                    <RightsideElement handleDateChange={handleDateChange} pickerDate={pickerDate}
                        selectedTime={selectedTime} handleTimeSelect={handleTimeSelect} selectedRemind={selectedRemind}></RightsideElement>
                </div>
            </div>

        </div>
    );
};

export default Calendar;
