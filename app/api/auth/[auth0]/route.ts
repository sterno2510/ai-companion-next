// app/seed/route.ts
import { handleAuth } from "@auth0/nextjs-auth0";
import { NextRequest } from "next/server";

export const GET = handleAuth() as (req: NextRequest) => Promise<Response>;
