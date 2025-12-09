import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageSquare, Settings, Users, BarChart3, Database, Plus, Eye, Edit, Trash2, Search, Bell, TrendingUp, Clock, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import KnowledgeBase from './KnowledgeBase';

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

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const stats = {
  ar: [
    { title: "طلبات اليوم", value: "328", change: "+12%", icon: MessageSquare, color: "text-blue-600", bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", trend: "up" },
    { title: "الحجوزات المجدولة", value: "142", change: "+7%", icon: Users, color: "text-emerald-600", bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100", trend: "up" },
    { title: "نسبة الرضا", value: "98.6%", change: "+0.4%", icon: BarChart3, color: "text-orange-600", bgColor: "bg-gradient-to-br from-orange-50 to-orange-100", trend: "up" },
    { title: "قواعد المعرفة", value: "64", change: "+3", icon: Database, color: "text-purple-600", bgColor: "bg-gradient-to-br from-purple-50 to-purple-100", trend: "up" }
  ],
  en: [
    { title: "Today's Requests", value: "328", change: "+12%", icon: MessageSquare, color: "text-blue-600", bgColor: "bg-gradient-to-br from-blue-50 to-blue-100", trend: "up" },
    { title: "Scheduled Bookings", value: "142", change: "+7%", icon: Users, color: "text-emerald-600", bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100", trend: "up" },
    { title: "Satisfaction Rate", value: "98.6%", change: "+0.4%", icon: BarChart3, color: "text-orange-600", bgColor: "bg-gradient-to-br from-orange-50 to-orange-100", trend: "up" },
    { title: "Knowledge Base", value: "64", change: "+3", icon: Database, color: "text-purple-600", bgColor: "bg-gradient-to-br from-purple-50 to-purple-100", trend: "up" }
  ]
};

const conversations = {
  ar: [
    { id: 1, user: "أم خالد - الرياض", message: "حجز صيانة كهرباء لتغيير أفياش وإنارة (شقة)", time: "منذ دقيقتين", status: "جديد", priority: "high" },
    { id: 2, user: "سعود الحربي - جدة", message: "موعد فحص تسريب مياه في الحمام مع تسليك للمصرف", time: "منذ 5 دقائق", status: "قيد المعالجة", priority: "medium" },
    { id: 3, user: "شركة الواحة", message: "عقد مكافحة حشرات لفيلا (٤ زيارات) — تسعير", time: "منذ 10 دقائق", status: "مكتمل", priority: "low" },
    { id: 4, user: "مها القحطاني - الدمام", message: "عدم تبريد المكيف — طلب صيانة وتعبئة فريون", time: "منذ 15 دقيقة", status: "جديد", priority: "medium" }
  ],
  en: [
    { id: 1, user: "Um Khalid - Riyadh", message: "Book electrical maintenance to change outlets and lighting (apartment)", time: "2 minutes ago", status: "New", priority: "high" },
    { id: 2, user: "Saud Al-Harbi - Jeddah", message: "Appointment for water leak inspection in bathroom with drain cleaning", time: "5 minutes ago", status: "In Progress", priority: "medium" },
    { id: 3, user: "Al-Waha Company", message: "Pest control contract for villa (4 visits) — Pricing", time: "10 minutes ago", status: "Completed", priority: "low" },
    { id: 4, user: "Maha Al-Qahtani - Dammam", message: "AC not cooling — Maintenance request and freon refill", time: "15 minutes ago", status: "New", priority: "medium" }
  ]
};

export default function ControlPanel() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('conversations');
  const [animatedStats, setAnimatedStats] = useState(false);
  const currentStats = stats[language];
  const currentConversations = conversations[language];

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <span className="text-sm sm:text-base font-semibold text-primary">{language === 'en' ? 'Smart Control Panel' : 'لوحة التحكم الذكية'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
          {t.controlPanel.title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          {t.controlPanel.subtitle}
        </p>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {currentStats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in group hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={`absolute inset-0 ${stat.bgColor} opacity-80`}></div>
            <div className="relative p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${stat.color}`} />
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-emerald-600">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 sm:mb-2">{stat.title}</p>
                <p className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-1000 ${animatedStats ? 'scale-100' : 'scale-0'}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modern Navigation Tabs */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4">
        <div className="flex flex-col sm:flex-row gap-2 p-2 bg-gradient-to-r from-muted/50 to-muted rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm w-full sm:w-auto">
            <Button
              variant={activeTab === 'conversations' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('conversations')}
              className={`gap-2 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'conversations' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                  : 'hover:bg-white/50'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">{t.controlPanel.tabs.conversations}</span>
              <span className="sm:hidden">{t.controlPanel.tabs.conversationsShort}</span>
            </Button>
            <Button
              variant={activeTab === 'knowledge' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('knowledge')}
              className={`gap-2 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
              activeTab === 'knowledge' 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                : 'hover:bg-white/50'
            }`}
          >
            <Database className="w-4 h-4" />
            <span className="hidden sm:inline">{t.controlPanel.tabs.knowledge}</span>
            <span className="sm:hidden">{t.controlPanel.tabs.knowledgeShort}</span>
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('settings')}
            className={`gap-2 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base ${
              activeTab === 'settings' 
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105' 
                : 'hover:bg-white/50'
            }`}
          >
            <Settings className="w-4 h-4" />
            {t.controlPanel.tabs.settings}
          </Button>
        </div>
      </div>

      {/* Enhanced Tab Content */}
      {activeTab === 'conversations' && (
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                {t.controlPanel.conversations.title}
              </h3>
              <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                <Plus className="w-4 h-4" />
                {t.controlPanel.conversations.newConversation}
              </Button>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {currentConversations.map((conv, index) => (
                <div key={conv.id} className="p-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/90 transition-all duration-300 animate-slide-up hover:scale-[1.02] shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        conv.priority === 'high' ? 'bg-red-400 animate-pulse' :
                        conv.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                      }`}></div>
                      <h4 className="font-semibold text-gray-800">{conv.user}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm ${
                      conv.status === 'جديد' || conv.status === 'New' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800' :
                      conv.status === 'قيد المعالجة' || conv.status === 'In Progress' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800' :
                      'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                    }`}>
                      {conv.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{conv.message}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {conv.time}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-lg hover:bg-blue-50 hover:border-blue-200">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-lg hover:bg-green-50 hover:border-green-200">
                        <Edit className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              {t.controlPanel.conversations.analytics}
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100/50 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-emerald-800">{t.controlPanel.conversations.systemStatus}</h4>
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/80 rounded-full h-3 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-2000 ease-out" 
                         style={{ width: animatedStats ? '100%' : '0%', transitionDelay: '0.5s' }}></div>
                  </div>
                  <span className="text-lg font-bold text-emerald-800">{t.controlPanel.conversations.stable}</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100/50 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-orange-800">{t.controlPanel.conversations.responseTime}</h4>
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/80 rounded-full h-3 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all duration-2000 ease-out" 
                         style={{ width: animatedStats ? '100%' : '0%', transitionDelay: '1s' }}></div>
                  </div>
                  <span className="text-lg font-bold text-orange-800">{t.controlPanel.conversations.fast}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'knowledge' && (
        <KnowledgeBase />
      )}


      {activeTab === 'settings' && (
        <Card className="p-8 max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
            {language === 'en' ? 'Advanced System Settings' : 'إعدادات النظام المتقدمة'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl animate-fade-in shadow-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  {language === 'en' ? 'Notification Settings' : 'إعدادات الإشعارات'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{language === 'en' ? 'New Conversation Notifications' : 'إشعارات المحادثات الجديدة'}</span>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">{language === 'en' ? 'Enabled' : 'مُفعّل'}</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{language === 'en' ? 'Urgent Message Alerts' : 'تنبيهات الرسائل العاجلة'}</span>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">{language === 'en' ? 'Enabled' : 'مُفعّل'}</Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl animate-fade-in shadow-lg" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  {language === 'en' ? 'Channel Integrations' : 'ربط القنوات'}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 text-green-600">
                        <WhatsAppIcon />
                      </div>
                      <span className="text-sm font-medium">{language === 'en' ? 'WhatsApp' : 'واتساب'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{language === 'en' ? 'Connected' : 'متصل'}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 text-blue-600">
                        <FacebookIcon />
                      </div>
                      <span className="text-sm font-medium">{language === 'en' ? 'Facebook Messenger' : 'فيسبوك ماسنجر'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{language === 'en' ? 'Connected' : 'متصل'}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 text-blue-500">
                        <TelegramIcon />
                      </div>
                      <span className="text-sm font-medium">{language === 'en' ? 'Telegram' : 'تيليجرام'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{language === 'en' ? 'Disconnected' : 'غير متصل'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl animate-fade-in shadow-lg" style={{ animationDelay: '0.4s' }}>
                <h4 className="font-semibold mb-4 text-blue-800">{language === 'en' ? 'Quick Stats' : 'إحصائيات سريعة'}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">{language === 'en' ? 'Uptime' : 'وقت التشغيل'}</span>
                    <span className="font-semibold text-blue-800">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">{language === 'en' ? 'Last Backup' : 'آخر نسخة احتياطية'}</span>
                    <span className="font-semibold text-blue-800">{language === 'en' ? '1 hour ago' : 'قبل ساعة'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-700">{language === 'en' ? 'Storage Usage' : 'استخدام التخزين'}</span>
                    <span className="font-semibold text-blue-800">78%</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl animate-fade-in shadow-lg" style={{ animationDelay: '0.6s' }}>
                <h4 className="font-semibold mb-4 text-purple-800">{language === 'en' ? 'Quick Actions' : 'إجراءات سريعة'}</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    {language === 'en' ? 'Export Data' : 'تصدير البيانات'}
                  </Button>
                  <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
                    {language === 'en' ? 'Create Backup' : 'نسخة احتياطية'}
                  </Button>
                  <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-50">
                    {language === 'en' ? 'Update System' : 'تحديث النظام'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}