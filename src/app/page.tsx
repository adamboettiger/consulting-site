'use client';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fractional CMO for B2B Startups & Growth-Stage Companies
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            I help venture-backed teams build scalable marketing systems that generate pipeline,
            accelerate ARR, and attract the next round of funding.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg font-medium"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-white text-center" id="about">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-gray-700 text-lg">
            {"With 30 years of marketing experience — including CMO and VP roles across SaaS, AI, and venture-backed startups — I help founders and CEOs bridge the gap between growth strategy and execution."}
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            {"I've led teams on both agency and client sides, scaled campaigns that delivered 30–127% lift in lead generation, and know what it takes to align sales and marketing in fast-moving environments."}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50" id="services">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">Fractional CMO Leadership</h3>
            <p className="mt-2 text-gray-600">
              Strategic oversight of marketing tied to revenue and board-level metrics.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Go-to-Market Strategy</h3>
            <p className="mt-2 text-gray-600">
              Launch planning with ICP, positioning, and sequencing for ARR growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Demand Gen & ABM Campaigns</h3>
            <p className="mt-2 text-gray-600">
              AI-powered campaigns using HubSpot, LinkedIn, and account targeting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Founder GTM Coaching</h3>
            <p className="mt-2 text-gray-600">
              Helping founders craft and test their first scalable motion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">AI-Enabled Marketing Ops</h3>
            <p className="mt-2 text-gray-600">
              Streamlining your stack and playbooks with AI tools for efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-white text-center" id="contact">
        <h2 className="text-3xl font-semibold">Ready to accelerate growth?</h2>
        <p className="mt-4 text-gray-600">
          {"Let's talk about building a marketing engine that delivers real pipeline."}
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://calendly.com/yourname"
            className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Schedule a Call
          </a>
          <a
            href="mailto:you@yourdomain.com"
            className="text-blue-600 font-medium underline hover:text-blue-800"
          >
            Email Me
          </a>
        </div>
      </section>
    </>
  );
}
