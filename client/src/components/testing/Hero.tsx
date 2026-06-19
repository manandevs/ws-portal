const Hero = () => {
  return (
    <section>
      <div className="relative mb-4 border border-gray-200 bg-white/50 p-2 backdrop-blur-sm">
        {/* Updated system tracking line for testing context */}
        <div className="tech-mono mb-4 text-xs font-medium tracking-tight text-green-600 drop-shadow-[0_0_6px_rgba(22,163,74,0.4)] select-all">
          process.env.NODE_ENV === "test" // socket mock automation environment active
        </div>

        {/* Updated Main Heading */}
        <h1 className="mb-6 text-4xl font-medium tracking-tighter text-balance text-gray-950 md:text-6xl">
          Assert message pipelines and simulate live packet failures.
        </h1>

        <div className="mt-6 border-t border-dashed border-gray-200 pt-4">
          {/* Updated subtitle configuration line */}
          <div className="tech-mono mb-2 text-xs tracking-tight text-gray-400 select-all">
            coverage.threshold == "100%" // assertion framing matrix
          </div>
          {/* Updated paragraph content with testing badges */}
          <p className="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            A headless test suite built to stress-test your networking architecture using blocks
            like
            <span className="tech-mono mx-1 rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              mockWebSocket
            </span>
            ,
            <span className="tech-mono mx-1 rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              expectEmit
            </span>
            ,
            <span className="tech-mono mx-1 rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              simulateDrop
            </span>
            and
            <span className="tech-mono mx-1 rounded border border-green-200/60 bg-green-100 px-1.5 py-0.5 text-sm font-medium text-green-700 shadow-[0_0_8px_rgba(34,197,94,0.1)]">
              assertPayload
            </span>
            to keep your cluster entirely resilient before pushing to your production servers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

// make this testing setup section

// first testing by using web chrom terminal

// const socket = new WebSocket("ws://localhost:8080");

// socket.onmessage = (event) => {

//     console.log("📨 Message from server:", event.data);

// };

// socket.onopen = () => {

//     console.log("Connected to WebSocket server");

//     socket.send("Hello Server! This is my first WebSocket message. Testing from the chrom Console");

// };

// socket.onerror = (error) => {

//     console.error("❌ WebSocket error:", error);

// };

// socket.onclose = () => {

//     console.log("🔌 Connection closed");

// };
