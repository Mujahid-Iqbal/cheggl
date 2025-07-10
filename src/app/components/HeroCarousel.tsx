'use client'

import React, { useEffect, useState, useRef } from 'react'
import slides from '@/data/slides.json'
import Image from 'next/image'
import { Slide } from '../types/slide'

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  // Auto-advance
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <section
      className="relative w-full h-[75vh] overflow-hidden"
      aria-label="Hero image carousel"
      role="region"
    >
      {slides.map((slide: Slide, index: number) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.headline}</h1>
            <p className="text-lg md:text-xl mb-6">{slide.subhead}</p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        aria-label="Previous Slide"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ‹
      </button>
      <button
        aria-label="Next Slide"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full ${
              i === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
