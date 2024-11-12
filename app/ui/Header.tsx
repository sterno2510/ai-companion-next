import logo from "../lib/assets/ailogo.png";
import slogan from "../lib/assets/slogan.png";
import Image from "next/image";
import { fetchVisitCount } from "../lib/data";
import { getSession } from "@auth0/nextjs-auth0";

interface HeaderProps {
  login: boolean;
}
const Header: React.FC<HeaderProps> = async ({ login }) => {
  let user;
  let visitCount = 0;
  const session = await getSession();

  if (session && session.user) {
    user = session.user;
    visitCount = await fetchVisitCount(user.sub, user.name, user.email);
  } else {
    console.log("No user logged in");
  }

  return (
    <header className="z-10 bg-headerGray p-10 flex flex-col md:flex-row justify-center items-center border-b-4 border-black relative">
      <Image
        src={logo}
        height={75}
        alt="AI Companion Logo"
        className="mb-4 md:mb-0"
      />
      <Image src={slogan} height={75} alt="Slogan" className="mb-4 md:mb-0" />
      {login && (
        <div className="flex flex-col items-center md:absolute md:bottom-2.5 md:right-2.5">
          {user && (
            <Image
              className="max-h-12 w-auto rounded-full mb-2"
              src={user.picture}
              height={60}
              width={60}
              alt="User profile pic"
            />
          )}
          <div className="text-lg font-bold text-white mb-2">
            Total Visits: {`${visitCount}`}
          </div>
          <a
            className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 text-base font-medium rounded-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            href="/api/auth/logout"
          >
            Log Out
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
