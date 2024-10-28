import Header from "./ui/Header";

export default function Home() {
  return (
    <>
      <Header login={false} />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <a
            className="flex h-[48px] grow items-center justify-center gap-1 rounded-md p-1 text-base font-medium hover:bg-mainPageGray hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
            href="/api/auth/login?returnTo=/dashboard"
          >
            Login
          </a>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <div>hello footer</div>
        </footer>
      </div>
    </>
  );
}
