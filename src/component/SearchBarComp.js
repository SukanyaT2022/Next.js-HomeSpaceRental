// import React from 'react'
// import Search from '../icons/Search'

// const SearchBarComp = () => {
//   return (
//     <div className='mainSearBar'>
//         {/* Destination */}
//         <div className='destination'>
//           <select>
//             <option>NY</option>
//             <option>NY</option>
//             <option>NY</option>
//             <option>NY</option>
//           </select>
//         </div>

//         {/* Checkin */}
//         <div className='checkin'>
//           <input type='date'/>
//         </div>

//         {/* Checkout */}
//         <div className='checkout'>
//           <input type='date'/>
//         </div>

//         {/* How many */}
//         <div className='guest'>
//           <input type='date'/>
//         </div>

//         {/* Search Icon */}
//         <div>
//           <Search width="30" color="orange"/>
//           <button>Search</button>
//         </div>
//     </div>
//   )
// }

// export default SearchBarComp


"use client";

import React, { useState } from 'react';
import { Calendar, Search, MapPin, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchBarComp = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchFocus, setSearchFocus] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  
  const handleSearchClick = (section) => {
    setIsExpanded(true);
    setSearchFocus(section);
  };
  
  const handleClose = () => {
    setIsExpanded(false);
    setSearchFocus(null);
  };

  const formatDate = (date) => {
    if (!date) return "Add dates";
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
    // If checkout date is before check-in date, reset it
    if (checkOutDate && date > checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-4 px-4 sm:px-0">
      {/* Main search bar */}
      <div className={`bg-white rounded-full border-0 sm:border border-gray-200 shadow-none sm:shadow-md flex flex-col sm:flex-row items-center justify-between transition-all ${isExpanded ? 'rounded-b-none' : ''}`}>
        {/* Where */}
        <div
          className={`relative w-full sm:flex-1 p-3 cursor-pointer rounded-full ${searchFocus === 'where' ? 'bg-gray-100' : ''}`}
          onClick={() => handleSearchClick('where')}
        >
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Where</p>
              <p className="text-sm text-gray-500">Search destinations</p>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
        
        {/* Check-in */}
        <div
          className={`relative w-full sm:flex-1 p-3 cursor-pointer rounded-full ${searchFocus === 'checkin' ? 'bg-gray-100' : ''}`}
          onClick={() => handleSearchClick('checkin')}
        >
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Check in</p>
              <p className="text-sm text-gray-500">{formatDate(checkInDate)}</p>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
        
        {/* Check-out */}
        <div
          className={`relative w-full sm:flex-1 p-3 cursor-pointer rounded-full ${searchFocus === 'checkout' ? 'bg-gray-100' : ''}`}
          onClick={() => handleSearchClick('checkout')}
        >
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Check out</p>
              <p className="text-sm text-gray-500">{formatDate(checkOutDate)}</p>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block h-8 w-px bg-gray-300"></div>
        
        {/* Who */}
        <div
          className={`relative w-full sm:flex-1 p-3 cursor-pointer rounded-full ${searchFocus === 'who' ? 'bg-gray-100' : ''}`}
          onClick={() => handleSearchClick('who')}
        >
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <Users size={20} />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-medium">Who</p>
              <p className="text-sm text-gray-500">Add guests</p>
            </div>
          </div>
        </div>
        
        {/* Search button */}
        <div className="w-full sm:w-auto p-2 sm:pr-3">
          <button className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full flex items-center justify-center transition">
            <Search size={18} />
            <span className="ml-2 font-medium">Search</span>
          </button>
        </div>
      </div>
      
      {/* Expanded search content */}
      {isExpanded && (
        <div className="bg-white p-4 sm:p-6 rounded-[20px] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-x border-b border-gray-200 mt-12">
          {searchFocus === 'where' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Where do you want to go?</h3>
              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <Search size={20} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search destinations" 
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                  <div className="h-20 sm:h-24 bg-gray-200"></div>
                  <p className="mt-2 font-medium">New York</p>
                </div>
                <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                  <div className="h-20 sm:h-24 bg-gray-200"></div>
                  <p className="mt-2 font-medium">Los Angeles</p>
                </div>
                <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                  <div className="h-20 sm:h-24 bg-gray-200"></div>
                  <p className="mt-2 font-medium">Miami</p>
                </div>
                <div className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                  <div className="h-20 sm:h-24 bg-gray-200"></div>
                  <p className="mt-2 font-medium">Chicago</p>
                </div>
              </div>
            </div>
          )}
          
          {searchFocus === 'checkin' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">When's your trip?</h3>
              <div className="datepicker-container overflow-x-auto">
                <DatePicker
                  selected={checkInDate}
                  onChange={handleCheckInDateChange}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  monthsShown={window.innerWidth < 640 ? 1 : 2}
                  inline
                  calendarClassName="custom-calendar"
                  dayClassName={(date) => 
                    (checkInDate && date.getTime() === checkInDate.getTime()) ? "bg-rose-500 text-white rounded-full" : undefined
                  }
                />
              </div>
              <div className="mt-4">
                <button 
                  className="text-rose-500 font-medium"
                  onClick={() => {
                    setSearchFocus('checkout');
                    if (!checkInDate) {
                      setCheckInDate(new Date());
                    }
                  }}
                >
                  {checkInDate ? 'Next: Add your checkout date' : 'Skip to checkout date'}
                </button>
              </div>
            </div>
          )}
          
          {searchFocus === 'checkout' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">When do you plan to leave?</h3>
              <div className="datepicker-container overflow-x-auto">
                <DatePicker
                  selected={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  selectsEnd
                  startDate={checkInDate || new Date()}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  monthsShown={window.innerWidth < 640 ? 1 : 2}
                  inline
                  calendarClassName="custom-calendar"
                  dayClassName={(date) => {
                    if (checkInDate && date.getTime() === checkInDate.getTime()) {
                      return "bg-rose-500 text-white rounded-full";
                    }
                    if (checkOutDate && date.getTime() === checkOutDate.getTime()) {
                      return "bg-rose-500 text-white rounded-full";
                    }
                    if (checkInDate && checkOutDate && 
                        date > checkInDate && date < checkOutDate) {
                      return "bg-rose-100 rounded-none";
                    }
                    return undefined;
                  }}
                />
              </div>
            </div>
          )}
          
          {searchFocus === 'who' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Who's coming?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-sm text-gray-500">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">-</button>
                    <span className="w-6 text-center">0</span>
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <p className="font-medium">Children</p>
                    <p className="text-sm text-gray-500">Ages 2-12</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">-</button>
                    <span className="w-6 text-center">0</span>
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">+</button>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Infants</p>
                    <p className="text-sm text-gray-500">Under 2</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">-</button>
                    <span className="w-6 text-center">0</span>
                    <button className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500">+</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
            <button 
              onClick={handleClose}
              className="text-gray-800 underline font-medium"
            >
              Clear all
            </button>
            <button 
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Custom styles for the calendar */}
      <style jsx global>{`
        .custom-calendar {
          width: 100%;
          border: none !important;
          font-family: inherit;
        }
        
        .react-datepicker__month-container {
          float: left;
          width: 100%;
        }
        
        @media (min-width: 640px) {
          .react-datepicker__month-container {
            width: 50%;
          }
        }
        
        .react-datepicker__day {
          border-radius: 50%;
          margin: 0.2rem;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
        }
        
        @media (min-width: 640px) {
          .react-datepicker__day {
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5rem;
          }
        }
        
        .react-datepicker__day:hover {
          background-color: #f0f0f0;
          border-radius: 50%;
        }
        
        .react-datepicker__day--in-selecting-range,
        .react-datepicker__day--in-range {
          background-color: rgba(244, 63, 94, 0.1) !important;
          border-radius: 0 !important;
          color: #black !important;
        }
        
        .react-datepicker__header {
          background-color: white;
          border-bottom: none;
        }
        
        .react-datepicker__navigation {
          top: 1rem;
        }
        
        .react-datepicker__day-name {
          margin: 0.2rem;
          width: 2rem;
        }
        
        @media (min-width: 640px) {
          .react-datepicker__day-name {
            width: 2.5rem;
          }
        }
        
        .react-datepicker__current-month {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default SearchBarComp;