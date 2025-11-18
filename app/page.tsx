import HeroScene from "@/components/HeroScene";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
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
      
      {/* --- BACKGROUND LAYER (Grid & Glows) --- */}
      {/* Fixed position ensures it stays behind everything and doesn't move */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* The Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        
        {/* Glow Effect 1: Top Left Purple */}
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
        {/* Glow Effect 2: Middle Right Blue/Purple */}
        <div className="absolute top-1/2 -right-20 h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>


      {/* --- CONTENT LAYER --- */}
      {/* We use 'relative z-10' on containers to ensure they sit ON TOP of the background */}

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
            {/* CHANGED: Blue button to Purple */}
            <button className="rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-purple-500">
              Join Discord
            </button>
            <button className="rounded-lg border border-gray-600 bg-black/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:border-white">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="relative z-10 border-y border-gray-800 bg-black/60 backdrop-blur-md">
        {/* CHANGED: max-w-5xl to max-w-7xl */}
        <div className="container mx-auto flex max-w-7xl flex-wrap justify-center gap-12 px-4 py-12 md:justify-between">
          <div className="text-center">
            <p className="text-4xl font-bold text-white">100+</p>
            <p className="text-sm uppercase tracking-wider text-gray-500">Members</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-sm uppercase tracking-wider text-gray-500">Projects Shipped</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">24/7</p>
            <p className="text-sm uppercase tracking-wider text-gray-500">Alpha Calls</p>
          </div>
        </div>
      </div>

      {/* "What We Do" Section */}
      <section className="relative z-10 py-20">
        {/* CHANGED: max-w-5xl to max-w-7xl */}
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-4xl font-bold">
            What We Do
          </h2>
          <p className="mb-12 text-center text-lg text-gray-400">
            We operate at the intersection of talent and opportunity.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Growth strategizing and event organizing </h3>
              <p className="text-gray-400">
                We actively source and secure top-tier opportunities for our
                members, from bounties to full-time roles.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Graphics design</h3>
              <p className="text-gray-400">
                Our team builds and contributes to cutting-edge projects,
                from new DeFi protocols to NFT launches.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Community building and managing</h3>
              <p className="text-gray-400">
                Sharing vetted calls, in-depth market analysis, and investment
                insights for our community.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Space hosting and AMAs</h3>
              <p className="text-gray-400">
                Sharing vetted calls, in-depth market analysis, and investment
                insights for our community.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/80 p-6 backdrop-blur-sm">
              <h3 className="mb-3 text-2xl font-semibold text-purple-400">Space hosting and AMAs</h3>
              <p className="text-gray-400">
                Sharing vetted calls, in-depth market analysis, and investment
                insights for our community.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        
        {/* PART 1: Header Text (Kept inside container so it stays centered) */}
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Word on the Chain
          </h2>
          <p className="mb-12 text-center text-lg text-gray-400">
            Don't just take our word for it.
          </p>
        </div>

        {/* PART 2: The Carousel (Moved OUTSIDE the container to span full width) */}
        <div className="w-full">
           <TestimonialCarousel reviews={testimonials} />
        </div>

      </section>

      {/* Join the Community Section (Footer) */}
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
              href="#" 
              aria-label="Follow on X" 
              className="text-gray-500 transition hover:scale-110 hover:text-purple-500"
            >
              {/* The new X Logo */}
              <FaXTwitter size={32} />
            </a>
            <a 
              href="#" 
              aria-label="Join our Discord"
              className="text-gray-500 transition hover:scale-110 hover:text-purple-500"
            >
              <FaDiscord size={32} />
            </a>
            <a 
              href="#" 
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