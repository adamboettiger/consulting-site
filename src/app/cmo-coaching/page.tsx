import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CMOCoaching() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#services"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 no-underline transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">CMO Whisperer</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Executive coaching for marketing clarity.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Being a CMO is lonely. You&apos;re expected to drive growth, prove ROI, and align marketing with sales—all while managing a team, navigating executive dynamics, and making high-stakes decisions with incomplete information. You need a trusted advisor who understands the pressure and can help you think through the tough calls.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The CMO Whisperer is 1-on-1 executive coaching designed specifically for marketing leaders. Whether you&apos;re a first-time CMO, navigating a challenging growth phase, or dealing with organizational complexity, I provide the strategic perspective and accountability you need to succeed. We tackle the hard questions: Where should you focus? How do you prove value? What&apos;s the right team structure? How do you navigate board expectations?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This is a confidential partnership built on trust, experience, and results. I&apos;ve been in your seat, faced the same challenges, and know what it takes to succeed as a marketing executive. Together, we&apos;ll clarify your strategy, strengthen your leadership, and drive measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* White line separator */}
      <div className="w-full">
        <div className="h-px bg-gray-200 w-full"></div>
      </div>

      {/* Who It's For Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Who It&apos;s For</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>First-time CMOs or VPs of Marketing navigating the transition to executive leadership</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Marketing leaders facing pressure to prove ROI and drive measurable growth</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>CMOs dealing with challenging executive dynamics, board expectations, or organizational change</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Experienced marketing executives who need a trusted sounding board for strategic decisions</span>
            </li>
          </ul>
        </div>
      </section>

      {/* White line separator */}
      <div className="w-full">
        <div className="h-px bg-gray-200 w-full"></div>
      </div>

      {/* What's Included Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">What&apos;s Included</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Bi-weekly 1-on-1 coaching sessions focused on your specific challenges and goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Strategic guidance on marketing planning, team building, and executive communication</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Real-time support for critical decisions, board presentations, and high-stakes meetings</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Accountability framework to keep you focused on high-impact priorities</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Access to frameworks, templates, and resources from 30 years of marketing leadership</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Confidential space to work through challenges without judgment or politics</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a 15-minute call to discuss your leadership challenges and goals.
          </p>
          <a
            href="https://calendly.com/adamboettiger/15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg no-underline"
          >
            Schedule a Call
          </a>
        </div>
      </section>
    </main>
  )
}
