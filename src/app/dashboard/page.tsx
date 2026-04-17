import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./ui";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth");

  const { data: profile } = await supabase
    .from("profiles")
    .select("credits,email")
    .eq("id", user.id)
    .single();

  return (
    <DashboardClient
      email={profile?.email || user.email || ""}
      credits={profile?.credits ?? 0}
    />
  );
}
