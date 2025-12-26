import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function FractionalCMO() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">CMO on Demand</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Executive strategy without full-time cost.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Your startup needs senior marketing leadership, but you&apos;re not ready for a full-time CMO. You need strategic direction, not just execution. You need someone who&apos;s done this before and can help you avoid costly mistakes while building a scalable marketing engine.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As your Fractional CMO, I step into the role of your marketing executive—developing strategy, aligning teams, building your go-to-market plan, and ensuring every dollar spent drives measurable results. Whether you&apos;re preparing for a funding round, launching a new product, or scaling from early traction to sustainable growth, I bring the experience and perspective you need.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This isn&apos;t consulting from the sidelines. I work as part of your leadership team, bringing clarity to your marketing strategy and accountability to your execution. You get the expertise of a seasoned CMO at a fraction of the cost, with the flexibility to scale as your needs evolve.
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
              <span>B2B SaaS founders and CEOs who need marketing leadership but aren&apos;t ready for a full-time hire</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Startups preparing for Series A or B funding rounds that need to demonstrate marketing traction</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Companies scaling from early traction to repeatable, predictable growth</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Teams that have marketing resources but lack strategic direction and executive oversight</span>
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
              <span>Strategic marketing planning aligned with business objectives and funding goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Go-to-market strategy development for new products, markets, or growth stages</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Marketing team leadership, hiring guidance, and performance management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Budget planning, resource allocation, and marketing operations optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Executive reporting and board-level communication of marketing performance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Regular strategic sessions, team meetings, and ongoing advisory support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a 15-minute call to discuss your marketing challenges and goals.
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
