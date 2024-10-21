import Header from "../ui/Header";
import NavLinks from "../ui/NavLinks";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div
          className="bg-sideBarGray w-full flex-none md:w-64  w-1/8 text-white p-5 border-r-4 border-black"
          data-testid="sidebar"
        >
          <NavLinks />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
