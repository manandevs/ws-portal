import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn, getWindowHeight } from '../../lib/utils'

const height = getWindowHeight()

const separatorVariants = cva('shrink-0 border-gray-200/80 transition-all hidden md:block border', {
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: `h-[${height}px`
    },
    variant: {
      solid: 'bg-gray-200/80',
      dashed: 'bg-transparent border-dashed',
      blueprint: 'blueprint-pattern border'
    },
    size: {
      default: '',
      h3: 'h-3',
      h12: 'h-12',
      w12: 'w-12',
      dynamic: ''
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'solid',
      className: 'h-[1px]'
    },
    {
      orientation: 'vertical',
      variant: 'solid',
      className: 'w-[1px]'
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'default'
  }
})

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', variant, size, style, ...props }, ref) => {
    const customStyle: React.CSSProperties = {
      ...style
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation === 'vertical' ? 'vertical' : 'horizontal'}
        className={cn(
          separatorVariants({
            orientation,
            variant,
            size: size,
            className
          })
        )}
        style={customStyle}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'

export { Separator }
