import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
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
            href="https://x.com/whale_stats" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Follow on X" 
            className="text-gray-400 transition hover:text-purple-500"
          >
            <FaXTwitter size={20} />
          </a>
          <a 
            href="https://t.me/wedoitalllynizy" 
            target="_blank" 
            rel="noopener noreferrer"
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