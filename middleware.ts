import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

// Add this to your middleware config
export const config = {
  matcher: [
    "/dashboard/:path*",
    // Add other protected routes here
  ],
};
