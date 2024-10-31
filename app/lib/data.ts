import { sql } from "@vercel/postgres";

export async function fetchVisitCount(
  userId: string,
  userName: string,
  userEmail: string
) {
  try {
    console.log(`Fetching visit count for user ID: ${userId}...`);

    const data = await sql`
      SELECT visitCount 
      FROM users 
      WHERE id = ${userId}
    `;

    if (data.rowCount === 0) {
      console.log(
        `User ID: ${userId} not found, creating new user with visit count set to 1.`
      );

      // Insert a new user with provided name and email values
      await sql`
        INSERT INTO users (id, name, email, visitCount)
        VALUES (${userId}, ${userName}, ${userEmail}, 1)
      `;

      return 1; // New visit count for the user
    }

    // If user exists, increment the visit count
    const visitCount = data.rows[0].visitcount + 1;
    await sql`
      UPDATE users 
      SET visitCount = ${visitCount}
      WHERE id = ${userId}
    `;

    console.log(`Visit count incremented to: ${visitCount}`);
    return visitCount;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch visit count.");
  }
}
