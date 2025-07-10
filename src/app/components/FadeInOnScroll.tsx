'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  children: React.ReactNode
  delay?: number
}

export default function FadeInOnScroll({ children, delay = 0 }: Props) {
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (inView) {
      timeoutRef.current = setTimeout(() => {
        controls.start('visible')
      }, delay)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [inView, controls, delay])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  )
}
