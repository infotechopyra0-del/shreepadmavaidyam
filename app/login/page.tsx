"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Flower
} from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3] font-['opensans']">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* Logo/Header */}
            <div className="text-center mb-8 lg:mb-12">
              <Link href="/" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4 lg:mb-6"
                >
                  <div className="w-20 h-20 mx-auto bg-linear-to-br from-[#FF9933] to-[#DAA520] rounded-full flex items-center justify-center shadow-lg">
                    <Flower className="w-10 h-10 text-[#FFFFFF]" />
                  </div>
                </motion.div>
              </Link>
              <h1 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold text-[#333333] mb-2">
                स्वागत है
              </h1>
              <p className="text-[1rem] leading-normal tracking-[0.01em] text-[#333333]/60">
                अपने खाते में लॉगिन करें
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[1rem] leading-normal tracking-[0.01em] font-medium text-[#333333]">
                  ईमेल
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-[#FFFFFF] border-2 border-[#DAA520]/20 rounded-xl focus:border-[#FF9933] outline-none transition-all duration-300 text-[1rem] leading-normal tracking-[0.01em]"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-[1rem] leading-normal tracking-[0.01em] font-medium text-[#333333]">
                  पासवर्ड
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#333333]/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-4 bg-[#FFFFFF] border-2 border-[#DAA520]/20 rounded-xl focus:border-[#FF9933] outline-none transition-all duration-300 text-[1rem] leading-normal tracking-[0.01em]"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#333333]/40 hover:text-[#333333] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-[#FF9933]" />
                  <span className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#333333]/60">
                    मुझे याद रखें
                  </span>
                </label>
                <Link href="/forgot-password" className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#FF9933] hover:text-[#FF9933]/80 font-medium">
                  पासवर्ड भूल गए?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#FFFFFF] py-4 text-[1.25rem] leading-[1.7] tracking-[0.01em] rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                लॉगिन करें
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Right Side - Image/Design */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/gurukulgathering.jpeg"
                alt="Gurukul"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#FF9933]/90 to-[#DAA520]/80"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-[#FFFFFF]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-[#FFFFFF]/60" />
                    <Flower className="w-8 h-8" />
                    <div className="h-px w-12 bg-[#FFFFFF]/60" />
                  </div>
                </div>
                
                <h2 className="font-['playfairdisplay'] text-[3rem] leading-[1.1] tracking-[0.01em] font-bold mb-6">
                  परंपरा और आधुनिकता का संगम
                </h2>
                
                <p className="text-[1.25rem] leading-[1.7] tracking-[0.01em] max-w-lg mx-auto mb-8 text-[#FFFFFF]/90">
                  शाश्वत वैदिक ज्ञान और समकालीन शिक्षा के माध्यम से समग्र विकास का पोषण
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                  <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF]/20">
                    <div className="text-[2rem] leading-[1.2] tracking-[0.01em] font-bold mb-1">30+</div>
                    <div className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#FFFFFF]/80">वर्षों का अनुभव</div>
                  </div>
                  <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF]/20">
                    <div className="text-[2rem] leading-[1.2] tracking-[0.01em] font-bold mb-1">500+</div>
                    <div className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#FFFFFF]/80">विद्यार्थी</div>
                  </div>
                  <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF]/20">
                    <div className="text-[2rem] leading-[1.2] tracking-[0.01em] font-bold mb-1">50+</div>
                    <div className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#FFFFFF]/80">शिक्षक</div>
                  </div>
                  <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-4 border border-[#FFFFFF]/20">
                    <div className="text-[2rem] leading-[1.2] tracking-[0.01em] font-bold mb-1">100%</div>
                    <div className="text-[0.875rem] leading-tight tracking-[0.02em] text-[#FFFFFF]/80">सफलता दर</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Flower className="w-16 h-16 text-[#FFFFFF]/20" />
              </motion.div>
            </div>
            <div className="absolute bottom-10 left-10">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Flower className="w-12 h-12 text-[#FFFFFF]/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}