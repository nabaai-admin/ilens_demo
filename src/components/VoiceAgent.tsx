import React from 'react';
import { useConversation } from '@11labs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, PhoneOff, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage'; // Assuming this hook is available for translations

const VoiceAgent = () => {
  const { language } = useLanguage(); // Assuming this hook provides the current language
  const { toast } = useToast();
  
  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: language === 'en' ? "Connected" : "تم الاتصال",
        description: language === 'en' ? "Successfully connected to the voice agent" : "تم الاتصال بالوكيل الصوتي بنجاح",
      });
    },
    onDisconnect: () => {
      toast({
        title: language === 'en' ? "Disconnected" : "انتهى الاتصال",
        description: language === 'en' ? "Disconnected from the voice agent" : "تم قطع الاتصال مع الوكيل الصوتي",
      });
    },
    onError: (error) => {
      toast({
        title: language === 'en' ? "Connection Error" : "خطأ في الاتصال",
        description: language === 'en' ? "An error occurred while connecting to the voice agent" : "حدث خطأ أثناء الاتصال بالوكيل الصوتي",
        variant: "destructive",
      });
    }
  });

  const handleStartConversation = async () => {
    try {
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start conversation with agent - using demo agent ID
      await conversation.startSession({
        agentId: "demo-agent-id",
      });
    } catch (error) {
      toast({
        title: language === 'en' ? "Error" : "خطأ",
        description: language === 'en' ? "Could not start the voice conversation" : "تعذر بدء المحادثة الصوتية",
        variant: "destructive",
      });
    }
  };

  const handleEndConversation = async () => {
    await conversation.endSession();
  };

  return (
    <div className="space-y-8">
      {/* Voice Agent Interface */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-12">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-violet-200/20 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-violet-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-indigo-400/40 rounded-full animate-bounce"></div>
        
        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              {conversation.status === 'connected' && (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600 animate-pulse">
                    {language === 'en' ? 'Connected' : 'متصل'}
                  </Badge>
                </div>
              )}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'Smart Voice Agent' : 'الوكيل الصوتي الذكي'}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'en' ? 'An intelligent agent providing advanced 24/7 AI-powered voice support' : 'وكيل ذكي يوفر دعمًا صوتيًا متطورًا على مدار الساعة بتقنية الذكاء الاصطناعي'}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center mb-12">
            {conversation.status === 'disconnected' ? (
              <div className="group">
                <Button
                  onClick={() => window.open('https://wa.me/967783818773', '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <Mic className="w-5 h-5" />
                    </div>
                    {language === 'en' ? 'Start Voice Conversation' : 'بدء المحادثة الصوتية'}
                  </div>
                </Button>
              </div>
            ) : (
              <div className="group">
                <Button
                  onClick={handleEndConversation}
                  variant="destructive"
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <PhoneOff className="w-5 h-5" />
                    </div>
                    {language === 'en' ? 'End Conversation' : 'إنهاء المحادثة'}
                  </div>
                </Button>
              </div>
            )}
          </div>

          {/* Speaking Indicator */}
          {conversation.isSpeaking && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-4 bg-violet-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-6 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-4 bg-violet-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="font-semibold text-violet-700 dark:text-violet-300">{language === 'en' ? 'Agent is speaking...' : 'الوكيل يتحدث...'}</span>
              </div>
            </div>
          )}

          {/* Features and Use Cases */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features Card */}
            <div className="group">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-300">{language === 'en' ? 'Voice Agent Features' : 'مميزات الوكيل الصوتي'}</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Supports all world languages with local understanding' : 'دعم جميع لغات العالم مع فهم محلي'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Instant and intelligent real-time responses' : 'استجابة فورية وذكية في الوقت الفعلي'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Available 24/7 without interruption or delay' : 'متاح 24/7 بدون انقطاع أو تأخير'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Natural understanding of speech and context' : 'فهم طبيعي للكلام والسياق'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Seamless integration with CRM systems' : 'تكامل سلس مع أنظمة إدارة العملاء'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Cases Card */}
            <div className="group">
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{language === 'en' ? 'Use Cases' : 'حالات الاستخدام'}</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Advanced automated customer service' : 'خدمة العملاء الآلية المتطورة'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Intelligently answering frequently asked questions' : 'الإجابة على الاستفسارات المتكررة بذكاء'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Automatically booking appointments and services' : 'حجز المواعيد والخدمات تلقائياً'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Initial technical support and diagnostics' : 'الدعم التقني الأولي والتشخيص'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{language === 'en' ? 'Accurately routing calls to the appropriate departments' : 'توجيه المكالمات للأقسام المناسبة بدقة'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;