import React from "react";

export default function Gallery() {
  const data = [
    {
      tittle: "Home Deep Cleaning",
      img: "https://homemaster.in/upload/serviceimages/24.jpg",
    },
    {
      tittle: "Home Package Cleaning",
      img: "https://homemaster.in/upload/serviceimages/15.jpg",
    },
    {
      tittle: "Cockroach control",
      img: "https://homemaster.in/upload/serviceimages/25.jpg",
    },
    {
      tittle: "Mosquito Control",
      img: "https://homemaster.in/upload/serviceimages/14.jpg",
    },
    {
      tittle: "Pipelines And Pumps",
      img: "https://homemaster.in/upload/serviceimages/23.jpg",
    },
    {
      tittle: "Other Plumbing Services",
      img: "https://homemaster.in/upload/serviceimages/13.jpg",
    },
    {
      tittle: "Repainting",
      img: "https://homemaster.in/upload/serviceimages/22.jpg",
    },
    {
      tittle: "Fresh Painting",
      img: "https://homemaster.in/upload/serviceimages/12.jpg",
    },
    {
      tittle: "Furniture Repair",
      img: "https://homemaster.in/upload/serviceimages/21.jpg",
    },
    {
      tittle: "Repairing",
      img: "https://homemaster.in/upload/serviceimages/11.jpg",
    },
    {
      tittle: "Wiring",
      img: "https://homemaster.in/upload/serviceimages/2.jpg",
    },
    {
      tittle: "Other Electrical Services",
      img: "https://homemaster.in/upload/serviceimages/1.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-0 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((i, id) => (
        <div
          key={id}
          className="relative overflow-hidden group"
          style={{ position: "relative" }}
        >
          <img
            src={i.img}
            alt={i.tittle}
            className="object-cover w-full h-full duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-semibold text-center text-white">
              {i.tittle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
