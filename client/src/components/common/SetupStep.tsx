import * as React from 'react'
import InspectorBox from '../common/InspectorBox'
import { cn } from '../../lib/utils'

export interface SetupStepProps extends React.HTMLAttributes<HTMLDivElement> {
  meta: string
  step: string
  boxTitle: string
  codeContent: string
}

export const SetupStep = React.forwardRef<HTMLDivElement, SetupStepProps>(
  ({ className, meta, step, boxTitle, codeContent, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col justify-between gap-3 border border-gray-200 bg-white/40 p-4',
          className
        )}
        {...props}
      >
        <div>
          <div className="tech-mono mb-1 text-[11px] text-gray-400 select-all">{meta}</div>
          <p className="text-sm font-medium text-gray-950">{step}</p>
        </div>
        <InspectorBox title={boxTitle} content={codeContent} />
      </div>
    )
  }
)

SetupStep.displayName = 'SetupStep'
