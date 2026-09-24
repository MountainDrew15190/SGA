// app/fonts.ts
import { Plus_Jakarta_Sans } from 'next/font/google'

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
})