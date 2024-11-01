import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const UpdateResume = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/update-resume");
  }
  return <div>update your resume</div>;
};

export default UpdateResume;
