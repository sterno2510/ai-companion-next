import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import SqlQuery from "@/app/ui/SqlQuery";

const SqlQueries = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/sql-queries");
  }
  return (
    <div
      className="bg-headerGray text-white bg-opacity-70 rounded-lg w-full md:max-w-[80%] mx-auto p-0 md:p-5 shadow-lg"
      data-testid="content"
    >
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center text-3xl font-bold">
          Generate Your SQL Query!
        </div>
        <SqlQuery />
      </div>
    </div>
  );
};

export default SqlQueries;
