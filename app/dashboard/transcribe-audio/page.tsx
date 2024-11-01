import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const TranscribeAudio = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/transcribe-audio");
  }
  return <div>transcribe</div>;
};

export default TranscribeAudio;
