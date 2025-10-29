import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12">
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
                  href="#judges"
                  className="hover:text-white hover:underline transition-colors"
                >
                  For Judges
                </a>
              </li>
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
            {siteConfig.repo.license}.
          </p>
        </div>
      </div>
    </footer>
  )
}


