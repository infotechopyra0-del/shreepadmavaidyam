
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Curriculum } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Sparkles, Palette, Heart } from 'lucide-react';

export default function CurriculumPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading] = useState(false);
  const programs: Curriculum[] = [
    {
      _id: '1',
      programTitle: 'हठ योग की नींव',
      shortDescription: 'हठ योग के प्राचीन अभ्यास का परिचय, जिसमें मूल आसनों और श्वास तकनीकों पर ध्यान केंद्रित किया गया है।',
      detailedDescription: 'यह कार्यक्रम हठ योग का व्यापक परिचय प्रदान करता है, जिसमें मूल आसन, प्राणायाम (श्वास व्यायाम) और ध्यान की बुनियादी तकनीकें शामिल हैं। विद्यार्थी सही मुद्रा, शक्ति और लचीलापन विकसित करना तथा जागरूकता को बढ़ाना सीखेंगे। यह शुरुआती लोगों के लिए उपयुक्त है।',
      programImage: '/images/foundationsofhathayoga.png',
      category: 'Yoga & Meditation'
    },
    {
      _id: '2',
      programTitle: 'वैदिक मंत्र और जप',
      shortDescription: 'आध्यात्मिक कल्याण के लिए वैदिक मंत्रों और जप की शक्ति और महत्व को जानें।',
      detailedDescription: 'वेदों की पवित्र ध्वनियों में गहराई से उतरें। इस पाठ्यक्रम में विभिन्न वैदिक मंत्रों और जप का सही उच्चारण, लय और अर्थ सिखाया जाता है। प्रतिभागी इनके ऐतिहासिक संदर्भ, आध्यात्मिक लाभ और दैनिक जीवन में शांति व एकाग्रता के लिए व्यावहारिक उपयोग सीखेंगे।',
      programImage: '/images/vedicchantingandmantras.png',
      category: 'Vedic Knowledge'
    },
    {
      _id: '3',
      programTitle: 'कंप्यूटर विज्ञान का परिचय',
      shortDescription: 'कंप्यूटर प्रोग्रामिंग, एल्गोरिदम और डेटा संरचनाओं की मूल बातें सिखाने वाला पाठ्यक्रम।',
      detailedDescription: 'यह कार्यक्रम कंप्यूटर विज्ञान की मुख्य अवधारणाओं जैसे संगणनात्मक सोच, एल्गोरिदम द्वारा समस्या समाधान और बुनियादी डेटा संरचनाओं से परिचित कराता है। विद्यार्थी एक लोकप्रिय प्रोग्रामिंग भाषा के साथ व्यावहारिक अनुभव प्राप्त करेंगे और तकनीक में आगे अध्ययन के लिए आवश्यक कोडिंग कौशल विकसित करेंगे।',
      programImage: '/images/introductiontocomputerscience.png',
      category: 'Modern Academic'
    },
    {
      _id: '4',
      programTitle: 'भारतीय शास्त्रीय नृत्य: भरतनाट्यम की बुनियाद',
      shortDescription: 'भारतीय शास्त्रीय नृत्य भरतनाट्यम के मूल चरण, मुद्राएँ और भाव सीखें।',
      detailedDescription: 'यह प्रारंभिक पाठ्यक्रम भरतनाट्यम में मजबूत नींव बनाने पर केंद्रित है। विद्यार्थी बुनियादी अदवु (चरण), हस्त मुद्राएँ (हाथ के इशारे) और अभिव्यक्ति (अभिनय) सीखेंगे। इसमें लय, सौंदर्य और इस प्राचीन नृत्य के सांस्कृतिक महत्व को समझने पर जोर दिया गया है।',
      programImage: '/images/classicalindiandance.png',
      category: 'Arts'
    },
    {
      _id: '5',
      programTitle: 'तनाव मुक्ति के लिए माइंडफुलनेस मेडिटेशन',
      shortDescription: 'तनाव कम करने और मानसिक स्पष्टता बढ़ाने के लिए माइंडफुलनेस की तकनीकें और अभ्यास।',
      detailedDescription: 'यह कार्यक्रम तनाव प्रबंधन, एकाग्रता सुधारने और भावनात्मक कल्याण के लिए व्यावहारिक माइंडफुलनेस मेडिटेशन तकनीकें प्रदान करता है। प्रतिभागी मार्गदर्शित ध्यान, बॉडी स्कैन अभ्यास और सचेत श्वास तकनीकें सीखेंगे, जिन्हें वे अपने दैनिक जीवन में शांति और लचीलापन बढ़ाने के लिए अपना सकते हैं।',
      programImage: '/images/mindfulnessmeditationforstressreduction.png',
      category: 'Arts'
    },
    {
      _id: '6',
      programTitle: 'उपनिषद: ऋषियों की ज्ञान गाथा',
      shortDescription: 'चयनित उपनिषदों का गहन अध्ययन, उनके दार्शनिक दृष्टिकोण और आध्यात्मिक शिक्षाओं की खोज।',
      detailedDescription: 'वेदों के अंतिम भाग उपनिषदों की गहन ज्ञानधारा में डूबें। इस पाठ्यक्रम में प्रमुख उपनिषदों के ग्रंथों की चर्चा की जाती है, जिसमें ब्रह्म, आत्मा, कर्म और मोक्ष जैसी मुख्य दार्शनिक अवधारणाएँ शामिल हैं। इसका उद्देश्य आत्मा, वास्तविकता और मुक्ति के मार्ग की गहरी समझ प्रदान करना है।',
      programImage: '/images/wisdomofthesages.png',
      category: 'Vedic Knowledge'
    },
    {
      _id: '7',
      programTitle: 'पर्यावरण विज्ञान: वैश्विक चुनौतियाँ',
      shortDescription: 'हमारे ग्रह के सामने आने वाली महत्वपूर्ण पर्यावरणीय समस्याओं का अध्ययन और सतत समाधान की खोज।',
      detailedDescription: 'यह पाठ्यक्रम जलवायु परिवर्तन, जैव विविधता की हानि, प्रदूषण और संसाधनों की कमी जैसी प्रमुख पर्यावरणीय चुनौतियों का अवलोकन प्रदान करता है। विद्यार्थी इन समस्याओं के वैज्ञानिक आधार, उनके सामाजिक प्रभाव और स्थिरता व संरक्षण के विभिन्न उपायों का विश्लेषण करेंगे।',
      programImage: '/images/globalchallenges.png',
      category: 'Modern Academic'
    },
    {
      _id: '8',
      programTitle: 'भारतीय पारंपरिक चित्रकला: मिनिएचर आर्ट',
      shortDescription: 'भारतीय पारंपरिक मिनिएचर चित्रकला की जटिल तकनीकों और ऐतिहासिक संदर्भ को जानें।',
      detailedDescription: 'भारतीय मिनिएचर चित्रकला की सूक्ष्म कला की खोज करें। यह कार्यक्रम ऐतिहासिक विकास, विभिन्न शैलियों और पारंपरिक तकनीकों को कवर करता है, जो इन उत्कृष्ट कृतियों के निर्माण में प्रयुक्त होती हैं। विद्यार्थी प्राकृतिक रंग, ब्रशवर्क और संरचना के बारे में सीखेंगे, और शास्त्रीय शैलियों से प्रेरित अपनी खुद की मिनिएचर कृतियाँ बनाएंगे।',
      programImage: '/images/traditionalindianpainting.png',
      category: 'Arts'
    },
  ];

  const categories = ['All', ...Array.from(new Set(programs.map(p => p.category).filter(Boolean)))];
  
  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  const categoryIcons: Record<string, any> = {
    'Vedic Knowledge': BookOpen,
    'Modern Academic': Sparkles,
    'Arts & Culture': Palette,
    'Yoga & Meditation': Heart
  };

  const getCategoryIcon = (category?: string) => {
    if (!category) return BookOpen;
    return categoryIcons[category] || BookOpen;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5E6D3' }}>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 px-8 md:px-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Playfair_Display'",
                color: '#333333',
                fontSize: '3rem',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
              }}
            >
              हमारा पाठ्यक्रम
            </h1>
            <p
              className="max-w-4xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'font-open-sans'",
                color: '#333333',
                fontSize: '1.5rem',
                lineHeight: '1.75',
                letterSpacing: '0.01em',
                fontWeight: 500,
                opacity: 0.8,
              }}
            >
              वैदिक ज्ञान और आधुनिक शिक्षा का समावेश करते हुए एक समग्र शैक्षिक यात्रा।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p
              className="leading-relaxed mb-6"
              style={{
                fontFamily: "'font-open-sans'",
                color: '#333333',
                fontSize: '1.25rem',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                fontWeight: 400,
                opacity: 0.8,
              }}
            >
              हमारा पाठ्यक्रम विद्यार्थियों को समग्र शिक्षा प्रदान करने के लिए सावधानीपूर्वक तैयार किया गया है, जो प्राचीन परंपराओं का सम्मान करता है और उन्हें आधुनिक दुनिया में सफलता के लिए तैयार करता है। हम वैदिक विज्ञान, समकालीन अकादमिक, कलात्मक अभिव्यक्ति और स्वास्थ्य अभ्यासों का समावेश करते हैं ताकि सर्वांगीण व्यक्तित्व का विकास हो सके।
            </p>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "'font-open-sans'",
                color: '#333333',
                fontSize: '1.25rem',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
                fontWeight: 400,
                opacity: 0.8,
              }}
            >
              प्रत्येक कार्यक्रम विशेषज्ञ शिक्षकों द्वारा संचालित किया जाता है, जो गहन ज्ञान, जुनून और समर्पण के साथ विद्यार्थियों को व्यक्तिगत मार्गदर्शन और ध्यान प्रदान करते हैं।
            </p>
          </motion.div>
        </div>
      </section>
      {/* Category Filter */}
      <section className="w-full px-8 md:px-16 pb-8">
        <div className="max-w-400 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) =>
              category ? (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg transition-all border ${
                    selectedCategory === category
                      ? ''
                      : 'hover:border-secondary'
                  }`}
                  style={
                    selectedCategory === category
                      ? {
                          backgroundColor: '#FF9933',
                          color: '#FFFFFF',
                          fontFamily: "'font-open-sans'",
                          fontSize: '1.125rem',
                          lineHeight: '1.6',
                          letterSpacing: '0.01em',
                          fontWeight: 600,
                        }
                      : {
                          backgroundColor: '#FFFFFF',
                          color: '#333333',
                          borderColor: 'rgba(218, 165, 32, 0.2)',
                          fontFamily: "'font-open-sans'",
                          fontSize: '1.125rem',
                          lineHeight: '1.6',
                          letterSpacing: '0.01em',
                          fontWeight: 600,
                        }
                  }
                >
                  {category}
                </button>
              ) : null
            )}
          </div>
        </div>
      </section>
      {/* Programs Grid */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <div className="min-h-150">
            {isLoading ? null : filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => {
                  const IconComponent = getCategoryIcon(program.category);
                  return (
                    <motion.div
                      key={program._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="rounded-lg overflow-hidden transition-all group"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(218, 165, 32, 0.2)',
                      }}
                    >
                      {program.programImage && (
                        <div className="relative overflow-hidden h-64">
                          <Image
                            src={program.programImage}
                            alt={program.programTitle || 'Program image'}
                            width={400}
                            height={256}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {program.category && (
                            <div
                              className="absolute top-4 left-4 px-4 py-2 rounded-lg flex items-center space-x-2"
                              style={{
                                backgroundColor: '#FF9933',
                                color: '#FFFFFF',
                                fontFamily: "'font-open-sans'",
                                fontSize: '1rem',
                                lineHeight: '1.5',
                                letterSpacing: '0.01em',
                                fontWeight: 600,
                              }}
                            >
                              <IconComponent className="w-4 h-4" />
                              <span>{program.category}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-8">
                        <h3
                          className="mb-4"
                          style={{
                            fontFamily: "'Playfair_Display'",
                            color: '#333333',
                            fontSize: '1.75rem',
                            lineHeight: '1.8',
                            letterSpacing: '0.01em',
                            fontWeight: 600,
                          }}
                        >
                          {program.programTitle}
                        </h3>
                        {program.shortDescription && (
                          <p
                            className="mb-4 leading-relaxed"
                            style={{
                              fontFamily: "'font-open-sans'",
                              color: 'rgba(51,51,51,0.7)',
                              fontSize: '1.125rem',
                              lineHeight: '1.6',
                              letterSpacing: '0.01em',
                              fontWeight: 400,
                            }}
                          >
                            {program.shortDescription}
                          </p>
                        )}
                        {program.detailedDescription && (
                          <p
                            className="leading-relaxed"
                            style={{
                              fontFamily: "'font-open-sans'",
                              color: 'rgba(51,51,51,0.6)',
                              fontSize: '1rem',
                              lineHeight: '1.5',
                              letterSpacing: '0.01em',
                              fontWeight: 400,
                            }}
                          >
                            {program.detailedDescription}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p
                  style={{
                    fontFamily: "'font-open-sans'",
                    color: 'rgba(51,51,51,0.6)',
                    fontSize: '1.25rem',
                    lineHeight: '1.7',
                    letterSpacing: '0.01em',
                    fontWeight: 400,
                  }}
                >
                  {selectedCategory === 'All' 
                    ? 'हमारे पाठ्यक्रम कार्यक्रमों को अपडेट किया जा रहा है। कृपया शीघ्र ही पुनः देखें।'
                    : `चयनित श्रेणी (${selectedCategory}) में कोई कार्यक्रम नहीं मिला।`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="w-full py-24 px-8 md:px-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/studentsengagedininteractivelearning.png"
                alt="Students engaged in interactive learning"
                width={500}
                height={300}
                className="w-full h-125 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair_Display'",
                  color: '#333333',
                  fontSize: '2.5rem',
                  lineHeight: '1.15',
                  letterSpacing: '0.01em',
                  fontWeight: 'bold',
                }}
              >
                हमारी शैक्षिक पद्धति
              </h2>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "'font-open-sans'",
                  color: '#333333',
                  fontSize: '1.25rem',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em',
                  fontWeight: 400,
                  opacity: 0.8,
                }}
              >
                हम अनुभवात्मक शिक्षा में विश्वास करते हैं, जो मन, शरीर और आत्मा को जोड़ती है। हमारी शिक्षण पद्धति पारंपरिक गुरुकुल परंपराओं और आधुनिक शैक्षिक तकनीकों का संयोजन है, जिससे विद्यार्थियों में आलोचनात्मक सोच, रचनात्मकता और व्यावहारिक कौशल का विकास होता है।
              </p>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: "'font-open-sans'",
                  color: '#333333',
                  fontSize: '1.25rem',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em',
                  fontWeight: 400,
                  opacity: 0.8,
                }}
              >
                छोटी कक्षाएँ व्यक्तिगत ध्यान को सक्षम बनाती हैं, जबकि हमारे अत्याधुनिक संसाधन खोज और अन्वेषण के लिए आदर्श वातावरण प्रदान करते हैं। सुबह के योग सत्रों से लेकर शाम के सांस्कृतिक कार्यक्रमों तक, दिन का हर पहलू विकास और सीखने के लिए डिज़ाइन किया गया है।
              </p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'font-open-sans'",
                  color: '#333333',
                  fontSize: '1.25rem',
                  lineHeight: '1.7',
                  letterSpacing: '0.01em',
                  fontWeight: 400,
                  opacity: 0.8,
                }}
              >
                हमारा पाठ्यक्रम राष्ट्रीय शैक्षिक मानकों के अनुरूप है, साथ ही वैदिक ग्रंथों की कालातीत ज्ञान को भी समाहित करता है, जिससे विद्यार्थी न केवल शैक्षिक सफलता बल्कि सार्थक जीवन के लिए भी तैयार होते हैं।
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
