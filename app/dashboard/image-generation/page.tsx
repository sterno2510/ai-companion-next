import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const ImageGeneration = async () => {
  return <div>create image</div>;
};

export default withPageAuthRequired(ImageGeneration, {
  returnTo: "/dashboard",
});
