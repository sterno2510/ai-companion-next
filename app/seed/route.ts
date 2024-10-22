import { db } from "@vercel/postgres";
import { resumes, users } from "../lib/placeholder-data"; // Assuming you have resumes and users data

const client = await db.connect();

// Seed the Users Table
async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      visitCount INT DEFAULT 1 
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      return client.sql`
        INSERT INTO users (id, name, email, visitCount)
        VALUES (${user.id}, ${user.name}, ${user.email}, 1)
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

// Seed the Resumes Table
async function seedResumes() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS resumes (
      id SERIAL PRIMARY KEY,
      user_id UUID NOT NULL,
      new_resume TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  const insertedResumes = await Promise.all(
    resumes.map(async (resume) => {
      return client.sql`
        INSERT INTO resumes (user_id, new_resume)
        VALUES (${resume.user}, ${resume.newResume})
        ON CONFLICT DO NOTHING;
      `;
    })
  );

  return insertedResumes;
}

// Main Function to Seed Database
export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedResumes(); // Seed resumes after seeding users
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: error.message }, { status: 500 });
  }
}
