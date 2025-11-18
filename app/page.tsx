import HeroScene from "@/components/HeroScene";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const testimonials = [
  { imageUrl: "/reviews/cshield.png" },
  { imageUrl: "/reviews/review2.png" },
  { imageUrl: "/reviews/review3.png" },
  { imageUrl: "/reviews/review4.png" },
  { imageUrl: "/reviews/review5.jpg" },
  { imageUrl: "/reviews/review6.jpg" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute top-1/2 -right-20 h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* --- CONTENT LAYER --- */}

      {/* Hero Section */}
      <div className="relative z-10 h-screen w-full">
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold md:text-8xl lg:text-9xl">
            For Better Days
          </h1>
          <p className="mt-6 text-xl text-gray-300 md:text-2xl">
            A Web3 collective building, hunting, and collaborating.
          </p>
          <div className="mt-10 flex gap-6">
            {/* CHANGED: Link to X instead of Discord Button */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-purple-500"
            >
              Follow on X
            </a>
            <button className="rounded-lg border border-gray-600 bg-black/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:border-white">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="relative z-10 border-y border-gray-800 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-4 py-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">100+</p>
            <p className="text-sm uppercase tracking-wider text-gray-500">Collabs</p>
          </div>
        </div>
      </div>

      {/* "What We Do" Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-4xl font-bold">
            What We Do
          </h2>
          <p className="mb-12 text-center text-lg text-gray-400">
            We operate at the intersection of talent and opportunity.
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Tile 1 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Growth Strategizing & Events</h3>
              <p className="text-gray-400">
                From strategic partnerships to high-impact side events, we architect the momentum your protocol needs to scale effectively.
              </p>
            </div>

            {/* Tile 2 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Community Building</h3>
              <p className="text-gray-400">
                 We deploy veteran moderators and engagement strategies to turn passive holders into active, loyal evangelists.
              </p>
            </div>

            {/* Tile 3 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Graphics Design</h3>
              <p className="text-gray-400">
                High-fidelity branding and viral assets. We craft the visual language that makes your project impossible to ignore.
              </p>
            </div>

            {/* Tile 4 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Website Development</h3>
              <p className="text-gray-400">
                Immersive, responsive, and secure Web3 interfaces that connect users directly to the blockchain.
              </p>
            </div>

            {/* Tile 5 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Space Hosting & AMAs</h3>
              <p className="text-gray-400">
                We host professional, high-traffic audio stages that amplify your narrative and connect you directly with investors.
              </p>
            </div>
            
            {/* Tile 6 */}
             <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Raids and Shills</h3>
              <p className="text-gray-400">
                High-energy community mobilization. We direct concentrated engagement to take over timelines, break algorithms, and force your narrative into the spotlight.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Word on the Chain
          </h2>
          <p className="mb-12 text-center text-lg text-gray-400">
            Don't just take our word for it.
          </p>
        </div>
        <div className="w-full">
           <TestimonialCarousel reviews={testimonials} />
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 border-t border-gray-800 bg-black/80 py-20 backdrop-blur-md">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Join the Collective
          </h2>
          <p className="mb-8 text-center text-lg text-gray-400">
            Follow our journey and find your place in our community.
          </p>
          
          <div className="flex gap-8">
            <a 
              href="https://x.com" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X" 
              className="text-gray-500 transition hover:scale-110 hover:text-purple-500"
            >
              <FaXTwitter size={32} />
            </a>
            {/* REMOVED: Discord Icon */}
            <a 
              href="https://telegram.org" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Telegram"
              className="text-gray-500 transition hover:scale-110 hover:text-purple-500"
            >
              <FaTelegramPlane size={32} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}