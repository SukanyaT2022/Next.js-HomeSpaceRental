"use client";
import React, { useEffect, useState } from 'react'
import Slider from '@/component/Slider'

const page = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/products') // Replace with your API endpoint
      .then((response) => response.json() )      
      .then((data) => {
        console.log(data)
        setData(data);
      })      
  }, []);
  return (
    <div className="bg-white flex justify-around flex-wrap rounded-2xl shadow-lg overflow-hidden mt-12">

  {/* Map starts here */}

  {data && data.map((item)=>(

<div>
  {/* <img src={item.image} alt="Cityscape Hotel" className="w-full h-48 object-cover" /> */}
    <Slider images = {item.image} />

  <div className="p-4 space-y-2">
    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
    <p className="text-sm text-gray-600">
     {item.description}
    </p>

    <div className="text-sm text-gray-700">
      <p><span className="font-semibold">Bedrooms:</span>{item.noBed}</p>
      <p><span className="font-semibold">Price:</span>{item.pricePerNight}</p>
      <p><span className="font-semibold">Rating:</span> ⭐ {item.rating}</p>
    </div>

    <div>
      <p className="font-semibold text-gray-700">Rooms Available:{item.roomsAvailable}</p>
      <ul className="list-disc ml-5 text-sm text-gray-600">
        <li>No of Bedroom: {item.bedrooms}</li>
        <li>3 seater</li>
        <li>deluxe suite</li>
      </ul>
    </div>

    {/* <div>
      <p className="font-semibold text-gray-700">Amenities:</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {['WiFi', 'Gym', 'Room Service'].map((amenity, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {amenity}
          </span>
        ))}
      </div>
    </div> */}

  </div>
    </div>
    ))}
  </div>
)}

export default page