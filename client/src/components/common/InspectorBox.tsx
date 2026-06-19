import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InspectorBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  statusText?: string
  isActive?: boolean
  content: string
  viewHeight?: string
}

const InspectorBox = React.forwardRef<HTMLDivElement, InspectorBoxProps>(
  ({ className, title, statusText, isActive = true, content, viewHeight, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy', err)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          'tech-mono glow-box-green relative w-full overflow-hidden border border-neutral-900 bg-neutral-950 p-4 text-neutral-200 shadow-xl',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-4 select-none">
          <span className="z-10 border border-green-500/20 px-2 py-0.5 text-xs font-medium tracking-wide text-green-400">
            {title}
          </span>
          <button
            onClick={handleCopy}
            type="button"
            className="z-20 cursor-pointer border border-neutral-800 bg-neutral-900/50 px-2 py-0.5 text-[10px] tracking-widest text-neutral-500 uppercase transition-colors duration-200 hover:border-green-500/20 hover:text-green-400 active:scale-95"
          >
            {copied ? 'copied' : 'copy'}
          </button>
        </div>

        <div
          className={cn(
            'flex h-auto w-full flex-col gap-1 overflow-y-auto border border-neutral-800/60 bg-neutral-900/30 p-2 select-text',
            viewHeight
          )}
        >
          <span
            className={cn(
              'text-sm font-medium tracking-wide transition-all',
              isActive ? 'glow-text-green text-green-400/90' : 'text-neutral-500'
            )}
          >
            {statusText}
          </span>
          <pre className="font-mono text-xs leading-relaxed tracking-wider whitespace-pre-wrap text-neutral-600">
            {content}
          </pre>
        </div>
      </div>
    )
  }
)

InspectorBox.displayName = 'InspectorBox'

export default InspectorBox
