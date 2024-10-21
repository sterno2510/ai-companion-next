import Header from "../ui/Header";
import NavLinks from "../ui/NavLinks";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <NavLinks />
      <div className="w-full flex-none md:w-64"></div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
