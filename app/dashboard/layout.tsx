import Header from "../ui/Header";
import NavLinks from "../ui/NavLinks";
import Image from "next/image";
import aiBackground from "../lib/assets/login-image.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header login={true} />
      <div className="flex flex-col md:flex-row flex-grow">
        <div
          className="z-20 bg-sideBarGray w-full flex-none md:w-80 text-white p-5 border-r-4 border-black"
          data-testid="sidebar"
        >
          <div className="py-3 text-center">MENU</div>
          <hr className="pb-3" />
          <NavLinks />
        </div>
        <div className="flex-grow relative min-h-screen">
          <div className="fixed inset-0 w-full h-full ml-0 md:ml-80">
            <Image
              src={aiBackground}
              className="opacity-50 object-cover"
              alt="AI Companion Background Image"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 p-6 md:p-9">{children}</div>
        </div>
      </div>
    </div>
  );
}
