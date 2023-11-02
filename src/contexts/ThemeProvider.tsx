/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode } from 'react'

import { ThemeProvider, createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

type Themes = 'dark' | 'light'
type Props = {
  children: ReactNode
}

export const colorHeaderFooter = '#1E1E1E'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  themeMode: () => 'dark' as Themes,
})

export const ThemeProviderStyle = ({ children }: Props) => {
  const key = 'themeMode'
  const defaultTheme: Themes = 'dark'

  const saveTheme = (theme: Themes) => {
    localStorage.setItem(key, theme)
  }

  const getTheme = () => {
    const themeStoraged = localStorage.getItem(key) as string

    if (['dark', 'light'].includes(themeStoraged)) {
      return themeStoraged as Themes
    }

    saveTheme(defaultTheme)

    return defaultTheme
  }

  const [mode, setMode] = React.useState<Themes>(getTheme())
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const prevMode = prev === 'light' ? 'dark' : 'light'
          saveTheme(prevMode)
          return prevMode
        })
      },
      themeMode: () => mode,
    }),
    [mode]
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#3C68B0',
          },
          secondary: {
            main: '#FFCD0D',
          },
          background: {
            paper: colorMode.themeMode() === 'dark' ? '#1E1E1E' : '#fff',
            default: colorMode.themeMode() === 'dark' ? '#121212' : '#f0f0f0',
          },
        },
      }),
    [colorMode, mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
