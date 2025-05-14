import React from 'react';
import abuSimbel from '../Assets/AbuSimbel.jpg';
import cairoTower from'../Assets/CairoTower.jpg';
import egyptainMuseum from '../Assets/Egyptian Mueseum.jpg';
import luxorTower from '../Assets/LuxorTemple.jpg';
import makadi from '../Assets/Makadi.jpg';
import pyramids from '../Assets/Pyramids.jpg';
import superSafari from'../Assets/SuperSafari.jpg';
import valleyOfKings from '../Assets/ValleyOfKings.jpg';


const EgyptSection = () => {
  const items = [
    {
      id: 1,
      imgSrc: pyramids, // Add the correct image path
      title: 'Pyramids of Giza',
      location: 'Giza, Egypt',
      price: '200 EGP',
    },
    {
      id: 2,
      imgSrc: luxorTower,
      title: 'Luxor Temple',
      location: 'Luxor, Egypt',
      price: '150 EGP',
    },
    {
      id: 3,
      imgSrc: valleyOfKings,
      title: 'Valley of the Kings',
      location: 'Luxor, Egypt',
      price: '180 EGP',
    },
    {
      id: 4,
      imgSrc: abuSimbel,
      title: 'Abu Simbel Temples',
      location: 'Aswan, Egypt',
      price: '220 EGP',
    },
    {
      id: 5,
      imgSrc: egyptainMuseum,
      title: 'Egyptian Museum',
      location: 'Cairo, Egypt',
      price: '130 EGP',
    },
    {
      id: 6,
      imgSrc: makadi,
      title: 'Makadi Aqua Park',
      location: 'Hurghada, Egypt',
      price: '250 EGP',
    },
    {
      id: 7,
      imgSrc: cairoTower,
      title: 'Cairo Tower',
      location: 'Cairo, Egypt',
      price: '170 EGP',
    },
    {
      id: 8,
      imgSrc: superSafari,
      title: 'Super Safari',
      location: 'Hurghada Egypt, Egypt',
      price: '110 EGP',
    },
    // Add more items if needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Egypt</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-lg font-bold text-blue-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EgyptSection;
