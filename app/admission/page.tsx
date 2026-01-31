"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AdmissionFAQs, ImportantDates } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, CheckCircle, FileText, Users, Download } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { format } from 'date-fns';
import { hi } from 'date-fns/locale';

export default function AdmissionPage() {
  const MOCK_FAQS: AdmissionFAQs[] = [
    {
      _id: 'faq-1',
      question: 'स्नातक कार्यक्रमों के लिए सामान्य पात्रता मानदंड क्या हैं?',
      answer:
        'स्नातक कार्यक्रमों के लिए आवेदकों को आमतौर पर न्यूनतम GPA 3.0 (या समकक्ष) के साथ अपनी हाई स्कूल शिक्षा पूरी करनी चाहिए और अंग्रेजी में प्रवीणता दिखानी चाहिए। कुछ विशिष्ट कार्यक्रमों में अतिरिक्त पूर्वापेक्षाएँ हो सकती हैं।',
    },
    {
      _id: 'faq-2',
      question: 'मैं प्रवेश के लिए कैसे आवेदन करूँ?',
      answer:
        'आवेदन हमारे ऑनलाइन प्रवेश पोर्टल के माध्यम से जमा किए जाते हैं। आपको एक खाता बनाना होगा, आवेदन फॉर्म भरना होगा, आवश्यक दस्तावेज अपलोड करने होंगे और आवेदन शुल्क का भुगतान करना होगा।',
    },
    {
      _id: 'faq-3',
      question: 'आवेदन के लिए कौन से दस्तावेज़ आवश्यक हैं?',
      answer:
        'आम तौर पर, आपको आधिकारिक अंकतालिका, सिफारिश पत्र, व्यक्तिगत विवरण और मानकीकृत परीक्षा स्कोर (यदि लागू हो) जमा करने होंगे। अंतरराष्ट्रीय छात्रों को अंग्रेजी प्रवीणता का प्रमाण भी देना पड़ सकता है।',
    },
    {
      _id: 'faq-4',
      question: 'आगामी शैक्षणिक वर्ष के लिए आवेदन की अंतिम तिथियाँ क्या हैं?',
      answer:
        'प्रारंभिक निर्णय (Early Decision) के लिए आवेदन 1 नवंबर तक, सामान्य निर्णय 15 जनवरी तक, और ट्रांसफर आवेदन 1 मार्च तक होने चाहिए। सटीक तिथियों के लिए कृपया संबंधित कार्यक्रम पृष्ठ देखें।',
    },
    {
      _id: 'faq-5',
      question: 'क्या कोई छात्रवृत्ति या वित्तीय सहायता उपलब्ध है?',
      answer: 'हाँ, हम कई मेरिट-आधारित छात्रवृत्तियाँ और आवश्यकता-आधारित वित्तीय सहायता प्रदान करते हैं। आवेदकों को आवश्यक फॉर्म भरने के लिए प्रोत्साहित किया जाता है।',
    },
    {
      _id: 'faq-6',
      question: 'क्या मुझे अंग्रेजी प्रवीणता परीक्षा देनी होगी?',
      answer:
        'यदि आपकी मातृभाषा अंग्रेजी नहीं है और आपने अंग्रेजी बोलने वाले देश में डिग्री नहीं पूरी की है, तो आमतौर पर TOEFL या IELTS स्कोर प्रस्तुत करना आवश्यक होता है।',
    },
    {
      _id: 'faq-7',
      question: 'मुझे प्रवेश निर्णय कब मिलेगा?',
      answer:
        'प्रारंभिक निर्णय आवेदकों के लिए निर्णय सामान्यतः मध्य-दिसंबर तक जारी होते हैं, और सामान्य निर्णय आवेदकों के लिए मार्च के अंत तक। ट्रांसफर निर्णय आमतौर पर रोलिंग आधार पर किए जाते हैं।',
    },
    {
      _id: 'faq-8',
      question: 'यदि प्रवेश स्वीकार हो जाए तो क्या मैं दाखिला टाल सकता/सकती हूँ?',
      answer:
        'टालने के अनुरोधों पर मामले-दर-मामला विचार किया जाता है और सामान्यतः एक शैक्षणिक वर्ष के लिए अनुमति दी जाती है। टालने का कारण लिखित रूप में प्रस्तुत करना आवश्यक है।',
    },
  ];

  const MOCK_IMPORTANT_DATES: ImportantDates[] = [
    {
      _id: 'date-1',
      eventName: 'आवेदन खुला',
      eventDate: new Date().toISOString(),
      description: 'ऑनलाइन आवेदन पोर्टल खुलता है।',
      isDeadline: false,
      category: 'आवेदन',
    },
    {
      _id: 'date-2',
      eventName: 'आवेदन की अंतिम तिथि',
      eventDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
      description: 'आवेदन जमा करने की अंतिम तिथि।',
      isDeadline: true,
      category: 'अंतिम तिथि',
    },
  ];

  const [faqs, setFaqs] = useState<AdmissionFAQs[]>(MOCK_FAQS);
  const [importantDates, setImportantDates] = useState<ImportantDates[]>(MOCK_IMPORTANT_DATES);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('आवेदन सफलतापूर्वक जमा किया गया!', {
        description: 'हम आपका आवेदन समीक्षा करके 3-5 कार्यदिवसों के भीतर आपसे संपर्क करेंगे।',
      });

      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        address: '',
        message: '',
      });
    } catch (error) {
      toast.error('सबमिशन विफल', {
        description: 'कृपया पुनः प्रयास करें या सीधे हमसे संपर्क करें।',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'gurukul-admission-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast('डाउनलोड शुरू हुआ', {
      description: 'आपका प्रवेश ब्रोशर डाउनलोड हो रहा है।',
    });
  };

  const admissionSteps = [
    {
      icon: FileText,
      title: 'आवेदन जमा करें',
      description: 'आवश्यक दस्तावेज़ों के साथ ऑनलाइन आवेदन फॉर्म पूरा करें',
    },
    {
      icon: Users,
      title: 'कैंपस दर्शन',
      description: 'फैकल्टी से मिलने और सुविधाओं का दौरा करने के लिए विज़िट शेड्यूल करें',
    },
    {
      icon: CheckCircle,
      title: 'आकलन',
      description: 'छात्र बातचीत और प्रवेश समिति के साथ अभिभावक साक्षात्कार',
    },
    {
      icon: Calendar,
      title: 'नामांकन',
      description: 'प्रवेश निर्णय प्राप्त करें और नामांकन प्रक्रिया पूरा करें',
    },
  ];

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
            <h2
              className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-6"
            >
              ऑनलाइन आवेदन पत्र भरने के लिए निर्देश
            </h2>
            <p
              className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 max-w-3xl mx-auto leading-relaxed"
            >
              कृपया आवेदन पत्र भरने से पहले इन निर्देशों को ध्यानपूर्वक पढ़ें
            </p>
            <Button
              type="button"
              onClick={handleBrochureDownload}
              className="mt-8 bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 py-4 px-8 text-lg font-semibold rounded-lg inline-flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              प्रवेश ब्रोशर डाउनलोड करें
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="w-full py-24 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-6">
              प्रवेश प्रक्रिया
            </h2>
            <p className="font-['opensans'] text-[1.25rem] tracking-[0.01em] font-normal md:text-[1.5rem] text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
              एक सरल, पारदर्शी प्रक्रिया जो हमें आपके बच्चे की ज़रूरतों और आकांक्षाओं को समझने में मदद करती है
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FFFFFF] p-8 rounded-lg border border-[#DAA520]/20 text-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(255,153,51,0.1)' }}>
                  <step.icon className="w-8 h-8 text-[#FF9933]" />
                </div>
                <div className="w-8 h-8 bg-[#FF9933] text-[#FFFFFF] rounded-full flex items-center justify-center mx-auto mb-4 font-['playfairdisplay'] text-[1.25rem] leading-[1.7] tracking-[0.01em] font-normal">
                  {index + 1}
                </div>
                <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">
                  {step.title}
                </h3>
                <p className="font-['opensans'] text-[1rem] tracking-[0.01em] font-normal text-[#333333]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Eligibility & Requirements */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#FFFFFF]">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
                पात्रता मानदंड
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">आयु आवश्यकताएँ</h3>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    छात्रों को संबंधित कक्षा स्तर के लिए राष्ट्रीय शिक्षा दिशानिर्देशों के अनुसार न्यूनतम आयु आवश्यकता को पूरा करना होगा। हम कक्षा 1 से कक्षा 12 तक के प्रवेश स्वीकार करते हैं।
                  </p>
                </div>
                <div>
                  <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">शैक्षिक पूर्वापेक्षाएँ</h3>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    पिछले शैक्षणिक रिकॉर्ड और पिछले स्कूल से ट्रांसफर सर्टिफिकेट। छात्रों को आयु-उपयुक्त सीखने की तत्परता और समग्र शिक्षा के लिए उत्साह दिखाना चाहिए।
                  </p>
                </div>
                <div>
                  <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">स्वास्थ्य और फिटनेस</h3>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    चिकित्सा फिटनेस सर्टिफिकेट और टीकाकरण रिकॉर्ड। छात्रों को दैनिक योग, शारीरिक गतिविधियों और बाहरी सीखने में भाग लेने में सक्षम होना चाहिए।
                  </p>
                </div>
                <div>
                  <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-3">अभिभावकीय प्रतिबद्धता</h3>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    माता-पिता/संरक्षक को हमारी शैक्षिक दर्शन के साथ संरेखित होना चाहिए और स्कूल गतिविधियों में सक्रिय भागीदारी के माध्यम से अपने बच्चे के समग्र विकास का समर्थन करने के लिए प्रतिबद्ध होना चाहिए।
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3rem] md:leading-[1.1] text-[#333333] mb-6">
                आवश्यक दस्तावेज
              </h2>
              <div className="bg-[#F5E6D3] p-8 rounded-lg border border-[#DAA520]/20">
                <ul className="space-y-4">
                  {[
                    'हाल की तस्वीर के साथ भरा हुआ आवेदन पत्र',
                    'जन्म प्रमाणपत्र (मूल और प्रतिलिपि)',
                    'पिछले स्कूल का ट्रांसफर सर्टिफिकेट',
                    'पिछले स्कूल के शैक्षिक अभिलेख',
                    'चिकित्सा फिटनेस सर्टिफिकेट',
                    'टीकाकरण रिकॉर्ड',
                    'निवास प्रमाण (यूटिलिटी बिल या किराये का करार)',
                    'अभिभावक का पहचान प्रमाण (आधार, PAN, या पासपोर्ट)',
                    'जाति प्रमाणपत्र (यदि आरक्षण के लिए लागू हो)',
                    'आय प्रमाणपत्र (छात्रवृत्ति के विचार के लिए)'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#FF9933] mt-1 shrink-0" />
                      <span className="font-['opensans'] text-[1.125rem] leading-[1.6] tracking-[0.01em] font-normal text-[#333333]/80">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructions for Filling Online Application Form */}
      <section className="w-full py-24 px-8 md:px-16 bg-[#F5E6D3]">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-6"
            >
              ऑनलाइन आवेदन पत्र भरने के लिए निर्देश
            </h2>
            <p
              className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 max-w-3xl mx-auto leading-relaxed"
            >
              कृपया आवेदन पत्र भरने से पहले इन निर्देशों को ध्यानपूर्वक पढ़ें
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Entrance Examination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">प्रवेश परीक्षा</h3>
                <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed mb-4">
                  कक्षा 6 के लिए प्रवेश परीक्षा बहुविकल्पीय प्रश्नों (MCQs) पर आधारित होगी। परीक्षा से संबंधित विस्तृत जानकारी गुरुकुल वेबसाइट पर उपलब्ध है: <a href="https://www.gurukulkurukshetra.com" target="_blank" rel="noopener noreferrer" className="text-[#FF9933] hover:underline">www.gurukulkurukshetra.com</a>
                </p>
            </motion.div>

            {/* Application Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">सही जानकारी आवश्यक</h3>
              <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed mb-4">
                आवेदक को सभी विवरण सही और सटीक रूप से भरने होंगे, जिनमें शामिल हैं:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Candidate's full name (surname if applicable)",
                  "Date of birth",
                  "Aadhaar number",
                  "Parents' names",
                  "Name of the previously attended school"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9933] mt-1 shrink-0" />
                    <span className="font-paragraph text-base text-[#333333]/80">{(() => {
                      switch(index) {
                        case 0: return 'उम्मीदवार का पूरा नाम (यदि लागू हो तो उपनाम सहित)';
                        case 1: return 'जन्म तिथि';
                        case 2: return 'आधार नंबर';
                        case 3: return 'माता-पिता के नाम';
                        case 4: return 'पूर्व में पढ़े गए विद्यालय का नाम';
                        default: return item;
                      }
                    })()}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form Submission Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">फ़ॉर्म सबमिशन निर्देश</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-['opensans'] font-semibold text-[#333333] mb-2">महत्वपूर्ण:</p>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    आवेदन पत्र में दर्ज की गई जानकारी प्रवेश के समय अंतिम मानी जाएगी। बाद में किसी भी विवरण में कोई परिवर्तन स्वीकार नहीं किया जाएगा, अतः उम्मीदवारों को फॉर्म सावधानीपूर्वक भरने की सलाह दी जाती है।
                  </p>
                </div>
                <div>
                  <p className="font-['opensans'] font-semibold text-[#333333] mb-2">प्रस्तुत करने से पूर्व सत्यापन:</p>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    एक बार फॉर्म सबमिट हो जाने के बाद, कंप्यूटर प्रणाली द्वारा कोई भी संशोधन स्वीकार नहीं किया जाएगा। अतः सबमिट बटन पर क्लिक करने से पहले सभी विवरणों को अच्छी तरह से जांच लें।
                  </p>
                </div>
                <div>
                  <p className="font-['opensans'] font-semibold text-[#333333] mb-2">त्रुटि की स्थिति में:</p>
                  <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                    यदि कोई गलती हो जाती है, तो एक नया प्रवेश परीक्षा फॉर्म भरना अनिवार्य होगा।
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email ID and Admit Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">ईमेल आईडी और प्रवेश पत्र</h3>
              <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed mb-4">
                केवल छात्र या अभिभावक की वैध ईमेल आईडी का ही उपयोग करें। सफल पंजीकरण के बाद, प्रवेश पत्र उसी ईमेल आईडी पर भेजा जाएगा। कृपया सुनिश्चित करें कि आप सही और सक्रिय ईमेल पता प्रदान करें।
              </p>
            </motion.div>

            {/* Document Uploads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">दस्तावेज़ अपलोड</h3>
              <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed mb-4">
                फॉर्म में निर्धारित स्थानों पर निम्नलिखित दस्तावेज़ अपलोड करें:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Student's recent color photograph",
                  "Student's signature",
                  "Aadhaar card"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9933] mt-1 shrink-0" />
                    <span className="font-paragraph text-base text-[#333333]/80">{(() => {
                      switch(index) {
                        case 0: return 'छात्र की हाल ही की रंगीन फोटो';
                        case 1: return 'छात्र का हस्ताक्षर';
                        case 2: return 'आधार कार्ड';
                        default: return item;
                      }
                    })()}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Class Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-['playfairdisplay'] text-[1.75rem] leading-[1.8] tracking-[0.01em] font-semibold text-[#333333] mb-4">कक्षा चयन</h3>
              <p className="font-['opensans'] text-[1.125rem] tracking-[0.01em] font-normal text-[#333333]/80 leading-relaxed">
                केवल उसी कक्षा का उल्लेख करें जिसके लिए प्रवेश लिया जा रहा है। कृपया ध्यानपूर्वक चयन करें क्योंकि सबमिट के बाद इसमें कोई बदलाव संभव नहीं है।
              </p>
            </motion.div>

            {/* Admission Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-8 rounded-lg border border-[#FF9933]/30"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">प्रवेश शुल्क</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-paragraph font-semibold text-[#333333] mb-2">शुल्क राशि:</p>
                  <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                    छात्र का प्रवेश केवल काउंसलिंग के दिन <span className="font-semibold">₹25,000</span> प्रवेश शुल्क जमा करने के बाद ही सुनिश्चित होगा।
                  </p>
                </div>
                <div>
                  <p className="font-paragraph font-semibold text-[#333333] mb-2">अपरिवर्तनीय:</p>
                  <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                    काउंसलिंग के दिन जमा किया गया <span className="font-semibold">₹25,000</span> प्रवेश शुल्क किसी भी परिस्थिति में वापस नहीं किया जाएगा।
                  </p>
                </div>
                <div>
                  <p className="font-paragraph font-semibold text-[#333333] mb-2">महत्वपूर्ण सूचना:</p>
                  <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                    माता-पिता/संरक्षक केवल तभी शुल्क जमा करें जब वे प्रवेश लेने के लिए पूरी तरह सुनिश्चित हों।
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Payment Mode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">भुगतान का माध्यम</h3>
                <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                  संपूर्ण शुल्क केवल <span className="font-semibold">ऑनलाइन माध्यम</span> से ही भुगतान किया जाना चाहिए। नकद या चेक भुगतान स्वीकार नहीं किए जाएंगे।
                </p>
            </motion.div>

            {/* Rules and Regulations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">नियम और शर्तें</h3>
                <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                  गुरुकुल के नियम और शर्तें वेबसाइट से डाउनलोड की जा सकती हैं। कृपया अपना आवेदन सबमिट करने से पहले इन्हें ध्यानपूर्वक पढ़ें।
                </p>
            </motion.div>

            {/* Examination Day Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">परीक्षा दिवस रिपोर्टिंग</h3>
                <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                  प्रवेश परीक्षा के दिन छात्र को परीक्षा केंद्र पर <span className="font-semibold">सुबह 9:30 बजे</span> तक रिपोर्ट करना अनिवार्य है। देर से आने की अनुमति नहीं दी जाएगी।
                </p>
            </motion.div>
            {/* Consequences of Incorrect Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white p-8 rounded-lg border border-[#E53935]/30"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">महत्वपूर्ण चेतावनी</h3>
                <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                  यदि आवेदन पत्र में कोई गलत जानकारी पाई जाती है, तो छात्र का प्रवेश तुरंत रद्द कर दिया जाएगा। कृपया सुनिश्चित करें कि सभी जानकारी सही और सच्ची हो।
                </p>
            </motion.div>

            {/* Admission to Vacant Seats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white p-8 rounded-lg border border-[#DAA520]/20"
            >
              <h3 className="font-heading text-2xl text-[#333333] mb-4">रिक्त सीटों में प्रवेश</h3>
                <p className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                  इस प्रवेश परीक्षा प्रक्रिया के माध्यम से रिक्त सीटों में भी प्रवेश दिया जाएगा। यदि आप अपनी पसंदीदा कक्षा में प्रवेश प्राप्त नहीं कर पाते हैं, तो प्रदर्शन और पात्रता के आधार पर आपको अन्य उपलब्ध कक्षाओं के लिए विचार किया जा सकता है।
                </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="w-full py-24 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['playfairdisplay'] text-[2.5rem] leading-[1.15] tracking-[0.01em] font-bold md:text-[3.5rem] md:leading-[1.05] text-[#333333] mb-6">
              महत्वपूर्ण तिथियाँ
            </h2>
            <p className="font-['opensans'] text-[1.25rem] tracking-[0.01em] font-normal md:text-[1.5rem] text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
              प्रमुख प्रवेश तिथियाँ और घटनाओं को अपने कैलेंडर में चिन्हित करें
            </p>
          </motion.div>

          <div className="min-h-75">
            {isLoading ? null : importantDates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {importantDates.map((date, index) => (
                  <motion.div
                    key={date._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-[#FFFFFF] p-6 rounded-lg border-2 ${date.isDeadline ? 'border-[#FF9933]' : 'border-[#DAA520]/20'}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className={`w-6 h-6 ${date.isDeadline ? 'text-[#FF9933]' : 'text-[#DAA520]'}`} />
                      {date.eventDate && (
                        <p className="font-['opensans'] text-[1rem] leading-normal tracking-[0.01em] font-normal text-[#333333]/60">
                          {format(new Date(date.eventDate), 'd MMMM yyyy', { locale: hi })}
                        </p>
                      )}
                    </div>
                    <h3 className="font-['playfairdisplay'] text-[1.5rem] leading-[1.75] tracking-[0.01em] font-medium text-[#333333] mb-2">
                      {date.eventName}
                    </h3>
                    {date.description && (
                      <p className="font-['opensans'] text-[1rem] tracking-[0.01em] font-normal text-[#333333]/70 leading-relaxed">
                        {date.description}
                      </p>
                    )}
                    {date.isDeadline && (
                      <p className="font-['opensans'] text-[0.875rem] leading-tight tracking-[0.02em] text-[#FF9933] font-semibold mt-3">
                        अंतिम तिथि
                      </p>
                    )}
                    {date.category && (
                      <p className="font-['opensans'] text-[0.875rem] leading-tight tracking-[0.02em] font-normal text-[#333333]/60 mt-2">
                        {date.category}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-[#333333]/60">
                  महत्वपूर्ण तिथियों की घोषणा जल्द ही की जाएगी। कृपया बाद में देखें।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-24 px-8 md:px-16 bg-white">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-[#333333] mb-6">
              ऑनलाइन आवेदन करें
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
              अपना आवेदन सबमिट करें और एक परिवर्तनकारी शैक्षिक यात्रा की दिशा में पहला कदम उठाएँ
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="studentName" className="font-paragraph text-base text-[#333333] mb-2 block">
                    छात्र का नाम *
                  </Label>
                  <Input
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div>
                  <Label htmlFor="parentName" className="font-paragraph text-base text-[#333333] mb-2 block">
                    अभिभावक / संरक्षक का नाम *
                  </Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="font-paragraph text-base text-[#333333] mb-2 block">
                    ईमेल पता *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-paragraph text-base text-[#333333] mb-2 block">
                    फ़ोन नंबर *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="font-paragraph"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="grade" className="font-paragraph text-base text-[#333333] mb-2 block">
                  जिस कक्षा के लिए आवेदन कर रहे हैं *
                </Label>
                <Input
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  placeholder="उदाहरण: कक्षा 5"
                  className="font-paragraph"
                />
              </div>

              <div>
                <Label htmlFor="address" className="font-paragraph text-base text-[#333333] mb-2 block">
                  निवास पता *
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="font-paragraph"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-paragraph text-base text-[#333333] mb-2 block">
                  अतिरिक्त जानकारी
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="अपने बच्चे की रुचियों, विशेष आवश्यकताओं, या किसी भी प्रश्न के बारे में बताएं..."
                  className="font-paragraph"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF9933] text-[#FFFFFF] hover:bg-[#FF9933]/90 py-6 text-lg font-semibold rounded-lg"
              >
                {isSubmitting ? 'आवेदन सबमिट किया जा रहा है...' : 'आवेदन सबमिट करें'}
              </Button>

              <p className="font-paragraph text-sm text-[#333333]/60 text-center">
                इस फॉर्म को सबमिट करके, आप हमारे नियम और शर्तों से सहमत होते हैं। हम 3-5 कार्यदिवसों के भीतर आपसे संपर्क करेंगे।
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-24 px-8 md:px-16">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-[#333333] mb-6">
              अक्सर पूछे जाने वाले प्रश्न
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-[#333333]/80 max-w-3xl mx-auto leading-relaxed">
              हमारे प्रवेश प्रक्रिया से संबंधित सामान्य प्रश्नों के उत्तर खोजें
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto min-h-75">
            {isLoading ? null : faqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq._id}
                    value={faq._id}
                    className="bg-white border border-[#DAA520]/20 rounded-lg px-6"
                  >
                    <AccordionTrigger className="font-heading text-lg text-[#333333] hover:text-[#FF9933]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-paragraph text-base text-[#333333]/80 leading-relaxed">
                      {faq.answer}
                      {faq.relatedLink && (
                        <a
                          href={faq.relatedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF9933] hover:underline block mt-2"
                        >
                          अधिक जानें →
                        </a>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-[#333333]/60">
                  सामान्य प्रश्न अपडेट किए जा रहे हैं। तत्काल सहायता के लिए हमारे प्रवेश कार्यालय से संपर्क करें।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
