import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
        {/* For Judges Section */}
        <div className="mb-12 p-6 bg-gray-800 rounded-lg border-2 border-primary-600">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-primary-400"
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
              <p className="text-gray-400 mb-1">Version</p>
              <p className="text-white font-mono">{siteConfig.version}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">License</p>
              <p className="text-white">{siteConfig.repo.license}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Repository</p>
              <a
                href={siteConfig.repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 hover:underline break-all"
              >
                {siteConfig.repo.url}
              </a>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Testing Instructions</p>
              <a
                href={`${siteConfig.repo.url}#testing`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">
              {siteConfig.name}
            </h4>
            <p className="text-sm">{siteConfig.description}</p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#install"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Try Demo
                </a>
              </li>
              <li>
                <a
                  href="#troubleshooting"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Troubleshooting
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`${siteConfig.repo.url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            © {currentYear} {siteConfig.name}. Licensed under{' '}
            {siteConfig.repo.license}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}


