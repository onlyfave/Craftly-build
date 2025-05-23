"use client"

import { Link } from "react-router-dom"
import { Heart } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import "../styles/Footer.css"

const Footer = () => {
  const year = new Date().getFullYear()
  const { currentUser } = useAuth()

  // Determine the correct link for account management
  const accountLink = currentUser ? "/profile" : "/login"

  // Determine the correct link for service management based on user type
  const serviceLink = currentUser && currentUser.userType === "artisan" ? "/manage-services" : "/become-seller"

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <p className="tagline">Connecting Creativity and Skills Through Technology</p>
        <div className="footer-socials">
          <div>
            <a
              href="https://www.linkedin.com/company/craftly.ng/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BJFX3%2BG6ITnqcIsD8fRgmfw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
                <path
                  fill="#807f7e"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/craftly.ng?igsh=MTEwZnV2cGx6M2UwZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
                <path
                  fill="#807f7e"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
          </div>

          <div>
            <a href="https://x.com/craftly85225" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
                <path
                  fill="#807f7e"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links primary-links">
          <Link to={accountLink}>Go to Your Account</Link>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <Link to={serviceLink}>Manage Your Services</Link>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <Link to="/help-support">Help & Support</Link>
        </div>

        <div className="footer-links secondary-links">
          <Link to="/terms">Terms of Service</Link>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <Link to="/privacy">Privacy Policy</Link>
          <span className="divider" aria-hidden="true">
            |
          </span>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-credit">
          Made with <Heart size={14} className="heart-icon" aria-hidden="true" /> by Craftly Team
        </div>

        <div className="copyright">© {year} CRAFTLY</div>
      </div>
    </footer>
  )
}

export default Footer
