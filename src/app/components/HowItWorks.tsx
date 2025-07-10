'use client'

import steps from '@/data/steps.json'
import Image from 'next/image'
import FadeInOnScroll from './FadeInOnScroll'
import { Step } from '../types/step'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#222222] dark:text-white mb-12">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative">
          {steps.map((step: Step, i) => (
            <FadeInOnScroll key={step.id} delay={i * 150}>
              <div className="w-64 mx-auto text-center relative z-10">
                <div className="flex justify-center mb-4">
                  <Image src={step.icon} alt={step.title} width={60} height={60} />
                </div>
                <h3 className="text-lg font-semibold text-[#222222] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:flex justify-center items-center absolute top-[65%] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none w-full max-w-6xl px-4">
          <div className="flex justify-between w-full">
            {steps.slice(0, -1).map((_, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div className="w-full h-px bg-gray-300 dark:bg-gray-600 mt-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
