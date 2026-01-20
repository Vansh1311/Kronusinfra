import React from "react";
import assets from "../assets";

// Gallery data
const galleryMedia = [
  { type: "image", src: assets.a },
  { type: "video", id: "lb246_NEfks" },
  { type: "image", src: assets.b },
  { type: "image", src: assets.c },
  { type: "video", id: "F_ED_Shqd44" },
  { type: "image", src: assets.d },
  { type: "image", src: assets.e },
  { type: "image", src: assets.f },
  { type: "video", id: "aTt1ah6Kkn0" },
  { type: "image", src: assets.g },
  { type: "video", id: "aKf2N4prUng" },
];

// Split into 3 columns
const splitIntoColumns = (arr) => {
  const cols = [[], [], []];
  arr.forEach((item, i) => cols[i % 3].push(item));
  return cols;
};

const GalleryColumn = ({ items, speedClass, delayClass }) => {
  // Repeat 3x to eliminate any gap
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={`flex flex-col min-w-[30%] space-y-4 ${speedClass} ${delayClass}`}
    >
      {repeatedItems.map((item, i) => (
        <div
          key={i}
          className="w-full rounded-xl overflow-hidden shadow-xl shrink-0 transition duration-300 hover:shadow-2xl"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              className="w-full h-auto object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/400x400/FACC15/78350F?text=Media")
              }
            />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${item.id}?controls=0&mute=1&autoplay=1&loop=1&playlist=${item.id}`}
              className="w-full h-[183px] lg:h-[650px] object-cover"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              loading="lazy"
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

const ContinuousScrollGallery = () => {
  const [col1, col2, col3] = splitIntoColumns(galleryMedia);

  const styles = `
    @keyframes scroll-up {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes scroll-down {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0); }
    }

    .animate-scroll-up-fast {
      animation: scroll-up 25s linear infinite;
    }
    .animate-scroll-up-medium {
      animation: scroll-up 32s linear infinite;
    }
    .animate-scroll-down {
      animation: scroll-down 28s linear infinite;
    }

    .delay-2s { animation-delay: 2s; }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="w-full mx-auto text-center bg-white">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-12  inline-block pb-1">
          Our Creative <span className="text-amber-600" > Gallery</span>
        </h2>

        <p className="text-stone-600 mb-12 text-lg max-w-3xl mx-auto">
          Step into a visual journey through our collection of moments, designs, and inspirations.
          Each image tells a story, capturing the essence of our work and the passion behind it. 
          Explore and discover the artistry that defines us.
        </p>

        {/* FIXED HEIGHT = 800px */}
        <div className="relative h-[500px] lg:h-[1200px] overflow-hidden rounded-2xl shadow-2xl bg-white">
          <div className="flex justify-between h-full w-full px-2 sm:px-4 space-x-2 sm:space-x-6">

            {/* LEFT */}
            <GalleryColumn
              items={col1}
              speedClass="animate-scroll-up-fast"
              delayClass=""
            />

            {/* MIDDLE */}
            <GalleryColumn
              items={col2}
              speedClass="animate-scroll-down"
              delayClass="delay-2s"
            />

            {/* RIGHT */}
            <GalleryColumn
              items={col3}
              speedClass="animate-scroll-up-medium"
              delayClass=""
            />
          </div>

          {/* Top Fade */}
          <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default ContinuousScrollGallery;
