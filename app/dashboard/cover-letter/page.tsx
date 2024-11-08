import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import CoverLetterUI from "@/app/ui/CoverLetter";

export default async function CoverLetter() {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/cover-letter");
  }

  return (
    <div
      className="bg-headerGray text-white bg-opacity-70 rounded-lg max-w-[80%] mx-auto p-5 shadow-lg "
      data-testid="content"
    >
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center text-3xl font-bold">
          Create a Cover Letter
        </div>
        <CoverLetterUI />
      </div>
    </div>
  );
}
