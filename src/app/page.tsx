// app/page.tsx
export default function Home() {
  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Adam Boettiger</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Fractional CMO | Helping startups scale marketing for ARR and funding.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Services</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✓ GTM Strategy & Positioning</li>
            <li>✓ Demand Generation & Growth</li>
            <li>✓ ABM, Paid Media & Automation</li>
            <li>✓ Fractional CMO Advisory</li>
          </ul>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With 30 years of experience across agency, client-side, and consulting roles, I’ve helped SaaS startups and B2B companies achieve breakthrough growth. I work with founders, CEOs, and venture-backed teams to build scalable marketing engines with clear metrics and repeatable results.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-lg text-gray-700 mb-4">
            Let’s talk. Email me directly at{' '}
            <a href="mailto:adam@adamboettiger.com" className="text-blue-600 underline">
              adam@adamboettiger.com
            </a>{' '}
            or connect on{' '}
            <a href="https://www.linkedin.com/in/adamboettiger/" target="_blank" className="text-blue-600 underline">
              LinkedIn
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
