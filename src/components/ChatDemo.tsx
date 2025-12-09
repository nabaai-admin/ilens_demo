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
      title: "ألوان العدسات",
      messages: [
        { text: "أريد عدسات باللون العسلي", sender: 'user' as const },
        { text: "أهلاً وسهلاً في I Lens! 🌟 يسعدني مساعدتك.\n\nلدينا مجموعة رائعة من العدسات العسلية:\n👁️ عدسات Honey - لون عسلي دافئ\n✨ عدسات Hazel - عسلي مع لمسات خضراء\n🌸 عدسات Light Brown - بني فاتح طبيعي\n\nجميع العدسات متوفرة بنوعين:\n📅 يومية - استعمال واحد\n📆 شهرية - تستخدم لمدة شهر", sender: 'bot' as const },
        { text: "كم سعر العدسات الشهرية؟", sender: 'user' as const },
        {
          text: "إليك خيارات العدسات العسلية الشهرية:",
          sender: 'bot' as const,
          products: [
            { name: "Honey Monthly - عسلي", price: "75 ر.س", image: "/api/placeholder/100/100" },
            { name: "Hazel Monthly - عسلي مخضر", price: "75 ر.س", image: "/api/placeholder/100/100" },
            { name: "3 علب (عرض خاص)", price: "200 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "هل التوصيل مجاني؟", sender: 'user' as const },
        { text: "نعم! 🚚 التوصيل مجاني للطلبات فوق 100 ر.س\n⏰ التوصيل خلال 1-3 أيام عمل\n📦 التغليف آمن ومحكم\n✅ جميع العدسات أصلية 100%", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "العناية بالعدسات",
      messages: [
        { text: "كيف أحافظ على العدسات الشهرية؟", sender: 'user' as const },
        { text: "سؤال مهم جداً! 💙 العناية الصحيحة تضمن سلامة عينيك.\n\nإليك نصائح العناية الأساسية:", sender: 'bot' as const },
        { text: "ما هي الخطوات بالتفصيل؟", sender: 'user' as const },
        {
          text: "خطوات العناية بعدساتك:",
          sender: 'bot' as const,
          products: [
            { name: "محلول عدسات (350 ml)", price: "35 ر.س", image: "/api/placeholder/100/100" },
            { name: "علبة تخزين فاخرة", price: "20 ر.س", image: "/api/placeholder/100/100" },
            { name: "طقم العناية الكامل", price: "50 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "كيف أستخدم المحلول؟", sender: 'user' as const },
        { text: "طريقة الاستخدام الصحيحة:\n\n1️⃣ اغسلي يديك جيداً قبل لمس العدسات\n2️⃣ ضعي العدسة في راحة يدك وأضيفي قطرات من المحلول\n3️⃣ افركي العدسة بلطف لمدة 20 ثانية\n4️⃣ اشطفيها بالمحلول النظيف\n5️⃣ احفظيها في العلبة مع محلول جديد\n\n⚠️ لا تستخدمي الماء العادي أبداً!", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "طلب العدسات",
      messages: [
        { text: "أريد طلب عدسات رمادية", sender: 'user' as const },
        { text: "اختيار رائع! 💎 العدسات الرمادية من أكثر الألوان المطلوبة.\n\nما نوع العدسات المفضلة لديك؟", sender: 'bot' as const },
        { text: "أفضل اليومية، أسهل في الاستخدام", sender: 'user' as const },
        {
          text: "ممتاز! إليك خيارات العدسات الرمادية اليومية:",
          sender: 'bot' as const,
          products: [
            { name: "Gray Daily - 10 قطع", price: "45 ر.س", image: "/api/placeholder/100/100" },
            { name: "Silver Gray Daily - 10 قطع", price: "45 ر.س", image: "/api/placeholder/100/100" },
            { name: "عرض: 30 قطعة", price: "120 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "كيف أحدد المقاس المناسب؟", sender: 'user' as const },
        { text: "📏 المقاسات المتوفرة:\n\n• 14.0 mm - الأكثر شيوعاً\n• 14.2 mm - للعيون الكبيرة\n• 14.5 mm - لإطلالة أوسع\n\n💡 ننصح بـ 14.0 mm للاستخدام اليومي\n\nإذا كنتِ غير متأكدة، يمكنك استشارة طبيب العيون أو تجربة المقاس القياسي 14.0", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "أنواع العدسات",
      messages: [
        { text: "ما الفرق بين العدسات اليومية والشهرية؟", sender: 'user' as const },
        { text: "سؤال ممتاز! دعيني أوضح لك الفرق:\n\n📅 العدسات اليومية:\n✓ تُستخدم مرة واحدة فقط\n✓ لا تحتاج محلول أو علبة حفظ\n✓ صحية أكثر - أقل احتمال للعدوى\n✓ مثالية للاستخدام المتقطع\n\n📆 العدسات الشهرية:\n✓ تُستخدم لمدة شهر كامل\n✓ تحتاج عناية يومية بالمحلول\n✓ أوفر للاستخدام اليومي\n✓ تنوع أكبر في الألوان", sender: 'bot' as const },
        { text: "أي نوع تنصحوني به؟", sender: 'user' as const },
        {
          text: "يعتمد على نمط حياتك! إليك توصياتنا:",
          sender: 'bot' as const,
          products: [
            { name: "للمبتدئين - يومية", price: "من 45 ر.س", image: "/api/placeholder/100/100" },
            { name: "للاستخدام اليومي - شهرية", price: "من 75 ر.س", image: "/api/placeholder/100/100" },
            { name: "للمناسبات - يومية ملونة", price: "من 50 ر.س", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "شكراً، سأطلب العدسات الشهرية", sender: 'user' as const },
        { text: "اختيار موفق! 🎉\n\nتذكري النصائح المهمة:\n🧴 استخدمي محلول عدسات نوعية جيدة\n👁️ لا تنامي بالعدسات\n🚿 لا تستحمي بها\n⏰ استبدليها كل شهر بالضبط\n\nهل تحتاجين محلول عدسات مع طلبك؟", sender: 'bot' as const }
      ] as DemoMessage[]
    }
  ],
  en: [
    {
      title: "Lens Colors",
      messages: [
        { text: "I want honey colored lenses", sender: 'user' as const },
        { text: "Welcome to I Lens! 🌟 I'm happy to help you.\n\nWe have a beautiful collection of honey lenses:\n👁️ Honey - Warm honey tone\n✨ Hazel - Honey with green hints\n🌸 Light Brown - Natural light brown\n\nAll lenses available in two types:\n📅 Daily - Single use\n📆 Monthly - Use for one month", sender: 'bot' as const },
        { text: "How much are the monthly lenses?", sender: 'user' as const },
        {
          text: "Here are the monthly honey lens options:",
          sender: 'bot' as const,
          products: [
            { name: "Honey Monthly", price: "75 SAR", image: "/api/placeholder/100/100" },
            { name: "Hazel Monthly", price: "75 SAR", image: "/api/placeholder/100/100" },
            { name: "3 Boxes (Special Offer)", price: "200 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "Is delivery free?", sender: 'user' as const },
        { text: "Yes! 🚚 Free delivery for orders over 100 SAR\n⏰ Delivery within 1-3 business days\n📦 Safe and secure packaging\n✅ All lenses 100% authentic", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Lens Care",
      messages: [
        { text: "How do I care for monthly lenses?", sender: 'user' as const },
        { text: "Very important question! 💙 Proper care ensures your eye safety.\n\nHere are the basic care tips:", sender: 'bot' as const },
        { text: "What are the detailed steps?", sender: 'user' as const },
        {
          text: "Steps to care for your lenses:",
          sender: 'bot' as const,
          products: [
            { name: "Lens Solution (350 ml)", price: "35 SAR", image: "/api/placeholder/100/100" },
            { name: "Premium Storage Case", price: "20 SAR", image: "/api/placeholder/100/100" },
            { name: "Complete Care Kit", price: "50 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "How do I use the solution?", sender: 'user' as const },
        { text: "Proper usage method:\n\n1️⃣ Wash your hands thoroughly before touching lenses\n2️⃣ Place lens in your palm and add solution drops\n3️⃣ Gently rub the lens for 20 seconds\n4️⃣ Rinse with clean solution\n5️⃣ Store in case with fresh solution\n\n⚠️ Never use regular water!", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Order Lenses",
      messages: [
        { text: "I want to order gray lenses", sender: 'user' as const },
        { text: "Great choice! 💎 Gray lenses are among our most popular.\n\nWhat type of lenses do you prefer?", sender: 'bot' as const },
        { text: "I prefer daily, easier to use", sender: 'user' as const },
        {
          text: "Excellent! Here are the daily gray lens options:",
          sender: 'bot' as const,
          products: [
            { name: "Gray Daily - 10 pieces", price: "45 SAR", image: "/api/placeholder/100/100" },
            { name: "Silver Gray Daily - 10 pieces", price: "45 SAR", image: "/api/placeholder/100/100" },
            { name: "Offer: 30 pieces", price: "120 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "How do I determine the right size?", sender: 'user' as const },
        { text: "📏 Available sizes:\n\n• 14.0 mm - Most common\n• 14.2 mm - For larger eyes\n• 14.5 mm - For wider look\n\n💡 We recommend 14.0 mm for daily use\n\nIf you're unsure, consult an eye doctor or try the standard 14.0 size", sender: 'bot' as const }
      ] as DemoMessage[]
    },
    {
      title: "Lens Types",
      messages: [
        { text: "What's the difference between daily and monthly lenses?", sender: 'user' as const },
        { text: "Excellent question! Let me explain the difference:\n\n📅 Daily Lenses:\n✓ Used only once\n✓ No need for solution or storage case\n✓ More hygienic - less infection risk\n✓ Ideal for occasional use\n\n📆 Monthly Lenses:\n✓ Used for a full month\n✓ Require daily care with solution\n✓ More economical for daily use\n✓ Greater variety of colors", sender: 'bot' as const },
        { text: "Which type do you recommend?", sender: 'user' as const },
        {
          text: "It depends on your lifestyle! Here are our recommendations:",
          sender: 'bot' as const,
          products: [
            { name: "For Beginners - Daily", price: "from 45 SAR", image: "/api/placeholder/100/100" },
            { name: "For Daily Use - Monthly", price: "from 75 SAR", image: "/api/placeholder/100/100" },
            { name: "For Events - Colored Daily", price: "from 50 SAR", image: "/api/placeholder/100/100" }
          ]
        },
        { text: "Thanks, I'll order the monthly lenses", sender: 'user' as const },
        { text: "Great choice! 🎉\n\nRemember the important tips:\n🧴 Use quality lens solution\n👁️ Don't sleep with lenses\n🚿 Don't shower with them\n⏰ Replace every month exactly\n\nDo you need lens solution with your order?", sender: 'bot' as const }
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
                      className={`rounded-lg p-2.5 sm:p-3 ${message.sender === 'user'
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
