import { sql } from "@vercel/postgres";

export async function fetchVisitCount(userId: string) {
  try {
    console.log(`Fetching visit count for user ID: ${userId}...`);

    const data = await sql`
      SELECT visitCount 
      FROM users 
      WHERE id = ${userId}
    `;
    console.log("what is the data?", data);
    if (data.rowCount === 0) {
      console.error(`No user found with ID: ${userId}`);
      throw new Error("User not found.");
    }

    const visitCount = data.rows[0].visitcount;
    console.log(`Visit count retrieved: ${visitCount}`);

    return visitCount;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch visit count.");
  }
}
