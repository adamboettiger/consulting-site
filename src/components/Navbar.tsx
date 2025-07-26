'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const sections = ['services', 'about', 'contact']

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('services')

  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight
    const offsets = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return { id, offset: Infinity }
      const rect = el.getBoundingClientRect()
      // Consider element in viewport and its position
      const offset = Math.abs(rect.top)
      const inViewport = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2
      return { id, offset, inViewport }
    })

    // Prioritize elements in viewport, then fall back to closest by offset
    const inView = offsets.filter(item => item.inViewport)
    const closest = inView.length > 0
      ? inView.reduce((prev, curr) => curr.offset < prev.offset ? curr : prev)
      : offsets.reduce((prev, curr) => curr.offset < prev.offset ? curr : prev)

    setActive(closest.id)
  }, [])

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 100)
    window.addEventListener('scroll', debouncedScroll)
    return () => window.removeEventListener('scroll', debouncedScroll)
  }, [handleScroll])

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/5 backdrop-blur-sm" role="navigation">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span 
          className="font-semibold text-lg text-gray-800 no-underline cursor-default"
        >
          Adam Boettiger
        </span>

        {/* Centered Navigation */}
        <div 
          className="hidden md:flex space-x-8 text-gray-700 absolute left-1/2 transform -translate-x-1/2"
          role="menubar"
          aria-label="Main navigation"
        >
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-bold hover:underline transition-colors ${active === id ? 'text-gray-900' : ''}`}
              aria-current={active === id ? 'page' : undefined}
              role="menuitem"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* CTA Button / Mobile Menu */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-300 no-underline"
            aria-label="Get Started - Contact Form"
          >
            Get started
          </a>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-gray-800 p-2"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-200 shadow-sm px-4 pb-4 ${menuOpen ? 'block' : 'hidden'}`}
        role="menu"
        aria-label="Mobile navigation"
      >
        {sections.map(id => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            className={`block py-2 ${active === id ? 'font-bold text-gray-900' : 'text-gray-700'}`}
            aria-current={active === id ? 'page' : undefined}
            role="menuitem"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  )
}
