import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function CoverLetter() {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/cover-letter");
  }

  return <div>update your cover letter</div>;
}
