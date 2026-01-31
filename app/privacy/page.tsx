"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Database, 
  Cookie, 
  FileText, 
  Mail, 
  AlertCircle,
  CheckCircle,
  Globe,
  Server,
  Key,
  Bell
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PrivacySection {
  id: string;
  icon: React.ElementType;
  title: string;
  content: string[];
}

interface DataType {
  title: string;
  description: string;
  examples: string[];
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'introduction',
    icon: Shield,
    title: 'परिचय',
    content: [
      'श्री पद्म वैद्यम गुरुकुल ("हम", "हमारा", या "संस्था") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं, संरक्षित करते हैं और साझा करते हैं।',
      'हमारी वेबसाइट का उपयोग करके या हमारी सेवाओं का लाभ उठाकर, आप इस गोपनीयता नीति में वर्णित प्रथाओं से सहमत होते हैं।',
      'हम भारत के सूचना प्रौद्योगिकी अधिनियम, 2000 और डेटा संरक्षण नियमों का पालन करते हैं।',
      'यदि आपके कोई प्रश्न या चिंताएं हैं, तो कृपया हमसे संपर्क करें।'
    ]
  },
  {
    id: 'collection',
    icon: Database,
    title: 'जानकारी संग्रहण',
    content: [
      'हम निम्नलिखित प्रकार की जानकारी एकत्र कर सकते हैं:',
      'व्यक्तिगत पहचान जानकारी: नाम, जन्म तिथि, लिंग, फोटोग्राफ, और पहचान दस्तावेज़।',
      'संपर्क जानकारी: पता, ईमेल पता, फोन नंबर, और आपातकालीन संपर्क विवरण।',
      'शैक्षणिक जानकारी: पिछली शिक्षा, अंक पत्र, प्रमाण पत्र, और शैक्षणिक रिकॉर्ड।',
      'वित्तीय जानकारी: बैंक खाता विवरण, भुगतान जानकारी, और शुल्क लेनदेन रिकॉर्ड।',
      'स्वास्थ्य जानकारी: चिकित्सा इतिहास, एलर्जी, टीकाकरण रिकॉर्ड, और स्वास्थ्य प्रमाण पत्र।',
      'तकनीकी जानकारी: IP पता, ब्राउज़र प्रकार, डिवाइस जानकारी, और वेबसाइट उपयोग डेटा।'
    ]
  },
  {
    id: 'usage',
    icon: Eye,
    title: 'जानकारी का उपयोग',
    content: [
      'हम आपकी जानकारी का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:',
      'प्रवेश प्रक्रिया: आवेदन प्रसंस्करण, पात्रता मूल्यांकन, और नामांकन प्रबंधन।',
      'शैक्षणिक सेवाएं: पाठ्यक्रम वितरण, प्रगति ट्रैकिंग, और शैक्षणिक रिपोर्ट तैयार करना।',
      'संचार: महत्वपूर्ण सूचनाएं, घोषणाएं, और माता-पिता के साथ संवाद।',
      'सुरक्षा और संरक्षा: छात्र सुरक्षा सुनिश्चित करना और आपातकालीन प्रतिक्रिया।',
      'वित्तीय लेनदेन: शुल्क प्रसंस्करण, रसीद जारी करना, और वित्तीय रिकॉर्ड बनाए रखना।',
      'कानूनी अनुपालन: नियामक आवश्यकताओं को पूरा करना और कानूनी दायित्वों का पालन करना।',
      'सुधार: हमारी सेवाओं, पाठ्यक्रम, और सुविधाओं में सुधार करना।'
    ]
  },
  {
    id: 'sharing',
    icon: Globe,
    title: 'जानकारी साझाकरण',
    content: [
      'हम आपकी व्यक्तिगत जानकारी को निम्नलिखित परिस्थितियों में साझा कर सकते हैं:',
      'शैक्षणिक बोर्ड: परीक्षा पंजीकरण और प्रमाणन के लिए।',
      'सरकारी प्राधिकरण: कानूनी आवश्यकताओं, विनियमों, या न्यायिक आदेशों के अनुपालन के लिए।',
      'सेवा प्रदाता: भुगतान प्रोसेसिंग, होस्टिंग सेवाओं, और शैक्षणिक उपकरणों के लिए विश्वसनीय तृतीय पक्षों के साथ।',
      'माता-पिता/अभिभावक: छात्र की प्रगति, उपस्थिति, और शैक्षणिक प्रदर्शन की जानकारी।',
      'आपातकालीन स्थिति: चिकित्सा आपात स्थिति या सुरक्षा चिंताओं के मामले में।',
      'हम तृतीय पक्षों को बिक्री, किराए पर देने, या अन्यथा व्यक्तिगत जानकारी का खुलासा नहीं करते हैं।'
    ]
  },
  {
    id: 'security',
    icon: Lock,
    title: 'डेटा सुरक्षा',
    content: [
      'हम आपकी जानकारी की सुरक्षा के लिए उद्योग-मानक उपायों को लागू करते हैं:',
      'एन्क्रिप्शन: संवेदनशील डेटा को SSL/TLS प्रोटोकॉल के साथ एन्क्रिप्ट किया जाता है।',
      'पहुंच नियंत्रण: सीमित कर्मियों को केवल आवश्यक जानकारी तक पहुंच दी जाती है।',
      'सुरक्षित भंडारण: डेटा सुरक्षित सर्वर पर संग्रहीत किया जाता है जो फ़ायरवॉल और सुरक्षा प्रणालियों द्वारा संरक्षित हैं।',
      'नियमित ऑडिट: सुरक्षा प्रोटोकॉल की नियमित समीक्षा और अपडेट।',
      'कर्मचारी प्रशिक्षण: स्टाफ को डेटा सुरक्षा सर्वोत्तम प्रथाओं पर प्रशिक्षित किया जाता है।',
      'हालांकि हम मजबूत सुरक्षा उपाय करते हैं, कोई भी प्रणाली पूरी तरह से सुरक्षित नहीं है। हम 100% सुरक्षा की गारंटी नहीं दे सकते।'
    ]
  },
  {
    id: 'retention',
    icon: Server,
    title: 'डेटा संग्रहण',
    content: [
      'हम आपकी जानकारी को तब तक बनाए रखते हैं जब तक:',
      'छात्र गुरुकुल में नामांकित है: सक्रिय शैक्षणिक रिकॉर्ड बनाए रखे जाते हैं।',
      'कानूनी आवश्यकताएं: शैक्षणिक संस्थानों के लिए नियामक आवश्यकताओं के अनुसार रिकॉर्ड संग्रहित किए जाते हैं।',
      'पूर्व छात्र रिकॉर्ड: स्नातक के बाद, प्रमाण पत्र और ट्रांसक्रिप्ट जारी करने के लिए आवश्यक डेटा बनाए रखा जाता है।',
      'वित्तीय रिकॉर्ड: लेखा परीक्षा और कर उद्देश्यों के लिए कानून द्वारा आवश्यक अवधि के लिए संग्रहीत।',
      'आवश्यकता न होने पर, हम डेटा को सुरक्षित रूप से हटा देते हैं या गुमनाम कर देते हैं।'
    ]
  },
  {
    id: 'rights',
    icon: UserCheck,
    title: 'आपके अधिकार',
    content: [
      'आपके पास अपनी व्यक्तिगत जानकारी के संबंध में निम्नलिखित अधिकार हैं:',
      'पहुंच का अधिकार: हम आपके बारे में क्या जानकारी रखते हैं, इसकी प्रति का अनुरोध करें।',
      'सुधार का अधिकार: गलत या अपूर्ण जानकारी को अपडेट या सही करने का अनुरोध करें।',
      'विलोपन का अधिकार: विशिष्ट परिस्थितियों में अपनी जानकारी हटाने का अनुरोध करें (कानूनी आवश्यकताओं के अधीन)।',
      'प्रतिबंध का अधिकार: कुछ प्रसंस्करण गतिविधियों को सीमित करने का अनुरोध करें।',
      'आपत्ति का अधिकार: विशेष प्रसंस्करण उद्देश्यों पर आपत्ति करें।',
      'अपने अधिकारों का प्रयोग करने के लिए, कृपया हमारे डेटा सुरक्षा अधिकारी से संपर्क करें।'
    ]
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: 'कुकीज़ और ट्रैकिंग',
    content: [
      'हमारी वेबसाइट कुकीज़ और समान तकनीकों का उपयोग करती है:',
      'आवश्यक कुकीज़: वेबसाइट की मूल कार्यक्षमता के लिए आवश्यक।',
      'प्रदर्शन कुकीज़: यह समझने के लिए कि आगंतुक हमारी वेबसाइट का उपयोग कैसे करते हैं।',
      'कार्यात्मक कुकीज़: आपकी प्राथमिकताएं और सेटिंग्स याद रखने के लिए।',
      'विश्लेषण उपकरण: Google Analytics जैसे उपकरण वेबसाइट उपयोग को समझने के लिए।',
      'आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को नियंत्रित या अक्षम कर सकते हैं।',
      'कुकीज़ अक्षम करने से कुछ वेबसाइट सुविधाएं प्रभावित हो सकती हैं।'
    ]
  },
  {
    id: 'children',
    icon: Shield,
    title: 'बच्चों की गोपनीयता',
    content: [
      'एक शैक्षणिक संस्थान के रूप में, हम नाबालिगों की जानकारी संसाधित करते हैं:',
      'माता-पिता की सहमति: नामांकन प्रक्रिया के दौरान माता-पिता/अभिभावक से सहमति प्राप्त की जाती है।',
      'सीमित संग्रह: हम केवल शैक्षणिक उद्देश्यों के लिए आवश्यक जानकारी एकत्र करते हैं।',
      'विशेष सुरक्षा: बच्चों के डेटा के लिए बढ़ी हुई सुरक्षा उपाय लागू किए जाते हैं।',
      'माता-पिता की पहुंच: अभिभावक अपने बच्चे की जानकारी की समीक्षा और अपडेट कर सकते हैं।',
      'कोई तृतीय पक्ष विपणन नहीं: हम कभी भी विपणन उद्देश्यों के लिए बच्चों के डेटा को साझा नहीं करते हैं।'
    ]
  },
  {
    id: 'updates',
    icon: Bell,
    title: 'नीति अपडेट',
    content: [
      'हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं:',
      'सूचना: महत्वपूर्ण परिवर्तनों की सूचना ईमेल या वेबसाइट नोटिस के माध्यम से दी जाएगी।',
      'प्रभावी तिथि: अपडेट की गई नीति शीर्ष पर "अंतिम अद्यतन" तिथि दिखाएगी।',
      'निरंतर उपयोग: अपडेट के बाद सेवाओं का निरंतर उपयोग संशोधित नीति की स्वीकृति का संकेत देता है।',
      'समीक्षा: हम आपको नियमित रूप से इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं।'
    ]
  }
];

const DATA_TYPES: DataType[] = [
  {
    title: 'व्यक्तिगत जानकारी',
    description: 'बुनियादी पहचान और संपर्क विवरण',
    examples: ['नाम और जन्म तिथि', 'फोटोग्राफ', 'पता और फोन नंबर', 'ईमेल पता']
  },
  {
    title: 'शैक्षणिक डेटा',
    description: 'शिक्षा से संबंधित जानकारी',
    examples: ['पिछले स्कूल रिकॉर्ड', 'परीक्षा परिणाम', 'उपस्थिति रिकॉर्ड', 'प्रगति रिपोर्ट']
  },
  {
    title: 'वित्तीय डेटा',
    description: 'भुगतान और लेनदेन विवरण',
    examples: ['शुल्क भुगतान रिकॉर्ड', 'बैंक खाता जानकारी', 'छात्रवृत्ति विवरण', 'लेनदेन इतिहास']
  },
  {
    title: 'स्वास्थ्य जानकारी',
    description: 'चिकित्सा और स्वास्थ्य रिकॉर्ड',
    examples: ['चिकित्सा इतिहास', 'टीकाकरण रिकॉर्ड', 'एलर्जी जानकारी', 'आपातकालीन संपर्क']
  }
];

export default function PrivacyPage() {
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
              <Lock className="w-5 h-5 text-[#FF9933]" />
              <span className="text-[#FFFFFF]/90 uppercase text-sm tracking-wider">गोपनीयता और सुरक्षा</span>
            </div>
            
            <h1 className="font-['playfairdisplay'] text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              गोपनीयता नीति
            </h1>
            
            <p className="text-xl md:text-2xl text-[#FFFFFF]/70 max-w-3xl mx-auto leading-relaxed">
              आपकी व्यक्तिगत जानकारी की सुरक्षा और गोपनीयता हमारी सर्वोच्च प्राथमिकता है
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[#FFFFFF]/50 text-sm">
              <span>अंतिम अद्यतन:</span>
              <span className="font-semibold">30 जनवरी, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['playfairdisplay'] text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              संक्षिप्त अवलोकन
            </h2>
            <p className="text-[#333333]/70 text-lg max-w-3xl mx-auto">
              हम किस प्रकार की जानकारी एकत्र करते हैं और उसका उपयोग कैसे करते हैं
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_TYPES.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#FF9933]" />
                </div>
                <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-2">
                  {type.title}
                </h3>
                <p className="text-[#333333]/60 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#333333]/80">
                      <CheckCircle className="w-4 h-4 text-[#138808] shrink-0 mt-0.5" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Privacy Sections */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto space-y-12">
          {PRIVACY_SECTIONS.map((section, index) => (
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
                  <p key={idx} className="text-[#333333]/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Measures */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['playfairdisplay'] text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              हमारे सुरक्षा उपाय
            </h2>
            <p className="text-[#333333]/70 text-lg">
              आपके डेटा की सुरक्षा के लिए हम जो कदम उठाते हैं
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#F5E6D3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-[#FF9933]" />
              </div>
              <h3 className="font-['playfairdisplay'] text-2xl font-bold text-[#333333] mb-3">
                एन्क्रिप्शन
              </h3>
              <p className="text-[#333333]/70 leading-relaxed">
                सभी संवेदनशील डेटा SSL/TLS प्रोटोकॉल का उपयोग करके एन्क्रिप्ट किया जाता है
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#F5E6D3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="w-10 h-10 text-[#FF9933]" />
              </div>
              <h3 className="font-['playfairdisplay'] text-2xl font-bold text-[#333333] mb-3">
                पहुंच नियंत्रण
              </h3>
              <p className="text-[#333333]/70 leading-relaxed">
                सख्त पहुंच नियंत्रण केवल अधिकृत कर्मियों को डेटा तक पहुंच प्रदान करता है
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#F5E6D3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="w-10 h-10 text-[#FF9933]" />
              </div>
              <h3 className="font-['playfairdisplay'] text-2xl font-bold text-[#333333] mb-3">
                सुरक्षित सर्वर
              </h3>
              <p className="text-[#333333]/70 leading-relaxed">
                डेटा फ़ायरवॉल और सुरक्षा प्रणालियों द्वारा संरक्षित सर्वर पर संग्रहीत है
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
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
                  यदि आपको लगता है कि आपकी व्यक्तिगत जानकारी से समझौता किया गया है, तो कृपया तुरंत हमसे संपर्क करें। हम किसी भी सुरक्षा चिंताओं को गंभीरता से लेते हैं और तुरंत कार्रवाई करेंगे।
                </p>
                <p className="text-[#333333]/70 leading-relaxed">
                  डेटा सुरक्षा संबंधी प्रश्नों के लिए: <a href="mailto:privacy@shreepadmavaidyam.com" className="text-[#FF9933] hover:underline font-semibold">privacy@shreepadmavaidyam.com</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['playfairdisplay'] text-3xl font-bold text-[#333333] mb-8 text-center">
              आपके गोपनीयता अधिकार
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'पहुंच का अधिकार', desc: 'अपनी जानकारी की प्रति का अनुरोध करें' },
                { title: 'सुधार का अधिकार', desc: 'गलत जानकारी को अपडेट करें' },
                { title: 'विलोपन का अधिकार', desc: 'अपनी जानकारी हटाने का अनुरोध करें' },
                { title: 'आपत्ति का अधिकार', desc: 'विशेष प्रसंस्करण पर आपत्ति करें' }
              ].map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F5E6D3] p-6 rounded-xl border border-[#DAA520]/10"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#138808] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-['playfairdisplay'] text-xl font-bold text-[#333333] mb-2">
                        {right.title}
                      </h3>
                      <p className="text-[#333333]/70 text-sm">
                        {right.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#333333] text-[#F5E6D3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Mail className="w-16 h-16 text-[#FF9933] mx-auto mb-6" />
            <h2 className="font-['playfairdisplay'] text-3xl md:text-4xl font-bold mb-4">
              गोपनीयता संबंधी प्रश्न?
            </h2>
            <p className="text-[#FFFFFF]/70 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
              यदि आपके गोपनीयता नीति के बारे में कोई प्रश्न या चिंताएं हैं, या यदि आप अपने अधिकारों का प्रयोग करना चाहते हैं, तो हमारे डेटा सुरक्षा अधिकारी से संपर्क करें।
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-[#FFFFFF]">
                <Mail className="w-5 h-5 text-[#FF9933]" />
                <a href="mailto:privacy@shreepadmavaidyam.com" className="hover:text-[#FF9933] transition-colors">
                  privacy@shreepadmavaidyam.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#FFFFFF]">
                <FileText className="w-5 h-5 text-[#FF9933]" />
                <span>डेटा सुरक्षा अधिकारी, श्री पद्म वैद्यम गुरुकुल</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-['playfairdisplay'] text-2xl font-bold text-[#333333] mb-6 text-center">
              संबंधित नीतियां
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border border-[#DAA520]/20 text-[#333333] px-6 py-3 rounded-full hover:shadow-lg transition-all"
                >
                  नियम और शर्तें
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF9933] text-white px-6 py-3 rounded-full hover:bg-[#FF9933]/90 transition-all"
                >
                  हमसे संपर्क करें
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