import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageCircle, User, Bot, ShoppingBag, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Array<{
    name: string;
    price: string;
    image: string;
  }>;
}

interface DemoMessage {
  text: string;
  sender: 'user' | 'bot';
  products?: Array<{
    name: string;
    price: string;
    image: string;
  }>;
}

const demoScenarios: { [key in 'ar' | 'en']: Array<{ title: string; messages: DemoMessage[] }> } = {
  ar: [
    {
      title: "خدمات الكهرباء",
      messages: [
        { text: "أريد معرفة أسعار تغيير الأفياش", sender: 'user' as const },
        { text: "أهلاً وسهلاً في I Lens! يسعدني مساعدتك.\n\nأسعار خدمات الكهرباء لدينا:\n💡 تغيير أفياش الكهرباء: 10 ر.س\n💡 تغيير الإنارة: تبدأ من 10 ر.س\n💡 تمديد أسلاك كهرباء: تبدأ من 200 ر.س\n\nالأسعار شاملة ضريبة 15%", sender: 'bot' as const },
        { text: "ممتاز، أريد تركيب إنارة جديدة", sender: 'user' as const },
        { 
          text: "سأساعدك في حجز خدمة تركيب الإنارة. يمكنك:",
          sender: 'bot' as const,
          products: [
            { name: "تركيب إنارة عادية", price: "10 ر.س", image: "/api/placeholder/100/100" },
            { name: "تركيب إنارة LED", price: "15 ر.س", image: "/api/placeholder/100/100" },
            { name: "تركيب إنارة خارجية", price: "20 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "كم المدة للزيارة؟", sender: 'user' as const },
        { text: "⏰ نحجز لك موعد خلال 24 ساعة\n📍 الخدمة متوفرة في جميع أنحاء المملكة\n👷 فني محترف ومعتمد\n✅ ضمان على الخدمة", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "السباكة وكشف التسريبات",
      messages: [
        { text: "عندي مشكلة تسريب في الحمام", sender: 'user' as const },
        { text: "أعتذر لهذه المشكلة! سأساعدك فوراً. لدينا خدمات متخصصة لكشف وإصلاح التسريبات.\n\nأي نوع من التسريب تواجه؟", sender: 'bot' as const },
        { text: "أعتقد أن هناك تسريب من الخلاط", sender: 'user' as const },
        { 
          text: "إليك خدمات السباكة المتوفرة:",
          sender: 'bot' as const,
          products: [
            { name: "صيانة خلاطات الماء", price: "يبدأ من 50 ر.س", image: "/api/placeholder/100/100" },
            { name: "فحص كشف التسريبات", price: "يبدأ من 350 ر.س", image: "/api/placeholder/100/100" },
            { name: "تركيب أدوات صحية", price: "يبدأ من 25 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "كم يستغرق الفحص؟", sender: 'user' as const },
        { text: "🔍 فحص التسريبات يتم خلال ساعة إلى ساعتين\n🛠️ الإصلاح في نفس الزيارة إن أمكن\n💰 الأسعار شاملة ضريبة 15%\n📞 للحجز: تواصل معنا عبر الموقع", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "التكييف والتبريد",
      messages: [
        { text: "المكيف عندي ما يبرد", sender: 'user' as const },
        { text: "سأساعدك في حل مشكلة التكييف. لدينا فنيون متخصصون في صيانة وإصلاح جميع أنواع المكيفات.", sender: 'bot' as const },
        { text: "كم سعر الفحص والإصلاح؟", sender: 'user' as const },
        { 
          text: "إليك أسعار خدمات التكييف:",
          sender: 'bot' as const,
          products: [
            { name: "عدم تبريد المكيف", price: "يبدأ من 150 ر.س", image: "/api/placeholder/100/100" },
            { name: "تعبئة الفريون", price: "115 ر.س", image: "/api/placeholder/100/100" },
            { name: "عطل في تشغيل المكيف", price: "يبدأ من 150 ر.س", image: "/api/placeholder/100/100" },
            { name: "تقطير من المكيف", price: "يبدأ من 170 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "هل لديكم خدمة فك وتركيب؟", sender: 'user' as const },
        { text: "نعم! خدمة فك وتركيب المكيفات:\n\n❄️ فك أو تركيب المكيفات: يبدأ من 500 ر.س\n🔧 فريق متخصص ومعتمد\n✅ ضمان على التركيب\n📱 يمكنك زيارة حاسبة الأسعار على موقعنا", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "مكافحة الحشرات",
      messages: [
        { text: "أحتاج خدمة مكافحة حشرات لشقتي", sender: 'user' as const },
        { text: "أهلاً بك! نوفر خدمات مكافحة حشرات احترافية بأحدث التقنيات.\n\nما نوع العقار؟ شقة، دور، فيلا أم محل تجاري؟", sender: 'bot' as const },
        { text: "شقة، وأريد معرفة الأسعار", sender: 'user' as const },
        { 
          text: "إليك خيارات خدمة مكافحة الحشرات:",
          sender: 'bot' as const,
          products: [
            { name: "زيارة واحدة - شقة", price: "يبدأ من 260 ر.س", image: "/api/placeholder/100/100" },
            { name: "عقد شقة (4 زيارات)", price: "يبدأ من 825 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "ما الفرق بين الزيارة الواحدة والعقد؟", sender: 'user' as const },
        { text: "📋 الزيارة الواحدة: معالجة فورية لمشكلة طارئة\n\n📝 العقد (4 زيارات): حماية مستمرة على مدار السنة\n✅ زيارات دورية كل 3 أشهر\n💰 توفير في التكلفة\n🛡️ حماية شاملة ومستمرة\n\nالأسعار شاملة ضريبة 15%", sender: 'bot' as const }
      ] as DemoMessage[]
    }
  ],
  en: [
    {
      title: "Electrical Services",
      messages: [
        { text: "I want to know the prices for changing electrical outlets", sender: 'user' as const },
        { text: "Welcome to I Lens! I'm happy to help you.\n\nOur electrical service prices:\n💡 Electrical outlet replacement: 10 SAR\n💡 Lighting replacement: starts from 10 SAR\n💡 Electrical wiring extension: starts from 200 SAR\n\nPrices include 15% VAT", sender: 'bot' as const },
        { text: "Great, I want to install new lighting", sender: 'user' as const },
        { 
          text: "I'll help you book a lighting installation service. You can choose:",
          sender: 'bot' as const,
          products: [
            { name: "Regular lighting installation", price: "10 SAR", image: "/api/placeholder/100/100" },
            { name: "LED lighting installation", price: "15 SAR", image: "/api/placeholder/100/100" },
            { name: "Outdoor lighting installation", price: "20 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "How long until the visit?", sender: 'user' as const },
        { text: "⏰ We schedule an appointment within 24 hours\n📍 Service available throughout Saudi Arabia\n👷 Professional and certified technician\n✅ Service warranty included", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Plumbing & Leak Detection",
      messages: [
        { text: "I have a leak problem in the bathroom", sender: 'user' as const },
        { text: "Sorry to hear about this issue! I'll help you right away. We have specialized services for leak detection and repair.\n\nWhat type of leak are you facing?", sender: 'bot' as const },
        { text: "I think there's a leak from the faucet", sender: 'user' as const },
        { 
          text: "Here are our available plumbing services:",
          sender: 'bot' as const,
          products: [
            { name: "Faucet maintenance", price: "starts from 50 SAR", image: "/api/placeholder/100/100" },
            { name: "Leak detection inspection", price: "starts from 350 SAR", image: "/api/placeholder/100/100" },
            { name: "Sanitary equipment installation", price: "starts from 25 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "How long does the inspection take?", sender: 'user' as const },
        { text: "🔍 Leak inspection takes 1 to 2 hours\n🛠️ Repair during the same visit if possible\n💰 Prices include 15% VAT\n📞 To book: Contact us through the website", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Air Conditioning & Cooling",
      messages: [
        { text: "My AC is not cooling", sender: 'user' as const },
        { text: "I'll help you solve the AC problem. We have specialized technicians for maintenance and repair of all AC types.", sender: 'bot' as const },
        { text: "What's the price for inspection and repair?", sender: 'user' as const },
        { 
          text: "Here are our AC service prices:",
          sender: 'bot' as const,
          products: [
            { name: "AC not cooling", price: "starts from 150 SAR", image: "/api/placeholder/100/100" },
            { name: "Freon refill", price: "115 SAR", image: "/api/placeholder/100/100" },
            { name: "AC operation malfunction", price: "starts from 150 SAR", image: "/api/placeholder/100/100" },
            { name: "AC water leakage", price: "starts from 170 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "Do you have installation and removal service?", sender: 'user' as const },
        { text: "Yes! AC installation and removal service:\n\n❄️ AC installation or removal: starts from 500 SAR\n🔧 Specialized and certified team\n✅ Installation warranty\n📱 You can visit the price calculator on our website", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Pest Control",
      messages: [
        { text: "I need pest control service for my apartment", sender: 'user' as const },
        { text: "Welcome! We provide professional pest control services with the latest technologies.\n\nWhat type of property? Apartment, floor, villa, or commercial space?", sender: 'bot' as const },
        { text: "Apartment, and I want to know the prices", sender: 'user' as const },
        { 
          text: "Here are the pest control service options:",
          sender: 'bot' as const,
          products: [
            { name: "Single visit - Apartment", price: "starts from 260 SAR", image: "/api/placeholder/100/100" },
            { name: "Apartment contract (4 visits)", price: "starts from 825 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "What's the difference between single visit and contract?", sender: 'user' as const },
        { text: "📋 Single visit: Immediate treatment for urgent problem\n\n📝 Contract (4 visits): Continuous protection throughout the year\n✅ Regular visits every 3 months\n💰 Cost savings\n🛡️ Comprehensive and continuous protection\n\nPrices include 15% VAT", sender: 'bot' as const }
      ] as DemoMessage[]
    }
  ]
};

export default function ChatDemo() {
  const { language, t } = useLanguage();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatDemoRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scenarios = demoScenarios[language];

  // Auto scroll to bottom within chat container only (no page navigation)
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    // Only scroll if there are messages and we're not causing page navigation
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  // Intersection observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '0px'
      }
    );

    if (chatDemoRef.current) {
      observer.observe(chatDemoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-start demo when visible, stop when not visible
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isVisible) {
      // Start demo automatically when visible
      setMessages([]);
      setMessageIndex(0);
      setIsTyping(false);
      
      timeoutRef.current = setTimeout(() => {
        addMessage(0);
      }, 1000);
    } else {
      // Stop demo when not visible
      setMessages([]);
      setMessageIndex(0);
      setIsTyping(false);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentScenario, isVisible]);

  const addMessage = (index: number) => {
    if (!isVisible) return; // Stop if not visible
    
    const scenario = scenarios[currentScenario];
    if (index >= scenario.messages.length) return;

    const message = scenario.messages[index];
    
    setIsTyping(true);
    
    timeoutRef.current = setTimeout(() => {
      if (!isVisible) {
        setIsTyping(false);
        return;
      }
      
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: message.text,
        sender: message.sender,
        timestamp: new Date(),
        products: (message as any).products
      }]);
      setIsTyping(false);
      setMessageIndex(index + 1);
      
      // Auto continue to next message only if still visible
      if (index + 1 < scenario.messages.length && isVisible) {
        timeoutRef.current = setTimeout(() => addMessage(index + 1), 2000);
      } else if (isVisible) {
        // Auto switch to next scenario after completion
        timeoutRef.current = setTimeout(() => {
          setCurrentScenario((prev) => (prev + 1) % scenarios.length);
        }, 3000);
      }
    }, message.sender === 'bot' ? 1500 : 800);
  };

  const handleScenarioChange = (index: number) => {
    setCurrentScenario(index);
  };

  return (
    <div ref={chatDemoRef} className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          {t.chatDemo.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {scenarios.map((scenario, index) => (
            <Button
              key={index}
              variant={index === currentScenario ? "default" : "outline"}
              size="sm"
              onClick={() => handleScenarioChange(index)}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1.5"
            >
              {scenario.title}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Chat Interface */}
        <Card className="p-4 sm:p-6 h-80 sm:h-96 flex flex-col order-1 lg:order-1">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">{t.chatDemo.agent.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.chatDemo.agent.status}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 mb-4 scroll-smooth">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className="flex items-start gap-2 max-w-[85%] sm:max-w-[80%]">
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div>
                    <div
                      className={`rounded-lg p-2.5 sm:p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                    
                    {message.products && (
                      <div className="mt-2 sm:mt-3 space-y-2">
                        {message.products.map((product, index) => (
                          <div key={index} className="bg-card border rounded-lg p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center">
                              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-xs sm:text-sm truncate">{product.name}</h5>
                              <p className="text-primary font-bold text-xs sm:text-sm">{product.price}</p>
                            </div>
                            <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                              {language === 'en' ? 'View' : 'عرض'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted rounded-lg p-2.5 sm:p-3">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder={t.chatDemo.placeholder}
              className="flex-1 px-3 py-2 border rounded-lg bg-background text-sm"
              disabled
            />
            <Button size="icon" disabled className="w-9 h-9 sm:w-10 sm:h-10">
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </Card>

        {/* Features Panel */}
        <Card className="p-4 sm:p-6 order-2 lg:order-2">
          <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">{t.chatDemo.features.title}</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-accent/50 rounded-lg animate-slide-up">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm">{t.chatDemo.features.instant.title}</h5>
                <p className="text-xs text-muted-foreground">{t.chatDemo.features.instant.description}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-accent/50 rounded-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-foreground" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm">{t.chatDemo.features.suggestions.title}</h5>
                <p className="text-xs text-muted-foreground">{t.chatDemo.features.suggestions.description}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-accent/50 rounded-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-foreground" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm">{t.chatDemo.features.channels.title}</h5>
                <p className="text-xs text-muted-foreground">{t.chatDemo.features.channels.description}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-accent/50 rounded-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-foreground" />
              </div>
              <div>
                <h5 className="font-semibold text-xs sm:text-sm">{t.chatDemo.features.personal.title}</h5>
                <p className="text-xs text-muted-foreground">{t.chatDemo.features.personal.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold text-primary mb-1">{t.chatDemo.availability.title}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{t.chatDemo.availability.description}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
