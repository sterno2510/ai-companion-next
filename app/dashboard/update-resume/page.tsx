import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const UpdateResume = async () => {
  return <div>update your resume</div>;
};

export default withPageAuthRequired(UpdateResume, { returnTo: "/dashboard" });
