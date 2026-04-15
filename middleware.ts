import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { hasClerk } from "@/lib/env";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/api/ai(.*)", "/api/billing(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (!hasClerk()) return;
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"]
};
