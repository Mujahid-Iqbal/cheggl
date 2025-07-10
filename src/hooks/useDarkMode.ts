'use client'

import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'true' || (stored === null && prefersDark)

    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggle = () => {
    const newValue = !enabled
    setEnabled(newValue)
    document.documentElement.classList.toggle('dark', newValue)
    localStorage.setItem('darkMode', newValue.toString())
  }

  return { enabled, toggle }
}
