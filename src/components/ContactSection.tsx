import { Mail, MessageCircle, MapPin, Clock, Users, Shield, Bot } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Custom WhatsApp Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export default function ContactSection() {
  const { language, t } = useLanguage();
  const handleWhatsAppClick = () =>
    window.open('https://wa.link/idm1iw', '_blank');

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@ilensai.com';
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12 sm:mb-16">
          {/* Email Contact */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t.contact.email}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{t.contact.emailDescription}</p>
            <Button
              onClick={handleEmailClick}
              className="w-full text-sm"
              variant="outline"
            >
              info@ilensai.com
            </Button>
          </Card>

          {/* WhatsApp Contact */}
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600">
                <WhatsAppIcon />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t.contact.whatsapp}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{t.contact.whatsappDescription}</p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-sm"
            >
              {t.contact.contactViaWhatsapp}
            </Button>
          </Card>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Why I Lens AI Section */}
          <div className="group">
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 border-2 border-amber-200/50 dark:border-amber-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-amber-200/20 rounded-full -translate-y-14 -translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-200/20 rounded-full translate-y-12 translate-x-12"></div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-amber-400/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-400/40 rounded-full animate-pulse"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform duration-500">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-700 dark:text-amber-300 leading-tight">
                      {t.contact.whyILensAI}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">{t.contact.whySubtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-amber-200/50">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">{t.contact.service247.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t.contact.service247.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-amber-200/50">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-orange-700 dark:text-orange-300 mb-2">{t.contact.security.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t.contact.security.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-amber-200/50">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">{t.contact.solutions.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t.contact.solutions.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{t.contact.bestPrices}</h3>
            <div className="bg-gradient-to-r from-primary to-secondary p-4 sm:p-6 rounded-xl text-white">
              <h4 className="text-lg sm:text-xl font-semibold mb-3">{t.contact.bestPricesSubtitle}</h4>
              <ul className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                <li>✓ {t.contact.competitivePrices}</li>
                <li>✓ {t.contact.customExperience}</li>
                <li>✓ {t.contact.localSupport}</li>
                <li>✓ {t.contact.strongNetwork}</li>
              </ul>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-primary hover:bg-white/90 text-sm sm:text-base"
              >
                {language === 'en' ? 'Get the Best Smart Solutions' : 'احصل على أفضل الحلول الذكية'}
              </Button>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <h3 className="text-base sm:text-lg font-semibold text-muted-foreground mb-6 sm:mb-8">
            {language === 'en' ? 'Demo for I Lens' : 'عرض توضيحي لعدسات آي لِنس'}
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="/logov1.png"
              alt="I Lens AI Logo"
              className="max-h-12 sm:max-h-14 lg:max-h-16 h-auto w-auto max-w-full opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}