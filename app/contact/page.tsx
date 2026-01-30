"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('संदेश सफलतापूर्वक भेजा गया!', {
        description: 'हम 24-48 घंटों के भीतर आपसे संपर्क करेंगे।',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('प्रेषण विफल', {
        description: 'कृपया पुन: प्रयास करें या सीधे फोन या ईमेल द्वारा हमसे संपर्क करें।',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'हमसे मिलें',
      content: '493, सरस्वती नगर कॉलोनी, छित्तुपुर, वाराणसी-221005 (उत्तर प्रदेश), भारत',
      action: 'दिशा-निर्देश पाएं',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'हमें कॉल करें',
      content: '+91 9839854302',
      action: 'अब कॉल करें',
      link: 'tel:+919839854302'
    },
    {
      icon: Mail,
      title: 'हमें ईमेल करें',
      content: 'info@shreepadmavaidyam.com',
      action: 'ईमेल भेजें',
      link: 'mailto:info@shreepadmavaidyam.com'
    },
    {
      icon: Clock,
      title: 'कार्यालय समय',
      content: 'सोमवार - शनिवार: 9:00 पूर्वाह्न - 5:00 अपराह्न\nरविवार: बंद',
      action: null,
      link: null
    }
  ];

  const whatsappNumber = '+919839854302';

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Header />
      <Toaster />

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
              संपर्क करें
            </h1>
            <p className="font-['Open_Sans'] text-[1.5rem] tracking-[0.01em] font-medium md:text-[1.75rem] md:leading-[1.8] text-[#333333]/80 max-w-4xl mx-auto leading-relaxed">
              हम आपके प्रश्नों का उत्तर देने और आपकी यात्रा में मार्गदर्शन करने के लिए यहाँ हैं
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FFFFFF] p-8 rounded-lg border border-[#DAA520]/20"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}>
                  <info.icon className="w-7 h-7 text-[#FF9933]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">
                  {info.title}
                </h3>
                <p className="font-['Open_Sans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/70 mb-4 leading-relaxed whitespace-pre-line">
                  {info.content}
                </p>
                {info.action && info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] text-[#FF9933] font-semibold hover:underline"
                  >
                    {info.action} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#FFFFFF]">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Playfair_Display'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
                हमें संदेश भेजें
              </h2>
              <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 mb-8 leading-relaxed">
                कोई प्रश्न या पूछताछ है? नीचे फ़ॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे।
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333] mb-2 block">
                    आपका नाम *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="font-['Open_Sans']"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333] mb-2 block">
                      ईमेल पता *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="font-['Open_Sans']"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333] mb-2 block">
                      फ़ोन नंबर
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-['Open_Sans']"
                    />
                  </div>
                </div>

                <div>
                    <Label htmlFor="subject" className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333] mb-2 block">
                    विषय *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="जैसे: प्रवेश संबंधी पूछताछ, कैंपस विज़िट, सामान्य प्रश्न"
                    className="font-['Open_Sans']"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-['Open_Sans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333] mb-2 block">
                    आपका संदेश *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="हमें बताएं कि हम आपकी कैसे मदद कर सकते हैं..."
                    className="font-['Open_Sans']"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 py-6 text-[1.25rem] leading-[1.7] tracking-[0.01em] font-semibold rounded-lg"
                >
                  {isSubmitting ? 'संदेश भेजा जा रहा है...' : 'संदेश भेजें'}
                </Button>
              </form>

              {/* WhatsApp Contact */}
              <div className="mt-8 p-6 bg-[#F5E6D3] rounded-lg border border-[#DAA520]/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(19,136,8,0.1)' }}>
                    <MessageSquare className="w-6 h-6 text-[#138808]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Playfair_Display'] text-[1.25rem] leading-[1.7] tracking-[0.01em] font-normal text-[#333333] mb-1">
                      क्या आप व्हाट्सऐप पसंद करते हैं?
                    </h4>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333]/70">
                      त्वरित उत्तरों के लिए हमारे साथ तुरंत चैट करें
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#138808] text-[#FFFFFF] hover:bg-[#138808]/90 rounded-lg">
                      अब चैट करें
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Playfair_Display'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
                हमें कहाँ मिलेंगे
              </h2>
              <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 mb-8 leading-relaxed">
                हमारा कैंपस हिमालय की शांत तलहटी में स्थित है, जो सीखने और आध्यात्मिक विकास के लिए एक शांत वातावरण प्रदान करता है।
              </p>

              {/* Embedded Map */}
              <div className="w-full h-125 rounded-lg overflow-hidden border border-[#DAA520]/20">
                <iframe
                  src="https://www.google.com/maps?q=493%20Saraswati%20Nagar%20Colony%20Chittupur%20Varanasi%20221005%20Uttar%20Pradesh%20India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="श्रीपद वैद्य्यम स्थान"
                />
              </div>

              {/* Directions */}
              <div className="mt-6 p-6 bg-[#F5E6D3] rounded-lg border border-[#DAA520]/20">
                <h4><span className="font-['Playfair_Display'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-4">हम तक कैसे पहुँचें</span></h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333] mb-1">
                      वायु मार्ग
                    </p>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333]/70">
                      नज़दीकी हवाई अड्डा: लाल बहादुर शास्त्री एयरपोर्ट (वाराणसी)
                    </p>
                  </div>
                  <div>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333] mb-1">
                      रेल मार्ग
                    </p>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333]/70">
                      नज़दीकी रेलवे स्टेशन: वाराणसी जंक्शन
                    </p>
                  </div>
                  <div>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333] mb-1">
                      सड़क मार्ग
                    </p>
                    <p className="font-['Open_Sans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333]/70">
                      सड़क मार्ग से अच्छी तरह जुड़ा हुआ है; नज़दीकी शहरों से नियमित बसें और टैक्सियाँ उपलब्ध हैं
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section className="w-full py-24 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-['Playfair_Display'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
              कैंपस यात्रा शेड्यूल करें
            </h2>
            <p className="font-['Open_Sans'] text-[1.25rem] tracking-[0.01em] font-normal text-[#333333]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              हमारे गुरुकुल का सीधा अनुभव लें। हमारे संकाय से मिलें, सुविधाओं का अन्वेषण करें, और हमारे परिवर्तनकारी शिक्षण वातावरण का अनुभव करें।
            </p>
            <a href="tel:+911234567890">
                <Button className="bg-[#DAA520] text-[#FFFFFF] hover:bg-[#DAA520]/90 px-10 py-6 text-[1.25rem] leading-[1.7] tracking-[0.01em] font-semibold rounded-lg">
                <Phone className="mr-2 h-5 w-5" />
                यात्रा शेड्यूल करने के लिए कॉल करें
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
