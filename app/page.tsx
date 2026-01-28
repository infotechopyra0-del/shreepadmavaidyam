"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Heart, 
  Leaf, 
  Users, 
  Download, 
  ArrowRight, 
  Sun, 
  Flower, 
  Music, 
  Activity, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CurriculumItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ElementType;
}

interface FacultyMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface AdmissionStep {
  step: string;
  title: string;
  description: string;
}

const CORE_FEATURES: Feature[] = [
  {
    icon: Leaf,
    title: 'शांत परिवेश',
    description: 'प्रकृति से घिरे शिक्षण स्थान जो शांति और एकाग्रता को बढ़ावा देते हैं।'
  },
  {
    icon: BookOpen,
    title: 'मूल्य-आधारित शिक्षा',
    description: 'धार्मिक सिद्धांतों और शाश्वत वैदिक ज्ञान में निहित।'
  },
  {
    icon: Heart,
    title: 'समग्र विकास',
    description: 'मानसिक, शारीरिक और आध्यात्मिक कल्याण का पोषण।'
  },
  {
    icon: Users,
    title: 'गुरु-शिष्य परंपरा',
    description: 'प्राचीन गुरु-शिष्य परंपरा में व्यक्तिगत मार्गदर्शन।'
  }
];

const CURRICULUM_DATA: CurriculumItem[] = [
  {
    id: 'c1',
    title: 'योग और ध्यान',
    category: 'कल्याण',
    description: 'मानसिक और शारीरिक स्वास्थ्य, प्राणायाम और माइंडफुलनेस पर केंद्रित दैनिक अभ्यास।',
    features: ['दैनिक आसन अभ्यास', 'प्राणायाम तकनीकें', 'माइंडफुलनेस ध्यान'],
    image: '/images/activity.png',
    icon: Activity
  },
  {
    id: 'c2',
    title: 'वैदिक ज्ञान',
    category: 'परंपरा',
    description: 'संस्कृत, वेद, उपनिषद और भगवद गीता का गहन अध्ययन और प्राचीन ज्ञान का संरक्षण।',
    features: ['संस्कृत भाषा', 'वैदिक गणित', 'शास्त्रीय पाठ और जाप'],
    image: '/images/sun.png',
    icon: Sun
  },
  {
    id: 'c3',
    title: 'आधुनिक शैक्षिक पाठ्यक्रम',
    category: 'आधुनिक',
    description: 'विज्ञान, गणित और कंप्यूटर अध्ययन में समकालीन बोर्ड-समर्थ पाठ्यक्रम।',
    features: ['STEM शिक्षा', 'कंप्यूटर लैब्स', 'अंग्रेज़ी दक्षता'],
    image: '/images/bookopen.png',
    icon: BookOpen
  },
  {
    id: 'c4',
    title: 'कला और संस्कृति',
    category: 'अभिव्यक्ति',
    description: 'शास्त्रीय भारतीय संगीत, नृत्य (जैसे भरतनाट्यम) और ललित कला।',
    features: ['शास्त्रीय संगीत', 'पारंपरिक नृत्य', 'ललित कला'],
    image: '/images/music.png',
    icon: Music
  }
];

const FACULTY_DATA: FacultyMember[] = [
  {
    id: 'f1',
    name: 'आचार्य विश्वास',
    role: 'वैदिक अध्ययन विभागाध्यक्ष',
    bio: 'वेदों और उपनिषदों के शिक्षण में 30 वर्ष से अधिक का अनुभव।',
    image: '/images/acharyavishwas.png'
  },
  {
    id: 'f2',
    name: 'डॉ. सारा शर्मा',
    role: 'प्रधानाचार्य, आधुनिक विज्ञान',
    bio: 'भौतिकी में पीएचडी; विज्ञान और आध्यात्मिकता के समन्वय के लिए समर्पित।',
    image: '/images/sarahsharma.png'
  },
  {
    id: 'f3',
    name: 'पंडित रवि कुमार',
    role: 'शास्त्रीय संगीत प्रशिक्षक',
    bio: 'संगीत विरासत को आगे बढ़ाने के लिए समर्पित प्रसिद्ध सितार मास्टर।',
    image: '/images/panditravi.png'
  }
];

const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: '01',
    title: 'अर्हता जाँचें',
    description: 'वांछित कक्षा के लिए आयु आवश्यकताओं और शैक्षिक पूर्वापेक्षाओं की जाँच करें।'
  },
  {
    step: '02',
    title: 'आवेदन जमा करें',
    description: 'ऑनलाइन फॉर्म भरें या PDF डाउनलोड कर आवश्यक दस्तावेज़ों के साथ जमा करें।'
  },
  {
    step: '03',
    title: 'परिचर्चा',
    description: 'छात्र और अभिभावक अध्यापकों के साथ मैत्रीपूर्ण परिचर्चा में भाग लेते हैं।'
  },
  {
    step: '04',
    title: 'नामांकन',
    description: 'चयन होने पर, शुल्क भुगतान और प्रवेश औपचारिकताएँ पूरी करें।'
  }
];


const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-12 opacity-30">
    <div className="h-px w-24 bg-[#C65D3B]" />
    <Flower className="w-6 h-6 text-[#C65D3B] mx-4" />
    <div className="h-px w-24 bg-[#C65D3B]" />
  </div>
);

const ParallaxText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'gurukul-admission-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { scrollYProgress } = useScroll();
  const textureOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.05]);
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#333333] font-['opensans'] overflow-clip selection:bg-[#FF9933]/20 selection:text-[#FFFFFF]">
      {/* Global Texture Overlay */}
      <motion.div 
        style={{ opacity: textureOpacity }}
        className="fixed inset-0 pointer-events-none z-50 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"
      />
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/images/gurukulgathering.jpeg"
              alt="Gurukul gathering with faculty and students in traditional attire"
              width={1920}
              height={1080}
              className="w-full h-full object-cover brightness-[0.85] sepia-[0.1]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-[#F5E6D3]/90" />
          <div className="absolute inset-0 bg-[radial-linear(circle_at_center,transparent,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >

              <div className="mb-6 flex items-center gap-4 opacity-80">
                <div className="h-px w-12 bg-[#FFFFFF]/60" />
                <span className="text-[#FFFFFF]/90 uppercase text-[1rem] leading-normal tracking-[0.01em] font-normal">स्थापित 1998</span>
                <div className="h-px w-12 bg-[#FFFFFF]/60" />
              </div>
            
              <h1 className="font-['playfairdisplay'] text-[3rem] leading-[1.1] tracking-tight font-bold md:text-[4rem] md:leading-[1.05] lg:text-[6rem] lg:leading-none text-[#FFFFFF] mb-8  drop-shadow-lg">
                परंपरा और <br />
                <span className="text-[#FF9933] italic">आधुनिकता</span>
              </h1>
            
              <p className="font-['opensans'] text-[1.25rem] leading-[1.7] tracking-[0.01em] md:text-[1.75rem] md:leading-[1.8] md:font-semibold text-[#FFFFFF]/90 mb-12 max-w-3xl font-normal">
                शाश्वत वैदिक ज्ञान और समकालीन शिक्षा के माध्यम से समग्र विकास का पोषण।
              </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <Button
                onClick={handleBrochureDownload}
                className="bg-[#FF9933] hover:bg-[#FF9933]/90 text-[#FFFFFF] px-10 py-7 text-[1.25rem] leading-[1.7] tracking-[0.01em] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#FF9933]/25 hover:-translate-y-1"
              >
                <Download className="mr-3 h-5 w-5" />
                ब्रोशर डाउनलोड करें
              </Button>
              <Link href="/admission">
                <Button
                  variant="outline"
                    className="bg-[#FFFFFF]/10 backdrop-blur-sm border-[#FFFFFF]/30 text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#333333] px-10 py-7 text-[1.25rem] leading-[1.7] tracking-[0.01em] rounded-full transition-all duration-300"
                >
                  अभी आवेदन करें
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FFFFFF]/60"
        >
          <span className="text-[0.875rem] leading-tight uppercase tracking-widest">अन्वेषण के लिए स्क्रोल करें</span>
          <div className="w-px h-12 bg-linear-to-b from-[#FFFFFF]/60 to-transparent" />
        </motion.div>
      </section>

      {/* --- PHILOSOPHY & VISION (Sticky Layout) --- */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/2">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-[#C65D3B] font-bold tracking-widest uppercase text-[1rem] leading-normal mb-4 block">हमारा दर्शन</span>
                  <h2 className="font-['playfairdisplay'] text-[3rem] leading-[1.1] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] lg:text-[4rem] lg:leading-[1.05] text-[#333333] mb-8">
                    प्राचीन ज्ञान और आधुनिक उत्कृष्टता का संगम
                  </h2>
                  <p className="text-[1.25rem] leading-[1.7] tracking-[0.01em] md:text-[1.5rem] md:leading-[1.75] text-[#333333]/70 mb-10 max-w-xl">
                    हमारा गुरुकुल समग्र शिक्षा का एक प्रकाशस्तंभ है, जो पवित्र गुरु-शिष्य परम्परा का सम्मान करते हुए
                    समकालीन शिक्षाशास्त्र में उत्कृष्टता को अपनाता है। हम युवा मनों का पोषण करते हैं ताकि वे जागृत
                    व्यक्तित्व बनें और धर्मिक मूल्यों की मशाल को आगे बढ़ाएँ।
                  </p>
                  <Link href="/about">
                    <Button variant="link" className="text-[#C65D3B] p-0 text-[1.25rem] leading-[1.7] tracking-[0.01em] font-semibold hover:text-[#C65D3B]/80 group">
                      हमारी पूरी दृष्टि पढ़ें
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-1/2 flex flex-col gap-12">
              {CORE_FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-10 rounded-2xl border border-[#DAA520]/10 shadow-sm hover:shadow-xl hover:border-[#DAA520]/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-[#F5E6D3] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-[#FF9933]" />
                  </div>
                  <h3 className="font-['playfairdisplay'] text-[2rem] leading-[1.2] tracking-[0.01em] font-bold text-[#333333] mb-4 group-hover:text-[#FF9933] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[1.25rem] leading-[1.7] tracking-[0.01em] text-[#333333]/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />
      {/* --- CURRICULUM (Horizontal Scroll) --- */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#138808] font-bold tracking-[0.01em] uppercase text-[1rem] leading-normal mb-4 block">शैक्षिक मार्ग</span>
            <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-6">समग्र पाठ्यक्रम</h2>
            <p className="text-[1.25rem] leading-[1.7] tracking-[0.01em] text-[#333333]/60 max-w-2xl mx-auto">
              पारंपरिक वैदिक विज्ञान और आधुनिक शैक्षणिक विषयों का संतुलित समन्वय।
            </p>
          </motion.div>
        </div>

        <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
          <div className="flex gap-8 px-6 md:px-12 lg:px-24 min-w-max">
            {CURRICULUM_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-[85vw] md:w-122.5 shrink-0 group relative overflow-hidden rounded-3xl bg-[#F5E6D3] border border-[#DAA520]/10"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={448}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md p-3 rounded-full shadow-lg">
                    <item.icon className="w-6 h-6 text-[#FF9933]" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-[0.875rem] leading-tight font-bold text-[#DAA520] uppercase tracking-wider mb-2 block">{item.category}</span>
                  <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold md:text-[2rem] md:leading-[1.2] md:font-bold mb-4 text-[#333333]">{item.title}</h3>
                  <p className="text-[#333333]/70 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[1rem] leading-normal tracking-[0.01em] text-[#333333]/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#138808] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FACULTY SECTION --- */}
      <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-[#F5E6D3] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#FFFFFF] to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <span className="text-[#C65D3B] font-bold uppercase text-[1rem] leading-normal tracking-[0.01em] mb-4 block">हमारे शिक्षक</span>
              <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333]">मार्गदर्शक</h2>
            </div>
              <Link href="/faculty" className="hidden md:block">
              <Button variant="outline" className="border-[#333333]/20 hover:bg-[#333333] hover:text-[#FFFFFF] transition-colors">
                सभी शिक्षक देखें
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FACULTY_DATA.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-3/4 overflow-hidden rounded-lg mb-6 bg-[#DAA520]/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={448}
                    height={576}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-[#FFFFFF] text-[1rem] leading-normal tracking-[0.01em] font-light italic">{member.bio}</p>
                  </div>
                </div>
                <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-1">{member.name}</h3>
                <p className="text-[#DAA520] font-medium text-[1rem] leading-normal uppercase tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
          
            <div className="mt-12 md:hidden text-center">
            <Link href="/faculty">
              <Button variant="outline" className="w-full border-[#333333]/20">सभी शिक्षक देखें</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- ADMISSION PROCESS --- */}
      <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-[#333333] text-[#F5E6D3] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-32"
              >
                <h2 className="font-['playfairdisplay'] text-[3rem] leading-[1.1] tracking-[0.01em] font-bold md:text-[4rem] md:leading-[1.05] text-[#FFFFFF] mb-8">
                  अपना सफर <br />
                  <span className="text-[#FF9933]">शुरू करें</span>
                </h2>
                <p className="text-[#FFFFFF]/70 text-[1.25rem] leading-[1.7] tracking-[0.01em] mb-12 max-w-md">
                  हम उन विद्यार्थियों का स्वागत करते हैं जो सीखने, विकसित होने और अनुशासन व उच्च उद्देश्य से परिपूर्ण
                  जीवन अपनाने के लिए उत्सुक हैं।
                </p>
                <div className="flex flex-col gap-4">
                  <Link href="/admission">
                    <Button className="bg-[#FFFFFF] text-[#333333] hover:bg-[#FFFFFF]/90 w-full sm:w-auto px-8 py-6 text-[1.25rem] leading-[1.7] tracking-[0.01em]">
                      आवेदन शुरू करें
                    </Button>
                  </Link>
                    <div className="flex items-center gap-4 text-[#FFFFFF]/50 mt-4">
                    <Phone className="w-5 h-5" />
                    <span>प्रवेश हेल्पलाइन: +91 98765 43210</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-[#FFFFFF]/10" />
              <div className="space-y-16">
                {ADMISSION_STEPS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 bg-[#FFFFFF]/5 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#DAA520] font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold z-10">
                      {step.step}
                    </div>
                    <h3 className="font-['playfairdisplay'] text-[2rem] leading-[1.2] tracking-[0.01em] font-bold text-[#FFFFFF] mb-3">{step.title}</h3>
                    <p className="text-[#FFFFFF]/60 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW --- */}
      <section className="w-full py-32 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-4">गुरुकुल में जीवन</h2>
            <p className="text-[#333333]/60">हमारे दैनिक जीवन और उत्सवों की झलकियाँ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[80vh] md:h-150">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group"
            >
                <Image
                  src="/images/morningassembly.png"
                  alt="Morning Assembly"
                  width={768}
                  height={576}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 text-[#FFFFFF]">
                <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold">सुबह की सभा</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="/images/library.png"
                alt="Library"
                width={768}
                height={576}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="/images/yagyashala.png"
                alt="Yagya Shala"
                width={768}
                height={576}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 text-[#FFFFFF]">
                <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium">यज्ञशाला</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group"
            >
              <Image
                src="/images/sports.png"
                alt="Sports"
                width={768}
                height={576}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link href="/gallery">
                <Button variant="ghost" className="text-[#C65D3B] hover:text-[#C65D3B]/80 hover:bg-[#C65D3B]/10">
                सम्पूर्ण गैलरी देखें <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CONTACT & LOCATION --- */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#FFFFFF] border-t border-[#DAA520]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold text-[#333333] mb-8">हमारे परिसर का दौरा करें</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center shrink-0 text-[#FF9933]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium mb-2">पता</h3>
                    <p className="text-[#333333]/70 leading-relaxed">
                      493, सरस्वती नगर कॉलोनी, छित्तुपुर, वाराणसी-221005 (उत्तर प्रदेश), भारत
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center shrink-0 text-[#FF9933]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium mb-2">हमें मेल करें</h3>
                    <p className="text-[#333333]/70">admissions@shreepadmavaidyam.com</p>
                    <p className="text-[#333333]/70">info@shreepadmavaidyam.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center shrink-0 text-[#FF9933]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium mb-2">हमें कॉल करें</h3>
                    <p className="text-[#333333]/70">+91 98765 43210</p>
                    <p className="text-[#333333]/70">+91 12345 67890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5E6D3] p-8 md:p-12 rounded-3xl border border-[#DAA520]/10">
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold mb-6">जानकारी अनुरोध करें</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]/60">नाम</label>
                    <input type="text" className="w-full p-3 rounded-lg bg-[#FFFFFF] border border-[#DAA520]/20 focus:border-[#FF9933] outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]/60">फ़ोन</label>
                    <input type="tel" className="w-full p-3 rounded-lg bg-[#FFFFFF] border border-[#DAA520]/20 focus:border-[#FF9933] outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333]/60">ईमेल</label>
                  <input type="email" className="w-full p-3 rounded-lg bg-[#FFFFFF] border border-[#DAA520]/20 focus:border-[#FF9933] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333]/60">संदेश</label>
                  <textarea rows={4} className="w-full p-3 rounded-lg bg-[#FFFFFF] border border-[#DAA520]/20 focus:border-[#FF9933] outline-none transition-colors" />
                </div>
                <Button className="w-full bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 py-6 text-[1.25rem] leading-[1.7] tracking-[0.01em]">
                  संदेश भेजें
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}