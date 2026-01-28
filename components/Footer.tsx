import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Admission Policy', path: '/admission' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  const curriculumLinks = [
    { name: 'Vedic Studies', path: '/curriculum#vedic' },
    { name: 'Modern Education', path: '/curriculum#modern' },
    { name: 'Arts & Culture', path: '/curriculum#arts' },
    { name: 'Yoga & Wellness', path: '/curriculum#yoga' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="w-full bg-[#333333] text-[#FFFFFF]">
      <div className="max-w-400 mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/shreepadmavaidyam.jpg" 
              alt="Shree Padma Vaidyam Logo" 
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="font-['Playfair_Display'] text-[1.75rem] leading-[1.8] tracking-[0.01em] text-[#FFFFFF] p-5">श्री पद्मवैद्यम</h1>
            </div>
          </Link>
            <p className="font-['Open_Sans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#FFFFFF]/80 leading-relaxed">
              एक अध्ययन स्थल जहाँ शाश्वत वैदिक परंपराएँ समकालीन शैक्षिक उत्कृष्टता के साथ मिलती हैं।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#FFFFFF] mb-6">त्वरित लिंक</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80 hover:text-[#FF9933] transition-colors"
                  >
                    {link.name === 'About Us' ? 'हमारे बारे में' : link.name === 'Admission Policy' ? 'प्रवेश नीति' : link.name === 'Privacy Policy' ? 'गोपनीयता नीति' : link.name === 'Terms & Conditions' ? 'नियम और शर्तें' : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Curriculum */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#FFFFFF] mb-6">पाठ्यक्रम</h4>
            <ul className="space-y-3">
              {curriculumLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80 hover:text-[#FF9933] transition-colors"
                  >
                    {link.name === 'Vedic Studies' ? 'वैदिक अध्ययन' : link.name === 'Modern Education' ? 'आधुनिक शिक्षा' : link.name === 'Arts & Culture' ? 'कला और संस्कृति' : link.name === 'Yoga & Wellness' ? 'योग और स्वास्थ्य' : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#FFFFFF] mb-6">संपर्क करें</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80">
                  493, सरस्वती नगर कॉलोनी, छित्तुपुर, वाराणसी-221005 (उत्तर प्रदेश), भारत
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80 hover:text-[#FF9933] transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:info@gurukul.edu"
                  className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80 hover:text-[#FF9933] transition-colors"
                >
                  info@shreepadmavaidyam.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="font-['Open_Sans'] text-[1rem] tracking-[0.01em] font-normal text-[#FFFFFF]/70 mb-3">कार्यालय समय:</p>
              <p className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/80">
                सोम - शनि: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#FFFFFF]/70">हमें फॉलो करें:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#FFFFFF]/70 text-center md:text-right">
              © {new Date().getFullYear()} गुरुकुल। सर्वाधिकार सुरक्षित। | उत्कृष्टता के साथ वेबसाइट डिजाइन की गई
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
