'use client'

import features from '@/data/features.json'
import FadeInOnScroll from './FadeInOnScroll'
import Image from 'next/image'
import { Feature } from '../types/feature'

const FeatureCards: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#222222] dark:text-white">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature: Feature, i) => (
            <FadeInOnScroll key={feature.id} delay={i * 100}>
              <div className="bg-white p-6 rounded-lg shadow text-center transition hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#222222] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
