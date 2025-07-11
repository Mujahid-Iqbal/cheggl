// components/HotSpotsCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaHeart, FaShareAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

type Spot = {
  id: string;
  imgSrc: string;
  title: string;
  location: string;
  distanceKm: number;
};

type Props = {
  spots: Spot[];
};

export default function HotSpotsCarousel({ spots }: Props) {
  return (
<div className="relative px-6 py-10 bg-white text-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Hot Spots</h2>
        <button className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full text-sm">
          👁 Alle ansehen
        </button>
      </div>

      <Swiper
        key={spots.length}               // ensures proper re-init
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        loop={true}                      // CRUCIAL for autoplay
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,       // optional, adds pause-on-hover
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >

        {spots.map((spot) => (
          <SwiperSlide key={spot.id}>
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={spot.imgSrc}
                  alt={spot.title}
                  fill
                  className="object-cover"
                />
                {/* Icons */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                    <FaHeart />
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                    <FaShareAlt />
                  </button>
                </div>
                {/* Distance */}
                <div className="absolute bottom-2 right-2 bg-purple-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  {spot.distanceKm.toFixed(2)} km <FaClock />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate text-white"> {spot.title}</h3>
                <div className="mt-2 inline-block bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
                  📍 {spot.location}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



// 'use client'

// import React, { useEffect, useState, useRef } from 'react'
// import slides from '@/data/slides.json'
// import Image from 'next/image'
// import { Slide } from '../types/slide'

// const HeroCarousel: React.FC = () => {
//   const [current, setCurrent] = useState(0)
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null)

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

//   // Auto-advance
//   useEffect(() => {
//     timeoutRef.current = setTimeout(nextSlide, 5000)
//     return () => {
//       if (timeoutRef.current) clearTimeout(timeoutRef.current)
//     }
//   }, [current])

//   return (
//     <section
//       className="relative w-full h-[75vh] overflow-hidden"
//       aria-label="Hero image carousel"
//       role="region"
//     >
//       {slides.map((slide: Slide, index: number) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//             index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
//           }`}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.headline}
//             fill
//             className="object-cover"
//             priority={index === 0}
//           />
//           <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.headline}</h1>
//             <p className="text-lg md:text-xl mb-6">{slide.subhead}</p>
//             <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
//               {slide.cta}
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Arrows */}
//       <button
//         aria-label="Previous Slide"
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
//       >
//         ‹
//       </button>
//       <button
//         aria-label="Next Slide"
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             className={`h-3 w-3 rounded-full ${
//               i === current ? 'bg-white' : 'bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default HeroCarousel
