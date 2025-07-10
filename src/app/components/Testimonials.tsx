'use client'

import testimonials from '@/data/testimonials.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import FadeInOnScroll from './FadeInOnScroll'
import { Testimonial } from '../types/testimonial'

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#222222] dark:text-white">
          What Our Users Say
        </h2>

        <FadeInOnScroll>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
          >
            {testimonials.map((testimonial: Testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-lg shadow text-center max-w-xl mx-auto">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={72}
                    height={72}
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-700 dark:text-gray-200 italic mb-4">
                    “{testimonial.quote}”
                  </p>
                  <div>
                    <h4 className="text-md font-semibold text-[#222222] dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

export default Testimonials
