"use client";
import React, { useEffect, useState } from "react";

export default function page({params}) {
const {id} = params;

const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const filter = data.filter(item => item.id == id)
        setData(filter[0]);
        console.log(filter[0])
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
    { data && 
        <div>
      <h1 className="text-3xl font-bold mb-4 text-center">{data.name}</h1>
      {/* Image gallery */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <img
            src={data?.image[0]}
            alt={data?.name}
            className="w-full h-56 object-cover"
            />
      </div>

      {/* Details */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <p className="text-lg">{data.description}</p>
        <div className="flex flex-wrap gap-4">
          <span className="px-3 py-1 bg-gray-100 rounded-full">Bedrooms: {data.bedrooms}</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">Rating: {data.rating}</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">${data.price} / night</span>
          <span className={`px-3 py-1 rounded-full ${data.free_cancel ? 'bg-green-100' : 'bg-red-100'}`}>{data.free_cancel ? 'Free cancellation' : 'No free cancellation'}</span>
        </div>

        {/* Rooms Available */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Rooms Available</h2>
          <ul className="list-disc list-inside">
            {data.roomsAvailable.map((room, idx) => (
              <li key={idx}>{room}</li>
            ))}
          </ul>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {data.amenities.map((amenity, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 rounded-full">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
    }
    </div>
  )
}

