import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import ImageCreation from "@/app/ui/ImageCreation";

const ImageGeneration = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/image-generation");
  }

  return (
    <div
      className="bg-headerGray text-white bg-opacity-70 rounded-lg max-w-[80%] mx-auto p-5 shadow-lg "
      data-testid="content"
    >
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center text-3xl font-bold">
          Create an AI-Generated Image
        </div>
        <ImageCreation />
      </div>
    </div>
  );
};

export default ImageGeneration;
