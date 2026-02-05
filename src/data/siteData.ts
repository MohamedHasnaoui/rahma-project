// ==========================================
// بيانات موقع جمعية الرحمة
// يمكنك تعديل جميع البيانات من هذا الملف
// ==========================================

// معلومات الجمعية الأساسية
export const associationInfo = {
  name: "جمعية الرحمة",
  fullName: "جمعية الرحمة للتربية والتنمية والأعمال الاجتماعية",
  location: "مكناس، المغرب",
  vision: "تغطية جميع مدن المغرب",
  mission:
    "نشر العلم الشرعي الصحيح عبر دعم الدعاة والأساتذة الثقات وتوفير وسائل التصوير والبث",
  values: ["الأمانة", "الشفافية", "الإخلاص", "نشر العلم الصحيح"],
  foundedYear: 2020,
};

// معلومات التواصل
export const contactInfo = {
  phone: "+212 535 XX XX XX",
  email: "info@alrahma-meknes.org",
  address: "مكناس، المغرب",
  whatsapp: "+212 6XX XX XX XX",
};

// روابط التواصل الاجتماعي
export const socialLinks = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
};

// معلومات التبرع (RIB)
export const donationInfo = {
  bankName: "البنك الشعبي",
  accountName: "جمعية الرحمة للتربية والتنمية",
  rib: "000 000 0000000000000000 00",
  iban: "MA00 0000 0000 0000 0000 0000 000",
  swift: "XXXXMAXX",
};

// إحصائيات الإنجازات
export const stats = {
  supportedScholars: 15,
  citiesCovered: 8,
  lessonsRecorded: 500,
  beneficiaries: 50000,
};

// المبادرات
export const initiatives = [
  {
    id: 1,
    name: "مبادرة الخميسات",
    city: "الخميسات",
    description:
      "تجهيز المساجد والدعاة بمدينة الخميسات بالأدوات اللازمة لتسجيل ونشر الدروس",
    status: "مكتملة",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/v1770315539/Khemisset_yaajht.jpg",
    scholars: 1,
    equipment: [
      {
        name: "بطاقة ذاكرة SD",
        nameEn: "SD Memory Card",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.45_1_mnimjv.png",
        price: 300,
        quantity: 1,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 1,
      },
      {
        name: "حامل ثلاثي",
        nameEn: "Tripod",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.49_dx3g8m.png",
        price: 800,
        quantity: 1,
      },
    ],
    collectedAmount: 1300,
  },
  {
    id: 2,
    name: "مبادرة الصخيرات",
    city: "الصخيرات",
    description: "دعم الدعاة والأساتذة في مدينة الصخيرات لنشر العلم الشرعي",
    status: "جارية",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/v1770315691/skhirate_ypznj1.jpg",
    scholars: 2,
    equipment: [
      {
        name: "كاميرا Sony 4K احترافية",
        nameEn: "Sony 4K Professional Camcorder",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
        price: 20000,
        quantity: 2,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 2,
      },
    ],
    collectedAmount: 25000,
  },
  {
    id: 3,
    name: "مبادرة مكناس",
    city: "مكناس",
    description: "تجهيز دعاة مدينة مكناس بأحدث الأدوات التقنية للتصوير والبث",
    status: "مكتملة",
    image: "https://images.unsplash.com/photo-1706793989006-f0238c69f4a2",
    scholars: 5,
    equipment: [
      {
        name: "كاميرا Sony 4K احترافية",
        nameEn: "Sony 4K Professional Camcorder",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
        price: 20000,
        quantity: 5,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 5,
      },
      {
        name: "إضاءة LED احترافية",
        nameEn: "Professional LED Lights",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237902/WhatsApp_Image_2026-02-04_at_21.41.50_skzoec.png",
        price: 2000,
        quantity: 5,
      },
      {
        name: "حامل ثلاثي",
        nameEn: "Tripod",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.49_dx3g8m.png",
        price: 800,
        quantity: 5,
      },
    ],
    collectedAmount: 115000,
  },
  {
    id: 4,
    name: "مبادرة فاس",
    city: "فاس",
    description: "مشروع قادم لدعم الدعاة في العاصمة العلمية فاس",
    status: "جارية",
    image:
      "https://www.vanupied.com/wp-content/uploads/fes-monument-mosquee-karaouiyne-ahmed-magdy.jpg",
    scholars: 4,
    equipment: [
      {
        name: "كاميرا Sony 4K احترافية",
        nameEn: "Sony 4K Professional Camcorder",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
        price: 20000,
        quantity: 4,
      },
      {
        name: "حاسوب",
        nameEn: "Computer",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/e_background_removal/w_400,h_400,c_pad/v1770237901/WhatsApp_Image_2026-02-04_at_21.41.51_1_lubl8d.png",
        price: 4000,
        quantity: 4,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 4,
      },
    ],
    collectedAmount: 45000,
  },
  {
    id: 5,
    name: "مبادرة الرباط",
    city: "الرباط",
    description: "دعم المشايخ والدعاة في العاصمة الرباط بالتجهيزات اللازمة",
    status: "قريباً",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/v1770315913/rabat_gjqwun.jpg",
    scholars: 6,
    equipment: [
      {
        name: "كاميرا Sony 4K احترافية",
        nameEn: "Sony 4K Professional Camcorder",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
        price: 20000,
        quantity: 6,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 6,
      },
      {
        name: "إضاءة LED احترافية",
        nameEn: "Professional LED Lights",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237902/WhatsApp_Image_2026-02-04_at_21.41.50_skzoec.png",
        price: 2000,
        quantity: 6,
      },
    ],
    collectedAmount: 20000,
  },
  {
    id: 6,
    name: "مبادرة طنجة",
    city: "طنجة",
    description: "تجهيز المساجد والدعاة بمدينة طنجة بالأدوات اللازمة للتصوير",
    status: "قريباً",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/v1770316085/tanger_rphg33.jpg",
    scholars: 3,
    equipment: [
      {
        name: "كاميرا Sony 4K احترافية",
        nameEn: "Sony 4K Professional Camcorder",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
        price: 20000,
        quantity: 3,
      },
      {
        name: "ميكروفون مكتبي",
        nameEn: "Desktop Microphone",
        image:
          "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
        price: 200,
        quantity: 3,
      },
    ],
    collectedAmount: 10000,
  },
].map((initiative) => ({
  ...initiative,
  goalAmount: initiative.equipment.reduce(
    (sum, eq) => sum + eq.price * eq.quantity,
    0,
  ),
}));

// المشايخ المدعومون
export const scholars = [
  {
    id: 1,
    name: "الشيخ محمد الأمين",
    city: "مكناس",
    specialty: "العقيدة والفقه",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=2000",
    youtube: "https://youtube.com",
    lessonsCount: 120,
  },
  {
    id: 2,
    name: "الشيخ عبد الرحمن السعيد",
    city: "الخميسات",
    specialty: "التفسير والحديث",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=2000",
    youtube: "https://youtube.com",
    lessonsCount: 85,
  },
  {
    id: 3,
    name: "الشيخ يوسف البركاني",
    city: "الصخيرات",
    specialty: "الفقه المالكي",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=2000",
    youtube: "https://youtube.com",
    lessonsCount: 60,
  },
  {
    id: 4,
    name: "الشيخ أحمد الفاسي",
    city: "فاس",
    specialty: "علوم القرآن",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=2000",
    youtube: "https://youtube.com",
    lessonsCount: 95,
  },
  {
    id: 5,
    name: "الشيخ إبراهيم المكناسي",
    city: "مكناس",
    specialty: "السيرة النبوية",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=2000",
    youtube: "https://youtube.com",
    lessonsCount: 70,
  },
];

// الأخبار
export const news = [
  {
    id: 1,
    title: "إطلاق مبادرة جديدة في مدينة فاس",
    date: "2026-01-05",
    summary:
      "تستعد جمعية الرحمة لإطلاق مبادرة جديدة لدعم الدعاة في مدينة فاس العريقة",
    image:
      "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
  {
    id: 2,
    title: "اكتمال تجهيز 5 مشايخ في مكناس",
    date: "2025-12-20",
    summary:
      "بفضل الله ثم بفضل تبرعاتكم، تم تجهيز 5 مشايخ في مدينة مكناس بالكامل",
    image:
      "https://images.pexels.com/photos/3753994/pexels-photo-3753994.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
  {
    id: 3,
    title: "تقرير الشفافية السنوي 2025",
    date: "2025-12-15",
    summary: "نشر التقرير السنوي للشفافية والمحاسبة لعام 2025",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: "تفاصيل الخبر الكاملة...",
  },
];

// الدروس (مكتبة الدروس)
export const lessons = [
  {
    id: 1,
    title: "شرح كتاب التوحيد - الدرس الأول",
    scholar: "الشيخ محمد الأمين",
    category: "العقيدة",
    youtubeUrl: "https://www.youtube.com/embed/RXSOtxpmn10",
    duration: "45:30",
    date: "2025-12-01",
  },
  {
    id: 2,
    title: "تفسير سورة الفاتحة",
    scholar: "الشيخ عبد الرحمن السعيد",
    category: "التفسير",
    youtubeUrl: "https://www.youtube.com/embed/RXSOtxpmn10",
    duration: "60:00",
    date: "2025-11-25",
  },
  {
    id: 3,
    title: "أحكام الصلاة في المذهب المالكي",
    scholar: "الشيخ يوسف البركاني",
    category: "الفقه",
    youtubeUrl: "https://www.youtube.com/embed/RXSOtxpmn10",
    duration: "55:20",
    date: "2025-11-20",
  },
  {
    id: 4,
    title: "السيرة النبوية - المرحلة المكية",
    scholar: "الشيخ إبراهيم المكناسي",
    category: "السيرة",
    youtubeUrl: "https://www.youtube.com/embed/RXSOtxpmn10",
    duration: "70:00",
    date: "2025-11-15",
  },
];

// الشهادات والتزكيات
export const testimonials = [
  {
    id: 1,
    name: "الشيخ محمد الأمين",
    role: "داعية مدعوم",
    text: "بفضل الله ثم بفضل جمعية الرحمة، أصبح بإمكاني نشر دروسي لآلاف المسلمين عبر الإنترنت. جزاهم الله خيراً على هذا العمل المبارك.",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=200",
  },
  {
    id: 2,
    name: "أحمد المتبرع",
    role: "متبرع منتظم",
    text: "أشعر بالفخر لمساهمتي في هذا المشروع العظيم. الشفافية والأمانة التي تتمتع بها الجمعية تجعلني أثق في وصول تبرعاتي.",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=200",
  },
  {
    id: 3,
    name: "فاطمة الزهراء",
    role: "مستفيدة",
    text: "استفدت كثيراً من الدروس المنشورة. أصبح العلم الشرعي متاحاً للجميع بفضل هذه الجهود المباركة.",
    image:
      "https://img.freepik.com/premium-photo/islamic-wisdom-scholars-manuscripts-sacred-library_945665-245.jpg?w=200",
  },
];

// الأسئلة الشائعة
export const faqItems = [
  {
    id: 1,
    question: "ما هي جمعية الرحمة؟",
    answer:
      "جمعية الرحمة هي جمعية خيرية مغربية تهدف إلى نشر العلم الشرعي الصحيح عبر دعم الدعاة والأساتذة الثقات وتوفير وسائل التصوير والبث.",
  },
  {
    id: 2,
    question: "كيف يمكنني التبرع للجمعية؟",
    answer:
      "يمكنك التبرع عبر التحويل البنكي باستخدام معلومات الحساب الموجودة في صفحة 'ساهم معنا'.",
  },
  {
    id: 3,
    question: "هل تبرعاتي تصل كاملة للمستفيدين؟",
    answer:
      "نعم، نحرص على الشفافية الكاملة. جميع التبرعات توجه مباشرة لدعم المشايخ وتوفير الأدوات. يمكنك الاطلاع على تقاريرنا المالية في صفحة الشفافية.",
  },
  {
    id: 4,
    question: "كيف يمكن للشيخ أن يطلب الدعم؟",
    answer:
      "يمكن للمشايخ والدعاة تقديم طلب دعم عبر النموذج الموجود في صفحة 'تواصل معنا'. سنتواصل معهم لدراسة الطلب.",
  },
  {
    id: 5,
    question: "ما هي المدن التي تغطيها الجمعية؟",
    answer:
      "حالياً نغطي: مكناس، الخميسات، الصخيرات، وقريباً فاس. هدفنا تغطية جميع مدن المغرب.",
  },
  {
    id: 6,
    question: "هل يمكنني التطوع مع الجمعية؟",
    answer:
      "نعم! نرحب بالمتطوعين. تواصل معنا عبر صفحة 'تواصل معنا' وأخبرنا بمهاراتك وكيف يمكنك المساعدة.",
  },
];

// حملة فلسطين
export const palestineCampaign = {
  title: "حملة نصرة فلسطين وغزة",
  subtitle: "لن ننساكم يا غزة",
  description:
    "حملة إنسانية لدعم إخواننا في فلسطين وغزة المحاصرة. ساهم معنا في تخفيف معاناتهم.",
  goalAmount: 500000,
  currentAmount: 320000,
  image:
    "https://wallpapercave.com/wp/wp2875215.jpg?auto=compress&cs=tinysrgb&w=800",
  updates: [
    "تم إرسال الدفعة الأولى من المساعدات",
    "التنسيق مع الجمعيات الشريكة في غزة",
    "استمرار جمع التبرعات",
  ],
};

// التقارير المالية
export const financialReports = [
  {
    id: 1,
    year: 2025,
    quarter: "الربع الرابع",
    totalDonations: 450000,
    totalExpenses: 420000,
    beneficiaries: 12,
    downloadUrl: "#",
  },
  {
    id: 2,
    year: 2025,
    quarter: "الربع الثالث",
    totalDonations: 380000,
    totalExpenses: 350000,
    beneficiaries: 10,
    downloadUrl: "#",
  },
  {
    id: 3,
    year: 2025,
    quarter: "الربع الثاني",
    totalDonations: 320000,
    totalExpenses: 300000,
    beneficiaries: 8,
    downloadUrl: "#",
  },
];

// المدن المدعومة (للخريطة)
export const supportedCities = [
  {
    id: 1,
    name: "مكناس",
    lat: 33.8935,
    lng: -5.5473,
    scholars: 5,
    status: "active",
  },
  {
    id: 2,
    name: "الخميسات",
    lat: 33.8167,
    lng: -6.0667,
    scholars: 3,
    status: "active",
  },
  {
    id: 3,
    name: "الصخيرات",
    lat: 33.85,
    lng: -7.1167,
    scholars: 2,
    status: "active",
  },
  {
    id: 4,
    name: "فاس",
    lat: 34.0331,
    lng: -5.0003,
    scholars: 0,
    status: "upcoming",
  },
  {
    id: 5,
    name: "الرباط",
    lat: 34.0209,
    lng: -6.8416,
    scholars: 0,
    status: "upcoming",
  },
  {
    id: 6,
    name: "الدار البيضاء",
    lat: 33.5731,
    lng: -7.5898,
    scholars: 0,
    status: "planned",
  },
  {
    id: 7,
    name: "مراكش",
    lat: 31.6295,
    lng: -7.9811,
    scholars: 0,
    status: "planned",
  },
  {
    id: 8,
    name: "طنجة",
    lat: 35.7595,
    lng: -5.834,
    scholars: 0,
    status: "planned",
  },
];

// كتالوج الأجهزة والمعدات
export const equipmentCatalog = [
  {
    id: 1,
    name: "كابل USB",
    nameEn: "USB Cable",
    price: 50,
    priceNote: "النوع الأفضل: 100 د",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237902/WhatsApp_Image_2026-02-04_at_21.41.48_vtvzow.png",
    description: "لنقل البيانات",
  },
  {
    id: 2,
    name: "كاميرا Sony Alpha رقمية",
    nameEn: "Sony Alpha Digital Camera",
    price: 4000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.48_phuk3j.png",
    description: "كاميرا رقمية متطورة للتصوير",
  },
  {
    id: 3,
    name: "موزع HDMI",
    nameEn: "HDMI Splitter",
    price: 4000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770308918/WhatsApp_Image_2026-02-04_at_21.41.47_huf8sj.png",
    description: "لتوزيع الإشارة على عدة شاشات",
  },
  {
    id: 4,
    name: "إضاءة LED احترافية",
    nameEn: "Professional LED Lights",
    price: 20000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237902/WhatsApp_Image_2026-02-04_at_21.41.50_skzoec.png",
    description: "إضاءة مثالية للتصوير",
  },
  {
    id: 5,
    name: "ميكروفون لاسلكي DJI",
    nameEn: "DJI Wireless Microphone",
    price: 4000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237904/WhatsApp_Image_2026-02-04_at_21.41.52_1_ctmn9x.png",
    description: "لتسجيل صوت نقي بدون أسلاك",
  },
  {
    id: 6,
    name: "حامل ثلاثي القوائم",
    nameEn: "Camera Tripod",
    price: 300,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.49_dx3g8m.png",
    description: "لتثبيت الكاميرا",
  },
  {
    id: 7,
    name: "جهاز التقاط فيديو HDMI",
    nameEn: "HDMI Video Capture Device",
    price: 1000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/e_background_removal/w_400,h_400/v1770237912/WhatsApp_Image_2026-02-04_at_21.41.52_ok4mkr.png",
    description: "لنقل الفيديو للحاسوب",
  },
  {
    id: 8,
    name: "قرص صلب خارجي",
    nameEn: "External Hard Drive",
    price: 1000,
    priceNote: "يختلف السعر حسب الحجم والجودة",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_450,h_400,c_pad/v1770237906/WhatsApp_Image_2026-02-04_at_21.41.51_fgb5i8.png",
    description: "لحفظ وأرشفة الدروس",
  },
  {
    id: 9,
    name: "كابل HDMI",
    nameEn: "HDMI Cable",
    price: 50,
    priceNote: "النوع الأفضل: 200 د",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.46_eqvmzj.png",
    description: "لتوصيل الأجهزة",
  },
  {
    id: 10,
    name: "بطاقة ذاكرة SD",
    nameEn: "SD Memory Card",
    price: 300,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.45_1_mnimjv.png",
    description: "لتخزين الفيديوهات",
  },
  {
    id: 11,
    name: "ميكروفون مكتبي",
    nameEn: "Desktop Microphone",
    price: 200,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
    description: "للتسجيل الصوتي",
  },
  {
    id: 12,
    name: "كاميرا Sony 4K احترافية",
    nameEn: "Sony 4K Professional Camcorder",
    price: 20000,
    priceNote: "جديدة أو مستعملة",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
    description: "لتصوير احترافي بدقة 4K",
  },
  {
    id: 13,
    name: "حاسوب",
    nameEn: "Computer",
    price: 4000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/e_background_removal/w_400,h_400,c_pad/v1770237901/WhatsApp_Image_2026-02-04_at_21.41.51_1_lubl8d.png",
    description: "لمونتاج وتحرير الفيديوهات",
  },
];

// الأجهزة المميزة (للعرض في الصفحة الرئيسية)
export const featuredEquipment = [
  {
    id: 1,
    name: "كاميرا Sony 4K احترافية",
    nameEn: "Sony 4K Professional Camcorder",
    price: 20000,
    priceNote: "جديدة أو مستعملة",
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237898/WhatsApp_Image_2026-02-03_at_23.31.46_pzlmrj.png",
    description: "لتصوير احترافي بدقة 4K",
  },
  {
    id: 2,
    name: "إضاءة LED احترافية",
    nameEn: "Professional LED Lights",
    price: 20000,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_400,h_400,c_pad/v1770237902/WhatsApp_Image_2026-02-04_at_21.41.50_skzoec.png",
    description: "إضاءة مثالية للتصوير",
  },
  {
    id: 3,
    name: "ميكروفون مكتبي",
    nameEn: "Desktop Microphone",
    price: 200,
    image:
      "https://res.cloudinary.com/dkusmaiyc/image/upload/w_250,h_250,c_pad/v1770237900/WhatsApp_Image_2026-02-04_at_21.41.43_axbi7n.png",
    description: "للتسجيل الصوتي",
  },
];

// روابط التنقل
export const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "من نحن", path: "/about" },
  { name: "مبادراتنا", path: "/initiatives" },
  { name: "المشايخ", path: "/scholars" },
  { name: "ساهم معنا", path: "/donate" },
  { name: "حملة فلسطين", path: "/palestine" },
  { name: "الشفافية", path: "/transparency" },
  { name: "الأخبار", path: "/news" },
  { name: "مكتبة الدروس", path: "/lessons" },
  { name: "شهادات", path: "/testimonials" },
  { name: "أسئلة شائعة", path: "/faq" },
  { name: "تواصل معنا", path: "/contact" },
];
