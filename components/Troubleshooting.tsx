export default function Troubleshooting() {
  const issues = [
    {
      title: 'On-device AI not available',
      solution:
        "If on-device AI isn't available, open the popup and enable Demo Mode (local fallback).",
    },
    {
      title: 'Changes not taking effect',
      solution:
        'Refresh the page after changing CEFR level or toggling modes.',
    },
    {
      title: 'YouTube captions not working',
      solution:
        "If nothing happens on YouTube, ensure captions are enabled and try page reload.",
    },
    {
      title: 'ZIP won\'t load',
      solution:
        "If the ZIP won't load, re-download and make sure you selected the /dist folder.",
    },
  ]

  return (
    <section id="troubleshooting" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading text-center">Troubleshooting</h2>
        <p className="section-subheading text-center">
          Common issues and quick fixes
        </p>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {issues.map((issue, index) => (
              <li
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {issue.title}
                  </h3>
                  <p className="text-gray-700">{issue.solution}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 bg-primary-50 border-2 border-primary-200 rounded-lg">
            <h3 className="text-lg font-semibold text-primary-900 mb-3">
              Still having issues?
            </h3>
            <p className="text-primary-800 mb-4">
              Check the browser console (F12) for error messages, or visit our
              GitHub repository for more detailed troubleshooting guides.
            </p>
            <a
              href="https://github.com/TODO_GH_USER/TODO_REPO/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 hover:underline"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Open an Issue on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


