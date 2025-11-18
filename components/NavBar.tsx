import Link from 'next/link';
// We keep Discord and Telegram from the standard set
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
// We import the specific X logo from the 'fa6' (FontAwesome 6) set
import { FaXTwitter } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        
        <Link href="/" className="text-xl font-bold text-white transition hover:text-purple-400">
          For Better Days
        </Link>

        <div className="flex items-center gap-6">
          <a 
            href="#" 
            aria-label="Follow on X" 
            className="text-gray-400 transition hover:text-purple-500"
          >
            {/* The new X Logo */}
            <FaXTwitter size={20} />
          </a>
          <a 
            href="#" 
            aria-label="Join our Discord"
            className="text-gray-400 transition hover:text-purple-500"
          >
            <FaDiscord size={20} />
          </a>
          <a 
            href="#" 
            aria-label="Join our Telegram"
            className="text-gray-400 transition hover:text-purple-500"
          >
            <FaTelegramPlane size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}