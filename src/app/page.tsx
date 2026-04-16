"use client";

import { useEffect, useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const stats = [
  { value: 312, suffix: "%", label: "نمو متوسط في الوصول" },
  { value: 87, suffix: "", label: "منشور شهريًا" },
  { value: 4.2, suffix: "×", label: "تحسن التفاعل" },
];

const faqItems: FaqItem[] = [
  {
    q: "هل Oxora مناسب إذا لم أكن خبيرًا؟",
    a: "نعم. النظام مصمم ليبسط العملية، لا يعقدها.",
  },
  {
    q: "هل المحتوى يبدو آليًا؟",
    a: "لا، لأنه يُبنى على أسلوبك ويمكنك تعديله.",
  },
  {
    q: "هل يمكن الإلغاء؟",
    a: "نعم، في أي وقت بدون التزام.",
  },
];

function useAnimatedNumbers(targets: typeof stats) {
  const [values, setValues] = useState(targets.map(() => 0));

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(
        targets.map((item) => {
          const raw = item.value * eased;
          return item.value % 1 !== 0
            ? Number(raw.toFixed(1))
            : Math.round(raw);
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const animatedValues = useAnimatedNumbers(stats);

  return (
    <>
      <main className="oxora-page">

        {/* HERO */}
        <section className="hero">
          <div className="container">

            <h1>
              حوّل LinkedIn
              <br />
              إلى <span>مصدر عملاء حقيقي</span>
            </h1>

            <p>
              نظام AI يساعدك على كتابة محتوى، جذب الانتباه،
              وتحويل العلاقات إلى فرص بدون تعقيد.
            </p>

            <div className="actions">
              <a className="btn primary">ابدأ مجانًا</a>
              <a className="btn secondary">كيف يعمل؟</a>
            </div>

          </div>
        </section>

        {/* PROOF */}
        <section className="proof">
          <div className="container grid">
            {stats.map((s, i) => (
              <div className="card" key={i}>
                <div className="num">
                  {animatedValues[i]}{s.suffix}
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <h2>أسئلة شائعة</h2>

            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`item ${openFaq === i ? "open" : ""}`}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                </button>
                <div className="answer">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <style jsx global>{`
        body {
          margin: 0;
          background: #050d1a;
          color: #fff;
          font-family: Arial;
        }

        .container {
          max-width: 1000px;
          margin: auto;
          padding: 0 20px;
          text-align: center;
        }

        .hero {
          padding: 100px 0;
        }

        .hero h1 {
          font-size: 3rem;
          line-height: 1.2;
        }

        .hero h1 span {
          background: linear-gradient(135deg,#6ea8fe,#8b5cf6);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero p {
          color: #94a3b8;
          max-width: 500px;
          margin: 20px auto;
        }

        .actions {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 10px;
          cursor: pointer;
        }

        .primary {
          background: linear-gradient(135deg,#6ea8fe,#8b5cf6);
        }

        .secondary {
          border: 1px solid #444;
        }

        .proof {
          padding: 40px 0;
       
