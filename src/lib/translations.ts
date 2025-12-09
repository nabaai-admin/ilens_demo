export type Language = 'ar' | 'en';

export interface Translations {
  // Navigation & Header
  nav: {
    home: string;
    features: string;
    about: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    learnMore: string;
  };
  
  // Features Section
  features: {
    mainTitle: string;
    mainSubtitle: string;
    customerFirst: {
      title: string;
      description: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    reliability: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    empowerment: {
      title: string;
      description: string;
    };
    teamwork: {
      title: string;
      description: string;
    };
  };
  
  // Multi-Channel Support
  multiChannel: {
    title: string;
    subtitle: string;
    whatsapp: string;
    facebook: string;
    website: string;
    phone: string;
    available: string;
    instant: string;
  };
  
  // System Power
  systemPower: {
    title: string;
    subtitle: string;
    processing: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    scalability: {
      title: string;
      description: string;
    };
  };
  
  // Expected Benefits
  expectedBenefits: {
    title: string;
    customerExperience: {
      title: string;
      subtitle: string;
      description: string;
    };
    timeSavings: {
      title: string;
      subtitle: string;
      description: string;
    };
    development: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  
  // Additional Benefits
  additionalBenefits: {
    title: string;
    subtitle: string;
    security: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    performance: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    cta: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    whatsapp: string;
    emailDescription: string;
    phoneDescription: string;
    whatsappDescription: string;
    contactViaWhatsapp: string;
    whyYemenAI: string;
    whySubtitle: string;
    service247: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    solutions: {
      title: string;
      description: string;
    };
    bestPrices: string;
    bestPricesSubtitle: string;
    competitivePrices: string;
    customExperience: string;
    localSupport: string;
    strongNetwork: string;
  };
  
  // Language Switcher
  language: {
    ar: string;
    en: string;
  };
  
  // Chat Demo
  chatDemo: {
    title: string;
    scenarios: {
      volti: string;
      billing: string;
      roaming: string;
      support: string;
    };
    agent: {
      title: string;
      status: string;
    };
    features: {
      title: string;
      instant: {
        title: string;
        description: string;
      };
      suggestions: {
        title: string;
        description: string;
      };
      channels: {
        title: string;
        description: string;
      };
      personal: {
        title: string;
        description: string;
      };
    };
    availability: {
      title: string;
      description: string;
    };
    placeholder: string;
  };
  
  // Control Panel
  controlPanel: {
    title: string;
    subtitle: string;
    stats: {
      conversations: string;
      activeUsers: string;
      responseRate: string;
      knowledgeBase: string;
    };
    tabs: {
      conversations: string;
      conversationsShort: string;
      knowledge: string;
      knowledgeShort: string;
      settings: string;
    };
    conversations: {
      title: string;
      newConversation: string;
      active: string;
      analytics: string;
      systemStatus: string;
      responseTime: string;
      stable: string;
      fast: string;
    };
    settings: {
      title: string;
      notifications: {
        title: string;
        newConversations: string;
        urgentMessages: string;
        enabled: string;
      };
      channels: {
        title: string;
        whatsapp: string;
        facebook: string;
        telegram: string;
        connected: string;
        disconnected: string;
      };
      quickStats: {
        title: string;
        uptime: string;
        lastBackup: string;
        storageUsage: string;
        hourAgo: string;
      };
      quickActions: {
        title: string;
        exportData: string;
        backup: string;
        updateSystem: string;
      };
    };
  };
  
  // Voice Agent
  voiceAgent: {
    title: string;
    subtitle: string;
    connected: string;
    startConversation: string;
    endConversation: string;
    agentSpeaking: string;
    features: {
      title: string;
      multilingual: string;
      realTime: string;
      available247: string;
      naturalLanguage: string;
      integration: string;
    };
    useCases: {
      title: string;
      customerService: string;
      faq: string;
      booking: string;
      technicalSupport: string;
      callRouting: string;
    };
    toasts: {
      connected: {
        title: string;
        description: string;
      };
      disconnected: {
        title: string;
        description: string;
      };
      error: {
        title: string;
        description: string;
      };
      startError: {
        title: string;
        description: string;
      };
    };
    
    // Call Center Transformation
    callCenter: {
      title: string;
      subtitle: string;
      traditional: {
        title: string;
        subtitle: string;
        issues: {
          slow: {
            title: string;
            description: string;
          };
          limited: {
            title: string;
            description: string;
          };
          expensive: {
            title: string;
            description: string;
          };
          errors: {
            title: string;
            description: string;
          };
        };
      };
      smart: {
        title: string;
        subtitle: string;
        benefits: {
          fast: {
            title: string;
            description: string;
          };
          available247: {
            title: string;
            description: string;
          };
          costEffective: {
            title: string;
            description: string;
          };
          accurate: {
            title: string;
            description: string;
          };
        };
      };
      capacity: {
        title: string;
        subtitle: string;
        features: {
          massiveRequests: {
            title: string;
            subtitle: string;
            description: string;
          };
          instantResponse: {
            title: string;
            subtitle: string;
            description: string;
          };
          highReliability: {
            title: string;
            subtitle: string;
            description: string;
          };
        };
        designedFor: {
          title: string;
          autoScaling: {
            title: string;
            description: string;
          };
          seamlessIntegration: {
            title: string;
            description: string;
          };
        };
      };
      benefits: {
        title: string;
        efficiency: {
          title: string;
          subtitle: string;
          description: string;
        };
        accuracy: {
          title: string;
          subtitle: string;
          description: string;
        };
        flexibility: {
          title: string;
          subtitle: string;
          description: string;
        };
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      features: "المزايا",
      about: "حول",
      contact: "تواصل معنا",
    },
    hero: {
      title: "I Lens",
      subtitle: "الذكاء الاصطناعي",
      description: "حلول ذكاء اصطناعي متطورة للأعمال في المملكة العربية السعودية",
      ctaButton: "ابدأ رحلتك",
      learnMore: "اعرف المزيد",
    },
    features: {
      mainTitle: "كيف نحقق رؤية I Lens في الإبداع والتميز؟",
      mainSubtitle: "حلول ذكية تجسد قيم الشفافية والموثوقية والإبتكار لخدمة I Lens",
      customerFirst: {
        title: "الاهتمام بالزبائن أولاً",
        description: "زبائننا أساس وجودنا، نلبي احتياجاتهم ورغباتهم بما يفوق توقعاتهم",
      },
      transparency: {
        title: "الشفافية والمصداقية",
        description: "نلتزم بوضوح الإجراءات والصدق في التعامل لتعزيز الثقة المتبادلة",
      },
      reliability: {
        title: "الموثوقية والأمان",
        description: "خدمات متميزة بأرقى المعايير العالمية مع ضمان الخصوصية والسرية",
      },
      innovation: {
        title: "الإبتكار والإبداع",
        description: "دعم الأفكار الإبداعية وابتكار أساليب جديدة للتحسين المستمر",
      },
      empowerment: {
        title: "التمكين والمشاركة",
        description: "مشاركة الموظفين في صناعة القرارات وتحقيق الاستقرار الوظيفي",
      },
      teamwork: {
        title: "العمل بروح الفريق الواحد",
        description: "تعزيز الإخاء والتعاون والتناغم بين جميع الأنشطة لتحقيق النجاح",
      },
    },
    multiChannel: {
      title: "دعم متعدد القنوات",
      subtitle: "نوفر حلول ذكية متطورة عبر جميع قنوات التواصل المفضلة، مع ضمان تجربة موحدة ومتسقة",
      whatsapp: "واتساب",
      facebook: "فيسبوك",
      website: "الموقع",
      phone: "الهاتف",
      available: "متوفر",
      instant: "فوري",
    },
    systemPower: {
      title: "قوة النظام وسهولة التكامل",
      subtitle: "بنية تحتية قوية ومتطورة تواكب احتياجات الشركات الكبيرة مع سهولة التكامل",
      processing: {
        title: "قوة معالجة عالية",
        description: "نظام ذكي قادر على معالجة ملايين الطلبات بسرعة فائقة",
      },
      integration: {
        title: "تكامل سلس",
        description: "يتكامل بسهولة مع جميع الأنظمة الحالية دون تعطيل العمليات",
      },
      security: {
        title: "أمان متقدم",
        description: "حماية شاملة للبيانات مع أحدث تقنيات التشفير والأمان",
      },
      scalability: {
        title: "قابلية التوسع",
        description: "نظام قابل للتوسع تلقائياً مع نمو احتياجات الشركة",
      },
    },
    expectedBenefits: {
      title: "المزايا المتوقعة مع Naba AI",
      customerExperience: {
        title: "تحسين",
        subtitle: "تجربة العملاء",
        description: "خدمة أسرع وأكثر دقة مع تجربة مستخدم استثنائية",
      },
      timeSavings: {
        title: "توفير",
        subtitle: "وقت وجهد",
        description: "أتمتة المهام الروتينية وتحرير الموارد للعمل الإبداعي",
      },
      development: {
        title: "تطوير",
        subtitle: "مستمر",
        description: "حلول مبتكرة ومتطورة تتطور مع احتياجات عملك",
      },
    },
    additionalBenefits: {
      title: "فوائد إضافية",
      subtitle: "مزايا إضافية تجعل Naba AI الخيار الأمثل لحلول الذكاء الاصطناعي",
      security: {
        title: "أمان متقدم",
        description: "حماية شاملة للبيانات مع أحدث تقنيات التشفير والأمان",
      },
      integration: {
        title: "تكامل سلس",
        description: "تكامل بسيط مع أنظمتك الحالية دون تعطيل العمليات",
      },
      performance: {
        title: "أداء عالي",
        description: "سرعة فائقة في المعالجة مع استجابة فورية للطلبات",
      },
      support: {
        title: "دعم 24/7",
        description: "فريق دعم متخصص متاح على مدار الساعة لمساعدتك",
      },
      cta: "ابدأ رحلتك مع Naba AI اليوم",
    },
    contact: {
      title: "معنا في Naba AI",
      subtitle: "حلول ذكاء اصطناعي متطورة للأعمال في المملكة العربية السعودية",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      whatsapp: "واتساب",
      emailDescription: "راسلنا للحصول على استشارة مجانية",
      phoneDescription: "تحدث مباشرة مع خبرائنا",
      whatsappDescription: "تواصل سريع ومباشر",
      contactViaWhatsapp: "تواصل عبر واتساب",
      whyYemenAI: "لماذا Naba AI؟",
      whySubtitle: "الخيار الأمثل للذكاء الاصطناعي",
      service247: {
        title: "خدمة 24/7",
        description: "دعم متواصل في جميع أوقات اليوم والليل مع فريق خبراء متخصص",
      },
      security: {
        title: "أمان وخصوصية",
        description: "حماية كاملة لبياناتك ومعلوماتك الشخصية بأحدث تقنيات التشفير",
      },
      solutions: {
        title: "حلول شاملة",
        description: "تقنيات ذكية متطورة تغطي جميع احتياجات الشركات والمؤسسات",
      },
      bestPrices: "أفضل الأسعار والخدمات",
      bestPricesSubtitle: "Naba AI - أفضل الحلول الذكية من المنافسين العالميين",
      competitivePrices: "حلول ذكية بأسعار تنافسية أقل من المنافسين العالميين",
      customExperience: "تجربة مخصصة لاحتياجاتك",
      localSupport: "خدمة عملاء محلية 24/7",
      strongNetwork: "بنية تحتية تلبي ملايين المستخدمين",
    },
    language: {
      ar: "العربية",
      en: "English",
    },
    chatDemo: {
      title: "تجربة تفاعلية مع الوكيل الذكي",
      scenarios: {
        volti: "باقات فولتي",
        billing: "أسعار أرقام الفوترة",
        roaming: "خدمات التجوال الدولي",
        support: "دعم فني",
      },
      agent: {
      title: "وكيل I Lens الذكي",
        status: "متصل الآن",
      },
      features: {
        title: "مزايا الوكيل الذكي",
        instant: {
          title: "ردود فورية ذكية",
          description: "يجيب على الاستفسارات خلال ثوانٍ",
        },
        suggestions: {
          title: "اقتراحات خدمات ذكية",
          description: "يقترح الخدمات المناسبة حسب الاحتياج",
        },
        channels: {
          title: "دعم متعدد القنوات",
          description: "واتساب، فيسبوك، الموقع، والهاتف",
        },
        personal: {
          title: "تجربة شخصية",
          description: "يتذكر تفضيلات وتاريخ العميل",
        },
      },
      availability: {
        title: "متاح 24/7",
        description: "خدمة العملاء بدون انقطاع",
      },
      placeholder: "اكتب رسالتك هنا...",
    },
    controlPanel: {
      title: "مركز إدارة I Lens",
      subtitle: "إدارة شاملة ومتقدمة لجميع محادثات العملاء وقواعد المعرفة",
      stats: {
        conversations: "إجمالي المحادثات",
        activeUsers: "المشتركين النشطين",
        responseRate: "معدل الاستجابة",
        knowledgeBase: "قواعد المعرفة",
      },
      tabs: {
        conversations: "المحادثات المباشرة",
        conversationsShort: "المحادثات",
        knowledge: "قواعد المعرفة",
        knowledgeShort: "المعرفة",
        settings: "الإعدادات",
      },
      conversations: {
        title: "المحادثات النشطة",
        newConversation: "محادثة جديدة",
        active: "النشطة",
        analytics: "تحليلات الأداء المباشرة",
        systemStatus: "حالة النظام",
        responseTime: "زمن الاستجابة",
        stable: "مستقر",
        fast: "سريع",
      },
      settings: {
        title: "إعدادات النظام المتقدمة",
        notifications: {
          title: "إعدادات الإشعارات",
          newConversations: "إشعارات المحادثات الجديدة",
          urgentMessages: "تنبيهات الرسائل العاجلة",
          enabled: "مُفعّل",
        },
        channels: {
          title: "ربط القنوات",
          whatsapp: "واتساب",
          facebook: "فيسبوك ماسنجر",
          telegram: "تيليجرام",
          connected: "متصل",
          disconnected: "غير متصل",
        },
        quickStats: {
          title: "إحصائيات سريعة",
          uptime: "وقت التشغيل",
          lastBackup: "آخر نسخة احتياطية",
          storageUsage: "استخدام التخزين",
          hourAgo: "قبل ساعة",
        },
        quickActions: {
          title: "إجراءات سريعة",
          exportData: "تصدير البيانات",
          backup: "نسخة احتياطية",
          updateSystem: "تحديث النظام",
        },
      },
    },
    voiceAgent: { // Voice Agent Configuration
      title: "الوكيل الصوتي الذكي",
      subtitle: "وكيل ذكي يوفر دعمًا صوتيًا متطورًا على مدار الساعة بتقنية الذكاء الاصطناعي",
      connected: "متصل",
      startConversation: "بدء المحادثة الصوتية",
      endConversation: "إنهاء المحادثة",
      agentSpeaking: "الوكيل يتحدث...",
      features: {
        title: "مميزات الوكيل الصوتي",
        multilingual: "دعم جميع لغات العالم مع فهم محلي",
        realTime: "استجابة فورية وذكية في الوقت الفعلي",
        available247: "متاح 24/7 بدون انقطاع أو تأخير",
        naturalLanguage: "فهم طبيعي للكلام والسياق",
        integration: "تكامل سلس مع أنظمة إدارة العملاء",
      },
      useCases: {
        title: "حالات الاستخدام",
        customerService: "خدمة العملاء الآلية المتطورة",
        faq: "الإجابة على الاستفسارات المتكررة بذكاء",
        booking: "حجز المواعيد والخدمات تلقائياً",
        technicalSupport: "الدعم التقني الأولي والتشخيص",
        callRouting: "توجيه المكالمات للأقسام المناسبة بدقة",
      },
      toasts: {
        connected: {
          title: "تم الاتصال",
          description: "تم الاتصال بالوكيل الصوتي بنجاح",
        },
        disconnected: {
          title: "انتهى الاتصال",
          description: "تم قطع الاتصال مع الوكيل الصوتي",
        },
        error: {
          title: "خطأ في الاتصال",
          description: "حدث خطأ أثناء الاتصال بالوكيل الصوتي",
        },
        startError: {
          title: "خطأ",
          description: "تعذر بدء المحادثة الصوتية",
        },
      },
      callCenter: {
        title: "تحويل مركز الاتصالات إلى مركز ذكي",
        subtitle: "نحول مراكز الاتصالات التقليدية إلى مراكز ذكية تعمل بالذكاء الاصطناعي لتوفير خدمة أفضل وأسرع",
        traditional: {
          title: "مركز الاتصالات التقليدي",
          subtitle: "النظام القديم",
          issues: {
            slow: {
              title: "بطء",
              description: "أوقات انتظار طويلة تسبب إزعاج العملاء",
            },
            limited: {
              title: "محدود",
              description: "ساعات عمل محددة وعدد موظفين محدود",
            },
            expensive: {
              title: "مكلف",
              description: "حاجة لموظفين كثيرين ومصاريف تشغيل عالية",
            },
            errors: {
              title: "أخطاء",
              description: "أخطاء بشرية متكررة وعدم اتساق في الإجابات",
            },
          },
        },
        smart: {
          title: "المركز الذكي بالذكاء الاصطناعي",
          subtitle: "النظام المتطور",
          benefits: {
            fast: {
              title: "سريع",
              description: "استجابة فورية خلال ثوانٍ معدودة",
            },
            available247: {
              title: "24/7",
              description: "خدمة مستمرة بدون انقطاع أو توقف",
            },
            costEffective: {
              title: "اقتصادي",
              description: "حلول فعالة بتكلفة مناسبة وعائد مرتفع",
            },
            accurate: {
              title: "دقيق",
              description: "إجابات متسقة ودقيقة بنسبة عالية جداً",
            },
          },
        },
        capacity: {
          title: "قدرة معالجة ضخمة لشركات بحجم I Lens",
          subtitle: "أنظمتنا مصممة خصيصاً للتعامل مع الشركات الكبيرة التي تخدم ملايين العملاء",
          features: {
            massiveRequests: {
              title: "طلبات ضخمة",
              subtitle: "معالجة يومية",
              description: "قدرة معالجة هائلة تناسب أكبر الشركات",
            },
            instantResponse: {
              title: "استجابة فورية",
              subtitle: "بلا تأخير",
              description: "معالجة فورية لجميع الطلبات",
            },
            highReliability: {
              title: "موثوقية عالية",
              subtitle: "خدمة مستمرة",
              description: "ضمان توفر النظام على مدار الساعة",
            },
          },
          designedFor: {
            title: "مصمم خصيصاً لـ I Lens",
            autoScaling: {
              title: "قدرة التوسع التلقائي",
              description: "النظام يتوسع تلقائياً مع زيادة عدد العملاء، مما يضمن أداءً ثابتاً حتى مع النمو السريع",
            },
            seamlessIntegration: {
              title: "تكامل سلس",
              description: "يتكامل بسلاسة مع أنظمة I Lens الحالية دون الحاجة لتغييرات كبيرة في البنية التحتية",
            },
          },
        },
        benefits: {
          title: "الفوائد المتوقعة من التحول الرقمي",
          efficiency: {
            title: "كفاءة",
            subtitle: "عالية",
            description: "معالجة أسرع للاستفسارات مع تحسين مستمر في الأداء",
          },
          accuracy: {
            title: "دقة",
            subtitle: "معلومات",
            description: "إجابات دقيقة ومحدثة مع ضمان جودة المعلومات",
          },
          flexibility: {
            title: "مرونة",
            subtitle: "في الخدمة",
            description: "خدمة 24/7 متاحة دائماً مع قابلية التكيف مع المتطلبات",
          },
        },
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Naba AI",
      subtitle: "Intelligent Automation & Predictive Solutions",
      description: "Advanced AI solutions empowering businesses in Saudi Arabia to operate smarter, faster, and more efficiently",
      ctaButton: "Start Your Journey",
      learnMore: "Learn More",
    },
    features: {
      mainTitle: "How do we achieve excellence in AI innovation?",
      mainSubtitle: "Smart solutions built on transparency, reliability, and innovation to serve I Lens and businesses across Saudi Arabia",
      customerFirst: {
        title: "Customer First",
        description: "Our customers are the foundation of our existence, we meet their needs and desires beyond their expectations",
      },
      transparency: {
        title: "Transparency & Credibility",
        description: "We are committed to clear procedures and honesty in dealing to enhance mutual trust",
      },
      reliability: {
        title: "Reliability & Security",
        description: "Distinguished services with the highest international standards while ensuring privacy and confidentiality",
      },
      innovation: {
        title: "Innovation & Creativity",
        description: "Supporting creative ideas and innovating new methods for continuous improvement",
      },
      empowerment: {
        title: "Empowerment & Participation",
        description: "Involving employees in decision-making and achieving job stability",
      },
      teamwork: {
        title: "Teamwork Spirit",
        description: "Promoting brotherhood, cooperation, and harmony among all activities to achieve success",
      },
    },
    multiChannel: {
      title: "Multi-Channel Support",
      subtitle: "We provide advanced smart solutions across all preferred communication channels, ensuring a unified and consistent experience",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      website: "Website",
      phone: "Phone",
      available: "Available",
      instant: "Instant",
    },
    systemPower: {
      title: "System Power & Easy Integration",
      subtitle: "Strong and advanced infrastructure that keeps pace with the needs of large companies with easy integration",
      processing: {
        title: "High Processing Power",
        description: "Smart system capable of processing millions of requests at high speed",
      },
      integration: {
        title: "Seamless Integration",
        description: "Easily integrates with all existing systems without disrupting operations",
      },
      security: {
        title: "Advanced Security",
        description: "Comprehensive data protection with the latest encryption and security technologies",
      },
      scalability: {
        title: "Scalability",
        description: "System that automatically scales with the growth of company needs",
      },
    },
    expectedBenefits: {
      title: "Expected Benefits with Naba AI",
      customerExperience: {
        title: "Improve",
        subtitle: "Customer Experience",
        description: "Faster and more accurate service with an exceptional user experience",
      },
      timeSavings: {
        title: "Save",
        subtitle: "Time & Effort",
        description: "Automate routine tasks and free up resources for creative work",
      },
      development: {
        title: "Continuous",
        subtitle: "Development",
        description: "Innovative and advanced solutions that evolve with your business needs",
      },
    },
    additionalBenefits: {
      title: "Additional Benefits",
      subtitle: "Additional advantages that make Naba AI the optimal choice for AI solutions",
      security: {
        title: "Advanced Security",
        description: "Comprehensive data protection with the latest encryption and security technologies",
      },
      integration: {
        title: "Seamless Integration",
        description: "Simple integration with your existing systems without disrupting operations",
      },
      performance: {
        title: "High Performance",
        description: "Ultra-fast processing speed with instant response to requests",
      },
      support: {
        title: "24/7 Support",
        description: "Specialized support team available around the clock to help you",
      },
      cta: "Start Your Journey with Naba AI Today",
    },
    contact: {
      title: "With Naba AI",
      subtitle: "Advanced AI solutions for businesses in Saudi Arabia",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      emailDescription: "Contact us for a free consultation",
      phoneDescription: "Talk directly with our experts",
      whatsappDescription: "Quick and direct communication",
      contactViaWhatsapp: "Contact via WhatsApp",
      whyYemenAI: "Why Naba AI?",
      whySubtitle: "The optimal choice for artificial intelligence",
      service247: {
        title: "24/7 Service",
        description: "Continuous support at all times of day and night with a specialized expert team",
      },
      security: {
        title: "Security & Privacy",
        description: "Complete protection of your data and personal information with the latest encryption technologies",
      },
      solutions: {
        title: "Comprehensive Solutions",
        description: "Advanced smart technologies covering all business and institutional needs",
      },
      bestPrices: "Best Prices & Services",
      bestPricesSubtitle: "I Lens - Premium quality at competitive prices",
      competitivePrices: "Competitive prices with exceptional value",
      customExperience: "Customized experience for your needs",
      localSupport: "Local 24/7 customer service",
      strongNetwork: "Comprehensive service coverage across Saudi Arabia",
    },
    language: {
      ar: "العربية",
      en: "English",
    },
    chatDemo: {
      title: "Interactive Experience with Smart Agent",
      scenarios: {
        volti: "Volti Packages",
        billing: "Billing Number Prices",
        roaming: "International Roaming Services",
        support: "Technical Support",
      },
      agent: {
        title: "I Lens Smart Agent",
        status: "Connected Now",
      },
      features: {
        title: "Smart Agent Features",
        instant: {
          title: "Instant Smart Responses",
          description: "Answers inquiries within seconds",
        },
        suggestions: {
          title: "Smart Service Suggestions",
          description: "Suggests appropriate services based on needs",
        },
        channels: {
          title: "Multi-Channel Support",
          description: "WhatsApp, Facebook, Website, and Phone",
        },
        personal: {
          title: "Personal Experience",
          description: "Remembers customer preferences and history",
        },
      },
      availability: {
        title: "Available 24/7",
        description: "Uninterrupted customer service",
      },
      placeholder: "Type your message here...",
    },
    controlPanel: {
      title: "I Lens Management Center",
      subtitle: "Comprehensive and advanced management of all customer conversations and knowledge bases",
      stats: {
        conversations: "Total Conversations",
        activeUsers: "Active Subscribers",
        responseRate: "Response Rate",
        knowledgeBase: "Knowledge Base",
      },
      tabs: {
        conversations: "Live Conversations",
        conversationsShort: "Conversations",
        knowledge: "Knowledge Base",
        knowledgeShort: "Knowledge",
        settings: "Settings",
      },
      conversations: {
        title: "Active Conversations",
        newConversation: "New Conversation",
        active: "Active",
        analytics: "Live Performance Analytics",
        systemStatus: "System Status",
        responseTime: "Response Time",
        stable: "Stable",
        fast: "Fast",
      },
      settings: {
        title: "Advanced System Settings",
        notifications: {
          title: "Notification Settings",
          newConversations: "New Conversation Notifications",
          urgentMessages: "Urgent Message Alerts",
          enabled: "Enabled",
        },
        channels: {
          title: "Channel Integration",
          whatsapp: "WhatsApp",
          facebook: "Facebook Messenger",
          telegram: "Telegram",
          connected: "Connected",
          disconnected: "Disconnected",
        },
        quickStats: {
          title: "Quick Statistics",
          uptime: "Uptime",
          lastBackup: "Last Backup",
          storageUsage: "Storage Usage",
          hourAgo: "1 hour ago",
        },
        quickActions: {
          title: "Quick Actions",
          exportData: "Export Data",
          backup: "Backup",
          updateSystem: "Update System",
        },
      },
    },
    voiceAgent: {
      title: "Smart Voice Agent",
      subtitle: "An intelligent agent that provides advanced voice support around the clock using artificial intelligence technology",
      connected: "Connected",
      startConversation: "Start Voice Conversation",
      endConversation: "End Conversation",
      agentSpeaking: "Agent is speaking...",
      features: {
        title: "Voice Agent Features",
        multilingual: "Support for all world languages with local understanding",
        realTime: "Instant and intelligent real-time response",
        available247: "Available 24/7 without interruption or delay",
        naturalLanguage: "Natural understanding of speech and context",
        integration: "Seamless integration with customer management systems",
      },
      useCases: {
        title: "Use Cases",
        customerService: "Advanced automated customer service",
        faq: "Intelligent answering of frequently asked questions",
        booking: "Automatic appointment and service booking",
        technicalSupport: "Initial technical support and diagnosis",
        callRouting: "Accurate call routing to appropriate departments",
      },
      toasts: {
        connected: {
          title: "Connected",
          description: "Successfully connected to the voice agent",
        },
        disconnected: {
          title: "Connection Ended",
          description: "Disconnected from the voice agent",
        },
        error: {
          title: "Connection Error",
          description: "An error occurred while connecting to the voice agent",
        },
        startError: {
          title: "Error",
          description: "Failed to start voice conversation",
        },
      },
      callCenter: {
        title: "Transform Call Center to Smart Center",
        subtitle: "We transform traditional call centers into smart centers powered by artificial intelligence to provide better and faster service",
        traditional: {
          title: "Traditional Call Center",
          subtitle: "Old System",
          issues: {
            slow: {
              title: "Slow",
              description: "Long waiting times that cause customer frustration",
            },
            limited: {
              title: "Limited",
              description: "Limited working hours and limited number of employees",
            },
            expensive: {
              title: "Expensive",
              description: "Need for many employees and high operating costs",
            },
            errors: {
              title: "Errors",
              description: "Frequent human errors and inconsistent responses",
            },
          },
        },
        smart: {
          title: "AI Smart Center",
          subtitle: "Advanced System",
          benefits: {
            fast: {
              title: "Fast",
              description: "Instant response within seconds",
            },
            available247: {
              title: "24/7",
              description: "Continuous service without interruption or stoppage",
            },
            costEffective: {
              title: "Cost-Effective",
              description: "Effective solutions at appropriate cost with high return",
            },
            accurate: {
              title: "Accurate",
              description: "Consistent and highly accurate responses",
            },
          },
        },
        capacity: {
          title: "Massive Processing Capacity for Growing Companies",
          subtitle: "Our systems are specifically designed to scale with your business growth",
          features: {
            massiveRequests: {
              title: "Massive Requests",
              subtitle: "Daily Processing",
              description: "Huge processing capacity suitable for the largest companies",
            },
            instantResponse: {
              title: "Instant Response",
              subtitle: "No Delay",
              description: "Immediate processing of all requests",
            },
            highReliability: {
              title: "High Reliability",
              subtitle: "Continuous Service",
              description: "Ensuring system availability around the clock",
            },
          },
          designedFor: {
            title: "Specially Designed for Business Growth",
            autoScaling: {
              title: "Auto-Scaling Capability",
              description: "The system automatically scales with increasing customer numbers, ensuring consistent performance even with rapid growth",
            },
            seamlessIntegration: {
              title: "Seamless Integration",
              description: "Integrates smoothly with your existing systems without requiring major infrastructure changes",
            },
          },
        },
        benefits: {
          title: "Expected Benefits from Digital Transformation",
          efficiency: {
            title: "Efficiency",
            subtitle: "High",
            description: "Faster processing of inquiries with continuous performance improvement",
          },
          accuracy: {
            title: "Accuracy",
            subtitle: "Information",
            description: "Accurate and updated answers with guaranteed information quality",
          },
          flexibility: {
            title: "Flexibility",
            subtitle: "in Service",
            description: "24/7 service always available with adaptability to requirements",
          },
        },
      },
    },
  },
};