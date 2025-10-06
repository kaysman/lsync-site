const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#ededed] flex flex-col items-center justify-between font-sans">
      {/* Top Navigation Bar */ }
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-[#22292f] fixed top-0 left-0 z-20">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Localyze Sync <span className="text-[#7dd3fc]">CLI</span></div>
      </nav>
      <div className="pt-24 w-full flex flex-col items-center"> {/* Add top padding to offset fixed nav */ }
        {/* Hero Section */ }
        <header className="w-full flex flex-col items-center pb-24 px-4 text-center">
          {/* Removed top margin, increased bottom padding */ }
          <div className="text-6xl sm:text-7xl font-extrabold leading-tight text-white my-10">
            Blazing-Fast Flutter Translation CLI
          </div>
          <p className="text-2xl sm:text-3xl text-[#bdbdbd] max-w-2xl mb-12">
            Localyze Sync CLI lets you manage translations from Google Sheets directly in your terminal. Fast, automatic, and written in Rust.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <button
              className="bg-[#0d1117] hover:bg-[#161b22] text-white text-xl font-mono py-5 px-10 rounded-xl border border-[#30363d] transition shadow-lg cursor-pointer select-text"
            >
              brew install lsync
            </button>

            <a
              href="https://github.com/kaysman/lsync/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white hover:bg-[#e6e6e6] text-[#0d1117] text-xl font-mono py-5 px-10 rounded-xl border border-[#d0d7de] transition shadow-lg cursor-pointer">
                Download lsync
              </button>
            </a>

          </div>
          <a
            href="https://github.com/kaysman/lsync"
            className="text-[#7dd3fc] underline underline-offset-4 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </header>

        {/* Terminal Demo Section */ }
        <section className="w-full flex justify-center px-4 mb-24">

          <img
            src={`${basePath}/lsync-demo.svg`}
            alt="lsync CLI demo"
            className="w-full max-w-5xl rounded-2xl border-2 border-[#2e2e2e] shadow-2xl"
          />
        </section>

        {/* Footer */ }
        <footer className="w-full py-10 flex flex-col items-center border-t-2 border-[#232323] text-[#bdbdbd] text-xl gap-4 mt-8">
          <div className="flex gap-8 mb-2">
            <a href="https://github.com/kaysman/lsync" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://github.com/kaysman/lsync/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:underline">License</a>
          </div>
          <div>© { new Date().getFullYear() } Localyze Sync. All rights reserved.</div>
        </footer>
      </div>
    </div >
  );
}
