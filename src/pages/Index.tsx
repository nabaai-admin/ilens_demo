import { useRef } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChatDemo from '@/components/ChatDemo';
import ControlPanel from '@/components/ControlPanel';
import ContactSection from '@/components/ContactSection';
import VoiceAgent from '@/components/VoiceAgent';
import CallCenterTransformation from '@/components/CallCenterTransformation';

const Index = () => {
  const chatDemoRef = useRef<HTMLElement>(null);
  const controlPanelRef = useRef<HTMLElement>(null);

  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-background mobile-optimized-text" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed top-3 left-3 z-50">
        <LanguageSwitcher />
      </div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Chat Demo Section */}
      <section ref={chatDemoRef} className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container-responsive">
          <ChatDemo />
        </div>
      </section>

      {/* Control Panel Demo */}
      <section ref={controlPanelRef} className="py-12 sm:py-16 lg:py-20 bg-background">
        <ControlPanel />
      </section>

      {/* Voice Agent Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container-responsive">
          <VoiceAgent />
        </div>
      </section>

      {/* Call Center Transformation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container-responsive">
          <CallCenterTransformation />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-right">
              <img
                src="/lovable-uploads/nabaai_logo.png"
                alt="I Lens AI Logo"
                className="max-h-14 sm:max-h-16 lg:max-h-20 h-auto w-auto max-w-full mx-auto sm:mx-0 mb-3 sm:mb-4"
              />
              <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
                {language === 'en' ? 'AI solutions to transform I Lens contact lens business with 24/7 customer service and smart automation' : 'حلول ذكاء اصطناعي لتحويل تجارة عدسات آي لِنس بخدمة عملاء 24/7 وأتمتة ذكية'}
              </p>
            </div>

            <div className="text-center sm:text-right">
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{language === 'en' ? 'Our Services' : 'خدماتنا'}</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-primary-foreground/80">
                <li>{language === 'en' ? '24/7 AI customer service on WhatsApp' : 'خدمة عملاء ذكية 24/7 على واتساب'}</li>
                <li>{language === 'en' ? 'Smart inventory & sales predictions' : 'تنبؤات ذكية للمخزون والمبيعات'}</li>
                <li>{language === 'en' ? 'Automated order management' : 'إدارة تلقائية للطلبات'}</li>
                <li>{language === 'en' ? 'Social media integration (Instagram, Facebook)' : 'تكامل مع منصات التواصل (إنستقرام، فيسبوك)'}</li>
              </ul>
            </div>

            <div className="text-center sm:text-right sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{language === 'en' ? 'Contact Us' : 'تواصل معنا'}</h4>
              <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-primary-foreground/80">
                <p>✉️ <a href="mailto:info@ilensai.com" className="hover:underline">info@ilensai.com</a></p>
                <p>{language === 'en' ? '💬 Floating icon: Try the I Lens smart agent for free' : '💬 الأيقونة العائمة: جرِّب وكيل آي لِنس الذكي مجاناً'}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-primary-foreground/80">
            <p>&copy; 2025 {language === 'en' ? 'All rights reserved - I Lens' : 'جميع الحقوق محفوظة - عدسات آي لِنس'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
