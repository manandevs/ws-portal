import { SetupStep } from '../common/SetupStep'

const WSCAT_SESSION_STREAM = `wscat -c ws://localhost:8080
Connected (press CTRL+C to quit)
> ping: system_health_check
> message: pipeline_handshake_successful
>`

const CLITerminalClient = () => {
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-white/40 p-4">
      <div>
        <div className="tech-mono mb-1 text-[11px] text-gray-400 select-all">
          shell.terminal // headless terminal package utility
        </div>
        <p className="text-sm font-medium text-gray-950">Type 2: Global CLI Utility Verification</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Step A */}
        <SetupStep
          meta="npm.install // global package installation"
          step="A. Install wscat utility globally"
          boxTitle="bash // global installation package loop"
          codeContent="npm i -g wscat"
        />

        <SetupStep
          meta="client.initiate // connection target mapping"
          step="B. Target cluster configuration line"
          boxTitle="bash // target address entry"
          codeContent="wscat -c ws://localhost:8080"
        />

        <SetupStep
          meta="client.connect // instantiate transmission handshake & message stream"
          step="C. Establish link connection and transmit frames"
          boxTitle="wscat // execution connection macro"
          codeContent={WSCAT_SESSION_STREAM}
        />
      </div>
    </div>
  )
}

export default CLITerminalClient
