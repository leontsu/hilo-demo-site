import { siteConfig } from '@/lib/config'

export default function ForJudges() {
  return (
    <section id="judges" className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* For Judges Section */}
          <div className="mb-8 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border-2 border-primary-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary-600"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              For Judges
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Version</p>
                <p className="text-gray-900 font-mono font-semibold">
                  {siteConfig.version}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">License</p>
                <p className="text-gray-900 font-semibold">
                  {siteConfig.repo.license}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Source Code</p>
                <a
                  href={siteConfig.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium break-all"
                >
                  View on GitHub →
                </a>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Report Issues</p>
                <a
                  href={`${siteConfig.repo.url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
                >
                  GitHub Issues →
                </a>
              </div>
            </div>
          </div>

          {/* Installation & Testing Guide */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How to Install & Test
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </span>
                <span className="pt-1">
                  Download the extension ZIP file from the button at the top
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </span>
                <span className="pt-1">
                  Unzip the file and navigate to{' '}
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
                    /dist
                  </code>{' '}
                  folder
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </span>
                <span className="pt-1">
                  Open{' '}
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
                    chrome://extensions
                  </code>{' '}
                  in Chrome
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </span>
                <span className="pt-1">
                  Toggle "Developer mode" (top right corner)
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </span>
                <span className="pt-1">
                  Click "Load unpacked" and select the{' '}
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
                    /dist
                  </code>{' '}
                  folder
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  6
                </span>
                <span className="pt-1">
                  Pin Hilo from the extensions menu (puzzle icon)
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  7
                </span>
                <span className="pt-1">
                  Test on the sample articles provided below in the "Try Demo"
                  section
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
