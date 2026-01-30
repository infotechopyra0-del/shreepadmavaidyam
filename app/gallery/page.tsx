"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gallery } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

export default function GalleryPage() {
  const MOCK_GALLERY: Gallery[] = [
    {
      _id: '1',
      title: 'पुस्तकालय में पढ़ते छात्र',
      mediaImage: '/images/studentsstudyinginthelibrary.png',
      category: 'विद्यार्थी जीवन',
      altText: 'आधुनिक विश्वविद्यालय पुस्तकालय में किताबों और लैपटॉप पर ध्यान केंद्रित करते छात्र।',
    },
    {
      _id: '2',
      title: 'नए इंजीनियरिंग भवन का उद्घाटन',
      mediaImage: '/images/newengineeringbuildinggrandopening.png',
      category: 'अवसंरचना',
      altText: 'नए अत्याधुनिक इंजीनियरिंग भवन के प्रवेश पर फीता काटने का समारोह।',
    },
    {
      _id: '3',
      title: 'स्नातक समारोह 2023 के मुख्य अंश',
      mediaImage: '/images/graduationceremonyhighlights.png',
      category: 'समारोह',
      altText: 'मंच पर टोपी और गाउन में स्नातक 2023 समारोही समारोह में जश्न मनाते हुए।',
    },
    {
      _id: '4',
      title: 'शरद ऋतु में कैंपस ग्रीन',
      mediaImage: '/images/campusgreeninautumn.png',
      category: 'कैंपस जीवन',
      altText: 'मुख्य कैंपस ग्रीन पर जीवंत पतझड़ के पत्ते और वहां से गुजरते छात्र।',
    },
    {
      _id: '5',
      title: 'रोबोटिक्स क्लब प्रतियोगिता',
      mediaImage: '/images/roboticsclubcompetition.png',
      category: 'शैक्षिक',
      altText: 'अंतर-विश्वविद्यालय रोबोटिक्स प्रतियोगिता में अपने स्वयं निर्मित रोबोट प्रस्तुत करते छात्र।',
    },
    {
      _id: '6',
      title: 'विश्वविद्यालय खेल मैदान',
      mediaImage: '/images/universitysportsfield.png',
      category: 'खेल',
      altText: 'साफ आकाश के नीचे विश्वविद्यालय के बहुउद्देश्यीय खेल मैदान का हवाई दृश्य।',
    },
    {
      _id: '7',
      title: 'कला प्रदर्शनी उद्घाटन संध्या',
      mediaImage: '/images/artexhibitionopeningnight.png',
      category: 'कला और संस्कृति',
      altText: 'छात्र कला प्रदर्शनी के उद्घाटन पर विभिन्न कलाकृतियों की प्रशंसा करते हुए दर्शक।',
    },
    {
      _id: '8',
      title: 'अनुसंधान प्रयोगशाला प्रयोग',
      mediaImage: '/images/researchlabexperiment.png',
      category: 'अनुसन्धान',
      altText: 'वैज्ञानिक उपकरणों के साथ प्रयोग करते हुए एक शोधकर्ता।',
    },
    {
      _id: '9',
      title: 'छात्र परिचय दिवस',
      mediaImage: '/images/studentorientationday.png',
      category: 'कैंपस कार्यक्रम',
      altText: 'विश्वविद्यालय परिचय दिवस के दौरान सभागार में इकठ्ठे नए छात्र।',
    },
    {
      _id: '10',
      title: 'व्याख्यान हॉल का अंदरूनी दृश्य',
      mediaImage: '/images/lecturehallinterior.png',
      category: 'अवसंरचना',
      altText: 'स्तरीय बैठकों और बड़े प्रोजेक्शन स्क्रीन वाला आधुनिक व्याख्यान हॉल, कक्षा के लिए तैयार।',
    },
    {
      _id: '11',
      title: 'संगीत विभाग कॉन्सर्ट',
      mediaImage: '/images/musicdepartmentconcert.png',
      category: 'कला और संस्कृति',
      altText: 'भव्य कॉन्सर्ट हॉल में मंच पर प्रदर्शन करती विश्वविद्यालय ऑर्केस्ट्रा।',
    },
    {
      _id: '12',
      title: 'विदेश अध्ययन मेला',
      mediaImage: '/images/studyabroadfair.png',
      category: 'शैक्षणिक',
      altText: 'वार्षिक विदेश अध्ययन मेले के दौरान बूथों पर प्रतिनिधियों के साथ बातचीत करते छात्र।',
    },
    {
      _id: '13',
      title: 'कैंपस सततता परियोजना',
      mediaImage: '/images/campussustainabilityproject.png',
      category: 'अनुसन्धान',
      altText: 'कैंपस सततता पहल के हिस्से के रूप में सौर पैनल इंस्टॉलेशन पर काम करते छात्र।',
    },
  ];

  const [galleryItems, setGalleryItems] = useState<Gallery[]>(MOCK_GALLERY);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('सभी');
  const [selectedItem, setSelectedItem] = useState<Gallery | null>(null);


  const categories = [
    'सभी',
    ...Array.from(
      new Set(
        galleryItems
          .map((item) => item.category)
          .filter((c): c is string => Boolean(c))
      )
    ),
  ];
  
  const filteredItems = selectedCategory === 'सभी' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full py-24 px-8 md:px-16 bg-[#FFFFFF]">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-['Playfair_Display'] text-[3rem] leading-[1.1] tracking-[0.01em] font-bold md:text-[4rem] md:leading-[1.05] text-[#333333] mb-6">
              गैलरी
            </h1>
            <p className="font-['Open_Sans'] text-[1.5rem] tracking-[0.01em] font-medium md:text-[1.75rem] md:leading-[1.8] text-[#333333]/80 max-w-4xl mx-auto leading-relaxed">
              समय में कैद पलों के माध्यम से हमारे गुरुकुल के जीवन का अनुभव करें
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full px-8 md:px-16 py-10">
        <div className="max-w-400 mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#FF9933] text-[#FFFFFF]'
                    : 'bg-[#FFFFFF] text-[#333333] border border-[#DAA520]/20 hover:border-[#DAA520]'
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="mask-x-to-yellow-400 mx-auto">
          <div className="min-h-150">
            {isLoading ? null : filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-white border border-secondary/20 hover:border-secondary transition-all"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      {item.mediaImage && (
                        <Image
                          src={item.mediaImage}
                          alt={item.altText || item.title || 'गैलरी छवि'}
                          width={800}
                          height={800}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {item.mediaVideoUrl && (
                        <div className="absolute inset-0 bg-[#333333]/40 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#FF9933] rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-[#FFFFFF] ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-[#333333]/80 via-[#333333]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          {item.title && (
                            <h3 className="font-['Playfair_Display'] text-[1.25rem] leading-[1.7] tracking-[0.01em] font-normal text-[#FFFFFF] mb-1">
                              {item.title}
                            </h3>
                          )}
                          {item.category && (
                            <p className="font-['Open_Sans'] text-[1rem] tracking-[0.01em] font-normal text-[#FFFFFF]/80">
                              {item.category}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
                <div className="text-center py-16">
                <p className="font-['Open_Sans'] text-[1.25rem] leading-[1.7] tracking-[0.01em] font-normal text-[#333333]/60">
                  {selectedCategory === 'सभी'
                    ? 'हमारी गैलरी नए सामग्री के साथ अपडेट की जा रही है। कृपया बाद में देखें।'
                    : `${selectedCategory} श्रेणी में कोई आइटम नहीं मिला।`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-[#333333] border-none">
          {selectedItem && (
            <div className="relative">
              {selectedItem.mediaVideoUrl ? (
                <div className="aspect-video">
                  {getYouTubeEmbedUrl(selectedItem.mediaVideoUrl) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(selectedItem.mediaVideoUrl) || ''}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={selectedItem.title || 'वीडियो'}
                    />
                  ) : (
                    <video
                      src={selectedItem.mediaVideoUrl}
                      controls
                      className="w-full h-full"
                    />
                  )}
                </div>
              ) : selectedItem.mediaImage ? (
                <div className="relative">
                  <Image
                    src={selectedItem.mediaImage}
                    alt={selectedItem.altText || selectedItem.title || 'Gallery image'}
                    width={1200}
                    height={800}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </div>
              ) : null}
              
              {(selectedItem.title || selectedItem.category) && (
                <div className="bg-[#FFFFFF] p-6">
                  {selectedItem.title && (
                    <h3 className="font-['Playfair_Display'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-2">
                      {selectedItem.title}
                    </h3>
                  )}
                  {selectedItem.category && (
                    <p className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] text-[#FF9933] font-semibold">
                      {selectedItem.category}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Campus Life Section */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#FFFFFF]">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-['Playfair_Display'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
                  हमारे गुरुकुल का जीवन
                </h2> 
                <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 mb-6 leading-relaxed">
                  हमारा कैंपस सीखने, विकास और उत्सव से भरा एक जीवंत ताना-बाना है। शांत सुबह की योग सत्रों
                  से लेकर जोशपूर्ण सांस्कृतिक प्रस्तुतियों तक — हर दिन छात्रों के लिए खोजने, सृजन करने,
                  और जुड़ने के नए अवसर लाता है।
                </p>
                <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 mb-6 leading-relaxed">
                  यह गैलरी हमारी समुदाय की आत्मा को दर्शाती है — पारंपरिक यज्ञ समारोह जो हमें अपनी जड़ों
                  से जोड़ते हैं, आधुनिक कक्षाएँ जहाँ विचारों को चुनौती दी जाती है, हरे-भरे खुला परिसर जहाँ
                  प्रकृति हमारी अध्यापिका बनती है, और मित्रता तथा खोज के आनंदमय क्षण।
                </p>
                <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                  ये तस्वीरें और वीडियो परिवर्तन की कहानी बताती हैं — उन युवा व्यक्तियों की जो अपनी विरासत का
                  सम्मान करते हुए भविष्य को अपनाते हुए, ज्ञानवान, करुणामय और सक्षम नेता बनते हैं।
                </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/studentsparticipatinginculturalactivities.png"
                alt="सांस्कृतिक गतिविधियों में भाग लेते छात्र"
                width={896}
                height={448}
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
