export const brand = {
  name: "Oxora",
  shortName: "Oxora",
  domain: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  email: "eng.fadi990@gmail.com",
  location: "MENA · Remote",
  tagline: "Oxora تبني أنظمة AI automation وتطوير LinkedIn لتحويل الحضور الرقمي إلى قناة توليد عملاء",
  founder: "Eng Fadi"
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/dashboard", label: "اللوحة" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/about", label: "عن Oxora" },
  { href: "/blog", label: "المقالات" },
  { href: "/contact", label: "تواصل" }
];

export const productModules = [
  {
    title: "مولد بوستات LinkedIn",
    desc: "يحوّل الفكرة الخام إلى بوست واضح ومقنع مع CTA منطقي بدل كلام إنشائي.",
    icon: "✍️"
  },
  {
    title: "مولد Hooks",
    desc: "ينتج افتتاحيات متعددة بحسب الهدف: سلطة، فضول، موقف، أو جذب Leads.",
    icon: "🪝"
  },
  {
    title: "مطور البوست",
    desc: "يعيد كتابة البوست الموجود لرفع الوضوح والهيبة وقابلية التفاعل والتحويل.",
    icon: "🛠️"
  },
  {
    title: "مولد أفكار",
    desc: "يبني زوايا محتوى من niche والجمهور والعرض بدل أفكار محفوظة وعشوائية.",
    icon: "💡"
  }
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "$19",
    priceIdEnv: "NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID",
    note: "لفرد يريد استخدامًا محدودًا وتجربة واضحة قبل التوسع.",
    features: ["50 عملية شهريًا", "كل أدوات الكتابة الأساسية", "تتبع استخدام", "محرر لوحة واحد"]
  },
  {
    name: "Pro",
    price: "$49",
    priceIdEnv: "NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID",
    note: "للخبراء والمؤسسين والفرق الصغيرة التي تريد استخدامًا فعليًا ومستمرًا.",
    popular: true,
    features: ["عمليات أكثر وحد أعلى أعلى", "حفظ outputs", "تحسين prompts", "أولوية دعم"]
  },
  {
    name: "Team",
    price: "Custom",
    note: "للشركات والوكالات التي تريد workflow أعمق وتنفيذًا مخصصًا.",
    features: ["عدة أعضاء", "Brand voice مخصص", "حزم usage مخصصة", "إعداد workflow"]
  }
] as const;

export const faqs = [
  {
    q: "هل Oxora مجرد AI writer آخر؟",
    a: "لا يفترض أن يكون كذلك. الهيكل هنا مبني كمنتج LinkedIn Growth Engine مع usage limits وفوترة وقاعدة بيانات، لا كصفحة تسويقية فوق prompt واحد."
  },
  {
    q: "هل هذا مشروع production كامل؟",
    a: "هو scaffold إنتاجي قوي ومربوط معماريًا بـ Clerk وStripe وSupabase وOpenAI، لكنه يحتاج مفاتيحك، جداول Supabase، وأسعار Stripe الحقيقية قبل الإطلاق."
  },
  {
    q: "هل يدعم العربية والإنجليزية؟",
    a: "نعم. تم بناء الرسائل والواجهة بالعربية ويمكن توسيع prompts والواجهة بسهولة لثنائية اللغة."
  }
] as const;

export const blogPosts = [
  {
    slug: "why-ai-automation-needs-positioning",
    title: "لماذا تفشل مشاريع AI automation عندما تبقى بلا تموضع؟",
    excerpt: "الأتمتة وحدها لا تبيع. الذي يبيع هو ربط الأتمتة بمشكلة سوق وبوعد واضح ونتيجة قابلة للتصديق.",
    category: "Automation",
    date: "2026-04-15",
    readTime: "4 min read",
    content: [
      "كثير من مشاريع الأتمتة تسقط لأنها تقدم قدرات تقنية بلا نتيجة تجارية محددة.",
      "عندما تربط الأتمتة بقناة واضحة مثل LinkedIn lead generation، تصبح القيمة مفهومة أسرع.",
      "هذا هو الفرق بين منتج يبدو ذكيًا ومنتج يمكن بيعه فعليًا."
    ]
  },
  {
    slug: "linkedin-development-is-not-posting-more",
    title: "تطوير LinkedIn ليس نشرًا أكثر، بل بناء نظام أقوى",
    excerpt: "النشاط ليس نموًا. النمو يبدأ عندما يخدم المحتوى التموضع والبروفايل والـ CTA معًا.",
    category: "LinkedIn",
    date: "2026-04-14",
    readTime: "5 min read",
    content: [
      "الحساب النشط قد يبقى بلا نتائج لأن الرسالة ضعيفة أو لأن خطوة التحويل غير موجودة.",
      "لذلك نعامل LinkedIn كنظام: أفكار، كتابة، تحسين، وربط مع العرض التجاري.",
      "بدون هذا الترابط، يصبح المحتوى مجرد عمل شكلي متكرر."
    ]
  }
] as const;
