import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ImageCreation from "@/app/ui/ImageCreation";

const ImageGeneration = async () => {
  return <ImageCreation />;
};

export default withPageAuthRequired(ImageGeneration, {
  returnTo: "/dashboard",
});
