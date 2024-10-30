import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const TranscribeAudio = async () => {
  return <div>transcribe</div>;
};

export default withPageAuthRequired(TranscribeAudio, {
  returnTo: "/dashboard",
});
