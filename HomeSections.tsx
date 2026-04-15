import Link from "next/link";
import { ArrowLeft, Bot, Brain, CreditCard, Database, ShieldCheck } from "lucide-react";
import { brand, faqs, pricing, productModules } from "./site-data";

export function Hero() {
  return (
    <section className="overflow-hidden py-16 md:py-20">
      <div className="container-shell grid items-center gap-8 md:grid-cols-[1.08fr_.92fr]">
        <div>
          <span className="eyebrow">{brand.tagline}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-none tracking-[-0.04em] md:text-7xl">
            ابنِ SaaS فعليًا، لا مجرد صفحة تبيع وعود AI عامة.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            هذه النسخة تحوّل Oxora من موقع تسويقي إلى منتج قابل للبيع: مصادقة عبر Clerk، فوترة عبر Stripe، تخزين وتتبع استخدام عبر Supabase، وواجهات AI مركزة على LinkedIn growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/dashboard" className="btn-primary">ادخل إلى اللوحة</Link>
            <Link href="/pricing" className="btn-secondary">شاهد الخطط</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Auth", "Clerk"],
              ["Billing", "Stripe"],
              ["Usage", "Supabase"]
            ].map(([value, label]) => (
              <div key={value} className="glass rounded-2xl px-4 py-3">
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[28px] p-5 shadow-soft">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <div className="font-bold">Oxora SaaS Stack</div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-slate-100">Production Scaffold</span>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              {[
                { Icon: ShieldCheck, title: "Clerk", desc: "تسجيل دخول وحماية dashboard" },
                { Icon: CreditCard, title: "Stripe", desc: "Checkout + Billing portal + webhook" },
                { Icon: Database, title: "Supabase", desc: "profiles / subscriptions / usage_logs" },
                { Icon: Bot, title: "OpenAI", desc: "generate / hooks / ideas / improve" },
                { Icon: Brain, title: "Product logic", desc: "limits + plans + prompt strategy" }
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <Icon className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-white">{title}</div>
                    <div>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductModules() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <span className="eyebrow">Modules</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">أربعة Modules فقط. أكثر من ذلك الآن فوضى.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {productModules.map((feature) => (
            <div key={feature.title} className="card">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-secondary/20 text-xl">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Architecture() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-5 md:grid-cols-2">
        <div className="card">
          <h3 className="text-2xl font-bold">ما أضفته داخل المشروع</h3>
          <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-300">
            <li>Clerk middleware لحماية المسارات</li>
            <li>Stripe checkout + portal + webhook</li>
            <li>Supabase schema لتتبع usage والاشتراكات</li>
            <li>AI routes منفصلة لكل module</li>
            <li>لوحة موحدة لتوليد النتائج وحفظها</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-2xl font-bold">ما لم أزعم أنه مكتمل</h3>
          <ul className="mt-4 list-disc space-y-2 pr-5 text-slate-300">
            <li>لن يعمل الدفع بدون Price IDs حقيقية من Stripe</li>
            <li>لن يعمل التخزين بدون مشروع Supabase وجداول منشأة</li>
            <li>لن تعمل المصادقة بدون مفاتيح Clerk</li>
            <li>الـ prompts تحتاج اختبارًا ببياناتك وسوقك</li>
            <li>هذا scaffold قوي، لا معجزة تجارية جاهزة</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <span className="eyebrow">الأسعار</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">خطط واضحة مع ترقية منطقية.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className={`card flex flex-col ${"popular" in plan && plan.popular ? "border-primary/30" : ""}`}>
              {"popular" in plan && plan.popular ? <div className="mb-4 inline-flex w-fit rounded-full bg-gradient-to-br from-primary to-secondary px-3 py-1 text-xs font-bold">الخيار الأفضل</div> : null}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-slate-300">{plan.note}</p>
              <div className="mt-4 text-5xl font-extrabold tracking-[-0.04em]">{plan.price}</div>
              <ul className="mt-5 list-disc space-y-2 pr-5 text-slate-300">
                {plan.features.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/pricing" className={`mt-6 ${"popular" in plan && plan.popular ? "btn-primary" : "btn-secondary"}`}>اختر الخطة <ArrowLeft className="mr-2 h-4 w-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">أسئلة مهمة قبل الإطلاق.</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="card">
              <summary className="cursor-pointer text-lg font-bold">{faq.q}</summary>
              <p className="mt-4 text-slate-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="card text-center">
          <span className="eyebrow">Deploy next</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">اربط المفاتيح، أنشئ الجداول، وابدأ اختبار مستخدمين حقيقيين.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">أخطر وهم هنا أن تظن أن المشروع جاهز للبيع قبل أن ترى سلوك مستخدمين حقيقيين داخل اللوحة. الكود خطوة، لا إثبات طلب.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/dashboard" className="btn-primary">الدخول إلى اللوحة</Link>
            <Link href="/contact" className="btn-secondary">تواصل للتخصيص</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
