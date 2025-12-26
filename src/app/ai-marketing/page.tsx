import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AIMarketing() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Marketing Accelerator</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Train your team to move faster with AI.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              AI is transforming marketing, but most teams are stuck using it for basic tasks—or not at all. Your competitors are already using AI to create content faster, analyze data more deeply, and execute campaigns at scale. The gap is widening every day, and doing nothing means falling behind.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The AI Marketing Accelerator is a hands-on training program designed to help your marketing team leverage AI tools for real work, not just experiments. I work directly with your team to identify high-impact use cases, select the right tools, and implement AI workflows that deliver measurable results—faster content production, better insights, and more efficient campaigns.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              This isn&apos;t a generic course or theoretical workshop. It&apos;s practical, customized training that meets your team where they are and gets them using AI productively within weeks. You&apos;ll see immediate improvements in output quality, speed, and team confidence.
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
              <span>Marketing teams that want to use AI but don&apos;t know where to start or how to scale it</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>CMOs and marketing leaders looking to increase team productivity and output quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>B2B companies that need to move faster with content, campaigns, and customer insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Teams that have experimented with AI tools but haven&apos;t seen consistent, measurable results</span>
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
              <span>AI readiness assessment to identify high-impact opportunities for your team</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Customized training sessions on AI tools for content creation, campaign optimization, and analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Hands-on workshops to implement AI workflows for real marketing projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Tool evaluation and recommendations tailored to your tech stack and budget</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Ongoing coaching and support to ensure adoption and measure impact</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl">•</span>
              <span>Best practices and frameworks for scaling AI use across your marketing organization</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a 15-minute call to discuss how AI can accelerate your marketing team.
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
