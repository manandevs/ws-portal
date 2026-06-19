const Hero = () => {
  return (
    <section>
      <div className="relative mb-4 border border-gray-200 bg-white/50 p-2 backdrop-blur-sm">
        <div className="tech-mono mb-4 text-xs font-medium tracking-tight text-green-600 drop-shadow-[0_0_6px_rgba(22,163,74,0.4)] select-all">
          ws.readyState === WebSocket.OPEN // full-duplex framing protocol active
        </div>

        <h1 className="mb-6 text-4xl font-medium tracking-tighter text-balance text-gray-950 md:text-6xl">
          Rapidly stream event packets without ever dropping your socket.
        </h1>

        <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
          <div className="tech-mono mb-2 text-xs tracking-tight text-gray-400 select-all">
            payload.encoding == "UTF-8" // framing configuration
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            A persistent full-duplex TCP pipeline packed with frames like
            <span className="tech-mono rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              onopen
            </span>
            ,
            <span className="tech-mono rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              onmessage
            </span>
            ,
            <span className="tech-mono rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              send-payload
            </span>
            and
            <span className="tech-mono rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              binary-blob
            </span>
            that can be composed to build any real-time engine, directly over your network.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
