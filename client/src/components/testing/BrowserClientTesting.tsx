import { useState, useRef } from 'react'
import InspectorBox from '../common/InspectorBox'

const BrowserClientTesting = () => {
  const [url, setUrl] = useState('https://ws-portal-rho.vercel.app/')
  const [message, setMessage] = useState('') // New message frame payload state
  const [logs, setLogs] = useState('Disconnected. Awaiting manual handshake lifecycle connection...')
  const [isConnected, setIsConnected] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLInputElement>(null) // New ref for message input
  const buttonRef = useRef<HTMLButtonElement>(null)
  const sendButtonRef = useRef<HTMLButtonElement>(null) // New ref for message button
  const socketRef = useRef<WebSocket | null>(null)

  const appendLog = (label: string, message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const entry = `[${timestamp}] [${label}] ${message}\n`
    setLogs((prev) => entry + prev)
  }

  const toggleConnection = () => {
    if (socketRef.current) {
      socketRef.current.close()
      return
    }

    appendLog('SYSTEM', `Initiating link layer connection to target: ${url}`)

    try {
      const ws = new WebSocket(url)
      socketRef.current = ws

      ws.onopen = () => {
        setIsConnected(true)
        appendLog('NETWORK', 'Handshake verified. Socket stream open.')
      }

      ws.onmessage = (event) => {
        appendLog('INBOUND', `Message received: ${event.data}`)
      }

      ws.onerror = () => {
        appendLog('ERROR', 'WebSocket exception loop caught in execution lane.')
      }

      ws.onclose = () => {
        setIsConnected(false)
        socketRef.current = null
        appendLog('SYSTEM', 'Transport pipeline closed down.')
      }
    } catch (err: any) {
      appendLog('CRITICAL', `Initialization error: ${err.message}`)
      socketRef.current = null
    }
  }

  // New function to push payload message over active stream channel
  const sendMessage = () => {
    if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
      appendLog('WARNING', 'Cannot transmit payload frame. Link connection state is down.')
      return
    }
    if (!message.trim()) return

    socketRef.current.send(message)
    appendLog('OUTBOUND', `Sent data packet: ${message}`)
    setMessage('')
  }

  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-white/40 p-4">
      <div className="flex flex-col gap-4 border border-gray-200 bg-white/40 p-4">
        <div>
          <div className="tech-mono mb-1 text-[11px] text-gray-400 select-all">
            client.runtime // interactive browser interface
          </div>
          <p className="text-sm font-medium text-gray-950">Type 3: Real-Time Browser Sandbox Suite</p>
        </div>

        {/* Row 1: Socket Handshake Management Link Layer */}
        <div className="bg-gray-50/70">
          <div className="flex items-center justify-between gap-4 border border-gray-200/80 p-1 pl-2">
            <input
              ref={inputRef}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              disabled={isConnected}
              placeholder="Target WebSocket URI (e.g., ws://...)"
              className="h-full w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none disabled:opacity-50"
            />

            <button
              ref={buttonRef}
              onClick={toggleConnection}
              className={`flex h-fit w-fit items-center justify-center px-4 py-1 text-white shadow-[inset_0px_-4px_4px_0px_#4ade80,0px_0px_0px_2px_#bbf7d0,0px_4px_0px_0px_#15803d] duration-[250ms] hover:scale-105 active:translate-y-[0.5em] active:shadow-[inset_0px_-4px_4px_0px_#4ade80,0px_0px_0px_2px_#bbf7d0] ${isConnected ? 'bg-red-600 shadow-[inset_0px_-4px_4px_0px_#fca5a5,0px_0px_0px_2px_#fecaca,0px_4px_0px_0px_#991b1b]' : 'bg-[#16a34a]'
                }`}
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        </div>

        {/* Row 2: Payload Delivery Frame Transmission Layer */}
        <div className="bg-gray-50/70">
          <div className="flex items-center justify-between gap-4 border border-gray-200/80 p-1 pl-2">
            <input
              ref={messageInputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              disabled={!isConnected}
              placeholder={isConnected ? "Enter message payload frame to deploy..." : "Connect to socket endpoint to send data"}
              className="h-full w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none disabled:opacity-50"
            />

            <button
              ref={sendButtonRef}
              onClick={sendMessage}
              disabled={!isConnected || !message.trim()}
              className="flex h-fit w-auto whitespace-nowrap items-center justify-center bg-blue-600 px-4 py-1 text-white shadow-[inset_0px_-4px_4px_0px_#60a5fa,0px_0px_0px_2px_#bfdbfe,0px_4px_0px_0px_#1d4ed8] duration-[250ms] hover:scale-105 active:translate-y-[0.5em] active:shadow-[inset_0px_-4px_4px_0px_#60a5fa,0px_0px_0px_2px_#bfdbfe] disabled:opacity-50 disabled:pointer-events-none"
            >
              Deploy Message
            </button>
          </div>
        </div>

        <InspectorBox
          title="ws session audit"
          statusText={isConnected ? "body active // streaming" : "inactive channel idling"}
          content={logs}
          isActive={isConnected}
          viewHeight="h-48"
        />
      </div>
      <HtmlSuiteTesting />
    </div>
  )
}

export default BrowserClientTesting

const STANDALONE_HTML_SUITE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebSocket Sandbox Client</title>
  <style>
    body { font-family: sans-serif; background: #f9fafb; padding: 2rem; color: #030712; }
    .card { border: 1px solid #e5e7eb; background: #ffffff; padding: 1rem; max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
    .row { display: flex; border: 1px solid #e5e7eb; background: #f9fafb; padding: 4px; }
    input { flex: 1; border: none; background: transparent; padding: 6px; outline: none; font-size: 14px; }
    button { color: white; border: none; padding: 6px 16px; font-weight: 500; cursor: pointer; }
    #connectBtn { background: #16a34a; }
    #sendBtn { background: #2563eb; }
    #sendBtn:disabled { background: #9ca3af; cursor: not-allowed; }
    .terminal { background: #0a0a0a; color: #a3a3a3; font-family: monospace; padding: 12px; font-size: 12px; height: 200px; overflow-y: auto; white-space: pre-wrap; margin-top: 1rem; }
  </style>
</head>
<body>

  <div class="card">
    <h3>Type 4: Standalone Sandbox Environment</h3>
    
    <div class="row">
      <input id="urlInput" type="text" value="ws://localhost:8080">
      <button id="connectBtn">Connect</button>
    </div>

    <div class="row">
      <input id="msgInput" type="text" placeholder="Enter message payload frame..." disabled>
      <button id="sendBtn" disabled>Deploy Message</button>
    </div>

    <div id="terminal" class="terminal">Disconnected. Awaiting manual handshake lifecycle connection...</div>
  </div>

  <script>
    let socket = null;
    const urlInput = document.getElementById('urlInput');
    const msgInput = document.getElementById('msgInput');
    const connectBtn = document.getElementById('connectBtn');
    const sendBtn = document.getElementById('sendBtn');
    const terminal = document.getElementById('terminal');

    function log(label, message) {
      const time = new Date().toLocaleTimeString();
      terminal.innerText = \`[\${time}] [\${label}] \${message}\\n\` + terminal.innerText;
    }

    connectBtn.addEventListener('click', () => {
      if (socket) {
        socket.close();
        return;
      }

      log('SYSTEM', 'Initiating connection to target: ' + urlInput.value);
      try {
        socket = new WebSocket(urlInput.value);

        socket.onopen = () => {
          connectBtn.innerText = 'Disconnect';
          connectBtn.style.background = '#dc2626';
          msgInput.disabled = false;
          sendBtn.disabled = false;
          log('NETWORK', 'Handshake verified. Socket stream open.');
        };

        socket.onmessage = (event) => {
          log('INBOUND', 'Message received: ' + event.data);
        };

        socket.onerror = () => {
          log('ERROR', 'WebSocket exception loop caught.');
        };

        socket.onclose = () => {
          socket = null;
          connectBtn.innerText = 'Connect';
          connectBtn.style.background = '#16a34a';
          msgInput.disabled = true;
          sendBtn.disabled = true;
          log('SYSTEM', 'Transport pipeline closed down.');
        };
      } catch (err) {
        log('CRITICAL', err.message);
      }
    });

    sendBtn.addEventListener('click', () => {
      const text = msgInput.value.trim();
      if (!text || !socket) return;
      socket.send(text);
      log('OUTBOUND', 'Sent data packet: ' + text);
      msgInput.value = '';
    });
  </script>
</body>
</html>`;

export function HtmlSuiteTesting() {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-white/40 p-4">
      <div>
        <div className="tech-mono mb-1 text-[11px] text-gray-400 select-all">
          source.html // detached file target ecosystem compilation
        </div>
        <p className="text-sm font-medium text-gray-950">Standalone HTML Client Architecture</p>
      </div>

      {/* Render standalone workspace file frame inside inspector container */}
      <InspectorBox
        title="index.html // pure production markup setup"
        statusText="file structure static"
        content={STANDALONE_HTML_SUITE}
        isActive={false}
        viewHeight="h-72"
      />
    </div>
  )
}

