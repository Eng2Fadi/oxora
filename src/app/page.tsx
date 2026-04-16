"use client";

import { useEffect, useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const stats = [
  { value: 312, suffix: "%", label: "نمو متوسط في الـ impressions" },
  { value: 87, suffix: "", label: "منشور يمكن إنشاؤه شهريًا" },
  { value: 4.2, suffix: "×", label: "تحسن في معدل التفاعل" },
  { value: 2, suffix: "د", label: "دقيقة للإعداد الكامل" },
];

const modules = [
  {
    icon: "✍️",
    title: "توليد المحتوى بالذكاء الاصطناعي",
    desc: "أنشئ منشورات LinkedIn احترافية بصوتك أنت، مع تحكم أفضل في النبرة والوضوح والـ CTA.",
    tag: "Claude + GPT",
  },
  {
    icon: "🪝",
    title: "مولد Hooks عالية الجذب",
    desc: "ابدأ كل منشور بصيغة أقوى، مبنية على أنماط أثبتت فعاليتها في رفع القراءة والتفاعل.",
    tag: "Hook Engine",
  },
  {
    icon: "💡",
    title: "مولد أفكار محتوى",
    desc: "تجاوز الجفاف الإبداعي. أدخل مجالك وتحديات جمهورك لتحصل على أفكار قابلة للنشر فورًا.",
    tag: "Ideas Engine",
  },
  {
    icon: "📈",
    title: "تحسين المنشورات",
    desc: "أرسل أي نص وسنحلله لنقترح تحسينات على الوضوح، الإقناع، وطريقة العرض.",
    tag: "AI Improve",
  },
  {
    icon: "📊",
    title: "لوحة تحكم وقياس",
    desc: "راقب الاستخدام، النمو، وأداء المحتوى بدل العمل العشوائي بلا أرقام ولا وضوح.",
    tag: "Dashboard",
  },
  {
    icon: "⚡",
    title: "ربط وأتمتة",
    desc: "اربط Oxora مع أدواتك الأخرى وأنشئ workflows تلقائية بدون فوضى تشغيلية.",
    tag: "Webhooks",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "هل Oxora مناسب إذا لم أكن خبيرًا في التسويق؟",
    a: "نعم. الفكرة الأساسية في Oxora هي تقليل التعقيد، لا زيادته. أنت تحدد الهدف والجمهور، والنظام يساعدك في التنفيذ والتحسين.",
  },
  {
    q: "هل المحتوى الناتج يبدو آليًا؟",
    a: "ليس إذا استُخدم بشكل صحيح. النظام يمنحك نقطة انطلاق قوية قابلة للتخصيص، وليس نصوصًا جامدة بلا شخصية.",
  },
  {
    q: "ما الفرق بين Oxora وأي أداة AI عامة؟",
    a: "الأدوات العامة تكتب نصًا. Oxora مبني حول حالة استخدام محددة: نمو LinkedIn، من الفكرة إلى الـ hook إلى التحسين والقياس.",
  },
  {
    q: "هل يمكنني الإلغاء في أي وقت؟",
    a: "نعم. لا يوجد التزام طويل. يمكنك الإلغاء أو الترقية حسب احتياجك الفعلي.",
  },
  {
    q: "هل يدعم العربية؟",
    a: "نعم. الواجهة والمحتوى موجهان بشكل واضح للمستخدم العربي والإنجليزي معًا.",
  },
];

function useAnimatedNumbers(targets: typeof stats) {
  const [values, setValues] = useState(targets.map(() => 0));

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(
        targets.map((item) => {
          const raw = item.value * eased;
          return item.value % 1 !== 0 ? Number(raw.toFixed(1)) : Math.round(raw);
        })
      );

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [targets]);

  return values;
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const animatedValues = useAnimatedNumbers(stats);

  const logoItems = useMemo(
    () => [
      "LinkedIn",
      "Claude",
      "OpenAI",
      "Next.js",
      "Stripe",
      "Clerk",
      "Supabase",
      "n8n",
      "Make",
      "Upwork",
      "Fiverr",
    ],
    []
  );

  return (
    <>
      <main className="oxora-page">
        <nav className="ox-nav">
          <div className="ox-shell ox-nav-inner">
            <a href="#hero" className="ox-logo">
              Oxora<span>™</span>
            </a>

            <div className={`ox-nav-links ${mobileOpen ? "open" : ""}`}>
              <a href="#modules" onClick={() => setMobileOpen(false)}>المنتج</a>
              <a href="#how" onClick={() => setMobileOpen(false)}>كيف يعمل</a>
              <a href="#arch" onClick={() => setMobileOpen(false)}>التقنية</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>الأسعار</a>
              <a href="#faq" onClick={() => setMobileOpen(false)}>الأسئلة</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>تواصل</a>
            </div>

            <div className="ox-nav-actions">
              <a href="/dashboard" className="ox-btn ox-btn-ghost">
                تسجيل الدخول
              </a>
              <a href="#pricing" className="ox-btn ox-btn-primary">
                ابدأ مجانًا
              </a>
              <button
                className="ox-hamburger"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="القائمة"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>

        <section id="hero" className="ox-hero">
          <div className="ox-shell">
            <div className="ox-badge-row">
              <span className="ox-eyebrow">AI × LinkedIn Automation</span>
              <span className="ox-tag">Beta مفتوح</span>
            </div>

            <h1 className="ox-hero-title">
              <span className="ox-glow">Oxora</span> يحوّل LinkedIn
              <br />
              إلى ماكينة نمو حقيقية
            </h1>

            <p className="ox-hero-desc">
              لا مجرد كتابة محتوى، بل نظام تنفيذ يجمع الذكاء الاصطناعي،
              القياس، والتحسين المستمر داخل منصة واحدة. اكتب، اجذب، وحوّل
              العلاقات إلى فرص.
            </p>

            <div className="ox-hero-actions">
              <a href="#pricing" className="ox-btn ox-btn-primary">
                ابدأ تجربتك المجانية →
              </a>
              <a href="#how" className="ox-btn ox-btn-secondary">
                كيف يعمل؟
              </a>
            </div>

            <div className="ox-hero-meta">
              <span><i /> بدون بطاقة ائتمان</span>
              <span><i /> إعداد في دقيقتين</span>
              <span><i /> دعم عربي كامل</span>
            </div>

            <div className="ox-mockup">
              <div className="ox-mockup-bar">
                <div className="ox-mockup-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ox-mockup-url">app.oxora.ai/dashboard</div>
              </div>

              <div className="ox-mockup-body">
                <div className="ox-stat-box">
                  <div className="val">+312%</div>
                  <div className="lbl">نمو Impressions</div>
                </div>
                <div className="ox-stat-box">
                  <div className="val">87</div>
                  <div className="lbl">منشور مُنشأ</div>
                </div>
                <div className="ox-stat-box">
                  <div className="val">4.2×</div>
                  <div className="lbl">معدل التفاعل</div>
                </div>

                <div className="ox-chart">
                  {[35, 52, 42, 65, 58, 80, 72, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="ox-bar"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ox-logos">
          <div className="ox-shell">
            <div className="ox-logos-label">يعتمده محترفون على</div>
            <div className="ox-logos-track">
              {[...logoItems, ...logoItems].map((item, i) => (
                <span className="ox-logo-item" key={`${item}-${i}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="ox-stats">
          <div className="ox-shell">
            <div className="ox-stats-grid">
              {stats.map((item, i) => (
                <div className="ox-stat-item" key={item.label}>
                  <div className="number">
                    {animatedValues[i]}
                    {item.suffix}
                  </div>
                  <div className="label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="ox-section">
          <div className="ox-shell">
            <div className="ox-section-head">
              <span className="ox-eyebrow">وحدات المنتج</span>
              <h2>
                كل ما تحتاجه
                <br />
                في نظام واحد
              </h2>
              <p>
                لا تبعثر بين أدوات منفصلة. Oxora يجمع التوليد، التحسين،
                القياس، والأتمتة داخل تجربة واحدة أوضح وأسهل.
              </p>
            </div>

            <div className="ox-modules-grid">
              {modules.map((item) => (
                <div className="ox-card ox-module-card" key={item.title}>
                  <div className="ox-module-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="ox-tag">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="ox-section ox-section-alt">
          <div className="ox-shell">
            <div className="ox-section-head">
              <span className="ox-eyebrow">كيف يعمل</span>
              <h2>
                من الفكرة إلى المنشور
                <br />
                في خطوات بسيطة
              </h2>
            </div>

            <div className="ox-steps">
              {[
                ["١", "أنشئ حسابك", "سجّل خلال ثوانٍ وابدأ مباشرة بدون تعقيد إعدادات أو خطوات مرهقة."],
                ["٢", "حدّد مجالك وأسلوبك", "أخبر النظام عن جمهورك ونبرة صوتك حتى تصبح النتائج أقرب لأسلوبك الحقيقي."],
                ["٣", "ولّد واختر", "أنشئ أفكارًا، hooks، ومنشورات جاهزة للتطوير والنشر بدل البدء من صفحة فارغة."],
                ["٤", "انشر وتتبع النتائج", "راقب الأداء، قارن النتائج، ثم حسّن المحتوى بناءً على بيانات لا تخمين."],
              ].map(([n, t, d]) => (
                <div className="ox-step" key={n}>
                  <div className="ox-step-num">{n}</div>
                  <div className="ox-step-content">
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="arch" className="ox-section">
          <div className="ox-shell ox-arch-grid">
            <div className="ox-arch-left">
              <span className="ox-eyebrow">العمارة التقنية</span>
              <h2>
                بُني بالأدوات الصحيحة
                <br />
                للمشاريع الجدية
              </h2>
              <p>
                كل طبقة هنا تخدم هدفًا واضحًا: منتج خفيف، قابل للتوسع، ومناسب
                للنمو الحقيقي بدل الفوضى التقنية المعتادة.
              </p>
              <a href="#pricing" className="ox-btn ox-btn-primary">
                ابدأ الآن
              </a>
            </div>

            <div className="ox-stack">
              {[
                ["⚡", "Next.js 14", "واجهة حديثة وسريعة", "Core"],
                ["🔐", "Clerk Auth", "إدارة المستخدمين والجلسات", "Core"],
                ["🗄️", "Supabase", "قاعدة بيانات + تخزين", "Core"],
                ["💳", "Stripe Billing", "اشتراكات ومدفوعات", "Core"],
                ["🤖", "Claude / OpenAI", "توليد المحتوى", "Optional"],
                ["🔗", "n8n / Make", "ربط وأتمتة workflows", "Optional"],
              ].map(([icon, title, desc, kind]) => (
                <div className="ox-stack-item" key={title}>
                  <span className="icon">{icon}</span>
                  <div className="info">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                  <span className={`badge ${kind === "Core" ? "core" : "opt"}`}>
                    {kind}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="ox-section">
          <div className="ox-shell">
            <div className="ox-section-head">
              <span className="ox-eyebrow">الأسعار</span>
              <h2>
                خطط بسيطة
                <br />
                مع مسار ترقية منطقي
              </h2>
              <p>ابدأ مجانًا، وسّع مع نموك، وانتقل لخطة فريقك عندما تحتاج.</p>
            </div>

            <div className="ox-pricing-grid">
              <div className="ox-card ox-price-card">
                <div className="name">Starter</div>
                <div className="note">مثالي للمبتدئين</div>
                <div className="price">
                  <sup>$</sup>0
                </div>
                <div className="period">مجانًا للأبد</div>
                <ul>
                  <li>15 منشور / شهر</li>
                  <li>توليد محتوى أساسي</li>
                  <li>5 hooks يوميًا</li>
                  <li>لوحة تحكم أساسية</li>
                  <li>دعم بالبريد</li>
                </ul>
                <a href="#" className="ox-btn ox-btn-secondary full">
                  ابدأ مجانًا
                </a>
              </div>

              <div className="ox-card ox-price-card popular">
                <div className="plan-badge">الخيار الأفضل</div>
                <div className="name">Pro</div>
                <div className="note">للمحترفين الجادين</div>
                <div className="price">
                  <sup>$</sup>29
                </div>
                <div className="period">/ شهريًا</div>
                <ul>
                  <li>منشورات غير محدودة</li>
                  <li>جميع وحدات المنتج</li>
                  <li>hooks غير محدودة</li>
                  <li>تحليلات متقدمة</li>
                  <li>دعم أولوي</li>
                </ul>
                <a href="#" className="ox-btn ox-btn-primary full">
                  ابدأ Pro →
                </a>
              </div>

              <div className="ox-card ox-price-card">
                <div className="name">Team</div>
                <div className="note">للشركات وفرق المحتوى</div>
                <div className="price custom">Custom</div>
                <div className="period">حسب الاحتياج</div>
                <ul>
                  <li>كل مزايا Pro</li>
                  <li>أعضاء فريق متعددون</li>
                  <li>Webhooks مخصصة</li>
                  <li>تكاملات أوسع</li>
                  <li>Onboarding مخصص</li>
                </ul>
                <a href="#contact" className="ox-btn ox-btn-secondary full">
                  تواصل معنا
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="ox-section ox-section-alt">
          <div className="ox-shell">
            <div className="ox-section-head">
              <span className="ox-eyebrow">أسئلة شائعة</span>
              <h2>لديك سؤال؟</h2>
            </div>

            <div className="ox-faq-list">
              {faqItems.map((item, i) => (
                <div
                  key={item.q}
                  className={`ox-faq-item ${openFaq === i ? "open" : ""}`}
                >
                  <button
                    className="ox-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="arrow">▾</span>
                  </button>
                  <div className="ox-faq-a">
                    <div>{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="ox-section">
          <div className="ox-shell ox-contact-grid">
            <div>
              <span className="ox-eyebrow">تواصل</span>
              <h2 className="ox-contact-title">
                تحتاج خطة Team
                <br />
                أو تخصيصًا خاصًا؟
              </h2>
              <p className="ox-contact-text">
                إذا كنت تحتاج تكاملات أو workflows خاصة أو تجربة مخصصة لفريقك،
                تواصل معنا مباشرة.
              </p>

              <div className="ox-card ox-contact-info">
                <div>
                  <small>البريد الإلكتروني</small>
                  <strong>hello@oxora.ai</strong>
                </div>
                <div>
                  <small>المنطقة</small>
                  <strong>Middle East & North Africa</strong>
                </div>
                <div>
                  <small>وقت الاستجابة</small>
                  <strong>خلال 24 ساعة عمل</strong>
                </div>
              </div>
            </div>

            <div className="ox-card ox-form-card">
              <h3>أرسل طلبك</h3>
              <div className="ox-form-grid">
                <label>
                  <span>الاسم الكامل</span>
                  <input placeholder="اسمك" />
                </label>
                <label>
                  <span>البريد الإلكتروني</span>
                  <input type="email" placeholder="name@company.com" />
                </label>
                <label>
                  <span>الرسالة</span>
                  <textarea rows={5} placeholder="اشرح ما تحتاجه" />
                </label>
                <button className="ox-btn ox-btn-primary full">إرسال الطلب</button>
              </div>
            </div>
          </div>
        </section>

        <section className="ox-cta">
          <div className="ox-shell">
            <div className="ox-cta-box">
              <span className="ox-eyebrow">ابدأ اليوم</span>
              <h2>
                LinkedIn يستحق
                <br />
                نظامًا حقيقيًا
              </h2>
              <p>
                لا منشورات عشوائية ولا وعود فارغة. فقط نظام أوضح، أسرع، وأكثر
                قابلية للقياس.
              </p>

              <div className="ox-cta-actions">
                <a href="#pricing" className="ox-btn ox-btn-primary">
                  ابدأ مجانًا — لا بطاقة مطلوبة
                </a>
                <a href="#contact" className="ox-btn ox-btn-secondary">
                  تحدث مع الفريق
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="ox-footer">
          <div className="ox-shell">
            <div className="ox-footer-grid">
              <div>
                <a href="#hero" className="ox-logo">Oxora</a>
                <p className="ox-footer-brand">
                  نظام AI لنمو LinkedIn — لا ضجيج، لا وعود فارغة، فقط نتائج
                  قابلة للقياس.
                </p>
              </div>

              <div>
                <h4>المنتج</h4>
                <a href="#modules">الوحدات</a>
                <a href="#how">كيف يعمل</a>
                <a href="#arch">التقنية</a>
                <a href="#pricing">الأسعار</a>
              </div>

              <div>
                <h4>الشركة</h4>
                <a href="#faq">الأسئلة</a>
                <a href="#contact">تواصل</a>
                <a href="#">عن Oxora</a>
                <a href="#">المقالات</a>
              </div>

              <div>
                <h4>قانوني</h4>
                <a href="#">سياسة الخصوصية</a>
                <a href="#">شروط الاستخدام</a>
                <a href="#">سياسة الإلغاء</a>
              </div>
            </div>

            <div className="ox-footer-bottom">
              <span>© 2025 Oxora. جميع الحقوق محفوظة.</span>
              <span>صُنع باهتمام للمحترفين العرب على LinkedIn</span>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050d1a;
          color: #f8fafc;
          font-family: Arial, sans-serif;
          direction: rtl;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 15% 15%, rgba(110, 168, 254, 0.14), transparent),
            radial-gradient(ellipse 60% 40% at 85% 5%, rgba(139, 92, 246, 0.12), transparent),
            radial-gradient(ellipse 50% 60% at 50% 90%, rgba(34, 211, 238, 0.07), transparent);
          pointer-events: none;
          z-index: 0;
        }

        .oxora-page {
          position: relative;
          z-index: 1;
        }

        .ox-shell {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        .ox-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          transition: 0.25s ease;
        }

        .ox-card:hover {
          border-color: rgba(110, 168, 254, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(110, 168, 254, 0.06);
        }

        .ox-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: 0.25s ease;
          white-space: nowrap;
        }

        .ox-btn:hover {
          transform: translateY(-2px);
        }

        .ox-btn-primary {
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          color: #fff;
          box-shadow: 0 12px 32px rgba(110, 168, 254, 0.28);
        }

        .ox-btn-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-btn-ghost {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-btn.full {
          width: 100%;
        }

        .ox-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #cbd5e1;
        }

        .ox-eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          box-shadow: 0 0 12px rgba(110, 168, 254, 0.8);
        }

        .ox-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(110, 168, 254, 0.12);
          color: #6ea8fe;
          border: 1px solid rgba(110, 168, 254, 0.2);
        }

        .ox-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 13, 26, 0.7);
          backdrop-filter: blur(20px);
        }

        .ox-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .ox-logo {
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ox-logo span {
          font-size: 0.65rem;
          vertical-align: super;
        }

        .ox-nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ox-nav-links a {
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 0.88rem;
          color: #94a3b8;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .ox-nav-links a:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.03);
        }

        .ox-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ox-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 8px 10px;
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .ox-hero {
          padding: 110px 0 80px;
          text-align: center;
        }

        .ox-badge-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .ox-hero-title {
          font-size: clamp(2.6rem, 6vw, 5.2rem);
          line-height: 1.07;
          letter-spacing: -0.04em;
          margin: 0 auto 22px;
          max-width: 820px;
          font-weight: 800;
        }

        .ox-glow {
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ox-hero-desc {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: #94a3b8;
          max-width: 620px;
          margin: 0 auto 36px;
          line-height: 1.8;
        }

        .ox-hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 42px;
        }

        .ox-hero-meta {
          display: flex;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
          color: #94a3b8;
          font-size: 0.82rem;
        }

        .ox-hero-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ox-hero-meta i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22d3ee;
          display: inline-block;
        }

        .ox-mockup {
          max-width: 820px;
          margin: 56px auto 0;
          position: relative;
        }

        .ox-mockup::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          opacity: 0.22;
          filter: blur(20px);
          z-index: -1;
        }

        .ox-mockup-bar {
          background: rgba(8, 20, 35, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px 20px 0 0;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ox-mockup-dots {
          display: flex;
          gap: 6px;
        }

        .ox-mockup-dots span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .ox-mockup-dots span:nth-child(1) {
          background: #ff5f57;
        }

        .ox-mockup-dots span:nth-child(2) {
          background: #ffbd2e;
        }

        .ox-mockup-dots span:nth-child(3) {
          background: #28c840;
        }

        .ox-mockup-url {
          flex: 1;
          text-align: center;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .ox-mockup-body {
          background: rgba(6, 16, 29, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-top: 0;
          border-radius: 0 0 20px 20px;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }

        .ox-stat-box {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        .ox-stat-box .val {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ox-stat-box .lbl {
          font-size: 0.72rem;
          color: #94a3b8;
          margin-top: 4px;
        }

        .ox-chart {
          grid-column: 1 / -1;
          height: 90px;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .ox-bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          opacity: 0.78;
          animation: barGrow 0.8s ease forwards;
          transform-origin: bottom;
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        .ox-logos {
          padding: 32px 0;
          border-block: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .ox-logos-label {
          text-align: center;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 18px;
          letter-spacing: 0.1em;
        }

        .ox-logos-track {
          display: flex;
          gap: 48px;
          white-space: nowrap;
          width: max-content;
          animation: oxMarquee 22s linear infinite;
        }

        .ox-logo-item {
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.28);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        @keyframes oxMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ox-section {
          padding: 88px 0;
        }

        .ox-section-alt {
          background: rgba(255, 255, 255, 0.012);
          border-block: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-section-head {
          text-align: center;
          margin-bottom: 56px;
        }

        .ox-section-head h2 {
          font-size: clamp(2rem, 4vw, 3.4rem);
          margin: 14px 0 0;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .ox-section-head p {
          margin: 16px auto 0;
          color: #94a3b8;
          font-size: 1.05rem;
          max-width: 560px;
          line-height: 1.75;
        }

        .ox-stats {
          padding: 60px 0;
          background: linear-gradient(90deg, rgba(110, 168, 254, 0.05), rgba(139, 92, 246, 0.05));
          border-block: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }

        .ox-stat-item .number {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .ox-stat-item .label {
          color: #94a3b8;
          font-size: 0.85rem;
          margin-top: 6px;
        }

        .ox-modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 20px;
        }

        .ox-module-card {
          padding: 28px 26px;
        }

        .ox-module-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 18px;
          box-shadow: 0 8px 24px rgba(110, 168, 254, 0.2);
        }

        .ox-module-card h3 {
          font-size: 1.18rem;
          margin: 0 0 10px;
        }

        .ox-module-card p {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.8;
          margin: 0 0 16px;
        }

        .ox-steps {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
        }

        .ox-steps::before {
          content: "";
          position: absolute;
          right: 22px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #6ea8fe, #8b5cf6, transparent);
          opacity: 0.3;
        }

        .ox-step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-step:last-child {
          border-bottom: 0;
        }

        .ox-step-num {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 800;
          box-shadow: 0 4px 18px rgba(110, 168, 254, 0.25);
        }

        .ox-step-content h3 {
          margin: 0 0 6px;
          font-size: 1.1rem;
        }

        .ox-step-content p {
          margin: 0;
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .ox-arch-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .ox-arch-left h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 1.1;
          margin: 14px 0 18px;
        }

        .ox-arch-left p {
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .ox-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ox-stack-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          transition: 0.25s ease;
        }

        .ox-stack-item:hover {
          border-color: rgba(110, 168, 254, 0.25);
          background: rgba(110, 168, 254, 0.04);
        }

        .ox-stack-item .icon {
          font-size: 1.3rem;
        }

        .ox-stack-item .info h4 {
          margin: 0;
          font-size: 0.92rem;
        }

        .ox-stack-item .info p {
          margin: 2px 0 0;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        .ox-stack-item .badge {
          margin-right: auto;
          font-size: 0.65rem;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 700;
        }

        .ox-stack-item .badge.core {
          background: rgba(110, 168, 254, 0.12);
          color: #6ea8fe;
        }

        .ox-stack-item .badge.opt {
          background: rgba(139, 92, 246, 0.12);
          color: #a78bfa;
        }

        .ox-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }

        .ox-price-card {
          padding: 28px 26px;
          position: relative;
          overflow: hidden;
        }

        .ox-price-card.popular {
          border-color: rgba(110, 168, 254, 0.3);
          background: rgba(110, 168, 254, 0.05);
        }

        .ox-price-card .plan-badge {
          display: inline-block;
          margin-bottom: 14px;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          color: #fff;
        }

        .ox-price-card .name {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .ox-price-card .note {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-bottom: 16px;
        }

        .ox-price-card .price {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }

        .ox-price-card .price sup {
          font-size: 1.2rem;
          vertical-align: super;
          opacity: 0.7;
        }

        .ox-price-card .price.custom {
          font-size: 2.2rem;
        }

        .ox-price-card .period {
          color: #94a3b8;
          font-size: 0.78rem;
          margin-bottom: 20px;
        }

        .ox-price-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 26px;
        }

        .ox-price-card li {
          display: flex;
          gap: 10px;
          color: #94a3b8;
          font-size: 0.9rem;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .ox-price-card li::before {
          content: "✓";
          color: #6ea8fe;
          font-weight: 800;
        }

        .ox-faq-list {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ox-faq-item {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
        }

        .ox-faq-q {
          width: 100%;
          text-align: right;
          padding: 18px 22px;
          background: none;
          border: none;
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .ox-faq-q .arrow {
          color: #6ea8fe;
          transition: 0.25s ease;
          flex-shrink: 0;
        }

        .ox-faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.3s ease;
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .ox-faq-item.open .ox-faq-a {
          max-height: 220px;
          padding: 0 22px 18px;
        }

        .ox-faq-item.open .arrow {
          transform: rotate(180deg);
        }

        .ox-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .ox-contact-title {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
          margin: 14px 0 16px;
        }

        .ox-contact-text {
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .ox-contact-info {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ox-contact-info small {
          display: block;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 4px;
        }

        .ox-contact-info strong {
          font-size: 0.95rem;
        }

        .ox-form-card {
          padding: 30px 28px;
        }

        .ox-form-card h3 {
          margin: 0 0 20px;
          font-size: 1.2rem;
        }

        .ox-form-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ox-form-grid label span {
          display: block;
          font-size: 0.83rem;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 7px;
        }

        .ox-form-grid input,
        .ox-form-grid textarea {
          width: 100%;
          padding: 11px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: #fff;
          font-size: 0.92rem;
          outline: none;
        }

        .ox-form-grid input:focus,
        .ox-form-grid textarea:focus {
          border-color: rgba(110, 168, 254, 0.45);
        }

        .ox-cta {
          text-align: center;
          padding: 100px 0;
        }

        .ox-cta-box {
          max-width: 700px;
          margin: 0 auto;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(110, 168, 254, 0.2);
          border-radius: 28px;
          position: relative;
          overflow: hidden;
        }

        .ox-cta-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(110, 168, 254, 0.1), transparent);
        }

        .ox-cta-box > * {
          position: relative;
          z-index: 1;
        }

        .ox-cta-box h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin: 14px 0 16px;
          line-height: 1.15;
        }

        .ox-cta-box p {
          color: #94a3b8;
          max-width: 460px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .ox-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ox-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 48px 0 28px;
        }

        .ox-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ox-footer-grid h4 {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0 0 14px;
        }

        .ox-footer-grid a {
          display: block;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.88rem;
          text-decoration: none;
          padding: 5px 0;
        }

        .ox-footer-grid a:hover {
          color: #fff;
        }

        .ox-footer-brand {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-top: 12px;
          line-height: 1.7;
          max-width: 240px;
        }

        .ox-footer-bottom {
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        @media (max-width: 960px) {
          .ox-nav-links {
            display: none;
          }

          .ox-nav-links.open {
            display: flex;
            flex-direction: column;
            position: fixed;
            inset: 0;
            top: 64px;
            background: rgba(5, 13, 26, 0.97);
            padding: 24px 20px;
            gap: 4px;
            z-index: 99;
            backdrop-filter: blur(20px);
          }

          .ox-hamburger {
            display: inline-block;
          }

          .ox-arch-grid,
          .ox-contact-grid {
            grid-template-columns: 1fr;
          }

          .ox-pricing-grid,
          .ox-footer-grid,
          .ox-mockup-body {
            grid-template-columns: 1fr;
          }

          .ox-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ox-nav-actions .ox-btn-ghost {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .ox-section,
          .ox-cta {
            padding: 64px 0;
          }

          .ox-hero {
            padding: 80px 0 56px;
          }

          .ox-hero-title {
            font-size: 2.55rem;
          }

          .ox-cta-box {
            padding: 40px 22px;
          }

          .ox-footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ox-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
