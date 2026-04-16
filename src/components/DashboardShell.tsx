import type { ReactNode } from "react";

export default function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}
