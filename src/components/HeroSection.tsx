import { MessageCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'hsl(var(--header-bg))' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>

      {/* Floating AI Elements - Hide on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="hidden md:block absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 sm:mb-10 animate-fade-in">
            <img
              src="/lovable-uploads/nabaai_logo.png"
              alt="Yemen AI Logo"
              className="max-h-16 sm:max-h-20 lg:max-h-24 h-auto w-auto max-w-full mx-auto mb-3 sm:mb-4"
            />
            <p className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm lg:text-base bg-gradient-to-r from-cyan-600/90 to-emerald-600/90 text-white shadow-md">
              {language === 'en' ? 'AI Solutions for Contact Lens Industry' : 'حلول ذكاء اصطناعي لصناعة العدسات اللاصقة'}
            </p>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-up mb-8 sm:mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-5 sm:mb-6 leading-loose tracking-wide">
              <div className="block mb-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent drop-shadow">
                {language === 'en' ? 'Yemen AI Solutions for I Lens' : 'حلول Yemen AI لعدسات آي لِنس'}
              </div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 dark:text-slate-100">
                {language === 'en' ? 'Transform Your Contact Lens Business with Intelligent AI' : 'حوّل تجارة العدسات اللاصقة بالذكاء الاصطناعي المتقدم'}
              </div>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              {language === 'en'
                ? 'Advanced AI solutions designed specifically for I Lens: 24/7 customer service, automated order management, smart inventory predictions, and seamless integration with social media platforms.'
                : 'حلول ذكاء اصطناعي متقدمة مصممة خصيصاً لعدسات آي لنس: خدمة عملاء 24/7، إدارة تلقائية للطلبات، تنبؤات ذكية بالمخزون، وتكامل سلس مع منصات التواصل الاجتماعي'}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                {language === 'en' ? '24/7 Customer Support' : 'خدمة عملاء 24/7'}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {language === 'en' ? 'AI chatbot answers questions about lens types, colors, sizes, prices, and care instructions on WhatsApp & social media' : 'روبوت محادثة ذكي يجيب على الأسئلة حول أنواع وألوان ومقاسات وأسعار العدسات وطرق العناية بها عبر واتساب ومنصات التواصل'}
              </p>
            </div>

            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary/20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                {language === 'en' ? 'Smart Inventory Predictions' : 'تنبؤات ذكية بالمخزون'}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {language === 'en' ? 'AI predicts demand for specific lens colors and types, alerts for low stock, and recommends optimal reorder quantities' : 'ذكاء اصطناعي يتنبأ بالطلب على ألوان وأنواع العدسات، ينبه عند انخفاض المخزون، ويوصي بكميات الطلب المثلى'}
              </p>
            </div>

            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-primary/20 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                {language === 'en' ? 'Social Media Integration' : 'تكامل مع منصات التواصل'}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {language === 'en' ? 'Seamless integration with WhatsApp, Instagram, and Facebook for orders, inquiries, and automated responses' : 'تكامل سلس مع واتساب وإنستقرام وفيسبوك لتلقي الطلبات والاستفسارات والردود التلقائية'}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-sm sm:text-base"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'en' ? 'Explore Yemen AI Solutions' : 'اكتشف حلول Yemen AI'}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-sm sm:text-base"
              onClick={() => { window.location.href = 'mailto:info@yemenai.ai?subject=طلب%20استشارة%20-%20Yemen%20AI'; }}
            >
              {language === 'en' ? 'Get a Free Consultation' : 'احصل على استشارة مجانية'}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-primary">{language === 'en' ? 'Accurate' : 'دقيق'}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{language === 'en' ? 'Reliable Predictions' : 'تنبؤات موثوقة'}</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-primary">{language === 'en' ? 'Fast' : 'سريع'}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{language === 'en' ? 'Instant Results' : 'نتائج فورية'}</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-primary">{language === 'en' ? 'Integrated' : 'متكامل'}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-primary">{language === 'en' ? 'Innovative' : 'مبتكر'}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{language === 'en' ? 'Modern Technologies' : 'تقنيات حديثة'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hide on small screens */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}