'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = ['hero', 'services', 'about', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const offsets = sections.map(id => {
        const el = document.getElementById(id)
        if (!el) return { id, offset: Infinity }
        const rect = el.getBoundingClientRect()
        return { id, offset: Math.abs(rect.top) }
      })

      const closest = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      )
      setActive(closest.id)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="font-semibold text-lg text-gray-800">Adam Boettiger</a>

        <div className="hidden md:flex space-x-6 text-gray-700">
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:underline ${active === id ? 'underline' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm px-4 pb-4">
          {sections.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 ${active === id ? 'font-bold underline' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
