import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

const SqlQueries = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/api/auth/login?returnTo=/dashboard/sql-queries");
  }
  return <div>Sql query</div>;
};

export default SqlQueries;
