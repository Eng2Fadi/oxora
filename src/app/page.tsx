"use client";

import { useEffect, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const proofStats = [
  { value: 312, suffix: "%", label: "متوسط نمو الوصول" },
  { value: 4.2, suffix: "×", label: "تحسن معدل التفاعل" },
  { value: 87, suffix: "", label: "منشور شهريًا" },
];

const problemPoints = [
  "أفكار تنتهي بسرعة",
  "محتوى لا يجذب التفاعل",
  "لا تعرف ما الذي يعمل فعلًا",
];

const featureCards = [
  {
    icon: "✍️",
    title: "محتوى يعبّر عنك",
    desc: "أنشئ منشورات LinkedIn بصوتك، لا نصوصًا عامة بلا شخصية.",
  },
  {
    icon: "🪝",
    title: "Hooks ترفع التفاعل من أول سطر",
    desc: "ابدأ كل منشور بصيغة أقوى تشد الانتباه وتزيد فرص القراءة والتفاعل.",
  },
  {
    icon: "📈",
    title: "تحسين مبني على بيانات حقيقية",
    desc: "حلّل الأداء وطوّر المحتوى بناءً على نتائج فعلية، لا على تخمينات.",
  },
];

const steps = [
  {
    num: "١",
    title: "حدد مجالك",
    desc: "عرّف جمهورك وأسلوبك حتى تصبح المخرجات أقرب لعلامتك ورسالتك.",
  },
  {
    num: "٢",
    title: "أنشئ المحتوى",
    desc: "ولّد أفكارًا وhooks ومنشورات قابلة للنشر بدل البدء من صفحة فارغة.",
  },
  {
    num: "٣",
    title: "انشر وحسّن",
    desc: "راقب الأداء، ثم حسّن المحتوى بناءً على أرقام حقيقية.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "هل Oxora مناسب إذا لم أكن خبيرًا في LinkedIn؟",
    a: "نعم. الفكرة الأساسية هي تقليل التعقيد وتحويل LinkedIn إلى نظام واضح يمكن تشغيله وتحسينه بسهولة.",
  },
  {
    q: "هل المحتوى الناتج يبدو آليًا؟",
    a: "لا إذا استُخدم بشكل صحيح. Oxora يعطيك نقطة انطلاق قوية قابلة للتخصيص، وليس نصوصًا جامدة بلا شخصية.",
  },
  {
    q: "ما الفرق بين Oxora وأي أداة AI عامة؟",
    a: "الأدوات العامة تكتب نصًا فقط. Oxora مبني خصيصًا لنمو LinkedIn: فكرة، hook، تحسين، وقياس داخل تجربة واحدة.",
  },
  {
    q: "هل يمكنني الإلغاء في أي وقت؟",
    a: "نعم. لا يوجد التزام طويل. يمكنك الإلغاء أو الترقية حسب احتياجك.",
  },
];

function useAnimatedNumbers(
  targets: { value: number; suffix: string; label: string }[]
) {
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
  const animatedValues = useAnimatedNumbers(proofStats);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <main className="ox">
        <nav className="nav">
          <div className="shell navInner">
            <a href="#hero" className="logo">
              Oxora<span>™</span>
            </a>

            <div className="navLinks desktopOnly">
              <a href="#problem">المشكلة</a>
              <a href="#features">المزايا</a>
              <a href="#how">كيف يعمل</a>
              <a href="#pricing">الأسعار</a>
              <a href="#faq">الأسئلة</a>
              <a href="#contact">تواصل</a>
            </div>

            <div className="navActions">
              <a href="/dashboard" className="btn ghost desktopOnly">
                تسجيل الدخول
              </a>
              <a href="#pricing" className="btn primary">
                ابدأ مجانًا
              </a>
              <button
                className="hamburger"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="القائمة"
              >
                {mobileOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobilePanel">
            <div className="mobilePanelInner">
              <a href="#problem" onClick={() => setMobileOpen(false)}>المشكلة</a>
              <a href="#features" onClick={() => setMobileOpen(false)}>المزايا</a>
              <a href="#how" onClick={() => setMobileOpen(false)}>كيف يعمل</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>الأسعار</a>
              <a href="#faq" onClick={() => setMobileOpen(false)}>الأسئلة</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>تواصل</a>
              <a href="/dashboard" onClick={() => setMobileOpen(false)}>تسجيل الدخول</a>
            </div>
          </div>
        )}

        <section id="hero" className="hero">
          <div className="shell heroWrap">
            <div className="heroBadgeRow">
              <span className="eyebrow">AI × LinkedIn Growth</span>
              <span className="tag">Beta مفتوح</span>
            </div>

            <h1 className="heroTitle">
              LinkedIn لا يحتاج ضجيجًا
              <br />
              بل نظامًا <span>يجلب عملاء فعليين</span>
            </h1>

            <p className="heroDesc">
              أنشئ محتوى يجذب الانتباه، وابنِ نظامًا يحول المتابعين إلى فرص
              ومبيعات — بدون تخمين أو عشوائية.
            </p>

            <div className="heroActions">
              <a href="#pricing" className="btn primary large">
                ابدأ مجانًا
              </a>
              <a href="#how" className="btn secondary large">
                شاهد كيف يعمل →
              </a>
            </div>

            <div className="heroMeta">
              <span><i /> بدون بطاقة ائتمان</span>
              <span><i /> ابدأ خلال دقيقتين</span>
              <span><i /> مخصص للمحترفين العرب</span>
            </div>

            <div className="mockup">
              <div className="mockupTop">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mockupUrl">app.oxora.ai/dashboard</div>
              </div>

              <div className="mockupBody">
                <div className="miniCard">
                  <div className="miniVal">+312%</div>
                  <div className="miniLbl">نمو الوصول</div>
                </div>
                <div className="miniCard">
                  <div className="miniVal">87</div>
                  <div className="miniLbl">منشور</div>
                </div>
                <div className="miniCard">
                  <div className="miniVal">4.2×</div>
                  <div className="miniLbl">تفاعل</div>
                </div>

                <div className="chart">
                  {[35, 50, 44, 60, 58, 72, 78, 84, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="bar"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof">
          <div className="shell">
            <div className="sectionHead compact">
              <span className="eyebrow">نتائج أولية</span>
              <h2>نتائج حققها مستخدمو Oxora</h2>
            </div>

            <div className="proofGrid">
              {proofStats.map((item, i) => (
                <div className="card proofCard" key={item.label}>
                  <div className="proofNumber">
                    {animatedValues[i]}
                    {item.suffix}
                  </div>
                  <div className="proofLabel">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problem" className="section sectionAlt">
          <div className="shell">
            <div className="sectionHead">
              <span className="eyebrow">المشكلة</span>
              <h2>المشكلة ليست في LinkedIn</h2>
              <p>بل في غياب نظام واضح يصنع نتائج قابلة للتكرار</p>
            </div>

            <div className="problemGrid">
              {problemPoints.map((item) => (
                <div key={item} className="card problemCard">
                  <span className="problemIcon">✕</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="shell">
            <div className="sectionHead">
              <span className="eyebrow">المزايا الأساسية</span>
              <h2>القيمة ليست في الذكاء الاصطناعي وحده</h2>
              <p>
                Oxora يركز على ما يصنع الفرق فعلًا: محتوى أقوى، hooks أفضل،
                وتحسين مستمر مبني على نتائج قابلة للقياس.
              </p>
            </div>

            <div className="featuresGrid">
              {featureCards.map((item) => (
                <div key={item.title} className="card featureCard">
                  <div className="featureIcon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section sectionAlt">
          <div className="shell">
            <div className="sectionHead">
              <span className="eyebrow">كيف يعمل</span>
              <h2>3 خطوات فقط لتشغيل النظام</h2>
            </div>

            <div className="steps">
              {steps.map((step) => (
                <div key={step.num} className="step">
                  <div className="stepNum">{step.num}</div>
                  <div className="stepContent">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="shell">
            <div className="sectionHead">
              <span className="eyebrow">الأسعار</span>
              <h2>ابدأ بدون مخاطرة</h2>
              <p>
                جرّب Oxora مجانًا، وإذا لم يساعدك في إنتاج محتوى أفضل خلال أسبوع
                — لا تدفع شيئًا.
              </p>
            </div>

            <div className="pricingGrid">
              <div className="card priceCard">
                <div className="planName">Starter</div>
                <div className="planNote">للتجربة والبداية</div>
                <div className="planPrice">
                  <sup>$</sup>0
                </div>
                <div className="planPeriod">مجانًا للأبد</div>
                <ul>
                  <li>15 منشور / شهر</li>
                  <li>توليد أساسي</li>
                  <li>5 hooks يوميًا</li>
                  <li>لوحة بسيطة</li>
                </ul>
                <a href="#" className="btn secondary full">ابدأ مجانًا</a>
              </div>

              <div className="card priceCard featured">
                <div className="planBadge">الخيار الأفضل</div>
                <div className="planName">Pro</div>
                <div className="planNote">للاستخدام الجاد</div>
                <div className="planPrice">
                  <sup>$</sup>29
                </div>
                <div className="planPeriod">/ شهريًا</div>
                <ul>
                  <li>منشورات غير محدودة</li>
                  <li>جميع الوحدات</li>
                  <li>تحسين متقدم</li>
                  <li>تحليلات أوضح</li>
                  <li>دعم أولوي</li>
                </ul>
                <a href="#" className="btn primary full">ابدأ Pro →</a>
              </div>

              <div className="card priceCard">
                <div className="planName">Team</div>
                <div className="planNote">للشركات والفرق</div>
                <div className="planPrice custom">Custom</div>
                <div className="planPeriod">حسب الاحتياج</div>
                <ul>
                  <li>كل مزايا Pro</li>
                  <li>أعضاء فريق متعددون</li>
                  <li>تكاملات أوسع</li>
                  <li>تهيئة خاصة</li>
                </ul>
                <a href="#contact" className="btn secondary full">تواصل معنا</a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section sectionAlt">
          <div className="shell">
            <div className="sectionHead">
              <span className="eyebrow">أسئلة شائعة</span>
              <h2>قبل أن تبدأ</h2>
            </div>

            <div className="faqList">
              {faqItems.map((item, i) => (
                <div
                  key={item.q}
                  className={`faqItem ${openFaq === i ? "open" : ""}`}
                >
                  <button
                    className="faqQ"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="arrow">▾</span>
                  </button>
                  <div className="faqA">
                    <div>{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="shell contactGrid">
            <div>
              <span className="eyebrow">تواصل</span>
              <h2 className="contactTitle">
                تحتاج خطة Team
                <br />
                أو تخصيصًا خاصًا؟
              </h2>
              <p className="contactText">
                إذا كنت تحتاج تجربة مخصصة أو تكاملات أوسع، تواصل معنا مباشرة.
              </p>

              <div className="card contactInfo">
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

            <div className="card formCard">
              <h3>أرسل طلبك</h3>
              <div className="formGrid">
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
                <button className="btn primary full">إرسال الطلب</button>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="shell">
            <div className="ctaBox">
              <span className="eyebrow">ابدأ اليوم</span>
              <h2>
                LinkedIn لن ينمو بالصدفة
                <br />
                بل بنظام
              </h2>
              <p>
                ابدأ الآن، وابنِ أول نظام محتوى لك خلال دقائق بدل الدوران في
                نفس الحلقة كل أسبوع.
              </p>

              <div className="ctaActions">
                <a href="#pricing" className="btn primary">
                  ابدأ مجانًا
                </a>
                <a href="#contact" className="btn secondary">
                  تحدث مع الفريق
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="shell">
            <div className="footerGrid">
              <div>
                <a href="#hero" className="logo">Oxora</a>
                <p className="footerBrand">
                  نظام يساعدك على تحويل LinkedIn إلى مصدر عملاء — بطريقة واضحة
                  وقابلة للقياس.
                </p>
              </div>

              <div>
                <h4>المنتج</h4>
                <a href="#features">المزايا</a>
                <a href="#how">كيف يعمل</a>
                <a href="#pricing">الأسعار</a>
              </div>

              <div>
                <h4>الشركة</h4>
                <a href="#faq">الأسئلة</a>
                <a href="#contact">تواصل</a>
                <a href="#">عن Oxora</a>
              </div>

              <div>
                <h4>قانوني</h4>
                <a href="#">سياسة الخصوصية</a>
                <a href="#">شروط الاستخدام</a>
                <a href="#">سياسة الإلغاء</a>
              </div>
            </div>

            <div className="footerBottom">
              <span>© 2025 Oxora. جميع الحقوق محفوظة.</span>
              <span>صُنع للمحترفين العرب على LinkedIn</span>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

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
            radial-gradient(ellipse 80% 50% at 15% 15%, rgba(110,168,254,.14), transparent),
            radial-gradient(ellipse 60% 40% at 85% 5%, rgba(139,92,246,.12), transparent),
            radial-gradient(ellipse 50% 60% at 50% 90%, rgba(34,211,238,.07), transparent);
          pointer-events: none;
          z-index: 0;
        }

        .ox {
          position: relative;
          z-index: 1;
        }

        .shell {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 22px;
          backdrop-filter: blur(12px);
          transition: 0.25s ease;
        }

        .card:hover {
          border-color: rgba(110,168,254,.2);
          transform: translateY(-3px);
          box-shadow: 0 0 28px rgba(110,168,254,.06);
        }

        .btn {
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

        .btn:hover { transform: translateY(-2px); }

        .btn.large {
          padding: 15px 28px;
          font-size: 1rem;
        }

        .btn.primary {
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          color: #fff;
          box-shadow: 0 12px 32px rgba(110,168,254,.28);
        }

        .btn.secondary {
          background: rgba(255,255,255,.03);
          color: #fff;
          border: 1px solid rgba(255,255,255,.08);
        }

        .btn.ghost {
          background: transparent;
          color: #94a3b8;
          border: 1px solid rgba(255,255,255,.08);
        }

        .btn.full { width: 100%; }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: .08em;
          color: #cbd5e1;
        }

        .eyebrow::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          box-shadow: 0 0 12px rgba(110,168,254,.8);
        }

        .tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(110,168,254,.12);
          color: #6ea8fe;
          border: 1px solid rgba(110,168,254,.2);
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(5,13,26,.72);
          backdrop-filter: blur(20px);
        }

        .navInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .logo span {
          font-size: 0.65rem;
          vertical-align: super;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .navLinks a {
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 0.88rem;
          color: #94a3b8;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .navLinks a:hover {
          color: #fff;
          background: rgba(255,255,255,.03);
        }

        .navActions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 10px;
          padding: 8px 10px;
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .mobilePanel {
          position: fixed;
          inset: 73px 0 0 0;
          background: rgba(5,13,26,.97);
          backdrop-filter: blur(18px);
          z-index: 95;
          padding: 22px 20px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .mobilePanelInner {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobilePanelInner a {
          display: block;
          text-decoration: none;
          color: #e2e8f0;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.06);
          font-size: 1rem;
          font-weight: 700;
        }

        .desktopOnly {
          display: flex;
        }

        .hero {
          padding: 104px 0 64px;
          text-align: center;
        }

        .heroWrap {
          max-width: 940px;
        }

        .heroBadgeRow {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .heroTitle {
          font-size: clamp(2.45rem, 6vw, 4.7rem);
          line-height: 1.08;
          letter-spacing: -0.045em;
          margin: 0 auto 18px;
          max-width: 760px;
          font-weight: 800;
        }

        .heroTitle span {
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .heroDesc {
          font-size: clamp(1rem, 2vw, 1.12rem);
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.85;
        }

        .heroActions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .heroMeta {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          color: #a7b4c9;
          font-size: 0.85rem;
          margin-bottom: 42px;
        }

        .heroMeta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .heroMeta i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22d3ee;
          display: inline-block;
        }

        .mockup {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
        }

        .mockup::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          opacity: 0.18;
          filter: blur(20px);
          z-index: -1;
        }

        .mockupTop {
          background: rgba(8,20,35,.95);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 20px 20px 0 0;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .dots span:nth-child(1) { background: #ff5f57; }
        .dots span:nth-child(2) { background: #ffbd2e; }
        .dots span:nth-child(3) { background: #28c840; }

        .mockupUrl {
          flex: 1;
          text-align: center;
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .mockupBody {
          background: rgba(6,16,29,.95);
          border: 1px solid rgba(255,255,255,.08);
          border-top: 0;
          border-radius: 0 0 20px 20px;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }

        .miniCard {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          text-align: center;
        }

        .miniVal {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .miniLbl {
          font-size: 0.72rem;
          color: #94a3b8;
          margin-top: 4px;
        }

        .chart {
          grid-column: 1 / -1;
          height: 90px;
          display: flex;
          align-items: flex-end;
          gap: 6px;
          padding: 12px;
          background: rgba(255,255,255,.02);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.08);
          overflow: hidden;
        }

        .bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          opacity: 0.78;
          animation: barGrow 0.8s ease forwards;
          transform-origin: bottom;
        }

        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        .proof {
          padding: 10px 0 8px;
        }

        .proofGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .proofCard {
          padding: 22px 18px;
          text-align: center;
        }

        .proofNumber {
          font-size: 1.95rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
        }

        .proofLabel {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .section {
          padding: 82px 0;
        }

        .sectionAlt {
          background: rgba(255,255,255,.012);
          border-block: 1px solid rgba(255,255,255,.08);
        }

        .sectionHead {
          text-align: center;
          margin-bottom: 50px;
        }

        .sectionHead.compact {
          margin-bottom: 24px;
        }

        .sectionHead h2 {
          font-size: clamp(1.95rem, 4vw, 2.8rem);
          margin: 14px 0 0;
          line-height: 1.12;
          letter-spacing: -0.04em;
        }

        .sectionHead p {
          margin: 16px auto 0;
          color: #94a3b8;
          font-size: 1rem;
          max-width: 560px;
          line-height: 1.75;
        }

        .problemGrid,
        .featuresGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .problemCard,
        .featureCard {
          padding: 28px 24px;
        }

        .problemIcon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          background: rgba(239, 68, 68, 0.14);
          color: #f87171;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .problemCard p {
          margin: 0;
          color: #d8e0ee;
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .featureIcon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 18px;
          box-shadow: 0 8px 24px rgba(110,168,254,.2);
        }

        .featureCard h3 {
          margin: 0 0 10px;
          font-size: 1.15rem;
        }

        .featureCard p {
          margin: 0;
          color: #94a3b8;
          line-height: 1.8;
          font-size: 0.94rem;
        }

        .steps {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
        }

        .steps::before {
          content: "";
          position: absolute;
          right: 22px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #6ea8fe, #8b5cf6, transparent);
          opacity: 0.3;
        }

        .step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .step:last-child {
          border-bottom: 0;
        }

        .stepNum {
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
          box-shadow: 0 4px 18px rgba(110,168,254,.25);
        }

        .stepContent h3 {
          margin: 0 0 6px;
          font-size: 1.1rem;
        }

        .stepContent p {
          margin: 0;
          color: #94a3b8;
          line-height: 1.8;
          font-size: 0.94rem;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }

        .priceCard {
          padding: 28px 26px;
          position: relative;
          overflow: hidden;
        }

        .priceCard.featured {
          border-color: rgba(110,168,254,.3);
          background: rgba(110,168,254,.05);
        }

        .planBadge {
          display: inline-block;
          margin-bottom: 14px;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6ea8fe, #8b5cf6);
          color: #fff;
        }

        .planName {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .planNote {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-bottom: 16px;
        }

        .planPrice {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }

        .planPrice sup {
          font-size: 1.2rem;
          vertical-align: super;
          opacity: 0.7;
        }

        .planPrice.custom {
          font-size: 2.2rem;
        }

        .planPeriod {
          color: #94a3b8;
          font-size: 0.78rem;
          margin-bottom: 20px;
        }

        .priceCard ul {
          list-style: none;
          padding: 0;
          margin: 0 0 26px;
        }

        .priceCard li {
          display: flex;
          gap: 10px;
          color: #94a3b8;
          font-size: 0.9rem;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,.04);
        }

        .priceCard li::before {
          content: "✓";
          color: #6ea8fe;
          font-weight: 800;
        }

        .faqList {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .faqItem {
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,.03);
        }

        .faqQ {
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

        .faqQ .arrow {
          color: #6ea8fe;
          transition: 0.25s ease;
          flex-shrink: 0;
        }

        .faqA {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.3s ease;
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .faqItem.open .faqA {
          max-height: 220px;
          padding: 0 22px 18px;
        }

        .faqItem.open .arrow {
          transform: rotate(180deg);
        }

        .contactGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .contactTitle {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
          margin: 14px 0 16px;
        }

        .contactText {
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .contactInfo {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contactInfo small {
          display: block;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 4px;
        }

        .contactInfo strong {
          font-size: 0.95rem;
        }

        .formCard {
          padding: 30px 28px;
        }

        .formCard h3 {
          margin: 0 0 20px;
          font-size: 1.2rem;
        }

        .formGrid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .formGrid label span {
          display: block;
          font-size: 0.83rem;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 7px;
        }

        .formGrid input,
        .formGrid textarea {
          width: 100%;
          padding: 11px 14px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 12px;
          color: #fff;
          font-size: 0.92rem;
          outline: none;
        }

        .formGrid input:focus,
        .formGrid textarea:focus {
          border-color: rgba(110,168,254,.45);
        }

        .cta {
          text-align: center;
          padding: 100px 0;
        }

        .ctaBox {
          max-width: 700px;
          margin: 0 auto;
          padding: 60px 40px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(110,168,254,.2);
          border-radius: 28px;
          position: relative;
          overflow: hidden;
        }

        .ctaBox::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(110,168,254,.1), transparent);
        }

        .ctaBox > * {
          position: relative;
          z-index: 1;
        }

        .ctaBox h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin: 14px 0 16px;
          line-height: 1.15;
        }

        .ctaBox p {
          color: #94a3b8;
          max-width: 460px;
          margin: 0 auto 30px;
          line-height: 1.8;
        }

        .ctaActions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer {
          border-top: 1px solid rgba(255,255,255,.08);
          padding: 48px 0 28px;
        }

        .footerGrid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .footerGrid h4 {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0 0 14px;
        }

        .footerGrid a {
          display: block;
          color: rgba(255,255,255,.68);
          font-size: 0.88rem;
          text-decoration: none;
          padding: 5px 0;
        }

        .footerGrid a:hover {
          color: #fff;
        }

        .footerBrand {
          color: #94a3b8;
          font-size: 0.88rem;
          margin-top: 12px;
          line-height: 1.7;
          max-width: 240px;
        }

        .footerBottom {
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        @media (max-width: 960px) {
          .desktopOnly {
            display: none !important;
          }

          .hamburger {
            display: inline-block;
          }

          .contactGrid,
          .pricingGrid,
          .featuresGrid,
          .problemGrid,
          .footerGrid,
          .mockupBody,
          .proofGrid {
            grid-template-columns: 1fr;
          }

          .heroTitle {
            font-size: 3.2rem;
          }

          .navActions .ghost {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .section,
          .cta {
            padding: 64px 0;
          }

          .hero {
            padding: 74px 0 52px;
          }

          .heroTitle {
            font-size: 2.45rem;
            line-height: 1.18;
          }

          .heroDesc {
            font-size: 1rem;
            line-height: 1.9;
          }

          .heroActions {
            flex-direction: column;
            align-items: stretch;
          }

          .heroActions .btn {
            width: 100%;
          }

          .heroMeta {
            gap: 12px;
            flex-direction: column;
            margin-bottom: 34px;
          }

          .ctaBox {
            padding: 40px 22px;
          }

          .footerGrid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .navActions .btn.primary {
            padding: 11px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
