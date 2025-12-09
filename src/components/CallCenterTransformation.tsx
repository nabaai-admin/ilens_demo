import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Bot, Clock, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage'; // Assuming this hook is available for translations

const CallCenterTransformation = () => {
  const { language } = useLanguage(); // Assuming this hook provides the current language

  const benefits = language === 'en' ? [
    {
      icon: Clock,
      title: "Time Saving",
      description: "Reduce waiting times to less than 10 seconds",
      improvement: "85% Improvement"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Handle 10 calls instead of one at the same time",
      improvement: "900% Higher Efficiency"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Provide fast and accurate service around the clock",
      improvement: "95% Satisfaction"
    },
    {
      icon: Shield,
      title: "Error Reduction",
      description: "Accurate and consistent responses without human error",
      improvement: "99% Accuracy"
    }
  ] : [
    {
      icon: Clock,
      title: "توفير الوقت",
      description: "تقليل أوقات الانتظار إلى أقل من 10 ثوانٍ",
      improvement: "تحسن 85%"
    },
    {
      icon: TrendingUp,
      title: "زيادة الكفاءة",
      description: "معالجة 10 مكالمات بدلاً من واحدة في نفس الوقت",
      improvement: "كفاءة أعلى 900%"
    },
    {
      icon: Users,
      title: "رضا العملاء",
      description: "توفير خدمة سريعة ودقيقة على مدار الساعة",
      improvement: "رضا 95%"
    },
    {
      icon: Shield,
      title: "تقليل الأخطاء",
      description: "استجابات دقيقة ومتسقة بدون أخطاء بشرية",
      improvement: "دقة 99%"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative text-center space-y-6 mb-12">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl"></div>
        <div className="absolute top-0 left-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 p-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Transforming the Call Center into a Smart Hub' : 'تحويل مركز الاتصالات إلى مركز ذكي'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'en' ? 'We transform traditional call centers into smart, AI-powered hubs to provide better and faster service' : 'نحول مراكز الاتصالات التقليدية إلى مراكز ذكية تعمل بالذكاء الاصطناعي لتوفير خدمة أفضل وأسرع'}
          </p>
        </div>
      </div>

      {/* Before vs After */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Call Center */}
        <div className="group">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 border-2 border-red-200/50 dark:border-red-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-200/20 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-200/20 rounded-full translate-y-10 -translate-x-10"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-red-400/30 rounded-full animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform duration-500">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 leading-tight">
                    {language === 'en' ? 'Traditional Call Center' : 'مركز الاتصالات التقليدي'}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-red-600 dark:text-red-400 font-medium">{language === 'en' ? 'The Old System' : 'النظام القديم'}</span>
                  </div>
                </div>
              </div>

              {/* Issues */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-red-200/50">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="bg-red-500 hover:bg-red-600">{language === 'en' ? 'Slow' : 'بطء'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Long waiting times that annoy customers' : 'أوقات انتظار طويلة تسبب إزعاج العملاء'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-red-200/50">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="bg-orange-500 hover:bg-orange-600">{language === 'en' ? 'Limited' : 'محدود'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Limited working hours and a limited number of staff' : 'ساعات عمل محددة وعدد موظفين محدود'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-red-200/50">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="bg-red-600 hover:bg-red-700">{language === 'en' ? 'Costly' : 'مكلف'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Requires many employees and high operating costs' : 'حاجة لموظفين كثيرين ومصاريف تشغيل عالية'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-red-200/50">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive" className="bg-orange-600 hover:bg-orange-700">{language === 'en' ? 'Errors' : 'أخطاء'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Frequent human errors and inconsistent answers' : 'أخطاء بشرية متكررة وعدم اتساق في الإجابات'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Smart Center */}
        <div className="group">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border-2 border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200/20 rounded-full -translate-y-12 -translate-x-12"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full translate-y-10 translate-x-10"></div>
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-ping"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform duration-500">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 leading-tight">
                    {language === 'en' ? 'AI-Powered Smart Center' : 'المركز الذكي بالذكاء الاصطناعي'}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{language === 'en' ? 'The Advanced System' : 'النظام المتطور'}</span>
                  </div>
                </div>
            </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-blue-200/50">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">{language === 'en' ? 'Fast' : 'سريع'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Instant response within a few seconds' : 'استجابة فورية خلال ثوانٍ معدودة'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-blue-200/50">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" className="bg-purple-500 hover:bg-purple-600 text-white">24/7</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Continuous service without interruption or downtime' : 'خدمة مستمرة بدون انقطاع أو توقف'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-blue-200/50">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white">{language === 'en' ? 'Economical' : 'اقتصادي'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Effective solutions at a reasonable cost with high returns' : 'حلول فعالة بتكلفة مناسبة وعائد مرتفع'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm border border-blue-200/50">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">{language === 'en' ? 'Accurate' : 'دقيق'}</Badge>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Consistent and highly accurate answers' : 'إجابات متسقة ودقيقة بنسبة عالية جداً'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Capacity Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full -translate-x-12 -translate-y-12"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {language === 'en' ? 'Massive Processing Capacity for Companies like I Lens' : 'قدرة معالجة ضخمة لشركات بحجم I Lens'}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {language === 'en' ? 'Our systems are specifically designed to handle large companies serving millions of customers' : 'أنظمتنا مصممة خصيصاً للتعامل مع الشركات الكبيرة التي تخدم ملايين العملاء'}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{language === 'en' ? 'Huge Requests' : 'طلبات ضخمة'}</div>
                <div className="text-lg font-semibold mb-3">{language === 'en' ? 'Daily Processing' : 'معالجة يومية'}</div>
                <div className="text-sm text-muted-foreground">{language === 'en' ? 'Massive processing power suitable for the largest companies' : 'قدرة معالجة هائلة تناسب أكبر الشركات'}</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-2">{language === 'en' ? 'Instant Response' : 'استجابة فورية'}</div>
                <div className="text-lg font-semibold mb-3">{language === 'en' ? 'No Delay' : 'بلا تأخير'}</div>
                <div className="text-sm text-muted-foreground">{language === 'en' ? 'Immediate processing for all requests' : 'معالجة فورية لجميع الطلبات'}</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{language === 'en' ? 'High Reliability' : 'موثوقية عالية'}</div>
                <div className="text-lg font-semibold mb-3">{language === 'en' ? 'Continuous Service' : 'خدمة مستمرة'}</div>
                <div className="text-sm text-muted-foreground">{language === 'en' ? 'Ensuring system availability around the clock' : 'ضمان توفر النظام على مدار الساعة'}</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              {language === 'en' ? 'Specially Designed for I Lens' : 'مصمم خصيصاً لـ I Lens'}
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-primary">{language === 'en' ? 'Automatic Scalability' : 'قدرة التوسع التلقائي'}</h5>
                </div>
                <p className="text-muted-foreground leading-relaxed">{language === 'en' ? 'The system scales automatically with customer growth, ensuring stable performance even with rapid expansion' : 'النظام يتوسع تلقائياً مع زيادة عدد العملاء، مما يضمن أداءً ثابتاً حتى مع النمو السريع'}</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-secondary">{language === 'en' ? 'Seamless Integration' : 'تكامل سلس'}</h5>
                </div>
                <p className="text-muted-foreground leading-relaxed">{language === 'en' ? 'Integrates seamlessly with existing I Lens systems without requiring major infrastructure changes' : 'يتكامل بسلاسة مع أنظمة I Lens الحالية دون الحاجة لتغييرات كبيرة في البنية التحتية'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-cyan-200/20 rounded-full translate-y-14 -translate-x-14"></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-emerald-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
            {language === 'en' ? 'Expected Benefits of Digital Transformation' : 'الفوائد المتوقعة من التحول الرقمي'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-3">{language === 'en' ? 'Efficiency' : 'كفاءة'}</div>
                <div className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'High' : 'عالية'}</div>
                <div className="text-muted-foreground leading-relaxed">{language === 'en' ? 'Faster query processing with continuous performance improvement' : 'معالجة أسرع للاستفسارات مع تحسين مستمر في الأداء'}</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-3xl font-bold text-cyan-600 mb-3">{language === 'en' ? 'Accuracy' : 'دقة'}</div>
                <div className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'of Information' : 'معلومات'}</div>
                <div className="text-muted-foreground leading-relaxed">{language === 'en' ? 'Accurate and updated answers with guaranteed information quality' : 'إجابات دقيقة ومحدثة مع ضمان جودة المعلومات'}</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-violet-400 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-violet-300 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-3xl font-bold text-violet-600 mb-3">{language === 'en' ? 'Flexibility' : 'مرونة'}</div>
                <div className="text-xl font-semibold mb-3 text-slate-700 dark:text-slate-300">{language === 'en' ? 'in Service' : 'في الخدمة'}</div>
                <div className="text-muted-foreground leading-relaxed">{language === 'en' ? '24/7 service is always available with adaptability to requirements' : 'خدمة 24/7 متاحة دائماً مع قابلية التكيف مع المتطلبات'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenterTransformation;