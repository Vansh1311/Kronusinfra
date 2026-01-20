import React from 'react';

// Define the data for your podcasts
const podcastEpisodes = [
  {
    id: 1,
    title: 'KUNDLI: Real Estate Growth',
    description: 'A deep dive into the latest advancements in artificial intelligence and its impact on the job market.',
    videoEmbedUrl: 'https://www.youtube.com/embed/9cuFZfU3Rrs?si=1m6LtDTmMDKTG1zD', 
  },
  {
    id: 2,
    title: 'The Next Major Real Estate Investment Destination?',
    description: 'Learn how to use useState, useEffect, and custom hooks to write clean and efficient React code.',
    videoEmbedUrl: 'https://www.youtube.com/embed/HCrfqr84xdY?si=5d3TV7YTmS3NiM8O',
  },
  {
    id: 3,
    title: 'New Sonipat Development- MLA Krishna Gehlawat',
    description: 'An introductory guide to utility-first CSS and how to rapidly build stunning UIs with Tailwind.',
    videoEmbedUrl: 'https://www.youtube.com/embed/OmGSrxw3ZMw?si=qkc9BCzaU0uLUMvM',
  },
];

const Podcasts = () => {
  return (
    <section id="podcasts" className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">My Work</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Latest <span className="text-amber-600" > Podcast Episodes</span>
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Check out some of the recent episodes where I discuss Investments, Real Estate, and more.
          </p>
        </div>

        {/* Podcast Cards Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {podcastEpisodes.map((episode) => (
            <div key={episode.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl bg-white">
              {/* Video Embed */}
              <div className="shrink-0">
                <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={episode.videoEmbedUrl}
                    title={episode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="#" className="hover:underline">
                      Podcast
                    </a>
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {episode.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {episode.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;