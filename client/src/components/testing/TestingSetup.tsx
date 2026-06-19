import { SectionHeader } from '../common/SectionHeader'
import BrowserClientTesting from './BrowserClientTesting'
import BrowserSandbox from './BrowserSandbox'
import CLITerminalClient from './CLITerminalClient'

export function TestingSetup() {
  return (
    <section className="flex flex-col gap-6">
      <SectionHeader
        tracker="runtime.testing // infrastructure connectivity pipeline validation"
        title="Client Socket Testing"
        description="Verify connection stability and full-duplex message framing using different clients. Run these integration protocols to establish handshake loops."
      />

      <div className="flex flex-col gap-6 border-t border-dashed border-gray-200 pt-6">
        <BrowserSandbox />
        <CLITerminalClient />
        <BrowserClientTesting />
      </div>
    </section>
  )
}
