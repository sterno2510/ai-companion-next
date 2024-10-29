import Header from "./ui/Header";
import Footer from "./ui/Footer";
import aiBackground from "./lib/assets/login-image.jpg";
import Image from "next/image";
import resumeIcon from "./lib/assets/resumeIcon.svg";
import imageIcon from "./lib/assets/imageIcon.webp";
import sqlIcon from "./lib/assets/sqlIcon.webp";
import audioIcon from "./lib/assets/audioIcon.png";
import coverLetterIcon from "./lib/assets/coverLetterIcon.jpg";
import { oxanium } from "./ui/fonts";

export default function Home() {
  return (
    <div
      className={`${oxanium.className} flex flex-col min-h-screen relative overflow-hidden`}
    >
      <Header login={false} />

      <div className="relative flex-grow flex items-center justify-center">
        <Image
          src={aiBackground}
          className="absolute inset-0 object-cover opacity-50"
          alt="AI Companion Background Image"
          layout="fill"
        />

        <div className="relative z-10 flex flex-col items-center justify-center p-4 pb-12 sm:p-8 lg:p-10 text-center">
          <div className="bg-headerGray bg-opacity-70 rounded-lg shadow-lg p-6 max-w-sm sm:max-w-md lg:max-w-2xl">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2">
              Welcome to AI Companion
            </h1>
            <p className="text-sm sm:text-base text-white mb-4">
              Your AI-driven partner for productivity.
            </p>
            <p className="text-sm sm:text-base text-white mb-4">
              Log in to access personalized tools and stay ahead.
            </p>
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
              <div className="flex flex-col items-center text-center w-24">
                {" "}
                <Image
                  src={resumeIcon}
                  height={60}
                  width={60}
                  className="h-12 w-12 bg-gray-300 rounded-full mb-2"
                  alt="Resume Icon"
                />
                <span className="text-sm sm:text-base text-white">
                  Resume Builder
                </span>
              </div>
              <div className="flex flex-col items-center text-center w-24">
                {" "}
                <Image
                  src={coverLetterIcon}
                  height={60}
                  width={60}
                  className="h-12 w-12 bg-gray-300 rounded-full mb-2"
                  alt="Cover Letter Icon"
                />
                <span className="text-sm sm:text-base text-white">
                  Cover Letter Builder
                </span>
              </div>
              <div className="flex flex-col items-center text-center w-24">
                <Image
                  src={audioIcon}
                  height={60}
                  width={60}
                  className="h-12 w-12 bg-gray-300 rounded-full mb-2"
                  alt="Audio Icon"
                />
                <span className="text-sm sm:text-base text-white">
                  Audio Transcription
                </span>
              </div>
              <div className="flex flex-col items-center text-center w-24">
                <Image
                  src={imageIcon}
                  height={60}
                  width={60}
                  className="h-12 w-12 bg-gray-300 rounded-full mb-2"
                  alt="Image Icon"
                />
                <span className="text-sm sm:text-base text-white">
                  Image Generation
                </span>
              </div>
              <div className="flex flex-col items-center text-center w-24">
                <Image
                  src={sqlIcon}
                  height={60}
                  width={60}
                  className="h-12 w-12 bg-gray-300 rounded-full mb-2"
                  alt="SQL Icon"
                />
                <span className="text-sm sm:text-base text-white">
                  SQL Query Generation
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <a
              href="/api/auth/login?returnTo=/dashboard"
              className="flex items-center justify-center gap-1 rounded-md bg-headerGray text-white font-medium h-10 px-4 hover:bg-blue-700 transition duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
