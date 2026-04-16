export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020817] via-[#06122e] to-[#020617] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 text-center md:pt-32">
        <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
          منصة ذكية لتنمية المبيعات عبر لينكدإن
        </div>

        <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          حوّل لينكدإن إلى{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            ماكينة عملاء
          </span>{" "}
          تعمل لصالحك كل يوم
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Oxora يساعدك على اكتشاف العملاء المحتملين، كتابة رسائل مخصصة عالية
          التحويل، وأتمتة المتابعة — حتى تحصل على ردود واجتماعات وصفقات بدون
          جهد يدوي مرهق.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/dashboard"
            className="inline-flex min-w-[180px] items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            ابدأ مجانًا
          </a>

          <a
            href="#how-it-works"
            className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            كيف يعمل؟
          </a>
        </div>

        <div className="mt-14 grid gap-4 text-right md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 text-sm font-semibold text-blue-300">
              استهداف أدق
            </div>
            <p className="text-sm leading-7 text-slate-300">
              اعثر على العملاء المناسبين بدل إضاعة الوقت على جمهور غير مؤهل.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 text-sm font-semibold text-blue-300">
              رسائل أفضل
            </div>
            <p className="text-sm leading-7 text-slate-300">
              أنشئ رسائل مخصصة تُشبه الكتابة البشرية وتزيد فرص الرد.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 text-sm font-semibold text-blue-300">
              متابعة ذكية
            </div>
            <p className="text-sm leading-7 text-slate-300">
              أتمتة المتابعة بشكل منظم حتى لا تضيع فرصة بسبب النسيان أو التأخير.
            </p>
          </div>
        </div>
      </section>

      {/* Why Oxora */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">لماذا Oxora؟</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            لأن البيع عبر لينكدإن لا يفشل بسبب قلة الفرص، بل بسبب ضعف
            الاستهداف، الرسائل العامة، والمتابعة غير المنتظمة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🔎</div>
            <h3 className="mb-3 text-xl font-semibold">
              اكتشاف العملاء المحتملين
            </h3>
            <p className="leading-7 text-slate-300">
              ابحث عن الفئات المستهدفة بسرعة وحدد من يستحق التواصل معه فعلاً.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">✉️</div>
            <h3 className="mb-3 text-xl font-semibold">
              رسائل مخصصة عالية التحويل
            </h3>
            <p className="leading-7 text-slate-300">
              أنشئ رسائل افتتاحية ومتابعات احترافية بدل النسخ المكرر الضعيف.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🤖</div>
            <h3 className="mb-3 text-xl font-semibold">أتمتة 24/7</h3>
            <p className="leading-7 text-slate-300">
              دع النظام يعمل باستمرار بينما تركز أنت على المكالمات وإغلاق
              الصفقات.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">📈</div>
            <h3 className="mb-3 text-xl font-semibold">
              تحسين الأداء والنتائج
            </h3>
            <p className="leading-7 text-slate-300">
              راقب ما ينجح، حسّن الرسائل، وارفـع جودة الردود والاجتماعات.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">كيف يعمل؟</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            3 خطوات فقط لتحويل لينكدإن من منصة علاقات إلى قناة مبيعات فعّالة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold">
              1
            </div>
            <h3 className="mb-3 text-2xl font-semibold">حدد جمهورك</h3>
            <p className="leading-7 text-slate-300">
              اختر من تريد الوصول إليه: مؤسسون، مدراء، شركات SaaS، وكالات،
              أو أي شريحة تناسب عرضك.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold">
              2
            </div>
            <h3 className="mb-3 text-2xl font-semibold">شغّل Oxora</h3>
            <p className="leading-7 text-slate-300">
              يقوم النظام بالبحث، كتابة الرسائل، وتنظيم المتابعة بناءً على
              منطق ذكي بدل العمل اليدوي المكرر.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-lg font-bold">
              3
            </div>
            <h3 className="mb-3 text-2xl font-semibold">حوّل الردود إلى فرص</h3>
            <p className="leading-7 text-slate-300">
              استقبل الردود، احجز الاجتماعات، وركّز على إغلاق الصفقات بدل
              البحث عن العملاء من الصفر كل مرة.
            </p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            لمن صُمم Oxora؟
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            إذا كنت تعتمد على التواصل البارد أو بناء العلاقات عبر لينكدإن،
            فهذه المنصة بُنيت لك.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mb-3 text-3xl">🚀</div>
            <h3 className="mb-2 text-xl font-semibold">رواد الأعمال</h3>
            <p className="text-slate-300">
              لتوليد فرص بيع بدون بناء فريق مبيعات كامل.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mb-3 text-3xl">💼</div>
            <h3 className="mb-2 text-xl font-semibold">الوكالات</h3>
            <p className="text-slate-300">
              للحصول على عملاء جدد باستمرار بدل الاعتماد على الإحالات فقط.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="mb-2 text-xl font-semibold">فرق المبيعات</h3>
            <p className="text-slate-300">
              لتقليل الهدر وتحسين جودة التفاعل مع العملاء المحتملين.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mb-3 text-3xl">🧠</div>
            <h3 className="mb-2 text-xl font-semibold">منتجات B2B</h3>
            <p className="text-slate-300">
              للوصول إلى صناع القرار بطريقة أكثر ذكاءً واتساقًا.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-[32px] border border-blue-400/20 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 p-10 text-center shadow-2xl shadow-blue-950/20">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            جاهز لتحويل لينكدإن إلى قناة عملاء حقيقية؟
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
            ابدأ الآن، نظّم استهدافك، حسّن رسائلك، واجعل الوصول إلى العملاء
            أكثر سرعة وكفاءة.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="inline-flex min-w-[180px] items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
            >
              ابدأ مجانًا 🚀
            </a>

            <a
              href="/pricing"
              className="inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              عرض الأسعار
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
