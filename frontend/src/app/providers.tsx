'use client'

import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../styles/theme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={inter.className}>
        {children}
      </main>
    </ThemeProvider>
  )
}
