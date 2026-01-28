"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'होम', path: '/' },
    { name: 'हमारे बारे में', path: '/about' },
    { name: 'पाठ्यक्रम', path: '/curriculum' },
    { name: 'शिक्षक', path: '/faculty' },
    { name: 'प्रवेश', path: '/admission' },
    { name: 'गैलरी', path: '/gallery' },
    { name: 'संपर्क', path: '/contact' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#DAA520]/20 shadow-sm">
      <div className="max-w-400 mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/shreepadmavaidyam.jpg" 
              alt="Shree Padma Vaidyam Logo" 
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="font-['Playfair_Display'] text-[1.75rem] leading-[1.8] tracking-[0.01em] text-[#333333]">श्री</h1>
              <p className="font-['Open_Sans'] text-[0.875rem] leading-tight tracking-[0.02em] text-[#333333]/60">पद्म वैद्यम</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] transition-colors ${
                  isActive(link.path)
                    ? 'text-[#FF9933] font-semibold'
                    : 'text-[#333333]/70 hover:text-[#FF9933]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/admission">
              <Button className="bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 px-6 py-5 font-semibold rounded-lg">
                अभी आवेदन करें
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#333333] hover:text-[#FF9933] transition-colors"
            aria-label="मेनू टॉगल करें"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FFFFFF] border-t border-[#DAA520]/20"
          >
            <nav className="px-8 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-['Open_Sans'] text-[1.25rem] leading-[1.7] tracking-[0.01em] py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-[#FF9933] font-semibold'
                      : 'text-[#333333]/70 hover:text-[#FF9933]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 py-5 font-semibold rounded-lg mt-4">
                  अभी आवेदन करें
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
