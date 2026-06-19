import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tracker?: string
  title: string
  description?: string
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, tracker, title, description, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-3', className)} {...props}>
        {tracker && (
          <div className="tech-mono text-xs font-medium tracking-tight text-green-600 drop-shadow-[0_0_6px_rgba(22,163,74,0.4)] select-all">
            {tracker}
          </div>
        )}

        <div>
          <h2 className="mb-2 text-3xl font-semibold tracking-tighter text-gray-950">{title}</h2>
          {description && (
            <p className="max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export { SectionHeader }
