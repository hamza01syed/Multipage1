// components/Footer.tsx
import { FC } from 'react';
import '@/styles/footer.style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Us Section */}
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              We are a team dedicated to providing top-notch digital solutions to help you succeed online.
              Contact us for web development, design, and digital marketing services.
            </p>
          </div>

          
          {/* Social Media Section */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
