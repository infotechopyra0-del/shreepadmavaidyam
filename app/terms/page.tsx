"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertCircle, Scale, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TermSection {
  id: string;
  icon: React.ElementType;
  title: string;
  content: string[];
}

const TERM_SECTIONS: TermSection[] = [
  {
    id: 'acceptance',
    icon: UserCheck,
    title: 'स्वीकृति और उपयोग',
    content: [
      'श्री पद्म वैद्यम गुरुकुल की वेबसाइट और सेवाओं का उपयोग करके, आप इन नियमों और शर्तों से बाध्य होने के लिए सहमत होते हैं।',
      'यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हमारी वेबसाइट का उपयोग न करें।',
      'हम समय-समय पर इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। निरंतर उपयोग संशोधित शर्तों की स्वीकृति का संकेत देता है।',
      '18 वर्ष से कम आयु के उपयोगकर्ताओं को माता-पिता या अभिभावक की सहमति की आवश्यकता है।'
    ]
  },
  {
    id: 'admission',
    icon: FileText,
    title: 'प्रवेश और नामांकन',
    content: [
      'सभी प्रवेश आवेदन संस्था की प्रवेश नीति और उपलब्धता के अधीन हैं।',
      'आवेदन जमा करना प्रवेश की गारंटी नहीं देता। अंतिम निर्णय प्रवेश समिति का होगा।',
      'आवेदन में दी गई सभी जानकारी सत्य और सटीक होनी चाहिए। गलत जानकारी प्रवेश रद्द करने का कारण बन सकती है।',
      'प्रवेश स्वीकृति पत्र प्राप्त करने के बाद, निर्धारित समय सीमा के भीतर शुल्क भुगतान आवश्यक है।',
      'नामांकन रद्द करने की स्थिति में शुल्क वापसी नीति लागू होगी।'
    ]
  },
  {
    id: 'fees',
    icon: Scale,
    title: 'शुल्क और भुगतान',
    content: [
      'सभी शुल्क भारतीय रुपये में हैं और निर्धारित तिथियों तक भुगतान किया जाना चाहिए।',
      'देर से भुगतान पर विलंब शुल्क लागू हो सकता है।',
      'शुल्क की राशि और संरचना संस्था द्वारा समय-समय पर संशोधित की जा सकती है।',
      'एक बार भुगतान किया गया शुल्क आमतौर पर गैर-वापसी योग्य होता है, सिवाय विशेष परिस्थितियों के।',
      'छात्रवृत्ति और वित्तीय सहायता योग्यता और उपलब्धता के आधार पर प्रदान की जाती है।',
      'शुल्क में ट्यूशन, पुस्तकालय, प्रयोगशाला और अन्य शैक्षणिक सुविधाएं शामिल हैं।'
    ]
  },
  {
    id: 'conduct',
    icon: Shield,
    title: 'आचार संहिता',
    content: [
      'सभी छात्रों को संस्था की आचार संहिता का पालन करना अनिवार्य है।',
      'गुरुकुल के मूल्यों - सत्य, अहिंसा, और धर्म - का सम्मान करना आवश्यक है।',
      'शिक्षकों, कर्मचारियों और सहपाठियों के साथ सम्मानजनक व्यवहार अपेक्षित है।',
      'किसी भी प्रकार का उत्पीड़न, धमकाना या भेदभाव सख्ती से वर्जित है।',
      'परिसर में नशीले पदार्थों, तंबाकू और शराब का उपयोग पूर्णतः निषिद्ध है।',
      'आचार संहिता का उल्लंघन अनुशासनात्मक कार्रवाई का कारण बन सकता है।'
    ]
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'गोपनीयता और डेटा सुरक्षा',
    content: [
      'हम आपकी व्यक्तिगत जानकारी की गोपनीयता और सुरक्षा को महत्व देते हैं।',
      'एकत्रित डेटा का उपयोग केवल शैक्षणिक और प्रशासनिक उद्देश्यों के लिए किया जाएगा।',
      'हम तीसरे पक्ष के साथ आपकी जानकारी साझा नहीं करेंगे, जब तक कि कानूनी रूप से आवश्यक न हो।',
      'माता-पिता/अभिभावक को छात्र की प्रगति और गतिविधियों की जानकारी प्राप्त करने का अधिकार है।',
      'डेटा सुरक्षा के लिए उद्योग-मानक उपायों का उपयोग किया जाता है।',
      'अधिक जानकारी के लिए हमारी गोपनीयता नीति देखें।'
    ]
  },
  {
    id: 'intellectual',
    icon: FileText,
    title: 'बौद्धिक संपदा',
    content: [
      'वेबसाइट पर सभी सामग्री, लोगो, और ट्रेडमार्क श्री पद्म वैद्यम गुरुकुल की संपत्ति हैं।',
      'लिखित अनुमति के बिना किसी भी सामग्री का पुनरुत्पादन, वितरण या संशोधन निषिद्ध है।',
      'शैक्षणिक सामग्री और पाठ्यक्रम सामग्री कॉपीराइट कानूनों द्वारा संरक्षित हैं।',
      'छात्रों द्वारा बनाई गई मूल कृतियों के अधिकार छात्र के पास रहते हैं।',
      'संस्था को शैक्षणिक उद्देश्यों के लिए छात्र कार्य प्रदर्शित करने का अधिकार है।'
    ]
  },
  {
    id: 'liability',
    icon: AlertCircle,
    title: 'दायित्व सीमा',
    content: [
      'संस्था छात्रों की सुरक्षा और कल्याण के लिए उचित प्रयास करती है।',
      'हम परिसर में होने वाली दुर्घटनाओं या चोटों के लिए जिम्मेदार नहीं हैं, जब तक कि लापरवाही सिद्ध न हो।',
      'व्यक्तिगत सामान की हानि या क्षति के लिए संस्था उत्तरदायी नहीं है।',
      'छात्रों को उनकी गतिविधियों और व्यवहार के लिए जवाबदेह माना जाता है।',
      'माता-पिता/अभिभावक को आपातकालीन चिकित्सा उपचार के लिए सहमति देनी होगी।',
      'संस्था अप्रत्याशित परिस्थितियों के कारण कार्यक्रम में बदलाव का अधिकार सुरक्षित रखती है।'
    ]
  },
  {
    id: 'termination',
    icon: Scale,
    title: 'समाप्ति और निष्कासन',
    content: [
      'संस्था को गंभीर आचरण उल्लंघन के मामले में छात्र को निष्कासित करने का अधिकार है।',
      'माता-पिता किसी भी समय लिखित नोटिस देकर नामांकन वापस ले सकते हैं।',
      'शुल्क गैर-भुगतान नामांकन रद्द करने का कारण बन सकता है।',
      'निष्कासन या स्वैच्छिक निकासी के मामले में शुल्क वापसी नीति लागू होगी।',
      'छात्र के रिकॉर्ड और प्रमाण पत्र सभी बकाया राशि के भुगतान के बाद ही जारी किए जाएंगे।'
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#333333] font-['opensans']">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-linear-to-b from-[#333333] to-[#4A4A4A] text-[#F5E6D3] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-[#FFFFFF]/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <FileText className="w-5 h-5 text-[#FF9933]" />
              <span className="text-[#FFFFFF]/90 uppercase text-sm tracking-wider">कानूनी दस्तावेज़</span>
            </div>
            
            <h1 className="font-['playfairdisplay'] text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              नियम और शर्तें
            </h1>
            
            <p className="text-xl md:text-2xl text-[#FFFFFF]/70 max-w-3xl mx-auto leading-relaxed">
              श्री पद्म वैद्यम गुरुकुल की सेवाओं और सुविधाओं के उपयोग के लिए नियम
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[#FFFFFF]/50 text-sm">
              <span>अंतिम अद्यतन:</span>
              <span className="font-semibold">30 जनवरी, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF9F0] border-l-4 border-[#FF9933] p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#FF9933] shrink-0 mt-1" />
              <div>
                <h3 className="font-['playfairdisplay'] text-2xl font-bold text-[#333333] mb-3">
                  महत्वपूर्ण सूचना
                </h3>
                <p className="text-[#333333]/70 leading-relaxed mb-3">
                  कृपया इन नियमों और शर्तों को ध्यानपूर्वक पढ़ें। हमारी वेबसाइट का उपयोग करके या हमारी सेवाओं का लाभ उठाकर, आप इन नियमों से बाध्य होने के लिए सहमत होते हैं।
                </p>
                <p className="text-[#333333]/70 leading-relaxed">
                  यदि आपके कोई प्रश्न हैं, तो कृपया हमसे <Link href="/contact" className="text-[#FF9933] hover:underline font-semibold">संपर्क करें</Link>।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto space-y-12">
          {TERM_SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#DAA520]/10"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-[#F5E6D3] rounded-xl flex items-center justify-center shrink-0">
                  <section.icon className="w-7 h-7 text-[#FF9933]" />
                </div>
                <div className="flex-1">
                  <h2 className="font-['playfairdisplay'] text-3xl font-bold text-[#333333] mb-1">
                    {section.title}
                  </h2>
                  <div className="h-1 w-20 bg-[#FF9933] rounded-full mt-3" />
                </div>
              </div>

              <div className="space-y-4 pl-20">
                {section.content.map((paragraph, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#138808] shrink-0 mt-2" />
                    <p className="text-[#333333]/80 leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Important Notes */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['playfairdisplay'] text-3xl font-bold text-[#333333] mb-8 text-center">
              अतिरिक्त महत्वपूर्ण बिंदु
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10">
                <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#FF9933]" />
                  सुरक्षा और संरक्षा
                </h3>
                <p className="text-[#333333]/70 leading-relaxed text-sm">
                  हम सभी छात्रों की सुरक्षा और कल्याण को सर्वोच्च प्राथमिकता देते हैं। परिसर में CCTV निगरानी और सुरक्षा कर्मचारी उपलब्ध हैं।
                </p>
              </div>

              <div className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10">
                <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF9933]" />
                  दस्तावेज़ आवश्यकताएं
                </h3>
                <p className="text-[#333333]/70 leading-relaxed text-sm">
                  प्रवेश के लिए सभी आवश्यक दस्तावेज़ मूल और सत्यापित प्रतियों के साथ प्रस्तुत किए जाने चाहिए।
                </p>
              </div>

              <div className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10">
                <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#FF9933]" />
                  आपातकालीन संपर्क
                </h3>
                <p className="text-[#333333]/70 leading-relaxed text-sm">
                  सभी छात्रों के लिए अद्यतन आपातकालीन संपर्क जानकारी प्रदान करना अनिवार्य है।
                </p>
              </div>

              <div className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10">
                <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#FF9933]" />
                  शिकायत निवारण
                </h3>
                <p className="text-[#333333]/70 leading-relaxed text-sm">
                  किसी भी शिकायत या चिंता के लिए, कृपया प्रशासन कार्यालय से संपर्क करें। हम 7 कार्य दिवसों में प्रतिक्रिया देने का प्रयास करते हैं।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#333333] text-[#F5E6D3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Scale className="w-12 h-12 text-[#FF9933] mx-auto mb-6" />
            <h2 className="font-['playfairdisplay'] text-3xl font-bold mb-4">
              शासी कानून और क्षेत्राधिकार
            </h2>
            <p className="text-[#FFFFFF]/70 leading-relaxed max-w-2xl mx-auto mb-6">
              ये नियम और शर्तें भारत के कानूनों द्वारा शासित होती हैं। किसी भी विवाद के मामले में, वाराणसी, उत्तर प्रदेश की अदालतों का विशेष क्षेत्राधिकार होगा।
            </p>
            <p className="text-[#FFFFFF]/50 text-sm">
              संस्था पूर्व सूचना के बिना इन नियमों और शर्तों को संशोधित करने का अधिकार सुरक्षित रखती है।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-[#FF9933] to-[#FF9933]/90 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="font-['playfairdisplay'] text-3xl md:text-4xl font-bold mb-4">
              क्या आपके कोई प्रश्न हैं?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              यदि आपको इन नियमों और शर्तों के बारे में कोई स्पष्टीकरण चाहिए, तो कृपया हमसे संपर्क करने में संकोच न करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#FF9933] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
                >
                  हमसे संपर्क करें
                </motion.button>
              </Link>
              <Link href="/admission">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  प्रवेश के लिए आवेदन करें
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}