// app/page.tsx
export default function Home() {
  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero.jpeg)'}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="max-w-4xl text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Adam Boettiger
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Fractional CMO | Helping startups scale marketing for ARR and funding.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Let&apos;s Talk
            </a>
            <a 
              href="#services" 
              className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-slate-100 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Services</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✓ GTM Strategy & Positioning</li>
            <li>✓ Demand Generation & Growth</li>
            <li>✓ ABM, Paid Media & Automation</li>
            <li>✓ Fractional CMO Advisory</li>
          </ul>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-blue-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With 30 years of experience across agency, client-side, and consulting roles, I&apos;ve helped SaaS startups and B2B companies achieve breakthrough growth. I work with founders, CEOs, and venture-backed teams to build scalable marketing engines with clear metrics and repeatable results.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-900 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-white">Contact</h2>
          <p className="text-lg text-gray-300 mb-4">
            Let&apos;s talk. Email me directly at{' '}
            <a href="mailto:adam@adamboettiger.com" className="text-blue-400 underline hover:text-blue-300">
              adam@adamboettiger.com
            </a>{' '}
            or connect on{' '}
            <a href="https://www.linkedin.com/in/adamboettiger/" target="_blank" className="text-blue-400 underline hover:text-blue-300">
              LinkedIn
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
