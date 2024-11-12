import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import ResumeForm from "@/app/ui/ResumeForm";
import ResumeHistory from "@/app/ui/ResumeHistory";

const UpdateResume = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/image-generation");
  }

  return (
    <div
      className="bg-headerGray text-white bg-opacity-70 rounded-lg max-w-[80%] mx-auto p-5 shadow-lg "
      data-testid="content"
    >
      <div className="max-w-full md:max-w-5xl mx-auto p-4">
        <div className="text-center text-2xl font-bold">Update Your Resume</div>
        <ResumeHistory />
        <ResumeForm />
      </div>
    </div>
  );
};

export default UpdateResume;
