export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fractional CMO for B2B Startups & Growth-Stage Companies
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          {"I help venture-backed teams build scalable marketing systems that generate pipeline, accelerate ARR, and attract the next round of funding."}
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
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

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50" id="services">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">Fractional CMO Leadership</h3>
            <p className="mt-2 text-gray-600">
              {"Strategic oversight of marketing tied to revenue and board-level metrics."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Go-to-Market Strategy</h3>
            <p className="mt-2 text-gray-600">
              {"Launch planning with ICP, positioning, and sequencing for ARR growth."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Demand Gen & ABM Campaigns</h3>
            <p className="mt-2 text-gray-600">
              {"AI-powered campaigns using HubSpot, LinkedIn, and account targeting."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Founder GTM Coaching</h3>
            <p className="mt-2 text-gray-600">
              {"Helping founders craft and test their first scalable motion."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">AI-Enabled Marketing Ops</h3>
            <p className="mt-2 text-gray-600">
              {"Streamlining your stack and playbooks with AI tools for efficiency."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </main>
  );
}
