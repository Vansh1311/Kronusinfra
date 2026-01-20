import React, { useState, useEffect, useRef } from 'react';
import { Book, TrendingUp, Star, Zap } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 2000, suffix = '', label = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center p-6 relative">
      {/* Shimmer Glow Behind Number */}
      <div className="absolute inset-0 rounded-full animate-[pulseShimmer_3s_ease-in-out_infinite]"></div>

      <div className="relative text-5xl md:text-6xl font-extrabold text-amber-600 mb-2  tracking-tight z-10">
        {count}{suffix}
      </div>
      <div className="relative text-sm md:text-base text-gray-500 uppercase tracking-widest text-center mt-1 z-10">
        {label}
      </div>
    </div>
  );
};

const JourneyNumbers = () => {
  const stats = [
    { value: 20, suffix: '+', label: 'Industry Experience', Icon: Book },
    { value: 150, suffix: '+', label: 'Delivered Successfully', Icon: TrendingUp },
    { value: 100, suffix: '%', label: 'Client Happiness', Icon: Star },
    { value: 10, suffix: '+', label: 'Across India', Icon: Zap }
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading with shimmer */}
        <h2 className="relative text-4xl md:text-5xl font-bold text-center mb-16">
          <span className=" bg-clip-text text-black animate-[shimmerHeading_4s_ease-in-out_infinite] ">
            OUR JOURNEY IN <span className='text-amber-600' > NUMBERS</span>
          </span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              <stat.Icon className="w-12 h-12 text-amber-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 " />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyNumbers;
