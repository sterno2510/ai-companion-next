import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Page() {
    return (
      <div data-testid="content">
        <div
          className="max-w-[65%] mx-auto bg-white p-5 shadow-md"
          data-testid="center-container"
        >
          <section data-testid="intro">
            <h2 className="text-2xl font-bold py-10">About AI Companion</h2>
            <p>
              AI Companion is a comprehensive service designed to streamline
              your professional tasks with the power of AI. Our current features
              include resume generation, audio transcription, cover letter
              creation, and AI image creation. We are continually expanding our
              toolset to better serve your needs.
            </p>
          </section>
          <section data-testid="instructions">
            <h2 className="text-2xl font-bold py-10">
              How to Use AI Companion
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <strong>Update Resume:</strong> Navigate to the{" "}
                <Link
                  className="hover:text-blue-600 text-blue-500"
                  href="/dashboard/update-resume"
                  data-testid="link-instructions-resume"
                >
                  Update Resume
                </Link>{" "}
                page, fill in your professional details, and let our AI generate
                a polished resume for you.
              </li>
              <br />
              <li>
                <strong>Create Cover Letter:</strong> Visit the{" "}
                <Link
                  className="hover:text-blue-600 text-blue-500"
                  href="/dashboard/cover-letter"
                  data-testid="link-instructions-cover-letter"
                >
                  Create Cover Letter
                </Link>{" "}
                page, provide your resume and job description, and receive a
                tailored cover letter in minutes.
              </li>
              <br />
              <li>
                <strong>Extract Audio from Video:</strong> Go to the{" "}
                <Link
                  className="hover:text-blue-600 text-blue-500"
                  href="/dashboard/transcribe-audio"
                  data-testid="link-instructions-transcribe"
                >
                  Extract Audio
                </Link>{" "}
                page, upload your video, and get an accurate transcription of
                the audio.
              </li>
              <br />
              <li>
                <strong>Create AI Images:</strong> Head over to the{" "}
                <Link
                  className="hover:text-blue-600 text-blue-500"
                  href="/dashboard/image-generation"
                  data-testid="link-instructions-image-creation"
                >
                  Create AI Images
                </Link>{" "}
                page, describe the image you want, and let our AI bring it to
                life.
              </li>
              <br />
              <li>
                <strong>Create SQL Queris:</strong> Head over to the{" "}
                <Link
                  className="hover:text-blue-600 text-blue-500"
                  href="/dashboard/sql-queries"
                  data-testid="link-instructions-sql-queries"
                >
                  Create SQL Queries
                </Link>{" "}
                page, provide your table names and schema, a description of the
                SQL Query you want to generate in plain english, and let our AI
                bring it to life.
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  },
  { returnTo: "/dashboard" }
);
