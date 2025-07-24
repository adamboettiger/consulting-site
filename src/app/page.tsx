'use client'

import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/hero.jpeg"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
          <div className="text-center text-white space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Fractional CMO for B2B Startups & Growth-Stage Companies
            </h1>
            <p className="text-lg md:text-xl">
              I help venture-backed teams build scalable marketing systems that generate pipeline, accelerate ARR, and attract the next round of funding.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">About</h2>
        <p>
          With 30 years of marketing experience — including CMO and VP roles across SaaS, AI, and venture-backed startups — I help founders and CEOs bridge the gap between growth strategy and execution.
        </p>
        <p>
          I've led teams on both agency and client sides, scaled campaigns that delivered 30–127% lift in lead generation, and know what it takes to align sales and marketing in fast-moving environments.
        </p>

        <h2 className="text-2xl font-bold mt-12">Services</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Fractional CMO Leadership</h3>
            <p>Strategic oversight of marketing tied to revenue and board-level metrics.</p>
          </div>
          <div>
            <h3 className="font-semibold">Go-to-Market Strategy</h3>
            <p>Launch planning with ICP, positioning, and sequencing for ARR growth.</p>
          </div>
          <div>
            <h3 className="font-semibold">Demand Gen & ABM Campaigns</h3>
            <p>AI-powered campaigns using HubSpot, LinkedIn, and account targeting.</p>
          </div>
          <div>
            <h3 className="font-semibold">Founder GTM Coaching</h3>
            <p>Helping founders craft and test their first scalable motion.</p>
          </div>
          <div>
            <h3 className="font-semibold">AI-Enabled Marketing Ops</h3>
            <p>Helping companies leverage AI tools across the marketing tech stack.</p>
          </div>
        </div>
      </section>
    </>
  )
}
