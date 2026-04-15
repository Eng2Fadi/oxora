export function buildPrompt(moduleName: string, input: string) {
  switch (moduleName) {
    case "generate":
      return `أنت خبير نمو على LinkedIn. اكتب بوستًا قويًا يقود إلى ثقة وتحويل، وليس مجرد تفاعل.\n\nالموضوع: ${input}`;
    case "hooks":
      return `أنت خبير hooks على LinkedIn. أعطني 10 hooks متنوعة: authority, curiosity, pain, contrarian.\n\nالموضوع: ${input}`;
    case "ideas":
      return `أنت استراتيجي محتوى. ولّد 12 فكرة محتوى قابلة للنشر على LinkedIn بناءً على هذا الوصف، مع زاوية كل فكرة ولماذا قد تنجح.\n\nالوصف: ${input}`;
    case "improve":
      return `أنت محرر LinkedIn صارم. حسّن النص التالي ليصبح أوضح وأكثر هيبة وقابلية للتحويل، ثم أعط نسخة نهائية وتعليقات مختصرة على ما تغيّر.\n\nالنص: ${input}`;
    default:
      return input;
  }
}
