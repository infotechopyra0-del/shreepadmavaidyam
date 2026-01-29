"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Faculty } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Award } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isLoading] = useState(false);
  const faculty: Faculty[] = [
    {
      _id: '1',
      name: 'गुरु राघवेंद्र शर्मा',
      designation: 'वरिष्ठ गुरु',
      credentials: 'वेद व्यास आचार्य (परंपरागत उपाधि), संस्कृत साहित्य में पीएचडी, "विद्या रत्न" पुरस्कार प्राप्त।',
      biography: 'गुरु राघवेंद्र शर्मा वेदों और प्राचीन भारतीय दर्शन के प्रतिष्ठित विद्वान हैं। चार दशकों से अधिक के समर्पित अध्ययन और शिक्षण के साथ, वे पारंपरिक गुरुकुल भावना के प्रतीक हैं, जो विद्यार्थियों का मार्गदर्शन गहन ज्ञान और अटूट धैर्य के साथ करते हैं। उनके शिक्षण में नैतिक जीवन और आध्यात्मिक विकास पर विशेष बल है।',
      teachingPhilosophy: 'मेरा दर्शन केवल ज्ञान देना नहीं, बल्कि विवेक और आत्मबोध का विकास करना है, जो पारंपरिक विधियों और व्यक्तिगत मार्गदर्शन के माध्यम से धर्म की गहरी समझ को बढ़ाता है।',
      photo: '/images/gururaghavendrasharma.png',
    },
    {
      _id: '2',
      name: 'आचार्या डॉ. मीना देवी',
      designation: 'आचार्या (दर्शन विभागाध्यक्ष)',
      credentials: 'तुलनात्मक दर्शन में पीएचडी, संस्कृत और पाली में एमए, प्रमाणित योग प्रशिक्षिका (RYT 500)।',
      biography: 'डॉ. मीना देवी शास्त्रीय भारतीय भाषाओं और तुलनात्मक दर्शन में विशेषज्ञ हैं। उनका शैक्षणिक अनुशासन और आध्यात्मिक दृष्टिकोण उन्हें एक अनूठी शिक्षिका बनाता है। वे प्राचीन ग्रंथों को आधुनिक विद्यार्थियों के लिए सुलभ बनाने के लिए समर्पित हैं।',
      teachingPhilosophy: 'मैं शिक्षा में समग्र दृष्टिकोण में विश्वास करती हूँ, जिसमें कठोर अकादमिक शोध और व्यावहारिक दर्शन का संयोजन विद्यार्थियों में आलोचनात्मक सोच और आंतरिक शांति का विकास करता है।',
      photo: '/images/acharyameenadevi.png',
    },
    {
      _id: '3',
      name: 'पंडित आलोक कुमार',
      designation: 'पंडित (संगीत एवं कला प्रशिक्षक)',
      credentials: 'संगीत आचार्य (परंपरागत उपाधि), संगीत प्रदर्शन में मास्टर्स, अनेक राष्ट्रीय-अंतरराष्ट्रीय संगीत कार्यक्रम।',
      biography: 'पंडित आलोक कुमार हिंदुस्तानी शास्त्रीय संगीत के आचार्य हैं, जो गायन और सितार में विशेषज्ञता रखते हैं। वे प्रसिद्ध संगीतज्ञों के वंशज हैं और पारंपरिक भारतीय प्रदर्शन कलाओं के संरक्षण और प्रचार के लिए समर्पित हैं। उनकी कक्षाएँ अनुशासन और प्रेरणा का अद्भुत मिश्रण हैं।',
      teachingPhilosophy: 'मेरा उद्देश्य शास्त्रीय कलाओं के प्रति गहरी श्रद्धा जगाना है, जहाँ विद्यार्थी केवल तकनीक ही नहीं, बल्कि उनकी आध्यात्मिकता और अनुशासन भी सीखें।',
      photo: '/images/panditalokkumar.png',
    },
    {
      _id: '4',
      name: 'श्रीमती लक्ष्मी नारायण',
      designation: 'योग एवं आरोग्य प्रशिक्षिका',
      credentials: 'प्रमाणित आयुर्वेदाचार्य, E-RYT 500 योग एलायंस, प्राकृतिक चिकित्सा में डिप्लोमा।',
      biography: 'श्रीमती लक्ष्मी नारायण योग और आयुर्वेद की अनुभवी शिक्षिका हैं। उन्होंने ऋषिकेश और केरल में गहन अध्ययन किया है और प्राचीन आरोग्य पद्धतियों की गहरी समझ रखती हैं। उनका मार्गदर्शन विद्यार्थियों को शारीरिक और मानसिक संतुलन प्राप्त करने में सहायक है।',
      teachingPhilosophy: 'मैं विद्यार्थियों को योग और आयुर्वेद की प्राचीन ज्ञान से आंतरिक आत्म-संपर्क और समग्र स्वास्थ्य की ओर मार्गदर्शन करती हूँ।',
      photo: '/images/smtlakshminarayan.png',
    },
    {
      _id: '5',
      name: 'प्रो. राजेश गुप्ता',
      designation: 'प्रोफेसर (प्राचीन विज्ञान)',
      credentials: 'विज्ञान के इतिहास में पीएचडी, गणित में एमएससी, "प्राचीन भारतीय नवाचार" के लेखक।',
      biography: 'प्रोफेसर राजेश गुप्ता प्राचीन भारतीय विज्ञानों के विद्वान हैं, जिनमें गणित, खगोलशास्त्र और धातुकर्म शामिल हैं। वे पारंपरिक ज्ञान और आधुनिक विज्ञान के बीच सेतु का कार्य करते हैं। उनका शोध प्राचीन भारत की वैज्ञानिक उपलब्धियों को उजागर करता है।',
      teachingPhilosophy: 'मैं विद्यार्थियों को प्राचीन ग्रंथों में निहित वैज्ञानिक प्रतिभा से परिचित कराता हूँ, जिससे वे जिज्ञासु और आलोचनात्मक दृष्टि से भारतीय ज्ञान की विरासत को समझ सकें।',
      photo: '/images/profrajeshgupta.png',
    },
    {
      _id: '6',
      name: 'डॉ. अनन्या सिंह',
      designation: 'वैदिक अनुष्ठान प्रशिक्षिका',
      credentials: 'वैदिक अध्ययन में पीएचडी, पुरोहित प्रमाणपत्र (परंपरागत), धार्मिक अध्ययन में एमए।',
      biography: 'डॉ. अनन्या सिंह वैदिक अनुष्ठानों और उनके दार्शनिक आधारों में विशेषज्ञ हैं। उन्होंने पारंपरिक पुरोहितों और आधुनिक विद्वानों के सान्निध्य में वर्षों तक अध्ययन किया है। वे इन पवित्र परंपराओं के संरक्षण और शिक्षण के लिए समर्पित हैं।',
      teachingPhilosophy: 'मेरा शिक्षण वैदिक अनुष्ठानों की शुद्धता और गूढ़ अर्थ पर केंद्रित है, जिससे विद्यार्थी उनकी आध्यात्मिक और सांस्कृतिक महत्ता को समझ सकें।',
      photo: '/images/profrananyasingh.png',
    },
    {
      _id: '7',
      name: 'श्री गोपाल दास',
      designation: 'भक्ति एवं साधना प्रशिक्षक',
      credentials: 'भक्ति शास्त्री (परंपरागत उपाधि), प्रमाणित कीर्तन लीडर, दशकों का साधना और शिक्षण अनुभव।',
      biography: 'श्री गोपाल दास भक्ति योग और कीर्तन के समर्पित साधक और शिक्षक हैं। उनका जीवन भक्ति की शक्ति का प्रमाण है, और वे विद्यार्थियों को संगीत और साधना के माध्यम से प्रेम और समर्पण का अनुभव कराते हैं।',
      teachingPhilosophy: 'मैं भक्ति के माध्यम से हृदय को जागृत करने में विश्वास करता हूँ, जिससे विद्यार्थी कीर्तन, कथा और सेवा के द्वारा आनंद और परिवर्तन का अनुभव करें।',
      photo: '/images/shrigopaldas.png',
    },
    {
      _id: '8',
      name: 'कुमारी प्रिया शर्मा',
      designation: 'भाषा एवं साहित्य शिक्षिका',
      credentials: 'संस्कृत साहित्य में एमए, हिंदी में बीए, प्रमाणित भाषा शिक्षिका।',
      biography: 'कुमारी प्रिया शर्मा संस्कृत और हिंदी साहित्य की उत्साही शिक्षिका हैं। वे नवीन दृष्टिकोण और रचनात्मक शिक्षण विधियों के माध्यम से शास्त्रीय भाषाओं को विद्यार्थियों के लिए रोचक और सुलभ बनाती हैं। वे स्वयं भी एक नवोदित कवयित्री हैं।',
      teachingPhilosophy: 'मेरा उद्देश्य शास्त्रीय भाषाओं और साहित्य के प्रति विद्यार्थियों में रुचि जगाना है, जिससे वे रचनात्मक और संवादात्मक तरीकों से सीखने का आनंद लें।',
      photo: '/images/kumaripriyasharma.png',
    },
    {
      _id: '9',
      name: 'आचार्य विक्रम सिंह',
      designation: 'आचार्य (शारीरिक एवं युद्धकला)',
      credentials: 'कलारिपयट्टु ग्रैंडमास्टर (परंपरागत उपाधि), शारीरिक शिक्षा में डिप्लोमा, प्रमाणित आत्मरक्षा प्रशिक्षक।',
      biography: 'आचार्य विक्रम सिंह पारंपरिक भारतीय युद्धकला (कलारिपयट्टु) और शारीरिक संस्कृति के आचार्य हैं। वे अनुशासन, शक्ति और मानसिक एकाग्रता को आध्यात्मिक विकास का अभिन्न अंग मानते हैं। उनका कठोर प्रशिक्षण चरित्र और दृढ़ता का निर्माण करता है।',
      teachingPhilosophy: 'मैं सिखाता हूँ कि शारीरिक अनुशासन मानसिक स्पष्टता और आध्यात्मिक शक्ति का मार्ग है, जिससे साहस, आत्म-नियंत्रण और सम्मान का विकास होता है।',
      photo: '/images/acharyavikramsingh.png',
    },
    {
      _id: '10',
      name: 'साध्वी रेणुका देवी',
      designation: 'ध्यान एवं आध्यात्मिक मार्गदर्शिका',
      credentials: 'दीक्षित साध्वी (परंपरागत उपाधि), प्रमाणित माइंडफुलनेस प्रशिक्षिका, विपश्यना और राजयोग में गहन अनुभव।',
      biography: 'साध्वी रेणुका देवी एक त्यागी और ध्यान मार्गदर्शिका हैं, जिन्होंने भारत के विभिन्न आश्रमों और मौन साधना शिविरों में वर्षों बिताए हैं। वे माइंडफुलनेस, ध्यान और आत्म-अन्वेषण के मार्ग में गहन अंतर्दृष्टि प्रदान करती हैं। उनकी उपस्थिति शांति और गहन ज्ञान का संचार करती है।',
      teachingPhilosophy: 'मेरा मार्गदर्शन विद्यार्थियों को मन की शांति, आंतरिक मौन और आत्म-चिंतन के माध्यम से भीतर छिपे गहन आनंद और ज्ञान की खोज में सहायता करता है।',
      photo: '/images/sadhvirenukadevi.png',
    },
  ];

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
                fontFamily: "'font-playfair-display'",
                color: '#333333',
                fontSize: '3rem',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
              }}
            >
              हमारे गुरु और शिक्षक
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
              समर्पित गुरु और शिक्षकों से मिलिए, जो हमारे विद्यार्थियों के सीखने और विकास के मार्गदर्शक हैं।
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
              हमारे शिक्षक अनुभवी विद्वान, परंपरागत मार्गदर्शक और समर्पित शिक्षणकर्ता हैं, जो ज्ञान और चरित्र के उच्चतम मानदंडों का पालन करते हैं। प्रत्येक सदस्य अपनी क्षेत्र विशेष में गहरी विशेषज्ञता और विद्यार्थियों के समग्र विकास के प्रति जुनून लेकर आते हैं।
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
              गुरु-शिष्य परंपरा की सच्ची भावना में, हमारे शिक्षक केवल अध्यापक ही नहीं बल्कि मार्गदर्शक, आदर्श और मेंटोर भी हैं, जो विद्यार्थियों को उनकी पूर्ण क्षमता तक पहुँचने के लिए प्रेरित करते हैं।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <div className="min-h-150">
            {isLoading ? null : faculty.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faculty.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden transition-all cursor-pointer group"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(218, 165, 32, 0.2)'
                    }}
                    onClick={() => setSelectedFaculty(member)}
                  >
                    {member.photo && (
                      <div className="relative overflow-hidden h-80">
                        <Image
                          src={member.photo}
                          alt={member.name || 'Faculty member'}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: "'font-playfair-display'",
                          color: '#333333',
                          fontSize: '1.75rem',
                          lineHeight: '1.8',
                          letterSpacing: '0.01em',
                          fontWeight: 600,
                        }}
                      >
                        {member.name}
                      </h3>
                      {member.designation && (
                        <p
                          className="mb-4"
                          style={{
                            fontFamily: "'font-open-sans'",
                            color: '#FF9933',
                            fontSize: '1.125rem',
                            lineHeight: '1.6',
                            letterSpacing: '0.01em',
                            fontWeight: 600,
                          }}
                        >
                          {member.designation}
                        </p>
                      )}
                      {member.credentials && (
                        <div className="flex items-start space-x-2 mb-4">
                          <Award className="w-5 h-5" style={{ color: '#DAA520', marginTop: 4, flexShrink: 0 }} />
                          <p
                            className="leading-relaxed"
                            style={{
                              fontFamily: "'font-open-sans'",
                              color: 'rgba(51,51,51,0.7)',
                              fontSize: '1rem',
                              lineHeight: '1.5',
                              letterSpacing: '0.01em',
                              fontWeight: 400,
                            }}
                          >
                            {member.credentials}
                          </p>
                        </div>
                      )}
                      {member.biography && (
                        <p
                          className="leading-relaxed line-clamp-3"
                          style={{
                            fontFamily: "'font-open-sans'",
                            color: 'rgba(51,51,51,0.6)',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            letterSpacing: '0.01em',
                            fontWeight: 400,
                          }}
                        >
                              {member.biography}
                        </p>
                      )}
                      <p
                        className="mt-4 group-hover:underline"
                        style={{
                          fontFamily: "'font-open-sans'",
                          color: '#FF9933',
                          fontSize: '1rem',
                          lineHeight: '1.5',
                          letterSpacing: '0.01em',
                          fontWeight: 600,
                        }}
                      >
                            पूर्ण प्रोफ़ाइल देखें →
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                  हमारे शिक्षक प्रोफाइल अपडेट किए जा रहे हैं। कृपया थोड़ी देर बाद वापस आकर जाँच करें।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Detail Dialog */}
      <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
        <DialogContent
          className="max-w-4xl max-h-[90vh]"
          style={{
            backgroundColor: '#FFFFFF',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none', 
          }}
        >
          <style>{`
            .max-w-4xl::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {selectedFaculty && (
            <>
              <DialogHeader>
                <DialogTitle
                  style={{
                    fontFamily: "'font-playfair-display'",
                    color: '#333333',
                    fontSize: '2rem',
                    lineHeight: '1.2',
                    letterSpacing: '0.01em',
                    fontWeight: 'bold',
                  }}
                >
                  {selectedFaculty.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {selectedFaculty.photo && (
                  <div className="w-full h-96 overflow-hidden rounded-lg">
                    <Image
                      src={selectedFaculty.photo}
                      alt={selectedFaculty.name || 'Faculty member'}
                      width={400}
                      height={384}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {selectedFaculty.designation && (
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        fontFamily: "'font-open-sans'",
                        color: '#FF9933',
                        fontSize: '1.25rem',
                        lineHeight: '1.7',
                        letterSpacing: '0.01em',
                        fontWeight: 600,
                      }}
                    >
                      {selectedFaculty.designation}
                    </h4>
                  </div>
                )}

                {selectedFaculty.credentials && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-5 h-5" style={{ color: '#DAA520' }} />
                      <h4
                        style={{
                          fontFamily: "'font-playfair-display'",
                          color: '#333333',
                          fontSize: '1.5rem',
                          lineHeight: '1.75',
                          letterSpacing: '0.01em',
                          fontWeight: 500,
                        }}
                      >
                        प्रमाणपत्र
                      </h4>
                    </div>
                    <p
                      style={{
                        fontFamily: "'font-open-sans'",
                        color: 'rgba(51,51,51,0.8)',
                        fontSize: '1.125rem',
                        lineHeight: '1.6',
                        letterSpacing: '0.01em',
                        fontWeight: 400,
                      }}
                    >
                      {selectedFaculty.credentials}
                    </p>
                  </div>
                )}

                {selectedFaculty.biography && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <GraduationCap className="w-5 h-5" style={{ color: '#DAA520' }} />
                      <h4
                        style={{
                          fontFamily: "'font-playfair-display'",
                          color: '#333333',
                          fontSize: '1.5rem',
                          lineHeight: '1.75',
                          letterSpacing: '0.01em',
                          fontWeight: 500,
                        }}
                      >
                        जीवनी
                      </h4>
                    </div>
                    <p
                      style={{
                        fontFamily: "'font-open-sans'",
                        color: 'rgba(51,51,51,0.8)',
                        fontSize: '1.125rem',
                        lineHeight: '1.6',
                        letterSpacing: '0.01em',
                        fontWeight: 400,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {selectedFaculty.biography}
                    </p>
                  </div>
                )}

                {selectedFaculty.teachingPhilosophy && (
                  <div>
                    <h4
                      className="mb-3"
                      style={{
                        fontFamily: "'font-playfair-display'",
                        color: '#333333',
                        fontSize: '1.5rem',
                        lineHeight: '1.75',
                        letterSpacing: '0.01em',
                        fontWeight: 500,
                      }}
                    >
                      शिक्षण दर्शन
                    </h4>
                    <p
                      style={{
                        fontFamily: "'font-open-sans'",
                        color: 'rgba(51,51,51,0.8)',
                        fontSize: '1.125rem',
                        lineHeight: '1.6',
                        letterSpacing: '0.01em',
                        fontWeight: 400,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {selectedFaculty.teachingPhilosophy}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Teaching Excellence Section */}
      <section className="w-full py-24 px-8 md:px-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'font-playfair-display'",
                  color: '#333333',
                  fontSize: '2.5rem',
                  lineHeight: '1.15',
                  letterSpacing: '0.01em',
                  fontWeight: 'bold',
                }}
              >
                शिक्षण में उत्कृष्टता
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
                हमारे शिक्षक अकादमिक उत्कृष्टता, उत्कृष्ट शिक्षण कौशल और हमारे मूल्यों के अनुरूप चयनित किए जाते हैं। कई सम्मानित संस्थानों से उच्च शिक्षा ग्रहण कर चुके हैं और पारंपरिक तथा आधुनिक दोनों ही शैक्षिक परिवेशों में वर्षों का अनुभव लाते हैं।
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
                अकादमिक योग्यताओं के अलावा, हमारे शिक्षक उन्हीं विषयों के प्रायोगिक अभ्यासक भी हैं—चाहे वह संस्कृत शास्त्रों में निपुणता हो, शास्त्रीय संगीत में कौशल हो, या आधुनिक विज्ञानों में विशेषज्ञता। यह प्रामाणिक ज्ञान विद्यार्थियों को जीवंत परंपरा के रूप में सीखने का अनुभव कराता है।
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
                नियमित पेशेवर विकास और सतत् सीखने की प्रतिबद्धता के माध्यम से, हमारे शिक्षक शैक्षिक नवाचारों के साथ स्वयं को अद्यतन रखते हैं, जबकि शैक्षिक ज्ञान की शाश्वत परंपरा में स्थिर बने रहते हैं।
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/facultymemberteachingstudentsintraditionalsetting.png"
                alt="परंपरागत परिवेश में छात्रों को पढ़ाते हुए शिक्षक"
                width={500}
                height={300}
                className="w-full h-125 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
