import { siteConfig } from '@/lib/config'

export default function TestLinks() {
  return (
    <section id="demo" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading text-center">Try Hilo on Real Content</h2>
        <p className="section-subheading text-center">
          Test the extension with these curated links
        </p>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
          {siteConfig.testLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {link.type}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 break-all">{link.url}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            After installing Hilo, visit any of these links and use the
            extension popup to select your CEFR level (A1–C1). The page content
            will be simplified in real-time!
          </p>
        </div>
      </div>
    </section>
  )
}


