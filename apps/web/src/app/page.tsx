export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-svh p-20 sm:p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <header>
        <strong>ng.os</strong>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>AI-native operating system for nonprofits.</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] sm:text-sm h-12 sm:h-10 px-5 sm:px-4 font-medium text-white"
            href="mailto:felixyang2028@u.northwestern.edu"
          >
            Get in contact
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span>© {new Date().getFullYear()} ng.os</span>
      </footer>
    </div>
  );
}
