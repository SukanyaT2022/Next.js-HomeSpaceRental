"use client";
import React, { useEffect, useState } from "react";

const Allproducts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data &&
          data.map((item, idx) => (
            <a
            //which box that we crate id
              href={`/products/${item.id}`}
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>

                <div className="text-sm text-gray-700 space-y-1">
                  {/* <p>
                    <span className="font-medium">Bedrooms:</span>{" "}
                    {item.noBed}
                  </p> */}
                  
                <p>
                    {/* //if data,json s true show free cellation if false show no text */}
                    {item.free_cancel && "Free Cancellation"}
                  </p>
                  
                  <p>
                    <span className="font-medium">Price:</span>
                    ${item.price}
                  </p>

                  <p>
                  <span className="font-medium">City:</span>
                    {item.city}
                  </p>
                  
                  <p>
                    <span className="font-medium">Rating:</span> ⭐{" "}
                    {item.rating}
                  </p>
                
                </div>

                <div>
                  {/* <p className="font-medium text-gray-700">
                    Rooms Available: {item.roomsAvailable}
                  </p> */}
                  {/* <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                    <li>No of Bedroom: {item.bedrooms}</li>
                    <li>3 seater</li>
                    <li>Deluxe suite</li>
                  </ul> */}
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default Allproducts;
