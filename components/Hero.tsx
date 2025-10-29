import { siteConfig } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white py-20 sm:py-28">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Hilo
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-700 font-semibold mb-4">
            Adaptive Translator for the Real Web
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Install in Developer Mode and try real-time text & caption
            simplification with CEFR levels (A1–C1).
          </p>
        </div>

        {/* Demo Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
              src={siteConfig.demoVideoUrl}
              title="Hilo Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="Demo video showing Hilo Chrome extension features"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={siteConfig.downloadUrl}
            download
            className="btn-primary"
            aria-label="Download Hilo extension ZIP file"
          >
            <svg
              className="w-5 h-5 mr-2"
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Hilo (ZIP)
          </a>
          <a
            href="#demo"
            className="btn-secondary"
            aria-label="Scroll to watch demo section"
          >
            <svg
              className="w-5 h-5 mr-2"
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
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  )
}


