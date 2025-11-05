import { Users, Target, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-gray-900 bg-clip-text text-transparent">
            Waranya
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            นักศึกษาผู้หลงใหลในการเรียนรู้และพัฒนาทักษะใหม่ๆ
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">เกี่ยวกับฉัน</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              สวัสดีค่ะ ฉันชื่อ Waranya นักศึกษาที่มีความหลงใหลในการเรียนรู้
              และพัฒนาตนเองอยู่เสมอ ฉันสนใจด้านเทคโนโลยี การพัฒนาเว็บไซต์ 
              และการออกแบบที่ทันสมัย
            </p>
            <p>
              ในช่วงเวลาที่ศึกษาอยู่ ฉันมุ่งมั่นที่จะพัฒนาทักษะใหม่ๆ 
              ทั้งด้านการเขียนโปรแกรม การแก้ปัญหา และการทำงานเป็นทีม
              ฉันเชื่อว่าการเรียนรู้ไม่มีวันสิ้นสุด และทุกประสบการณ์คือบทเรียนที่มีค่า
            </p>
            <p>
              นอกจากการเรียนแล้ว ฉันยังชอบทำโปรเจกต์ส่วนตัว 
              เพื่อฝึกฝนทักษะและนำความรู้ที่ได้เรียนมาประยุกต์ใช้จริง
              เป้าหมายของฉันคือการเป็นมืออาชีพที่สามารถสร้างสรรค์สิ่งดีๆ ให้กับสังคม
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ValueCard
            icon={<Target className="w-8 h-8" />}
            title="เป้าหมายชัดเจน"
            description="มุ่งมั่นพัฒนาตนเองและสร้างผลงานที่มีคุณภาพ"
            color="bg-red-600"
          />
          
          <ValueCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="สร้างสรรค์"
            description="ชอบคิดไอเดียใหม่ๆ และแก้ปัญหาอย่างสร้างสรรค์"
            color="bg-gray-800"
          />
          
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="ทำงานเป็นทีม"
            description="เชื่อในพลังของการทำงานร่วมกันอย่างมีประสิทธิภาพ"
            color="bg-red-500"
          />
          
          <ValueCard
            icon={<Award className="w-8 h-8" />}
            title="มุ่งสู่ความเป็นเลิศ"
            description="ใส่ใจรายละเอียดและทำทุกอย่างด้วยความตั้งใจ"
            color="bg-gray-700"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-red-600 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="20+" label="โปรเจกต์ที่ทำ" />
            <StatCard number="3+" label="ปีการศึกษา" />
            <StatCard number="10+" label="ทักษะที่เชี่ยวชาญ" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-bold">{number}</div>
      <div className="text-red-100 text-lg">{label}</div>
    </div>
  );
}