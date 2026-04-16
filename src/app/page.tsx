export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950 text-white p-6">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          حوّل لينكدإن إلى ماكينة عملاء 🚀
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Oxora يستخدم الذكاء الاصطناعي لاكتشاف العملاء المحتملين،
          التواصل معهم، وتحويلهم إلى صفقات — بدون مجهود يدوي.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            ابدأ مجانًا
          </button>
          <button className="border px-6 py-3 rounded-xl">
            كيف يعمل
          </button>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">لماذا Oxora؟</h2>
        <div className="grid gap-4">
          <p>🔍 يجد عملاءك المثاليين تلقائيًا</p>
          <p>✉️ يكتب رسائل مخصصة عالية التحويل</p>
          <p>🤖 يعمل 24/7 بدون تدخل</p>
          <p>📈 يزيد معدل الردود والصفقات</p>
        </div>
      </section>

      {/* HOW */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">كيف يعمل؟</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="font-bold">1. حدد جمهورك</h3>
            <p>اختر الفئة المستهدفة</p>
          </div>
          <div>
            <h3 className="font-bold">2. دع Oxora يعمل</h3>
            <p>نحن نتولى الباقي</p>
          </div>
          <div>
            <h3 className="font-bold">3. احصل على العملاء</h3>
            <p>ابدأ في إغلاق الصفقات</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">الأسعار</h2>
        <div className="flex gap-6 justify-center">
          <div className="border p-6 rounded-xl">
            <h3>Starter</h3>
            <p>$19</p>
          </div>
          <div className="border p-6 rounded-xl">
            <h3>Pro</h3>
            <p>$49</p>
          </div>
        </div>
      </section>

    </main>
  );
}
