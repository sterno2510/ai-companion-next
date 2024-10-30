import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const CoverLetter = async () => {
  return <div>update your cover letter</div>;
};

export default withPageAuthRequired(CoverLetter, { returnTo: "/dashboard" });
