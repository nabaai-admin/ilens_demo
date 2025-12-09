import { useState, useEffect } from 'react';
import { Database, Plus, Edit, Trash2, Search, Upload, CheckCircle, AlertCircle, Clock, Brain, FileText, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  content: string;
  lastUpdated: string;
  accuracy: number;
  status: 'active' | 'training' | 'reviewing' | 'outdated';
  useCount: number;
}

export default function KnowledgeBase() {
  const { language } = useLanguage();
  
  const knowledgeItems: KnowledgeItem[] = [
    {
      id: '1',
      title: language === 'en' ? 'Home Maintenance Service Prices' : 'أسعار خدمات الصيانة المنزلية',
      category: language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية',
      content: language === 'en' ? 'Prices depend on the number of units with a 15% tax. The bill is calculated based on the selected number of units.' : 'الأسعار على حسب عدد الوحدات مع إضافة ضريبة 15%، تُحسب الفاتورة بناءً على عدد الوحدات المختارة',
      lastUpdated: language === 'en' ? '1 hour ago' : 'منذ ساعة',
      accuracy: 98,
      status: 'active',
      useCount: 245
    },
    {
      id: '2',
      title: language === 'en' ? 'Electricity 💡' : 'الكهرباء 💡',
      category: language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية',
      content: language === 'en' ? 'Change electrical outlets: 10 SAR | Change lighting: starts from 10 SAR | Extend electrical wires: starts from 200 SAR' : 'تغيير أفياش الكهرباء: 10 ر.س | تغيير الإنارة: تبدأ من 10 ر.س | تمديد أسلاك كهرباء: تبدأ من 200 ر.س',
      lastUpdated: language === 'en' ? '3 hours ago' : 'منذ 3 ساعات',
      accuracy: 95,
      status: 'training',
      useCount: 189
    },
    {
      id: '3',
      title: language === 'en' ? 'Plumbing and Leak Detection 💧' : 'السباكة وكشف التسريبات 💧',
      category: language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية',
      content: language === 'en' ? 'Install sanitary ware: starts from 25 SAR | Mixer maintenance: starts from 50 SAR | Unclog toilets: starts from 150 SAR | Leak inspection: starts from 350 SAR' : 'تركيب أدوات صحية: تبدأ من 25 ر.س | صيانة خلاطات: تبدأ من 50 ر.س | تسليك دورات المياه: تبدأ من 150 ر.س | فحص التسريبات: يبدأ من 350 ر.س',
      lastUpdated: language === 'en' ? 'Yesterday' : 'أمس',
      accuracy: 92,
      status: 'reviewing',
      useCount: 156
    },
    {
      id: '4',
      title: language === 'en' ? 'Air Conditioning & Cooling ❄️' : 'التكييف والتبريد ❄️',
      category: language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية',
      content: language === 'en' ? 'Freon refill: 115 SAR | AC not cooling: starts from 150 SAR | Operational malfunction: starts from 150 SAR | AC removal/installation: starts from 500 SAR' : 'تعبئة الفريون: 115 ر.س | عدم تبريد المكيف: يبدأ من 150 ر.س | عطل في التشغيل: يبدأ من 150 ر.س | فك/تركيب المكيفات: يبدأ من 500 ر.س',
      lastUpdated: language === 'en' ? 'A week ago' : 'منذ أسبوع',
      accuracy: 88,
      status: 'outdated',
      useCount: 134
    }
  ];

  const statusColors = {
    active: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
    training: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Brain },
    reviewing: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertCircle },
    outdated: { bg: 'bg-red-100', text: 'text-red-800', icon: Clock }
  };

  const statusLabels = {
    active: language === 'en' ? 'Active' : 'نشط',
    training: language === 'en' ? 'Training' : 'تدريب',
    reviewing: language === 'en' ? 'Reviewing' : 'مراجعة',
    outdated: language === 'en' ? 'Needs Update' : 'يحتاج تحديث'
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);

  const categories = ['all', language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية'];

  const filteredItems = knowledgeItems.filter(item => {
    const itemTitle = language === 'en' ? item.title.toLowerCase() : item.title.toLowerCase();
    const itemContent = language === 'en' ? item.content.toLowerCase() : item.content.toLowerCase();
    const itemCategory = language === 'en' ? item.category : item.category;

    const selectedCat = selectedCategory === 'all' ? 'all' : (language === 'en' ? 'Home Maintenance' : 'الصيانة المنزلية');

    const matchesCategory = selectedCat === 'all' || itemCategory === selectedCat;
    const matchesSearch = itemTitle.includes(searchQuery.toLowerCase()) ||
                         itemContent.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTraining = () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
    }, 3000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: language === 'en' ? 'Knowledge Bases' : 'قواعد المعرفة', value: '24', change: '+3', icon: Database, color: 'text-blue-600' },
    { title: language === 'en' ? 'Accuracy Rate' : 'معدل الدقة', value: '94%', change: '+2%', icon: BarChart3, color: 'text-emerald-600' },
    { title: language === 'en' ? 'Daily Uses' : 'الاستخدامات اليومية', value: '156', change: '+12', icon: FileText, color: 'text-purple-600' },
    { title: language === 'en' ? 'Last Trained' : 'آخر تدريب', value: language === 'en' ? '3h ago' : 'منذ 3س', change: language === 'en' ? 'Completed' : 'مكتمل', icon: Brain, color: 'text-orange-600' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8 bg-gradient-to-br from-background via-background to-accent/10 min-h-screen">
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Knowledge Base Management Platform' : 'منصة إدارة قواعد المعرفة'}
          </h2>
        </div>
        <p className="text-lg text-muted-foreground">
          {language === 'en' ? 'Intelligently update and manage AI agent information with advanced analytics' : 'تحديث وإدارة ذكية لمعلومات الوكيل الاصطناعي مع تحليلات متقدمة'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in group hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white to-accent/20"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-accent/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-sm font-semibold text-emerald-600">
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">{stat.title}</p>
                <p className={`text-3xl font-bold transition-all duration-1000 ${animatedStats ? 'scale-100' : 'scale-0'}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Search and Controls */}
      <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex-1 relative w-full">
            <Search className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search in knowledge base...' : 'ابحث في قواعد المعرفة...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-4 border-0 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleTraining}
              disabled={isTraining}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg gap-2"
            >
              <Brain className="w-4 h-4" />
              {isTraining ? (language === 'en' ? 'Training...' : 'جاري التدريب...') : (language === 'en' ? 'Train Agent' : 'تدريب الوكيل')}
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg gap-2">
              <Plus className="w-4 h-4" />
              {language === 'en' ? 'Add New Knowledge' : 'إضافة معرفة جديدة'}
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category || (selectedCategory === 'all' && category === 'all') ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap ${
                selectedCategory === category || (selectedCategory === 'all' && category === 'all')
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' 
                  : 'hover:bg-emerald-50'
              }`}
            >
              {category === 'all' ? (language === 'en' ? 'All Categories' : 'جميع الفئات') : category}
            </Button>
          ))}
        </div>
      </Card>

      {/* Knowledge Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const statusConfig = statusColors[item.status];
          const StatusIcon = statusConfig.icon;
          
          return (
            <Card key={item.id} className="p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in group hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50/30 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${statusConfig.bg} rounded-xl flex items-center justify-center`}>
                    <StatusIcon className={`w-5 h-5 ${statusConfig.text}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.category}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.text}`}>
                  {statusLabels[item.status]}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {item.content}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'en' ? 'Accuracy' : 'الدقة'}</span>
                  <span className="font-semibold">{item.accuracy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      item.accuracy >= 95 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                      item.accuracy >= 90 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                      'bg-gradient-to-r from-red-400 to-red-500'
                    }`}
                    style={{ width: animatedStats ? `${item.accuracy}%` : '0%' }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{language === 'en' ? 'Last updated' : 'آخر تحديث'}: {item.lastUpdated}</span>
                <span>{language === 'en' ? `Used ${item.useCount} times` : `استخدم ${item.useCount} مرة`}</span>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 hover:bg-blue-50">
                  <Edit className="w-3 h-3 mr-1" />
                  {language === 'en' ? 'Edit' : 'تحرير'}
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-green-50">
                  <Upload className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="outline" className="hover:bg-red-50">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Training Status */}
      {isTraining && (
        <Card className="p-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-blue-800 mb-2">{language === 'en' ? 'Training the smart agent...' : 'جاري تدريب الوكيل الذكي...'}</h3>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full animate-pulse" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-blue-600 mt-2">{language === 'en' ? 'Processing 24 new knowledge bases...' : 'معالجة 24 قاعدة معرفة جديدة...'}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}