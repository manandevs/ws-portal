import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWindowHeight() {
  if (typeof window !== 'undefined') {
    return window.innerHeight
  }
  return 0
}
