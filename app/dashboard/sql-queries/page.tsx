import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const SqlQueries = async () => {
  return <div>Sql query</div>;
};

export default withPageAuthRequired(SqlQueries, { returnTo: "/dashboard" });
