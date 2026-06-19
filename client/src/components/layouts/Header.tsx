const Header = () => {
  return (
    <header className="flex w-full items-center justify-between gap-6 border border-gray-200/80 p-4">
      <a
        className="flex shrink-0 items-center gap-2 text-xl font-medium tracking-tighter text-gray-950"
        aria-label="Home"
        href="/"
      >
        <img src="/favicon.png" alt="logo" className="w-8 h-8"/>
        <span>
          ws<span className="text-green-600 pl-0.5">Portal</span>
        </span>
      </a>

      <div className="flex items-center gap-6">
        <a
          href="/testing"
          className="group relative flex h-fit w-fit items-center justify-center px-4 py-1 text-white transition-all duration-150 hover:shadow-[inset_0px_-4px_4px_0px_#4ade80,0px_0px_0px_2px_#bbf7d0]"
        >
          <span className="relative z-10 text-gray-950">Testing</span>
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            className="absolute top-[-2px] left-[-2px] fill-green-400"
          >
            <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
          </svg>
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            className="absolute top-[-2px] right-[-2px] fill-green-400"
          >
            <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
          </svg>
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            className="absolute bottom-[-2px] left-[-2px] fill-green-400"
          >
            <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
          </svg>
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            className="absolute right-[-2px] bottom-[-2px] fill-green-400"
          >
            <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
