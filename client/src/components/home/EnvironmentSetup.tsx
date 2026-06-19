import React from 'react'
import { SectionHeader } from '../common/SectionHeader'
import { SetupStep } from '../common/SetupStep'

const PKG_JSON_MANIFEST = `"scripts": {\n    "dev": "node --watch ./server.js",\n},`
const SERVER_SCRIPT = `import * as WebSocket from "ws";\n\nconst PORT = 8080;\nconst wss = new WebSocket.WebSocketServer({ port: PORT });\n\nwss.on("connection", (socket, request) => {\n    const ip = request.socket.remoteAddress;\n    console.log(\`Client connected: \${ip}\`);\n\n    socket.on("message", (rawData) => {\n        const message = rawData.toString();\n        console.log(\`Received: \${message}\`, rawData);\n\n        wss.clients.forEach((client) => {\n            if (client.readyState === WebSocket.OPEN) {\n                client.send(\`Server Broadcast: \${message}\`);\n            }\n        });\n    });\n\n    socket.on("error", (err) => {\n        console.error(\`Error: \${err.message} : \${ip}\`);\n    });\n\n    socket.on("close", () => {\n        console.log(\`Client disconnected: \${ip}\`);\n    });\n});\n\nconsole.log(\`Server is running on ws://localhost:\${PORT}\`);`

export function EnvironmentSetup() {
  return (
    <section>
      <SectionHeader
        tracker="environment.setup // local infrastructure workspace installation lifecycle"
        title="Backend Server Setup"
        description="Initialize your environment container space, configure modern engine dependencies, and manifest local streaming endpoints."
      />

      {/* Steps 1 & 2 Grid */}
      <div className="grid grid-cols-1 gap-4 border-t border-dashed border-gray-200 pt-6 md:grid-cols-2">
        <SetupStep
          meta="shell.execute // init project context"
          step="1. Run initialization protocol"
          boxTitle="bash // local init"
          codeContent="npm init -y"
        />
        <SetupStep
          meta="shell.execute // package configuration"
          step="2. Install dependencies sequentially"
          boxTitle="npm // cluster installation"
          codeContent="npm install ws \nnpm install -D @types/node @types/ws"
        />
      </div>

      {/* Steps 3, 4 & Runtime Action Column */}
      <div className="mt-4 flex flex-col gap-4">
        <SetupStep
          meta="manifest.verify // package.json"
          step="3. Verify environment project layout"
          boxTitle="json // config inspection"
          codeContent={PKG_JSON_MANIFEST}
        />
        <SetupStep
          meta="source.compile // server.js"
          step="4. Populate service orchestration script"
          boxTitle="javascript // server lifecycle"
          codeContent={SERVER_SCRIPT}
        />
        <SetupStep
          meta="runtime.engine // run pipeline command macro to launch instances"
          step="5. Execute live environment runtime"
          boxTitle="engine // run instance"
          codeContent="npm run dev"
        />
      </div>
    </section>
  )
}
