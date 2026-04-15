import { brand } from "@/components/site-data";

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="eyebrow">عن Oxora</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-none tracking-[-0.04em] md:text-7xl">{brand.name} ليست مجرد خدمة AI. بل نظام تنفيذ.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            التمركز المقصود هنا هو الجمع بين AI automation وتطوير LinkedIn داخل منتج واحد يمكن تجربته، بيعه، وقياس استخدامه. هذا أقوى من بيع خدمات عامة على صفحة جميلة.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold">المبادئ</h2>
          <ul className="mt-5 list-disc space-y-3 pr-5 text-slate-300">
            <li>منتج صغير أولًا، لا منصة متضخمة</li>
            <li>قياس usage قبل التوسع في الميزات</li>
            <li>ربط LinkedIn بنتيجة تجارية لا بضجيج محتوى</li>
            <li>عدم الادعاء ببرهان غير موجود</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
