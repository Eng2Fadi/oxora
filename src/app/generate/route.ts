import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("credits")
      .eq("id", user.id)
      .single();

    if (profileError || !profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    if (profile.credits <= 0) {
      return NextResponse.json(
        { error: "انتهى رصيد التجربة المجانية" },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { industry, audience, goal, contentType } = body;

    if (!industry || !audience || !goal || !contentType) {
      return NextResponse.json(
        { error: "المدخلات غير مكتملة" },
        { status: 400 }
      );
    }

    const prompt = buildPrompt({ industry, audience, goal, contentType });

    const deepseekRes = await fetch(
      `${process.env.DEEPSEEK_BASE_URL}/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "You are an expert Arabic LinkedIn growth assistant. Write clearly, persuasively, and naturally.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 900,
        }),
      }
    );

    const deepseekData = await deepseekRes.json();

    if (!deepseekRes.ok) {
      return NextResponse.json(
        {
          error:
            deepseekData?.error?.message ||
            "DeepSeek request failed",
        },
        { status: 500 }
      );
    }

    const output = deepseekData?.choices?.[0]?.message?.content;

    if (!output) {
      return NextResponse.json(
        { error: "لم يصل أي ناتج من النموذج" },
        { status: 500 }
      );
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ credits: profile.credits - 1 })
      .eq("id", user.id);

    if (updateError) {
      return NextResponse.json(
        { error: "فشل تحديث الرصيد" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      output,
      remainingCredits: profile.credits - 1,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

function buildPrompt({
  industry,
  audience,
  goal,
  contentType,
}: {
  industry: string;
  audience: string;
  goal: string;
  contentType: string;
}) {
  if (contentType === "hook_ideas") {
    return `
اكتب 10 Hooks عربية قصيرة وقوية لمنشورات LinkedIn.

المجال: ${industry}
الجمهور: ${audience}
الهدف: ${goal}

الشروط:
- قصيرة
- عملية
- غير عامة
- مناسبة للمحترفين
`;
  }

  if (contentType === "content_ideas") {
    return `
اقترح 10 أفكار محتوى عربية لمنشورات LinkedIn.

المجال: ${industry}
الجمهور: ${audience}
الهدف: ${goal}

الشروط:
- أفكار واضحة
- عملية
- قابلة للنشر
- غير مكررة
`;
  }

  return `
اكتب منشور LinkedIn عربي احترافي.

المجال: ${industry}
الجمهور: ${audience}
الهدف: ${goal}

الشروط:
- Hook قوي في البداية
- أسلوب طبيعي غير آلي
- فقـرات قصيرة
- CTA بسيط في النهاية
- مناسب للنشر على LinkedIn
`;
}
