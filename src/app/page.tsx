// app/page.tsx
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Adam Boettiger - Fractional CMO',
    description: 'Strategic marketing leadership and advisory services helping startups scale marketing for ARR and funding.',
    url: 'https://adamboettiger.com',
    founder: {
      '@type': 'Person',
      name: 'Adam Boettiger',
      jobTitle: 'Fractional CMO',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GTM Strategy',
            description: 'Market positioning and go-to-market strategy development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Demand Generation',
            description: 'Scalable demand generation and growth marketing'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ABM & Automation',
            description: 'Account-based marketing and marketing automation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CMO',
            description: 'Strategic marketing leadership and advisory services'
          }
        }
      ]
    }
  }

  return (
    <>
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <section id="hero" className="min-h-screen flex items-center justify-center relative -mt-20">
        {/* Hero background with Next.js Image optimization */}
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        
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
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg no-underline"
              aria-label="Contact Adam Boettiger"
            >
              Let&apos;s Talk
            </a>
            <a 
              href="#services" 
              className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 no-underline"
              aria-label="View Services Offered"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* White line separator */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-px bg-white opacity-50 my-12"></div>
      </div>

      <section id="services" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-6">
            {/* CMO on Demand */}
            <div className="relative w-full pt-[100%] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
                style={{backgroundImage: "url('/images/cmo-on-demand.jpg')"}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 transition-all duration-300 hover:bg-black/40">
                <h2 className="text-2xl font-semibold tracking-tight">CMO on Demand</h2>
                <p className="text-sm mt-2 font-light">Executive strategy without full-time cost.</p>
              </div>
            </div>

            {/* AI Marketing Accelerator */}
            <div className="relative w-full pt-[100%] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
                style={{backgroundImage: "url('/images/ai-accelerator.jpg')"}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 transition-all duration-300 hover:bg-black/40">
                <h2 className="text-2xl font-semibold tracking-tight">AI Marketing Accelerator</h2>
                <p className="text-sm mt-2 font-light">Train your team to move faster with AI.</p>
              </div>
            </div>

            {/* CMO Whisperer */}
            <div className="relative w-full pt-[100%] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
                style={{backgroundImage: "url('/images/cmo-whisperer.jpg')"}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 transition-all duration-300 hover:bg-black/40">
                <h2 className="text-2xl font-semibold tracking-tight">CMO Whisperer</h2>
                <p className="text-sm mt-2 font-light">Executive coaching for marketing clarity.</p>
              </div>
            </div>

            {/* Marketing as a Service */}
            <div className="relative w-full pt-[100%] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
                style={{backgroundImage: "url('/images/marketing-service.jpg')"}}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 transition-all duration-300 hover:bg-black/40">
                <h2 className="text-2xl font-semibold tracking-tight">Marketing-as-a-Service</h2>
                <p className="text-sm mt-2 font-light">Your flexible, on-call marketing team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White line separator */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-px bg-white opacity-50 my-12"></div>
      </div>

      <section id="about" className="min-h-screen bg-blue-600 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About</h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            With 30 years of experience across agency, client-side, and consulting roles, I&apos;ve helped SaaS startups and B2B companies achieve breakthrough growth. I work with founders, CEOs, and venture-backed teams to build scalable marketing engines with clear metrics and repeatable results.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contact</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Let&apos;s talk. Email me directly at{' '}
            <a 
              href="mailto:adam@adamboettiger.com" 
              className="text-blue-400 hover:text-blue-300 no-underline"
              aria-label="Send email to adam@adamboettiger.com"
            >
              adam@adamboettiger.com
            </a>{' '}
            or schedule a 15-minute video call,{' '}
            <a 
              href="https://calendly.com/adamboettiger/15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 no-underline"
              aria-label="Schedule a call on Calendly"
            >
              https://calendly.com/adamboettiger/15
            </a>
          </p>
          <div className="mt-8">
            <a 
              href="https://www.linkedin.com/in/adamboettiger/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Connect with Adam on LinkedIn"
            >
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
