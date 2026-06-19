import { SetupStep } from '../common/SetupStep'

const CHROME_CONSOLE_SCRIPT = `const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
    console.log("Connected to WebSocket server");
    socket.send("Hello Server! This is my first WebSocket message. Testing from the chrom Console");
};

socket.onmessage = (event) => {
    console.log("📨 Message from server:", event.data);
};

socket.onerror = (error) => {
    console.error("❌ WebSocket error:", error);
};

socket.onclose = () => {
    console.log("🔌 Connection closed");
};`

const BrowserSandbox = () => {
  return (
    <SetupStep
      meta="console.script // browser rendering environment sandbox"
      step="Type 1: Chrome Browser Terminal Verification"
      boxTitle="javascript // browser console execution"
      codeContent={CHROME_CONSOLE_SCRIPT}
    />
  )
}

export default BrowserSandbox
