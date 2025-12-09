import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    changeLanguage(newLanguage);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'ar' ? t.language.en : t.language.ar}
      </span>
    </Button>
  );
} 