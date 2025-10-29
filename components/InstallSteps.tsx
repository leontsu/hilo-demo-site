export default function InstallSteps() {
  const steps = [
    'Download and unzip hilo-extension-1.0.0.zip.',
    'Open chrome://extensions in Chrome.',
    'Toggle Developer mode (top right).',
    'Click Load unpacked → select the unzipped /dist folder.',
    'Pin Hilo from the extensions (puzzle icon).',
    'Open a test article link below and try CEFR simplification.',
  ]

  return (
    <section id="install" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center">Installation Steps</h2>
        <p className="section-subheading text-center">
          Get Hilo running in minutes with Developer Mode
        </p>

        <div className="max-w-3xl mx-auto">
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                  {index + 1}
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              💡 First Time Installing Extensions?
            </h3>
            <p className="text-blue-800">
              Don't worry! The process is straightforward. If you get stuck,
              check out the troubleshooting section below or refer to the{' '}
              <a
                href="https://developer.chrome.com/docs/extensions/mv3/getstarted/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600"
              >
                Chrome Extensions documentation
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


