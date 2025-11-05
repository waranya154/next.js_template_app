import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 px-4 py-2 rounded-full text-sm font-medium border border-red-800/50">
            <Sparkles className="w-4 h-4" />
            Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-gray-300 to-gray-500 bg-clip-text text-transparent leading-tight">
            Waranya Chimngam
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">นักศึกษาและนักพัฒนา</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            สวัสดีค่ะ ฉันคือ Waranya นักศึกษาที่หลงใหลในการพัฒนาเว็บไซต์
            และเทคโนโลยีสมัยใหม่ พร้อมสร้างสรรค์สิ่งใหม่ๆ อยู่เสมอ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-gray-800 text-white rounded-xl font-semibold shadow-lg shadow-red-900/50 hover:shadow-xl hover:shadow-red-800/50 transform hover:scale-105 transition-all flex items-center gap-2"
            >
              เกี่ยวกับฉัน
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-800 text-gray-300 rounded-xl font-semibold border-2 border-gray-700 hover:border-red-600 hover:text-red-400 transition-all"
            >
              ติดต่อฉัน
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-200">
          ทำไมต้องเลือกฉัน?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="เรียนรู้เร็ว"
            description="พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และปรับตัวเข้ากับการเปลี่ยนแปลงได้อย่างรวดเร็ว"
            gradient="from-red-600 to-red-800"
          />
          
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="สร้างสรรค์"
            description="ชอบออกแบบและพัฒนาสิ่งใหม่ๆ ด้วยความคิดสร้างสรรค์และใส่ใจในรายละเอียด"
            gradient="from-gray-700 to-gray-900"
          />
          
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="มุ่งมั่น"
            description="ทุ่มเทและใส่ใจในทุกโปรเจกต์ เพื่อผลลัพธ์ที่ดีที่สุด"
            gradient="from-red-500 to-gray-800"
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
    <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-200">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}