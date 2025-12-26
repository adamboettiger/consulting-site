import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function MarketingServices() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Marketing-as-a-Service</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your flexible, on-call marketing team.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              You need marketing execution, but hiring a full team isn&apos;t realistic yet. You have projects that need to get done—campaigns to launch, content to create, events to promote—but you can&apos;t justify the overhead and commitment of full-time hires. You need expertise on demand, without long-term contracts or inflexible retainers.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Marketing-as-a-Service gives you access to a flexible marketing team that scales with your needs. Whether you need campaign management, content production, email marketing, event support, or tactical execution, I bring the right resources to deliver results—fast. You get experienced marketing professionals working on your projects without the complexity of hiring, managing, and retaining a full-time team.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This model is ideal for startups and growing companies that need consistent marketing execution without committing to headcount. You scale up when demand is high, scale down when it&apos;s not, and only pay for what you use. It&apos;s marketing support designed to fit your business, not the other way around.
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
              <span>Startups that need consistent marketing execution but aren&apos;t ready to build a full team</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Companies with fluctuating marketing demands who need flexible capacity</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Teams that have strategy in place but lack the resources to execute consistently</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Businesses launching new products, campaigns, or initiatives that require focused support</span>
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
              <span>Campaign planning, execution, and performance tracking across multiple channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Content creation including blog posts, emails, landing pages, and social media</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Email marketing setup, automation, and ongoing campaign management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Event marketing support for webinars, conferences, and virtual events</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Marketing operations support including tool setup, reporting, and optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Flexible engagement model—scale up or down based on your needs and budget</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a 15-minute call to discuss your marketing execution needs.
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
