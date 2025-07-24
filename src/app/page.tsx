// app/page.tsx
export default function Home() {
  return (
    <>
      <section id="hero" className="h-screen flex items-center justify-center relative bg-cover bg-top bg-no-repeat pt-16" style={{backgroundImage: 'url(/hero.jpeg)'}}>
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

      <section id="services" className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full h-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 h-full">
            {/* Top Left */}
            <div className="bg-white flex items-center justify-center p-12 border-r-[25px] border-b-[25px] border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">GTM Strategy</h3>
                <p className="text-lg text-gray-700">Market positioning and go-to-market strategy development</p>
              </div>
            </div>
            
            {/* Top Right */}
            <div className="bg-white flex items-center justify-center p-12 border-l-[25px] border-b-[25px] border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Demand Generation</h3>
                <p className="text-lg text-gray-700">Scalable demand generation and growth marketing</p>
              </div>
            </div>
            
            {/* Bottom Left */}
            <div className="bg-white flex items-center justify-center p-12 border-r-[25px] border-t-[25px] border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">ABM & Automation</h3>
                <p className="text-lg text-gray-700">Account-based marketing and marketing automation</p>
              </div>
            </div>
            
            {/* Bottom Right */}
            <div className="bg-white flex items-center justify-center p-12 border-l-[25px] border-t-[25px] border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Fractional CMO</h3>
                <p className="text-lg text-gray-700">Strategic marketing leadership and advisory services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="h-screen bg-blue-600 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About</h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            With 30 years of experience across agency, client-side, and consulting roles, I&apos;ve helped SaaS startups and B2B companies achieve breakthrough growth. I work with founders, CEOs, and venture-backed teams to build scalable marketing engines with clear metrics and repeatable results.
          </p>
        </div>
      </section>

      <section id="contact" className="h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
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
