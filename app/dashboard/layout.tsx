import Header from "../ui/Header";
import NavLinks from "../ui/NavLinks";
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header at the top */}
      <Header />

      <div className="flex flex-grow md:flex-row">
        {/* Sidebar (NavLinks) on the left */}
        <aside className="w-full md:w-64 bg-gray-100 p-4">
          <NavLinks />
        </aside>

        {/* Main content */}
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
