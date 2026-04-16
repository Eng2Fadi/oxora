import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { hasClerk } from "@/lib/env";

export function AppProviders({ children }: { children: ReactNode }) {
  if (!hasClerk()) return <>{children}</>;
  return <ClerkProvider>{children}</ClerkProvider>;
}
