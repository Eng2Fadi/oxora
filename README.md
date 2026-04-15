# Oxora Production Scaffold

هذا المشروع نسخة production-oriented من Oxora مبنية على Next.js 14 مع:

- Clerk للمصادقة
- Stripe للفوترة والاشتراكات
- Supabase لتخزين profiles / subscriptions / usage_logs
- OpenAI لتشغيل modules الخاصة بـ LinkedIn

## ما الذي يقدمه هذا المشروع؟

- صفحة تسويقية عربية محسنة للمنتج
- Dashboard محمي
- 4 AI modules: generate / hooks / ideas / improve
- Usage tracking مرتبط بالخطة
- Checkout route
- Billing portal route
- Stripe webhook route
- SQL schema جاهز لـ Supabase

## الإعداد

```bash
npm install
cp .env.example .env.local
npm run dev
```

## متغيرات البيئة

املأ القيم التالية داخل `.env.local`:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID`
- `NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Supabase

1. أنشئ مشروع Supabase
2. نفّذ ملف `supabase/schema.sql`
3. تأكد أن الجداول أنشئت بنجاح

## Stripe

1. أنشئ منتجين أو price IDs لخطة Starter وPro
2. ضع القيم في `.env.local`
3. أنشئ webhook يشير إلى:

```text
/api/webhooks/stripe
```

4. استخدم secret الخاص بالويبهوك في `STRIPE_WEBHOOK_SECRET`

## Clerk

1. أنشئ تطبيق Clerk
2. ضع المفاتيح في البيئة
3. فعّل sign-in وsign-up routes حسب إعدادات Clerk

## ملاحظات مهمة

- المشروع يمكن تشغيله حتى بدون Clerk/Supabase على مستوى الواجهة، لكن الوظائف الحقيقية تحتاج المفاتيح والخدمات.
- لا تعتبر prompts الحالية نهائية. اختبرها وعدّلها حسب السوق.
- لا تعتبر صفحات privacy/terms نهائية قانونيًا.

## أهم الملفات

- `src/app/dashboard/page.tsx`
- `src/components/DashboardShell.tsx`
- `src/app/api/ai/*`
- `src/app/api/billing/*`
- `src/app/api/webhooks/stripe/route.ts`
- `src/lib/usage.ts`
- `supabase/schema.sql`
