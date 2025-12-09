import { 
  MessageSquare, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings, 
  Smartphone,
  Globe,
  Clock,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  MessageCircle,
  Facebook,
  Globe2,
  Phone
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

// Custom SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const features = (language: 'ar' | 'en') => [
  {
    icon: BarChart3,
    title: language === 'en' ? 'Predictive Analytics' : 'التحليلات التنبؤية',
    description: language === 'en' ? 'Advanced AI/ML models to forecast delays, estimate job durations, and identify risks.' : 'نماذج ذكاء اصطناعي متقدمة للتنبؤ بتأخيرات المشاريع وتقدير مدة الأعمال وتحديد المخاطر',
    color: "bg-blue-500"
  },
  {
    icon: Settings,
    title: language === 'en' ? 'Scheduling & Route Optimization' : 'جدولة وتحسين المسارات',
    description: language === 'en' ? 'Intelligent scheduling and route optimization using Google OR-Tools.' : 'أنظمة ذكية لتحسين الجداول الزمنية والمسارات باستخدام Google OR-Tools',
    color: "bg-green-500"
  },
  {
    icon: MessageSquare,
    title: language === 'en' ? 'Conversational AI' : 'ذكاء اصطناعي تحاوري',
    description: language === 'en' ? 'NLP chatbots integrated with WhatsApp and web to enhance engagement.' : 'روبوتات دردشة ذكية متكاملة مع واتساب والمنصات الرقمية لتحسين التفاعل مع العملاء',
    color: "bg-purple-500"
  },
  {
    icon: Globe,
    title: language === 'en' ? 'System Integration' : 'تكامل الأنظمة',
    description: language === 'en' ? 'Seamless integrations with Zoho FSM, CRM, and Books via REST APIs.' : 'تكامل سلس مع Zoho FSM و CRM و Books باستخدام REST API',
    color: "bg-orange-500"
  },
  {
    icon: TrendingUp,
    title: language === 'en' ? 'Data Intelligence' : 'ذكاء البيانات',
    description: language === 'en' ? 'Advanced analytics uncover hidden patterns and actionable insights.' : 'تحليلات متقدمة لاكتشاف الأنماط المخفية وتوفير رؤى قابلة للتنفيذ',
    color: "bg-red-500"
  },
  {
    icon: Zap,
    title: language === 'en' ? 'Intelligent Automation' : 'أتمتة ذكية',
    description: language === 'en' ? 'Automatically detect and resolve scheduling conflicts and inefficiencies.' : 'كشف وحل تلقائي للتعارضات في الجدولة وتحسين سير العمل',
    color: "bg-indigo-500"
  }
];

const channels = (language: 'ar' | 'en') => [
  { name: language === 'en' ? 'WhatsApp' : 'واتساب', icon: 'whatsapp', users: language === 'en' ? 'Available' : 'متوفر', color: 'bg-green-100 text-green-800', bgColor: 'bg-green-50' },
  { name: language === 'en' ? 'Facebook' : 'فيسبوك', icon: 'facebook', users: language === 'en' ? 'Available' : 'متوفر', color: 'bg-blue-100 text-blue-800', bgColor: 'bg-blue-50' },
  { name: language === 'en' ? 'Website' : 'الموقع', icon: '🌐', users: '24/7', color: 'bg-purple-100 text-purple-800', bgColor: 'bg-purple-50' },
  { name: language === 'en' ? 'Phone' : 'الهاتف', icon: '📞', users: language === 'en' ? 'Instant' : 'فوري', color: 'bg-orange-100 text-orange-800', bgColor: 'bg-orange-50' }
];

export default function FeaturesSection() {
  const { language } = useLanguage();
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {language === 'en' ? 'Our Core Services' : 'خدماتنا الأساسية'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {language === 'en' ? 'Integrated AI solutions that enable businesses to work smarter and more efficiently.' : 'حلول ذكاء اصطناعي متكاملة تمكن الشركات من العمل بذكاء وكفاءة أكبر'}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {features(language).map((feature, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Multi-Channel Support Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 md:p-12 mb-16 sm:mb-20 animate-slide-up">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200/20 rounded-full -translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full translate-x-16 translate-y-16"></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-purple-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-pink-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {language === 'en' ? 'Multi-Channel Support' : 'دعم متعدد القنوات'}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? 'We provide advanced smart solutions across all preferred communication channels, ensuring a unified and consistent experience.' : 'نوفر حلول ذكية متطورة عبر جميع قنوات التواصل المفضلة، مع ضمان تجربة موحدة ومتسقة'}
              </p>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {channels(language).map((channel, index) => (
                <div 
                  key={index}
                  className="group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-fade-in">
                    <div className="relative mb-4">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${channel.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                        {channel.icon === "whatsapp" ? (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-600">
                            <WhatsAppIcon />
                          </div>
                        ) : channel.icon === "facebook" ? (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-600">
                            <FacebookIcon />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl">
                            {channel.icon}
                          </div>
                        )}
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-300/60 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    <h4 className="font-bold text-lg sm:text-xl mb-3 text-slate-800 dark:text-slate-200">
                      {channel.name}
                    </h4>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold shadow-md ${channel.color} group-hover:scale-105 transition-transform duration-300`}>
                      {channel.users}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Power & Integration */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12 mb-12 sm:mb-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-blue-200/20 rounded-full -translate-y-22 translate-x-22"></div>
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-200/20 rounded-full translate-y-18 -translate-x-18"></div>
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-indigo-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500/50 rounded-full animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {language === 'en' ? 'System Power & Easy Integration' : 'قوة النظام وسهولة التكامل'}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? 'Strong, modern infrastructure that meets the needs of large enterprises with easy integration.' : 'بنية تحتية قوية ومتطورة تواكب احتياجات الشركات الكبيرة مع سهولة التكامل'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* High Processing Power */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-slide-up">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-300/60 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">{language === 'en' ? 'High Processing Power' : 'قوة معالجة عالية'}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'An intelligent system capable of processing millions of requests at high speed.' : 'نظام ذكي قادر على معالجة ملايين الطلبات بسرعة فائقة'}</p>
                </div>
              </div>

              {/* Seamless Integration */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-300/60 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-3">{language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Easily integrates with your existing systems without disrupting operations.' : 'يتكامل بسهولة مع جميع الأنظمة الحالية دون تعطيل العمليات'}</p>
                </div>
              </div>

              {/* Advanced Security */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-300/60 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-green-700 dark:text-green-300 mb-3">{language === 'en' ? 'Advanced Security' : 'أمان متقدم'}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Comprehensive data protection with the latest encryption and security technologies.' : 'حماية شاملة للبيانات مع أحدث تقنيات التشفير والأمان'}</p>
                </div>
              </div>

              {/* Scalability */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-300/60 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">{language === 'en' ? 'Scalability' : 'قابلية التوسع'}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'A system that automatically scales as your company’s needs grow.' : 'نظام قابل للتوسع تلقائياً مع نمو احتياجات الشركة'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 text-center animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-teal-200/20 rounded-full -translate-y-12 sm:-translate-y-16 lg:-translate-y-18 translate-x-12 sm:translate-x-16 lg:translate-x-18"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-cyan-200/20 rounded-full translate-y-12 sm:translate-y-14 lg:translate-y-16 -translate-x-12 sm:-translate-x-14 lg:-translate-x-16"></div>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-teal-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-teal-500/50 rounded-full animate-pulse"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-6 sm:mb-8">
              {language === 'en' ? 'Expected Benefits with I Lens AI' : 'المزايا المتوقعة مع I Lens AI'}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Customer Experience */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-teal-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-teal-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2 sm:mb-3">{language === 'en' ? 'Improve' : 'تحسين'}</div>
                  <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'Customer Experience' : 'تجربة العملاء'}</div>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{language === 'en' ? 'Faster, more accurate service with an exceptional user experience.' : 'خدمة أسرع وأكثر دقة مع تجربة مستخدم استثنائية'}</div>
                </div>
              </div>
              
              {/* Time & Effort Savings */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-2 sm:mb-3">{language === 'en' ? 'Save' : 'توفير'}</div>
                  <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'Time & Effort' : 'وقت وجهد'}</div>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{language === 'en' ? 'Automate routine tasks and free resources for creative work.' : 'أتمتة المهام الروتينية وتحرير الموارد للعمل الإبداعي'}</div>
                </div>
              </div>
              
              {/* Continuous Development */}
              <div className="group">
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                      <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-indigo-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2 sm:mb-3">{language === 'en' ? 'Continuous' : 'تطوير'}</div>
                  <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'Development' : 'مستمر'}</div>
                  <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{language === 'en' ? 'Innovative, advanced solutions that evolve with your business needs.' : 'حلول مبتكرة ومتطورة تتطور مع احتياجات عملك'}</div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-8 sm:mt-12 lg:mt-16">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-emerald-100/50 dark:border-emerald-800/50">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-200/20 rounded-full -translate-y-16 sm:-translate-y-20 translate-x-16 sm:translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 sm:w-36 sm:h-36 bg-teal-200/20 rounded-full translate-y-14 sm:translate-y-18 -translate-x-14 sm:-translate-x-18"></div>
                <div className="absolute top-1/3 left-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400/30 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400/40 rounded-full animate-ping"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8 sm:mb-12">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                    
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-800 dark:text-emerald-200 mb-3 sm:mb-4">
                      {language === 'en' ? 'Additional Benefits' : 'فوائد إضافية'}
                    </h4>
                    <p className="text-sm sm:text-base lg:text-lg text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto">
                      {language === 'en' ? 'Additional advantages that make I Lens AI the optimal choice for AI solutions.' : 'مزايا إضافية تجعل I Lens AI الخيار الأمثل لحلول الذكاء الاصطناعي'}
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {/* Security */}
                    <div className="group">
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-emerald-300/70">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                            <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-2 group-hover:text-emerald-600 transition-colors">
                              {language === 'en' ? 'Advanced Security' : 'أمان متقدم'}
                            </h5>
                            <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 leading-relaxed">
                              {language === 'en' ? 'Comprehensive data protection with the latest encryption and security.' : 'حماية شاملة للبيانات مع أحدث تقنيات التشفير والأمان'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Integration */}
                    <div className="group">
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-teal-200/50 dark:border-teal-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-teal-300/70">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                            <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-base sm:text-lg font-bold text-teal-700 dark:text-teal-300 mb-2 group-hover:text-teal-600 transition-colors">
                              {language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}
                            </h5>
                            <p className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 leading-relaxed">
                              {language === 'en' ? 'Simple integration with your existing systems without disrupting operations.' : 'تكامل بسيط مع أنظمتك الحالية دون تعطيل العمليات'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="group">
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-blue-300/70">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                            <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 group-hover:text-blue-600 transition-colors">
                              {language === 'en' ? 'High Performance' : 'أداء عالي'}
                            </h5>
                            <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
                              {language === 'en' ? 'Ultra-fast processing with instant responses.' : 'سرعة فائقة في المعالجة مع استجابة فورية للطلبات'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Support */}
                    <div className="group">
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-purple-300/70">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-base sm:text-lg font-bold text-purple-700 dark:text-purple-300 mb-2 group-hover:text-purple-600 transition-colors">
                              {language === 'en' ? '24/7 Support' : 'دعم 24/7'}
                            </h5>
                            <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 leading-relaxed">
                              {language === 'en' ? 'Specialized support team available around the clock.' : 'فريق دعم متخصص متاح على مدار الساعة لمساعدتك'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 sm:mt-12 text-center">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-sm sm:text-base font-semibold">{language === 'en' ? 'Start Your Journey with I Lens AI Today' : 'ابدأ رحلتك مع I Lens AI اليوم'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}