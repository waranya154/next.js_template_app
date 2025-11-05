'use client';

import { useState } from 'react';

interface Question {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function QuestionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const newQuestion: Question = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleString('th-TH')
    };

    setQuestions([newQuestion, ...questions]);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 via-red-800 to-gray-900 text-white py-20 shadow-lg shadow-red-900/50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">ส่งคำถามของคุณ</h1>
          <p className="text-lg opacity-90">
            มีคำถามอะไรเกี่ยวกับ <span className="text-red-400 font-semibold">Waranya</span>? ส่งมาถามได้เลยค่ะ
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 bg-red-900/30 border border-red-600 text-red-400 px-6 py-4 rounded-lg flex items-center gap-3 animate-pulse shadow-md shadow-red-800/40">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">ส่งคำถามเรียบร้อยแล้ว! เราจะติดต่อกลับเร็วๆ นี้</span>
            </div>
          )}

          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-950 border border-gray-800 rounded-2xl shadow-xl shadow-red-900/30 p-8 mb-12">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-red-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-800/40">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-100 mb-2">แบบฟอร์มคำถาม</h2>
              <p className="text-gray-400">กรอกข้อมูลและคำถามของคุณ เราจะตอบกลับโดยเร็วที่สุด</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="ชื่อ-นามสกุล" name="name" value={formData.name} onChange={handleInputChange} required />
                <InputField label="อีเมล" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <InputField label="หัวข้อคำถาม" name="subject" value={formData.subject} onChange={handleInputChange} required />
              <TextAreaField label="รายละเอียดคำถาม" name="message" value={formData.message} onChange={handleInputChange} required />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-700 to-gray-800 text-white py-4 rounded-lg font-semibold text-lg hover:from-red-800 hover:to-gray-900 transition-all shadow-lg shadow-red-900/40 hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    กำลังส่งคำถาม...
                  </span>
                ) : (
                  'ส่งคำถาม'
                )}
              </button>
            </form>
          </div>

          {/* Questions List */}
          {questions.length > 0 && (
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl shadow-xl shadow-red-900/20 p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586l5.414 5.414V19a2 2 0 01-2 2z" />
                </svg>
                คำถามที่ส่งล่าสุด
              </h3>
              <div className="space-y-4">
                {questions.map(q => (
                  <div key={q.id} className="border border-red-900/30 rounded-lg p-6 bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-lg hover:shadow-red-900/30 transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-100">{q.subject}</h4>
                        <p className="text-sm text-gray-400">โดย: {q.name}</p>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">{q.date}</span>
                    </div>
                    <p className="text-gray-300">{q.message}</p>
                    <p className="mt-2 text-sm text-gray-500">📧 {q.email}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, type = 'text', value, onChange, required = false }: any) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-red-600 outline-none placeholder-gray-500"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange, required = false }: any) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={6}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-red-600 outline-none resize-none placeholder-gray-500"
      />
    </div>
  );
}
