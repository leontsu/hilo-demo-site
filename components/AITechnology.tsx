export default function AITechnology() {
  const apis = [
    {
      name: 'Language Model API',
      code: 'ai.languageModel',
      purpose: 'Text simplification and CEFR level adaptation',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Summarizer API',
      code: 'ai.summarizer',
      purpose: 'Generating concise summaries of simplified text',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Writer API',
      code: 'ai.writer',
      purpose: 'Creating interactive quiz questions to test comprehension',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ]

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">
            Powered by Gemini Nano
          </h2>
          <p className="section-subheading text-center">
            This program uses Chrome's built-in AI model, Gemini Nano, through
            native APIs—no external cloud services required
          </p>

          <div className="space-y-4 mt-8">
            {apis.map((api, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-gray-200"
              >
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 w-10 h-10 ${api.iconBg} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <svg
                      className={`w-6 h-6 ${api.iconColor}`}
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {api.name}
                    </h3>
                    <code className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono">
                      {api.code}
                    </code>
                    <p className="text-gray-700 mt-3">{api.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary-50 border-2 border-primary-200 rounded-lg">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1"
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-primary-900 mb-2">
                  Why Gemini Nano?
                </h4>
                <p className="text-primary-800">
                  By using Chrome's built-in Gemini Nano model through native
                  APIs, Hilo processes everything locally on your device. This
                  means faster performance, complete privacy (no data sent to
                  external servers), and the ability to work offline once the
                  models are downloaded. This is a submission for the Google
                  Chrome Built-in AI Challenge 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

