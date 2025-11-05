import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Welcome to our amazing app
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Build Something
            <br />
            Amazing Today
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of Next.js with beautiful, modern design.
            Fast, scalable, and optimized for the best user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Us?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="Lightning Fast"
            description="Optimized performance with Next.js App Router for blazing fast page loads."
            gradient="from-yellow-400 to-orange-500"
          />
          
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Beautiful Design"
            description="Modern UI with Tailwind CSS and thoughtful animations that delight users."
            gradient="from-purple-400 to-pink-500"
          />
          
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="User Focused"
            description="Built with user experience in mind, responsive and accessible on all devices."
            gradient="from-pink-400 to-red-500"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}