import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ResumeForm from "@/app/ui/ResumeForm";
import ResumeHistory from "@/app/ui/ResumeHistory";

const UpdateResume = async () => {
  console.log("resume");
  return (
    <div
      className="bg-headerGray text-white bg-opacity-70 rounded-lg max-w-[65%] mx-auto p-5 shadow-lg "
      data-testid="content"
    >
      <div className="max-w-2xl mx-auto p-5">
        <div className="text-center text-2xl font-bold">Update Your Resume</div>
        <ResumeHistory />
        <ResumeForm />
      </div>
    </div>
  );
};

export default withPageAuthRequired(UpdateResume, { returnTo: "/dashboard" });
