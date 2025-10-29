export default function About() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">What is Hilo?</h2>
          <div className="space-y-6 text-lg text-gray-700 text-left">
            <p>
              <strong>Hilo</strong> is a Chrome extension that helps language
              learners read real web content at their level. Using CEFR
              (Common European Framework of Reference) levels from A1
              (beginner) to C1 (advanced), Hilo simplifies text and captions in
              real-time.
            </p>
            <p>
              Whether you're browsing news articles or watching YouTube videos
              with captions, Hilo adapts the content to match your reading
              ability—making authentic materials accessible without
              overwhelming you.
            </p>
            <p>
              Built with on-device AI for privacy and speed, Hilo works
              directly in your browser without sending your data to external
              servers. Perfect for students, educators, and anyone learning a
              new language!
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                CEFR Levels A1–C1
              </h3>
              <p className="text-gray-600 text-sm">
                Choose your reading level and watch content adapt in real-time
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Privacy-First
              </h3>
              <p className="text-gray-600 text-sm">
                On-device AI means your reading stays private and secure
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-Time Simplification
              </h3>
              <p className="text-gray-600 text-sm">
                Works on articles, YouTube captions, and more web content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


