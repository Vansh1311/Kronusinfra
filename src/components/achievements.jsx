import React from "react";
import assets from "../assets";

const Achievement = () => {
  const achievements = [
    {
      id: 1,
      img: assets.msme, // replace with actual MSME logo if available
      title: "MSME Certified",
      description: "Most Trustable Real Estate in Sonipat",
    },
    {
      id: 2,
      img: assets.tedx, // replace with TEDx logo path
      title: "TEDx SGGSCC",
      description: "Studio Speaker",
    },
    {
      id: 3,
      img: assets.zee, // replace with Zee News logo path
      title: "Emerging Sonipat Conclave",
      description: "By Zee News",
    },
    {
      id: 4,
      img: assets.bni, // replace with BNI logo path
      title: "BNI Sonipat",
      description: "Part of Sonipat BNI and been a Vice President once",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Achievements & Recognitions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 object-contain mb-4"
                />
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
